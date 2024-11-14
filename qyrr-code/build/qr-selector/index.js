/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/qr-selector/Edit.jsx":
/*!**********************************!*\
  !*** ./src/qr-selector/Edit.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/qr-selector/editor.scss");
/* harmony import */ var react_kjua__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-kjua */ "./node_modules/react-kjua/dist/index.js");
/* harmony import */ var react_kjua__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_kjua__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const {
  __
} = wp.i18n;
function Edit({
  attributes,
  setAttributes
}) {
  const {
    qr_id,
    size,
    format
  } = attributes;
  const postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const selectedQr = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core').getEntityRecord('postType', 'qr', qr_id);
  }, [qr_id]);
  const updateData = () => {
    if (selectedQr) {
      let download_format = selectedQr.meta.download_format;
      if ('image' === selectedQr.meta.download_format) {
        download_format = 'png';
      }
      setAttributes({
        'format': download_format,
        'size': selectedQr.meta.size
      });
    }
  };
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select('core');
    return getEntityRecords('postType', 'qr', {
      per_page: -1,
      order: 'asc',
      status: 'publish'
    });
  }, []);
  const getSelectablePosts = () => {
    if (!posts) {
      return [];
    }
    const options = [{
      label: __('Auto-generated QR Code', 'qyrr-code'),
      value: postID
    }];
    posts.map(function (post) {
      if (post.title.raw && post.title.raw !== '') {
        options.push({
          label: post.title.raw,
          value: post.id
        });
      }
      return post;
    });
    return options;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    updateData();
  }, [selectedQr, posts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: __('QR-Code', 'qyrr-code'),
        initialOpen: true,
        children: posts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: __('Select QR-Code', 'qyrr-code'),
            value: qr_id,
            options: getSelectablePosts(),
            onChange: value => {
              updateData();
              setAttributes({
                'qr_id': value
              });
            }
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      id: "qr-code-container",
      children: posts && qr_id > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
        width: size + "px",
        height: size + "px",
        src: qyrr_options.baseurl + '/qyrr/' + qr_id + '/qr-code' + '.' + format
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_kjua__WEBPACK_IMPORTED_MODULE_1__.Kjua, {
        render: "image",
        text: "This is just sample content.",
        image: "",
        minVersion: 3,
        ecLevel: "L",
        size: size,
        fill: "#6804cc",
        back: "#FFF",
        rounded: 0,
        quiet: 0,
        mode: "plain",
        mSize: 0,
        mPosX: 0,
        mPosY: 0,
        label: "",
        fontname: "sans-serif",
        fontcolor: "#000"
      })
    })]
  });
}

/***/ }),

/***/ "./src/qr/icons.js":
/*!*************************!*\
  !*** ./src/qr/icons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.qr_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M51.2 51.2H102.4V102.4H51.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4Zm128 128H384V25.6h102.4V128Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M409.6 51.2H460.8V102.4H409.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M51.2 409.6H102.4V460.8H51.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M358.4 358.4H384V384H358.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M230.4 486.4H256V512H230.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 384H281.6V409.6H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 435.2H281.6V460.8H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M486.4 307.2H512V332.8H486.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M0 307.2H25.6V332.8H0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M0 179.2H25.6V204.8H0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M281.6 25.6v25.6h-51.2v25.6h76.8V25.6h-25.6ZM486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6h-76.8v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6Zm-76.8 128v76.8h-76.8v-76.8h76.8ZM358.4 153.6h-51.2v25.6h-25.6v51.2h25.6v-25.6h25.6v-25.6h25.6v-25.6Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M281.6 486.4H332.8V512H281.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M204.8 25.6H230.4V51.2H204.8z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M409.6 204.8H435.2V230.4H409.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M435.2 179.2H460.8V204.8H435.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M102.4 307.2H128V332.8H102.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2Zm-25.6 0H25.6V384H128v102.4Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M153.6 153.6H179.2V179.2H153.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M204.8 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0ZM128 128H25.6V25.6H128V128Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M307.2 76.8H332.8V102.4H307.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 0H281.6V25.6H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8ZM153.6 256h-51.2v-25.6h51.2V256ZM230.4 409.6v-51.2h-25.6V384h-25.6v25.6h25.6v25.6h-25.6v25.6h51.2v-25.6H256v-25.6h-25.6ZM460.8 460.8v-25.6h-25.6v25.6h-76.8v25.6h51.2V512h25.6v-25.6h51.2V512H512v-51.2h-51.2ZM486.4 358.4V384h-25.6v25.6H512v-51.2h-25.6Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./node_modules/kjua/dist/kjua.min.js":
/*!********************************************!*\
  !*** ./node_modules/kjua/dist/kjua.min.js ***!
  \********************************************/
