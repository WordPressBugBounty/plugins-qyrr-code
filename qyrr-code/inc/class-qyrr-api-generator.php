<?php

namespace qyrr;

use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\QrCode;

/**
 * Server-side QR code image generator using endroid/qr-code.
 * Used exclusively by the REST API endpoint.
 */
class QYRR_Api_Generator {

	private static array $ecc_map = [
		'L' => ErrorCorrectionLevel::LOW,
		'M' => ErrorCorrectionLevel::MEDIUM,
		'Q' => ErrorCorrectionLevel::QUARTILE,
		'H' => ErrorCorrectionLevel::HIGH,
	];

	/**
	 * Generate a QR code PNG and return binary data.
	 *
	 * @param string $content  The string to encode.
	 * @param array  $settings Design settings from the request.
	 *
	 * @return string PNG binary.
	 * @throws \Exception
	 */
	public static function generate( string $content, array $settings ): string {
		$fill_rgb = self::hex_to_rgb( $settings['fill-color'] ?? '#000000' );
		$back_rgb = self::hex_to_rgb( $settings['background-color'] ?? '#ffffff' );

		$ecc_key = strtoupper( $settings['error-handling-level'] ?? 'H' );
		$ecc     = self::$ecc_map[ $ecc_key ] ?? ErrorCorrectionLevel::HIGH;

		$size       = max( 100, (int) ( $settings['size'] ?? 400 ) );
		$quiet_zone = max( 0, min( 10, (int) ( $settings['quiet-zone'] ?? 0 ) ) );
		$margin     = $quiet_zone > 0 ? (int) round( $size * $quiet_zone / 29 ) : 0;

		$qr_code = new QrCode( $content );
		$qr_code->setSize( $size );
		$qr_code->setMargin( $margin );
		$qr_code->setEncoding( 'UTF-8' );
		$qr_code->setErrorCorrectionLevel( new ErrorCorrectionLevel( $ecc ) );
		$qr_code->setForegroundColor( [ 'r' => $fill_rgb[0], 'g' => $fill_rgb[1], 'b' => $fill_rgb[2], 'a' => 0 ] );
		$qr_code->setBackgroundColor( [ 'r' => $back_rgb[0], 'g' => $back_rgb[1], 'b' => $back_rgb[2], 'a' => 0 ] );
		$qr_code->setWriterByName( 'png' );

		// Logo overlay.
		if ( ! empty( $settings['logo-upload'] ) ) {
			$logo_path = self::url_to_path( $settings['logo-upload'] );
			if ( $logo_path && file_exists( $logo_path ) ) {
				$logo_size_pct = max( 5, min( 50, (int) ( $settings['logo-size'] ?? 30 ) ) );
				$logo_px       = (int) round( $size * $logo_size_pct / 100 );
				$qr_code->setLogoPath( $logo_path );
				$qr_code->setLogoSize( $logo_px, $logo_px );
			}
		}

		// Label text (uses bundled Open Sans font).
		if ( ! empty( $settings['label-text'] ) ) {
			$font_path = QYRR_PATH . '/vendor/endroid/qr-code/assets/fonts/open_sans.ttf';
			if ( file_exists( $font_path ) ) {
				$qr_code->setLabel(
					$settings['label-text'],
					16,
					$font_path,
					'center',
					[ 't' => 0, 'r' => 0, 'b' => 10, 'l' => 0 ]
				);
			}
		}

		return $qr_code->writeString();
	}

	/**
	 * Build qr-content string from source type and request params.
	 */
	public static function build_content( string $source, array $params ): string {
		switch ( $source ) {
			case 'url':
				return esc_url_raw( $params['url'] ?? '' );
			case 'post':
				return esc_url_raw( $params['post-link'] ?? '' );
			case 'text':
				return sanitize_textarea_field( $params['text'] ?? '' );
			case 'email':
				$email = sanitize_email( $params['email'] ?? '' );
				return 'mailto:' . $email;
			case 'phone':
				$phone = sanitize_text_field( $params['phone'] ?? '' );
				return 'tel:' . $phone;
			case 'sms':
				$phone = sanitize_text_field( $params['phone'] ?? '' );
				$body  = sanitize_text_field( $params['sms-text'] ?? '' );
				return 'sms:' . $phone . ( $body ? '?body=' . rawurlencode( $body ) : '' );
			case 'whatsapp':
				$phone = preg_replace( '/[^0-9]/', '', $params['phone'] ?? '' );
				$body  = sanitize_text_field( $params['whatsapp-text'] ?? '' );
				return 'https://wa.me/' . $phone . ( $body ? '?text=' . rawurlencode( $body ) : '' );
			default:
				return '';
		}
	}

	/**
	 * Convert a WordPress upload URL to a local filesystem path.
	 */
	private static function url_to_path( string $url ): ?string {
		$uploads  = wp_upload_dir();
		$base_url = untrailingslashit( $uploads['baseurl'] );
		$base_dir = untrailingslashit( $uploads['basedir'] );

		if ( strpos( $url, $base_url ) === 0 ) {
			return $base_dir . substr( $url, strlen( $base_url ) );
		}

		$site_url = untrailingslashit( site_url() );
		if ( strpos( $url, $site_url ) === 0 ) {
			return untrailingslashit( ABSPATH ) . substr( $url, strlen( $site_url ) );
		}

		return null;
	}

	/**
	 * Convert a hex color string to an [r, g, b] array.
	 */
	private static function hex_to_rgb( string $hex ): array {
		$hex = ltrim( $hex, '#' );
		if ( strlen( $hex ) === 3 ) {
			$hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
		}

		return [
			hexdec( substr( $hex, 0, 2 ) ),
			hexdec( substr( $hex, 2, 2 ) ),
			hexdec( substr( $hex, 4, 2 ) ),
		];
	}
}
