<?php

namespace qyrr;

/**
 * Rest Handler
 */
class QYRR_Rest {
    /**
     * Contains instance or null
     *
     * @var object|null
     */
    private static $instance = null;

    /**
     * Returns instance of QYRR_Rest.
     *
     * @return object
     */
    public static function get_instance() {
        if ( null === self::$instance ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor for QYRR_Rest.
     */
    public function __construct() {
        add_action( 'rest_api_init', array($this, 'register_routes') );
    }

    /**
     * Register the routes for the objects of the controller.
     */
    public function register_routes() {
        register_rest_route( 'qyrr/v1', '/blob-to-file/', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'blob_to_file'),
            'permission_callback' => function () {
                return current_user_can( 'upload_files' );
            },
        ) );
        register_rest_route( 'qyrr/v1', '/qr-codes/url', array(
            'methods'             => 'GET',
            'callback'            => [$this, 'get_qr_codes_with_url'],
            'permission_callback' => function () {
                return current_user_can( 'edit_posts' );
            },
        ) );
        register_rest_route( 'qyrr/v1', '/file-name', array(
            'methods'             => 'POST',
            'callback'            => [$this, 'get_file_name'],
            'permission_callback' => function () {
                return current_user_can( 'edit_posts' );
            },
        ) );
        // REST API generation endpoint (pro only + requires enable toggle in settings).
        $qyrr_options = get_option( 'qyrr', [] );
        if ( \qyrr_fs()->is_plan_or_trial__premium_only( 'pro' ) && !empty( $qyrr_options['rest_api_enabled'] ) ) {
            register_rest_route( 'qyrr/v1', '/generate', array(
                'methods'             => 'POST',
                'callback'            => array($this, 'generate_qr'),
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
            ) );
        }
        // Maybe flush rewrite rules.
        if ( get_option( 'qyrr_activated' ) ) {
            flush_rewrite_rules();
            delete_option( 'qyrr_activated' );
        }
    }

    public function blob_to_file( $request ) {
        global $wp_filesystem;
        $data = $request->get_param( 'source' );
        $id = absint( $request->get_param( 'post_id' ) );
        $format = $request->get_param( 'format' );
        if ( empty( $id ) || empty( $data ) || empty( $format ) ) {
            return new \WP_Error('qyrr_missing_params', __( 'Missing parameters.', 'qyrr-code' ), array(
                'status' => 400,
            ));
        }
        $allowed_formats = array(
            'png',
            'svg',
            'jpg',
            'jpeg',
            'pdf'
        );
        if ( !in_array( strtolower( $format ), $allowed_formats, true ) ) {
            return new \WP_Error('qyrr_invalid_format', __( 'Invalid file format.', 'qyrr-code' ), array(
                'status' => 400,
            ));
        }
        // build the path.
        $uploads_directory = wp_upload_dir();
        if ( !empty( $uploads_directory['error'] ) ) {
            return new \WP_Error('qyrr_upload_error', $uploads_directory['error'], array(
                'status' => 500,
            ));
        }
        $qyrr_base_directory = $uploads_directory['basedir'] . DIRECTORY_SEPARATOR . 'qyrr';
        $qyrr_directory = $qyrr_base_directory . DIRECTORY_SEPARATOR . $id;
        if ( !function_exists( 'WP_Filesystem' ) ) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        if ( is_null( $wp_filesystem ) ) {
            WP_Filesystem();
        }
        $filename = apply_filters( 'qyrr_file_name', 'qr-code', $id );
        $filename = wp_basename( $filename ) . '.' . $format;
        $file_path = $qyrr_directory . DIRECTORY_SEPARATOR . $filename;
        // Ensure the file path is within the qyrr directory and not traversing.
        if ( strpos( realpath( $qyrr_base_directory ), realpath( $uploads_directory['basedir'] ) ) !== 0 ) {
            // This is just a safety check for the base directory.
        }
        if ( !file_exists( $qyrr_directory ) ) {
            wp_mkdir_p( $qyrr_directory );
        }
        // Double check file path.
        if ( false === strpos( $file_path, $qyrr_base_directory ) ) {
            return new \WP_Error('qyrr_invalid_path', __( 'Invalid file path.', 'qyrr-code' ), array(
                'status' => 400,
            ));
        }
        if ( file_exists( $file_path ) ) {
            unlink( $file_path );
        }
        // Convert data string for file creation.
        $data_parts = explode( ',', $data );
        if ( count( $data_parts ) < 2 ) {
            return new \WP_Error('qyrr_invalid_data', __( 'Invalid data format.', 'qyrr-code' ), array(
                'status' => 400,
            ));
        }
        $data = base64_decode( $data_parts[1] );
        if ( !$data ) {
            return new \WP_Error('qyrr_invalid_data', __( 'Could not decode data.', 'qyrr-code' ), array(
                'status' => 400,
            ));
        }
        $wp_filesystem->put_contents( $file_path, $data, FS_CHMOD_FILE );
        return rest_ensure_response( [
            "message" => "Success",
        ] );
    }