/***/ (function(module) {

/*! kjua v0.9.0 - https://larsjung.de/kjua/ */
!function(t,r){ true?module.exports=r():0}("undefined"!=typeof self?self:this,function(){return n={},o.m=e=[function(t,r,e){function n(t){var r=Object.assign({},o,t),e=i(r.text,r.ecLevel,r.minVersion,r.quiet);return"svg"===r.render?u(e,r):a(e,r,"image"===r.render)}var o=e(1),i=e(2),a=e(4),u=e(8);t.exports=n;try{jQuery.fn.kjua=function(e){return this.each(function(t,r){return r.appendChild(n(e))})}}catch(t){}},function(t,r){t.exports={render:"image",crisp:!0,minVersion:1,ecLevel:"L",size:200,ratio:null,fill:"#333",back:"#fff",text:"no text",rounded:0,quiet:0,mode:"plain",mSize:30,mPosX:50,mPosY:50,label:"no label",fontname:"sans",fontcolor:"#333",image:null}},function(t,r,e){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=/code length overflow/i,c=e(3);c.stringToBytes=c.stringToBytesFuncs["UTF-8"];t.exports=function(t,r,e,n){var o,i=3<arguments.length&&void 0!==n?n:0,a=function(t,r,e){for(var n=2<arguments.length&&void 0!==e?e:1,o=n=Math.max(1,n);o<=40;o+=1)try{var i=function(){var e=c(o,r);e.addData(t),e.make();var n=e.getModuleCount();return{v:{text:t,level:r,version:o,module_count:n,is_dark:function(t,r){return 0<=t&&t<n&&0<=r&&r<n&&e.isDark(t,r)}}}}();if("object"===u(i))return i.v}catch(t){if(!(o<40&&f.test(t)))throw new Error(t)}return null}(0<arguments.length&&void 0!==t?t:"",1<arguments.length&&void 0!==r?r:"L",2<arguments.length&&void 0!==e?e:1);return a&&(o=a.is_dark,a.module_count+=2*i,a.is_dark=function(t,r){return o(t-i,r-i)}),a}},function(t,r,e){var n,o,i,a=function(){function i(t,r){function a(t,r){l=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(s=4*u+17),e(0,0),e(s-7,0),e(0,s-7),i(),o(),d(t,r),7<=u&&g(t),null==n&&(n=p(u,f,c)),v(n,r)}var u=t,f=w[r],l=null,s=0,n=null,c=[],h={},e=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||s<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||s<=r+n||(l[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},o=function(){for(var t=8;t<s-8;t+=1)null==l[t][6]&&(l[t][6]=t%2==0);for(var r=8;r<s-8;r+=1)null==l[6][r]&&(l[6][r]=r%2==0)},i=function(){for(var t=m.getPatternPosition(u),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],o=t[e];if(null==l[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)l[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},g=function(t){for(var r=m.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);l[Math.floor(e/3)][e%3+s-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);l[e%3+s-8-3][Math.floor(e/3)]=n}},d=function(t,r){for(var e=f<<3|r,n=m.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?l[o][8]=i:o<8?l[o+1][8]=i:l[s-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?l[8][s-o-1]=i:o<9?l[8][15-o-1+1]=i:l[8][15-o-1]=i}l[s-8][8]=!t},v=function(t,r){for(var e=-1,n=s-1,o=7,i=0,a=m.getMaskFunction(r),u=s-1;0<u;u-=2)for(6==u&&--u;;){for(var f,c=0;c<2;c+=1){null==l[n][u-c]&&(f=!1,i<t.length&&(f=1==(t[i]>>>o&1)),a(n,u-c)&&(f=!f),l[n][u-c]=f,-1==--o&&(i+=1,o=7))}if((n+=e)<0||s<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=S.getRSBlocks(t,r),o=M(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),m.getLengthInBits(a.getMode(),t)),a.write(o)}for(var u=0,i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f,n=Math.max(n,f),o=Math.max(o,c);i[u]=new Array(f);for(var l=0;l<i[u].length;l+=1)i[u][l]=255&t.getBuffer()[l+e];e+=f;var s=m.getErrorCorrectPolynomial(c),g=b(i[u],s.getLength()-1).mod(s);a[u]=new Array(s.getLength()-1);for(l=0;l<a[u].length;l+=1){var h=l+g.getLength()-a[u].length;a[u][l]=0<=h?g.getAt(h):0}}for(var d=0,l=0;l<r.length;l+=1)d+=r[l].totalCount;for(var v=new Array(d),p=0,l=0;l<n;l+=1)for(u=0;u<r.length;u+=1)l<i[u].length&&(v[p]=i[u][l],p+=1);for(l=0;l<o;l+=1)for(u=0;u<r.length;u+=1)l<a[u].length&&(v[p]=a[u][l],p+=1);return v}(o,n)};h.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=A(t);break;case"Alphanumeric":e=L(t);break;case"Byte":e=D(t);break;case"Kanji":e=_(t);break;default:throw"mode:"+r}c.push(e),n=null},h.isDark=function(t,r){if(t<0||s<=t||r<0||s<=r)throw t+","+r;return l[t][r]},h.getModuleCount=function(){return s},h.make=function(){if(u<1){for(var t=1;t<40;t++){for(var r=S.getRSBlocks(t,f),e=M(),n=0;n<c.length;n++){var o=c[n];e.put(o.getMode(),4),e.put(o.getLength(),m.getLengthInBits(o.getMode(),t)),o.write(e)}for(var i=0,n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}u=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=m.getLostPoint(h);(0==e||n<t)&&(t=n,r=e)}return r}())},h.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<h.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<h.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=h.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},h.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f=h.getModuleCount()*t+2*r,c="",l="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ";for(c+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',c+=o.scalable?"":' width="'+f+'px" height="'+f+'px"',c+=' viewBox="0 0 '+f+" "+f+'" ',c+=' preserveAspectRatio="xMinYMin meet"',c+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",c+=">",c+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",c+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",c+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',c+='<path d="',a=0;a<h.getModuleCount();a+=1)for(u=a*t+r,i=0;i<h.getModuleCount();i+=1)h.isDark(a,i)&&(c+="M"+(i*t+r)+","+u+l);return c+='" stroke="transparent" fill="black"/>',c+="</svg>"},h.createDataURL=function(o,t){o=o||2,t=void 0===t?4*o:t;var r=h.getModuleCount()*o+2*t,i=t,a=r-t;return P(r,r,function(t,r){if(i<=t&&t<a&&i<=r&&r<a){var e=Math.floor((t-i)/o),n=Math.floor((r-i)/o);return h.isDark(n,e)?0:1}return 1})},h.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=h.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=h.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return h.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;for(var r,e,n,o,i=+h.getModuleCount()+2*t,a=t,u=i-t,f={"██":"█","█ ":"▀"," █":"▄","  ":" "},c={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="",s=0;s<i;s+=2){for(e=Math.floor(s-a),n=Math.floor(s+1-a),r=0;r<i;r+=1)o="█",a<=r&&r<u&&a<=s&&s<u&&h.isDark(e,Math.floor(r-a))&&(o=" "),a<=r&&r<u&&a<=s+1&&s+1<u&&h.isDark(n,Math.floor(r-a))?o+=" ":o+="█",l+=t<1&&u<=s+1?c[o]:f[o];l+="\n"}return i%2&&0<t?l.substring(0,l.length-i-1)+Array(1+i).join("▀"):l.substring(0,l.length-1)}(r);--t,r=void 0===r?2*t:r;for(var e,n,o,i=h.getModuleCount()*t+2*r,a=r,u=i-r,f=Array(t+1).join("██"),c=Array(t+1).join("  "),l="",s="",g=0;g<i;g+=1){for(n=Math.floor((g-a)/t),s="",e=0;e<i;e+=1)o=1,a<=e&&e<u&&a<=g&&g<u&&h.isDark(n,Math.floor((e-a)/t))&&(o=0),s+=o?f:c;for(n=0;n<t;n+=1)l+=s+"\n"}return l.substring(0,l.length-1)},h.renderTo2dContext=function(t,r){r=r||2;for(var e=h.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=h.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},h}i.stringToBytes=(i.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,i.createStringToBytes=function(u,f){var i=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=z(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),a="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n,o=t.charCodeAt(e);o<128?r.push(o):"number"==typeof(n=i[t.charAt(e)])?(255&n)==n?r.push(n):(r.push(n>>>8),r.push(255&n)):r.push(a)}return r}};var r,t,a=1,u=2,o=4,f=8,w={L:1,M:0,Q:3,H:2},e=0,n=1,c=2,l=3,s=4,g=5,h=6,d=7,m=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(t={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=v(r)-v(1335);)r^=1335<<v(r)-v(1335);return 21522^(t<<10|r)},t.getBCHTypeNumber=function(t){for(var r=t<<12;0<=v(r)-v(7973);)r^=7973<<v(r)-v(7973);return t<<12|r},t.getPatternPosition=function(t){return r[t-1]},t.getMaskFunction=function(t){switch(t){case e:return function(t,r){return(t+r)%2==0};case n:return function(t,r){return t%2==0};case c:return function(t,r){return r%3==0};case l:return function(t,r){return(t+r)%3==0};case s:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case g:return function(t,r){return t*r%2+t*r%3==0};case h:return function(t,r){return(t*r%2+t*r%3)%2==0};case d:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},t.getErrorCorrectPolynomial=function(t){for(var r=b([1],0),e=0;e<t;e+=1)r=r.multiply(b([1,p.gexp(e)],0));return r},t.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case o:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case o:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case o:return 16;case f:return 12;default:throw"mode:"+t}}},t.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(var l=0,o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(l+=1);return e+=Math.abs(100*l/r/r-50)/5*10},t);function v(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r}var p=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}};return n}();function b(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=p.gexp(p.glog(i.getAt(e))+p.glog(t.getAt(n)));return b(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=p.glog(i.getAt(0))-p.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=p.gexp(p.glog(t.getAt(n))+r);return b(e,0).mod(t)}};return i}function y(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+="]"}};return o}function x(){function e(t){a+=String.fromCharCode(r(63&t))}var n=0,o=0,i=0,a="",t={},r=function(t){if(!(t<0)){if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return t.writeByte=function(t){for(n=n<<8|255&t,o+=8,i+=1;6<=o;)e(n>>>o-6),o-=6},t.flush=function(){if(0<o&&(e(n<<6-o),o=n=0),i%3!=0)for(var t=3-i%3,r=0;r<t;r+=1)a+="="},t.toString=function(){return a},t}function k(t,r){var n=t,o=r,d=new Array(t*r),e={setPixel:function(t,r,e){d[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=v(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a,u,f,c=y(),l=(a=c,f=u=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=u+r;)a.writeByte(255&(t<<u|f)),r-=8-u,t>>>=8-u,u=f=0;f|=t<<u,u+=r},flush:function(){0<u&&a.writeByte(f)}});l.write(r,n);var s=0,g=String.fromCharCode(d[s]);for(s+=1;s<d.length;){var h=String.fromCharCode(d[s]);s+=1,o.contains(g+h)?g+=h:(l.write(o.indexOf(g),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(g+h)),g=h)}return l.write(o.indexOf(g),n),l.write(e,n),l.flush(),c.toByteArray()},v=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return e}var B,C,S=(B=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(C={}).getRSBlocks=function(t,r){var e=function(t,r){switch(r){case w.L:return B[4*(t-1)+0];case w.M:return B[4*(t-1)+1];case w.Q:return B[4*(t-1)+2];case w.H:return B[4*(t-1)+3];default:return}}(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],l=e[3*u+2],s=0;s<f;s+=1)a.push((n=l,o=void 0,(o={}).totalCount=c,o.dataCount=n,o));return a},C),M=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},A=function(t){var r=a,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},L=function(t){var r=u,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},D=function(t){var r=o,e=i.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},_=function(t){var r=f,e=i.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=e(t),n={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return n},z=function(t){var e=t,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return r},P=function(t,r,e){for(var n=k(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=y();n.write(a);for(var u=x(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return i}();a.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||57344<=n?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},o=[],void 0===(i="function"==typeof(n=function(){return a})?n.apply(r,o):n)||(t.exports=i)},function(t,r,e){function c(t,r,e,n,o,i){t.is_dark(o,i)&&r.rect(i*n,o*n,n,n)}function a(t,r,e){var n,o;n=r,(o=e).back&&(n.fillStyle=o.back,n.fillRect(0,0,o.size,o.size)),function(t,r,e){if(t){var n=0<e.rounded&&e.rounded<=100?l:c,o=t.module_count,i=e.size/o,a=0;e.crisp&&(i=Math.floor(i),a=Math.floor((e.size-i*o)/2)),r.translate(a,a),r.beginPath();for(var u=0;u<o;u+=1)for(var f=0;f<o;f+=1)n(t,r,e,i,u,f);r.fillStyle=e.fill,r.fill(),r.translate(-a,-a)}}(t,r,e),i(r,e)}var u=e(5),l=e(6),i=e(7);t.exports=function(t,r,e){var n=r.ratio||u.dpr,o=u.create_canvas(r.size,n),i=o.getContext("2d");return i.scale(n,n),a(t,i,r),e?u.canvas_to_img(o):o}},function(t,r){function e(t,r){return t.getAttribute(r)}function n(r,e){return Object.keys(e||{}).forEach(function(t){r.setAttribute(t,e[t])}),r}function o(t,r){return n(a.createElement(t),r)}var i=window,a=i.document,u=i.devicePixelRatio||1,f="http://www.w3.org/2000/svg";t.exports={dpr:u,SVG_NS:f,get_attr:e,create_el:o,create_svg_el:function(t,r){return n(a.createElementNS(f,t),r)},create_canvas:function(t,r){var e=o("canvas",{width:t*r,height:t*r});return e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px"),e},canvas_to_img:function(t){var r=o("img",{crossOrigin:"anonymous",src:t.toDataURL("image/png"),width:e(t,"width"),height:e(t,"height")});return r.style.width=t.style.width,r.style.height=t.style.height,r}}},function(t,r){t.exports=function(t,r,e,n,o,i){var a,u,f,c,l,s,g,h,d,v,p,y,w,m,b,x,k,B,C,S,M=i*n,A=o*n,L=M+n,D=A+n,_=.005*e.rounded*n,z=t.is_dark,P=o-1,T=o+1,j=i-1,I=i+1,O=z(o,i),R=z(P,j),F=z(P,i),H=z(P,I),N=z(o,I),E=z(T,I),Y=z(T,i),q=z(T,j),U=z(o,j),W=(a=r,{m:function(t,r){return a.moveTo(t,r),this},l:function(t,r){return a.lineTo(t,r),this},a:function(){return a.arcTo.apply(a,arguments),this}});O?(p=W,y=M,w=A,m=L,b=D,x=_,B=!F&&!N,C=!Y&&!N,S=!Y&&!U,(k=!F&&!U)?p.m(y+x,w):p.m(y,w),B?p.l(m-x,w).a(m,w,m,b,x):p.l(m,w),C?p.l(m,b-x).a(m,b,y,b,x):p.l(m,b),S?p.l(y+x,b).a(y,b,y,w,x):p.l(y,b),k?p.l(y,w+x).a(y,w,m,w,x):p.l(y,w)):(u=W,f=M,c=A,l=L,s=D,g=_,h=F&&N&&H,d=Y&&N&&E,v=Y&&U&&q,F&&U&&R&&u.m(f+g,c).l(f,c).l(f,c+g).a(f,c,f+g,c,g),h&&u.m(l-g,c).l(l,c).l(l,c+g).a(l,c,l-g,c,g),d&&u.m(l-g,s).l(l,s).l(l,s-g).a(l,s,l-g,s,g),v&&u.m(f+g,s).l(f,s).l(f,s-g).a(f,s,f+g,s,g))}},function(t,r){t.exports=function(t,r){var e,n,o,i,a,u,f,c,l,s,g,h=r.mode;"label"===h?function(t,r){var e=r.size,n="bold "+.01*r.mSize*e+"px "+r.fontname;t.strokeStyle=r.back,t.lineWidth=.01*r.mSize*e*.1,t.fillStyle=r.fontcolor,t.font=n;var o=t.measureText(r.label).width,i=.01*r.mSize,a=(1-o/e)*r.mPosX*.01*e,u=(1-i)*r.mPosY*.01*e+.75*r.mSize*.01*e;t.strokeText(r.label,a,u),t.fillText(r.label,a,u)}(t,r):"image"===h&&(e=t,o=(n=r).size,i=n.image.naturalWidth||1,a=n.image.naturalHeight||1,u=.01*n.mSize,c=(1-(f=u*i/a))*n.mPosX*.01*o,l=(1-u)*n.mPosY*.01*o,s=f*o,g=u*o,e.drawImage(n.image,c,l,s,g))}},function(t,r,y){function J(n){function o(t){return Math.round(10*t)/10}function i(t){return Math.round(10*t)/10+n.o}return{m:function(t,r){return n.p+="M ".concat(i(t)," ").concat(i(r)," "),this},l:function(t,r){return n.p+="L ".concat(i(t)," ").concat(i(r)," "),this},a:function(t,r,e){return n.p+="A ".concat(o(e)," ").concat(o(e)," 0 0 1 ").concat(i(t)," ").concat(i(r)," "),this}}}var e=y(5),w=e.SVG_NS,m=e.get_attr,b=e.create_svg_el;t.exports=function(t,r){var e,n,o,i,a,u,f,c,l,s,g,h,d=r.size,v=r.mode,p=b("svg",{xmlns:w,width:d,height:d,viewBox:"0 0 ".concat(d," ").concat(d)});return p.style.width="".concat(d,"px"),p.style.height="".concat(d,"px"),r.back&&p.appendChild(b("rect",{x:0,y:0,width:d,height:d,fill:r.back})),p.appendChild(b("path",{d:function(t,r){if(!t)return"";var e={p:"",o:0},n=t.module_count,o=r.size/n;r.crisp&&(o=Math.floor(o),e.o=Math.floor((r.size-o*n)/2));for(var i,a,u,f,c,l,s,g,h,d,v,p,y,w,m,b,x,k,B,C,S,M,A,L,D,_,z,P,T,j,I,O,R,F,H,N,E,Y,q,U,W,X,V,G=J(e),Q=0;Q<n;Q+=1)for(var $=0;$<n;$+=1)i=t,a=G,V=X=W=U=q=Y=E=N=H=F=R=O=I=j=T=P=z=_=D=L=A=M=S=C=B=k=x=b=m=w=y=p=v=d=h=g=s=l=void 0,z=(D=(c=$)*(u=o))+u,P=(_=(f=Q)*u)+u,T=.005*r.rounded*u,j=i.is_dark,I=f-1,O=f+1,R=c-1,F=c+1,H=j(f,c),N=j(I,R),E=j(I,c),Y=j(I,F),q=j(f,F),U=j(O,F),W=j(O,c),X=j(O,R),V=j(f,R),H?(m=a,b=D,x=_,k=z,B=P,C=T,M=!E&&!q,A=!W&&!q,L=!W&&!V,(S=!E&&!V)?m.m(b+C,x):m.m(b,x),M?m.l(k-C,x).a(k,x+C,C):m.l(k,x),A?m.l(k,B-C).a(k-C,B,C):m.l(k,B),L?m.l(b+C,B).a(b,B-C,C):m.l(b,B),S?m.l(b,x+C).a(b+C,x,C):m.l(b,x)):(l=a,s=D,g=_,h=z,d=P,v=T,p=E&&q&&Y,y=W&&q&&U,w=W&&V&&X,E&&V&&N&&l.m(s+v,g).l(s,g).l(s,g+v).a(s+v,g,v),p&&l.m(h,g+v).l(h,g).l(h-v,g).a(h,g+v,v),y&&l.m(h-v,d).l(h,d).l(h,d-v).a(h-v,d,v),w&&l.m(s,d-v).l(s,d).l(s+v,d).a(s,d-v,v));return e.p}(t,r),fill:r.fill})),"label"===v?function(t,r){var e=r.size,n="bold "+.01*r.mSize*e+"px "+r.fontname,o=y(5),i=r.ratio||o.dpr,a=o.create_canvas(e,i).getContext("2d");a.strokeStyle=r.back,a.lineWidth=.01*r.mSize*e*.1,a.fillStyle=r.fontcolor,a.font=n;var u=a.measureText(r.label).width,f=.01*r.mSize,c=(1-u/e)*r.mPosX*.01*e,l=(1-f)*r.mPosY*.01*e+.75*r.mSize*.01*e,s=b("text",{x:c,y:l});Object.assign(s.style,{font:n,fill:r.fontcolor,"paint-order":"stroke",stroke:r.back,"stroke-width":a.lineWidth}),s.textContent=r.label,t.appendChild(s)}(p,r):"image"===v&&(e=p,o=(n=r).size,i=n.image.naturalWidth||1,a=n.image.naturalHeight||1,u=.01*n.mSize,c=(1-(f=u*i/a))*n.mPosX*.01*o,l=(1-u)*n.mPosY*.01*o,s=f*o,g=u*o,h=b("image",{href:m(n.image,"src"),x:c,y:l,width:s,height:g}),e.appendChild(h)),p}}],o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)o.d(e,n,function(t){return r[t]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=0);function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e,n});

/***/ }),

/***/ "./src/qr-selector/editor.scss":
/*!*************************************!*\
  !*** ./src/qr-selector/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-kjua/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-kjua/dist/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Kjua = void 0;
var React = __webpack_require__(/*! react */ "react");
var kjua = __webpack_require__(/*! kjua */ "./node_modules/kjua/dist/kjua.min.js");
var Kjua = /** @class */ (function (_super) {
    __extends(Kjua, _super);
    function Kjua(props) {
        var _this = _super.call(this, props) || this;
        _this.el = React.createRef();
        return _this;
    }
    Kjua.prototype.componentDidMount = function () {
        this.update();
    };
    Kjua.prototype.componentDidUpdate = function () {
        this.el.current.removeChild(this.qr);
        this.update();
    };
    Kjua.prototype.update = function () {
        this.qr = kjua(this.props);
        this.el.current.appendChild(this.qr);
    };
    Kjua.prototype.render = function () {
        return React.createElement('div', {
            ref: this.el
        });
    };
    return Kjua;
}(React.PureComponent));
exports.Kjua = Kjua;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/qr-selector/block.json":
/*!************************************!*\
  !*** ./src/qr-selector/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"qyrr-code/qr-selector","icon":"<svg xmlns=\'http://www.w3.org/2000/svg\' fillrule=\'evenodd\' cliprule=\'evenodd\' strokelinejoin=\'round\' strokemiterlimit=\'2\' viewBox=\'0 0 16.08 16.08\'><path transform=\'scale(.03139)\' d=\'M51.2 51.2H102.4V102.4H51.2z\'></path>     <path d=\'M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4Zm128 128H384V25.6h102.4V128Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M409.6 51.2H460.8V102.4H409.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M51.2 409.6H102.4V460.8H51.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M358.4 358.4H384V384H358.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M230.4 486.4H256V512H230.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 384H281.6V409.6H256z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 435.2H281.6V460.8H256z\'></path>     <path transform=\'scale(.03139)\' d=\'M486.4 307.2H512V332.8H486.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M0 307.2H25.6V332.8H0z\'></path>     <path transform=\'scale(.03139)\' d=\'M0 179.2H25.6V204.8H0z\'></path>     <path d=\'M281.6 25.6v25.6h-51.2v25.6h76.8V25.6h-25.6ZM486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6h-76.8v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6Zm-76.8 128v76.8h-76.8v-76.8h76.8ZM358.4 153.6h-51.2v25.6h-25.6v51.2h25.6v-25.6h25.6v-25.6h25.6v-25.6Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M281.6 486.4H332.8V512H281.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M204.8 25.6H230.4V51.2H204.8z\'></path>     <path transform=\'scale(.03139)\' d=\'M409.6 204.8H435.2V230.4H409.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M435.2 179.2H460.8V204.8H435.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M102.4 307.2H128V332.8H102.4z\'></path>     <path d=\'M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2Zm-25.6 0H25.6V384H128v102.4Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M153.6 153.6H179.2V179.2H153.6z\'></path>     <path d=\'M204.8 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0ZM128 128H25.6V25.6H128V128Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M307.2 76.8H332.8V102.4H307.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 0H281.6V25.6H256z\'></path>     <path d=\'M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8ZM153.6 256h-51.2v-25.6h51.2V256ZM230.4 409.6v-51.2h-25.6V384h-25.6v25.6h25.6v25.6h-25.6v25.6h51.2v-25.6H256v-25.6h-25.6ZM460.8 460.8v-25.6h-25.6v25.6h-76.8v25.6h51.2V512h25.6v-25.6h51.2V512H512v-51.2h-51.2ZM486.4 358.4V384h-25.6v25.6H512v-51.2h-25.6Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path></svg>","version":"1.0.0","title":"QR Code Selector","category":"widgets","description":"Select a QR code.","supports":{"html":false,"customClassName":false},"attributes":{"qr_id":{"type":"string","default":0},"size":{"type":"number","default":200},"format":{"type":"string","default":"png"}},"textdomain":"qyrr-code","editorScript":"file:./index.js","editorStyle":"file:./editor.scss","style":"file:./style.scss"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/qr-selector/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/qr-selector/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./src/qr-selector/Edit.jsx");
/* harmony import */ var _qr_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../qr/icons */ "./src/qr/icons.js");




if (!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockType)('qyrr-code/qr-selector')) {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
    title: "QR Code Selector",
    icon: _qr_icons__WEBPACK_IMPORTED_MODULE_3__["default"].qr_code,
    edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
    save() {
      return null;
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map