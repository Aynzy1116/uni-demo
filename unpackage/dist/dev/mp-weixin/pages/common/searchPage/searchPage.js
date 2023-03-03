(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/searchPage/searchPage"],{

/***/ 231:
/*!**************************************************************************************!*\
  !*** D:/uniapp/uni-demo/main.js?{"page":"pages%2Fcommon%2FsearchPage%2FsearchPage"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _searchPage = _interopRequireDefault(__webpack_require__(/*! ./pages/common/searchPage/searchPage.vue */ 232));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_searchPage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 232:
/*!*****************************************************************!*\
  !*** D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchPage.vue?vue&type=template&id=c756b538& */ 233);
/* harmony import */ var _searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchPage.vue?vue&type=script&lang=js& */ 235);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchPage.vue?vue&type=style&index=0&scope=true&lang=css& */ 237);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["render"],
  _searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/common/searchPage/searchPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 233:
/*!************************************************************************************************!*\
  !*** D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=template&id=c756b538& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./searchPage.vue?vue&type=template&id=c756b538& */ 234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_template_id_c756b538___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 234:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=template&id=c756b538& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: function () {
      return Promise.all(/*! import() | uview-ui/components/u-navbar/u-navbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-navbar/u-navbar")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 251))
    },
    uSearch: function () {
      return Promise.all(/*! import() | uview-ui/components/u-search/u-search */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-search/u-search")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-search/u-search.vue */ 356))
    },
    uDivider: function () {
      return Promise.all(/*! import() | uview-ui/components/u-divider/u-divider */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-divider/u-divider")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-divider/u-divider.vue */ 364))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 303))
    },
    productItem: function () {
      return __webpack_require__.e(/*! import() | components/productItem/productItem */ "components/productItem/productItem").then(__webpack_require__.bind(null, /*! @/components/productItem/productItem.vue */ 267))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.flag = false
    }
    _vm.e1 = function ($event) {
      _vm.flag = true
    }
    _vm.e2 = function (e) {
      return (_vm.keyword = e)
    }
    _vm.e3 = function ($event) {
      _vm.flag = true
    }
    _vm.e4 = function (e) {
      return (_vm.keyword = e)
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 235:
/*!******************************************************************************************!*\
  !*** D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./searchPage.vue?vue&type=script&lang=js& */ 236);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 236:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      keyword: '',
      flag: true,
      historySearch: ['古人', '烤鸭', 'bulbul the sky'],
      hotSearchTags: [{
        id: '125',
        name: '章鱼灯'
      }, {
        id: '45',
        name: '再见星空'
      }, {
        id: '998',
        name: '超大灯'
      }, {
        id: '213',
        name: '彩虹灯'
      }, {
        id: '534',
        name: '坐角落看霓虹'
      }, {
        id: '432',
        name: '故人不在'
      }, {
        id: '3235',
        name: '妙妙屋'
      }, {
        id: '1235',
        name: '炸鸡'
      }, {
        id: '5394',
        name: '骚烤'
      }, {
        id: '2',
        name: '章鱼灯'
      }, {
        id: '3245',
        name: '开源的灯'
      }],
      detailLists: [{
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }, {
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }, {
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }, {
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }, {
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }, {
        name: "项目名称",
        icon: '../../static/img/suuolong.jpg',
        content: "\n\t\t\t\t\u6D41\u8424\u65AD\u7EED\u5149\uFF0C\u4E00\u660E\u4E00\u706D\u4E00\u5C3A\u95F4\uFF0C\u5BC2\u5BDE\u4F55\u4EE5\u582A\u2014\u7ACB\u82B1\u5317\u679D\u8FDE\u7EF5\u7684\u9634\u96E8\u5929\u6C14\u4E0D\u7981\u8BA9\u4EBA\u5FC3\u751F\u5026\u610F\u5E97\u91CC\u7684\u751F\n\t\t\t\t\u610F\u4E5F\u53D8\u5F97\u6BD4\u524D\u4E9B\u65E5\u5B50\u51B7\u6E05\u4E86\u8BB8\u591A\u3002\u5E97\u91CC\u8FD8\u6CA1\u6709\u987E\u5BA2\u3002\u6211\u5750\u5728\u9760\u7740\u4E66\u67B6\u7684\u6905\u5B50\u4E0A\u3002\u9ED8\u9ED8\u6253\u7740\u76F9\u3002\u66FE\u626C\u7AD9\u5728\u5427\n\t\t\t\t\u53F0\u540E\u4E60\u6162\u6027\u5730\u64E6\u7740\u74F7\u676F\uFF0C\u767D\u94B0\u4E0E\u4ED6\u5C0F\u58F0\u5730\u804A\u7740\u5929\u3002"
      }]
    };
  },
  onLoad: function onLoad(option) {
    console.log('option', option);
  },
  methods: {
    enterSearch: function enterSearch(value) {
      console.log('enter', value);
      this.keyword = value;
      this.flag = false;
    },
    closeHistory: function closeHistory(value) {
      console.log('删除', value);
    },
    goProductDetail: function goProductDetail(id) {
      console.log('id', id);
      this.navigater("/pages/common/productDetail/productDetail?id=".concat(id));
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 237:
/*!*************************************************************************************************************!*\
  !*** D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./searchPage.vue?vue&type=style&index=0&scope=true&lang=css& */ 238);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchPage_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 238:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/uni-demo/pages/common/searchPage/searchPage.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[231,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/common/searchPage/searchPage.js.map