    public function get_qr_codes_with_url() : array {
        $args = array(
            'numberposts' => -1,
            'post_type'   => 'qr',
            'meta_query'  => array(
                'relation' => 'OR',
                array(
                    'key'   => 'source',
                    'value' => 'url',
                ),
                array(
                    'key'   => 'source',
                    'value' => 'post',
                ),
            ),
        );
        return get_posts( $args );
    }

    public function get_file_name( $request ) {
        $post_id = $request->get_param( 'post_id' );
        if ( $post_id ) {
            return apply_filters( 'qyrr_file_name', 'qr-code', $post_id );
        }
    }

    public function get_selectable_post_types() {
        $post_types = get_post_types( array(), 'objects', 'and' );
        $selectable_post_types = [];
        foreach ( $post_types as $post_type ) {
            $selectable_post_types[] = [
                'label' => $post_type->label,
                'value' => $post_type->name,
            ];
        }
        return $selectable_post_types;
    }

    /**
     * Generate a QR code post + image via REST.
     * Authentication: WordPress Application Passwords (Authorization: Basic base64(user:app-pass)).
     *
     * Body params:
     *   title, source (url|post|text|email|phone|sms|whatsapp),
     *   url | post-link | text | email | phone | sms-text | whatsapp-text,
     *   size, fill-color, background-color, error-handling-level (L/M/Q/H),
     *   quiet-zone, logo-upload, logo-size, label-text, font-color
     *
     * Returns: { post_id, image_url }
     */
    public function generate_qr( \WP_REST_Request $request ) {
        $params = $request->get_params();
        $source = sanitize_text_field( $params['source'] ?? 'url' );
        $title = sanitize_text_field( $params['title'] ?? __( 'QR Code', 'qyrr-code' ) );
        $allowed_sources = [
            'url',
            'post',
            'text',
            'email',
            'phone',
            'sms',
            'whatsapp'
        ];
        if ( !in_array( $source, $allowed_sources, true ) ) {
            return new \WP_Error('qyrr_invalid_source', __( 'Invalid source type.', 'qyrr-code' ), [
                'status' => 400,
            ]);
        }
        // Validate required field per source type before building content.
        $source_required = [
            'url'      => 'url',
            'post'     => 'post-link',
            'text'     => 'text',
            'email'    => 'email',
            'phone'    => 'phone',
            'sms'      => 'phone',
            'whatsapp' => 'phone',
        ];
        $required_param = $source_required[$source] ?? null;
        if ( $required_param && empty( trim( (string) ($params[$required_param] ?? '') ) ) ) {
            return new \WP_Error(
                'qyrr_missing_source_param',
                /* translators: 1: param name, 2: source type */
                sprintf( __( 'The "%1$s" parameter is required for source type "%2$s".', 'qyrr-code' ), $required_param, $source ),
                [
                    'status' => 400,
                ]
            );
        }
        if ( $source === 'email' && !is_email( $params['email'] ?? '' ) ) {
            return new \WP_Error('qyrr_invalid_email', __( 'A valid email address is required.', 'qyrr-code' ), [
                'status' => 400,
            ]);
        }
        if ( in_array( $source, ['whatsapp'], true ) ) {
            $digits_only = preg_replace( '/[^0-9]/', '', $params['phone'] ?? '' );
            if ( empty( $digits_only ) ) {
                return new \WP_Error('qyrr_invalid_phone', __( 'A valid phone number (digits only) is required for WhatsApp.', 'qyrr-code' ), [
                    'status' => 400,
                ]);
            }
        }
        if ( in_array( $source, ['url', 'post'], true ) ) {
            $url_param = ( $source === 'url' ? $params['url'] ?? '' : $params['post-link'] ?? '' );
            if ( !filter_var( esc_url_raw( $url_param ), FILTER_VALIDATE_URL ) ) {
                return new \WP_Error('qyrr_invalid_url', __( 'A valid URL is required.', 'qyrr-code' ), [
                    'status' => 400,
                ]);
            }
        }
        $content = QYRR_Api_Generator::build_content( $source, $params );
        if ( empty( $content ) ) {
            return new \WP_Error('qyrr_missing_content', __( 'Missing required source data for this source type.', 'qyrr-code' ), [
                'status' => 400,
            ]);
        }
        // Create the QR post.
        $post_id = wp_insert_post( [
            'post_title'   => $title,
            'post_content' => '<!-- wp:qyrr-code/qr /-->',
            'post_status'  => 'publish',
            'post_type'    => 'qr',
        ] );
        if ( is_wp_error( $post_id ) ) {
            return $post_id;
        }
        // Numeric design fields — use absint to prevent garbage values.
        $numeric_defaults = [
            'size'          => 400,
            'quiet-zone'    => 0,
            'corner-radius' => 0,
            'logo-size'     => 30,
            'min-version'   => 1,
        ];
        // String/color design fields.
        $string_defaults = [
            'fill-color'           => '#000000',
            'background-color'     => '#ffffff',
            'font-color'           => '#000000',
            'error-handling-level' => 'H',
            'render-mode'          => 'plain',
            'download_format'      => 'image',
            'label-text'           => '',
            'font'                 => '',
        ];
        $design = [];
        foreach ( $numeric_defaults as $key => $default ) {
            $design[$key] = ( isset( $params[$key] ) ? absint( $params[$key] ) : $default );
        }
        foreach ( $string_defaults as $key => $default ) {
            $raw = ( isset( $params[$key] ) ? sanitize_text_field( $params[$key] ) : $default );
            // Validate hex colors and fall back to default if invalid.
            if ( in_array( $key, ['fill-color', 'background-color', 'font-color'], true ) ) {
                $raw = ( sanitize_hex_color( $raw ) ?: $default );
            }
            // Validate error correction level.
            if ( $key === 'error-handling-level' ) {
                $raw = ( in_array( strtoupper( $raw ), [
                    'L',
                    'M',
                    'Q',
                    'H'
                ], true ) ? strtoupper( $raw ) : 'H' );
            }
            $design[$key] = $raw;
        }
        // Logo URL — validate it points to the same site (prevent SSRF).
        $logo_upload = '';
        if ( !empty( $params['logo-upload'] ) ) {
            $logo_url = esc_url_raw( $params['logo-upload'] );
            if ( strpos( $logo_url, site_url() ) === 0 ) {
                $logo_upload = $logo_url;
            }
        }
        $design['logo-upload'] = $logo_upload;
        // Save source meta (param key → meta key mapping).
        update_post_meta( $post_id, 'source', $source );
        update_post_meta( $post_id, 'qr-content', $content );
        $source_meta_map = [
            'url'           => 'url',
            'post-link'     => 'post-link',
            'post-type'     => 'post-type',
            'text'          => 'text',
            'email'         => 'e-mail',
            'phone'         => 'phone-number',
            'sms-text'      => 'sms-text',
            'whatsapp-text' => 'whatsapp-text',
        ];
        foreach ( $source_meta_map as $param_key => $meta_key ) {
            if ( isset( $params[$param_key] ) ) {
                update_post_meta( $post_id, $meta_key, sanitize_text_field( $params[$param_key] ) );
            }
        }
        // Save design meta.
        foreach ( $design as $key => $value ) {
            update_post_meta( $post_id, $key, $value );
        }
        // Generate PNG.
        try {
            $png_data = QYRR_Api_Generator::generate( $content, $design );
        } catch ( \Throwable $e ) {
            wp_delete_post( $post_id, true );
            return new \WP_Error('qyrr_generation_failed', $e->getMessage(), [
                'status' => 500,
            ]);
        }
        // Save image file.
        $image_url = $this->save_qr_image( $post_id, $png_data );
        if ( is_wp_error( $image_url ) ) {
            wp_delete_post( $post_id, true );
            return $image_url;
        }
        update_post_meta( $post_id, 'qr-image-url', $image_url );
        return rest_ensure_response( [
            'post_id'   => $post_id,
            'image_url' => $image_url,
        ] );
    }

    /**
     * Save PNG binary to /uploads/qyrr/{post_id}/qr-code.png.
     */
    private function save_qr_image( int $post_id, string $png_data ) {
        global $wp_filesystem;
        $uploads = wp_upload_dir();
        if ( !empty( $uploads['error'] ) ) {
            return new \WP_Error('qyrr_upload_dir_error', $uploads['error'], [
                'status' => 500,
            ]);
        }
        $qyrr_base = $uploads['basedir'] . DIRECTORY_SEPARATOR . 'qyrr';
        $qyrr_dir = $qyrr_base . DIRECTORY_SEPARATOR . $post_id;
        if ( !function_exists( 'WP_Filesystem' ) ) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        if ( !$wp_filesystem ) {
            if ( false === WP_Filesystem() ) {
                return new \WP_Error('qyrr_fs_error', __( 'Could not initialize filesystem.', 'qyrr-code' ), [
                    'status' => 500,
                ]);
            }
        }
        if ( !file_exists( $qyrr_dir ) ) {
            wp_mkdir_p( $qyrr_dir );
        }
        $filename = apply_filters( 'qyrr_file_name', 'qr-code', $post_id );
        $file_path = $qyrr_dir . DIRECTORY_SEPARATOR . wp_basename( $filename ) . '.png';
        if ( false === strpos( $file_path, $qyrr_base ) ) {
            return new \WP_Error('qyrr_invalid_path', __( 'Invalid file path.', 'qyrr-code' ), [
                'status' => 400,
            ]);
        }
        if ( false === $wp_filesystem->put_contents( $file_path, $png_data, FS_CHMOD_FILE ) ) {
            return new \WP_Error('qyrr_write_error', __( 'Could not write QR code image file.', 'qyrr-code' ), [
                'status' => 500,
            ]);
        }
        return $uploads['baseurl'] . '/qyrr/' . $post_id . '/' . wp_basename( $filename ) . '.png';
    }

}
