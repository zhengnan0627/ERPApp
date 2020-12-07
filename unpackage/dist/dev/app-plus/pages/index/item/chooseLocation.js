"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!**************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/main.js?{"type":"appStyle"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/App.vue?vue&type=style&index=0&lang=scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/App.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/main.js?{"page":"pages%2Findex%2Fitem%2FchooseLocation"} ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_item_chooseLocation_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/item/chooseLocation.nvue?mpType=page */ 52);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_item_chooseLocation_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_item_chooseLocation_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/item/chooseLocation'\n        _pages_index_item_chooseLocation_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_item_chooseLocation_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUZBQUc7QUFDWCxRQUFRLHlGQUFHO0FBQ1gsUUFBUSx5RkFBRztBQUNYLGdCQUFnQix5RkFBRyIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvaXRlbS9jaG9vc2VMb2NhdGlvbi5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2l0ZW0vY2hvb3NlTG9jYXRpb24nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseLocation.nvue?vue&type=template&id=e945f4a8&mpType=page */ 53);\n/* harmony import */ var _chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseLocation.nvue?vue&type=script&lang=js&mpType=page */ 55);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chooseLocation.nvue?vue&type=style&index=0&lang=css&mpType=page */ 61).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chooseLocation.nvue?vue&type=style&index=0&lang=css&mpType=page */ 61).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"75de0eb2\",\n  false,\n  _chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/item/chooseLocation.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDOEU7QUFDTDtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJFQUFtRTtBQUN2SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkVBQW1FO0FBQzVIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGdHQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2hvb3NlTG9jYXRpb24ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOTQ1ZjRhOCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hvb3NlTG9jYXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaG9vc2VMb2NhdGlvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaG9vc2VMb2NhdGlvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2hvb3NlTG9jYXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNzVkZTBlYjJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaXRlbS9jaG9vc2VMb2NhdGlvbi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=template&id=e945f4a8&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chooseLocation.nvue?vue&type=template&id=e945f4a8&mpType=page */ 54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_template_id_e945f4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 54 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=template&id=e945f4a8&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c("view", { ref: "mapTop", staticClass: ["tool-bar-fixed"] }, [
            _c(
              "view",
              { staticClass: ["search_view"] },
              [
                _c("u-image", {
                  staticClass: ["search_icon"],
                  attrs: { src: "../../../static/image/back.png" },
                  on: { click: _vm.back }
                }),
                _c("view", { staticClass: ["search_input"] }, [
                  _c("u-text", [_vm._v("\n\t\t\t\t地址纠正\n\t\t\t")])
                ])
              ],
              1
            )
          ]),
          _c(
            "map",
            {
              ref: "map",
              style: _vm.mapStyle,
              attrs: {
                id: "map",
                markers: _vm.markers,
                controls: _vm.controls,
                longitude: _vm.location.longitude,
                latitude: _vm.location.latitude
              },
              on: { regionchange: _vm.regionchange }
            },
            [
              _c("u-image", {
                staticClass: ["cover_marker"],
                style: {
                  left: _vm.mapWAH.width / 2 - 10 + "px",
                  top: _vm.mapWAH.height / 2 - 30 + "px"
                },
                attrs: { src: "../../../static/image/chooselocation.png" }
              }),
              _c("u-image", {
                staticClass: ["do_get_location"],
                attrs: { src: "../../../static/image/correct.png" },
                on: { click: _vm.doCheckPermission }
              })
            ],
            1
          ),
          _c("view", { ref: "mapBottom", staticClass: ["main_bottom"] }, [
            _c("view", { staticClass: ["old_address"] }, [
              _c("u-text", { staticClass: ["add_text"] }, [
                _vm._v("原地址:" + _vm._s(_vm.kehuinfo.c_gs_address || "无"))
              ])
            ]),
            _c("view", { staticClass: ["choose_address"] }, [
              _c("u-text", { staticClass: ["add_text"] }, [
                _vm._v("当前地址:" + _vm._s(_vm.addressText))
              ])
            ]),
            _c(
              "u-text",
              { staticClass: ["uni-btn-v"], on: { click: _vm.emitcorrect } },
              [_vm._v("选择这里")]
            )
          ]),
          _vm.showListView
            ? _c(
                "view",
                { staticClass: ["search_list_view"] },
                _vm._l(_vm.addressList, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: item.id,
                      staticClass: ["addres_item"],
                      on: {
                        click: function($event) {
                          _vm.chooseIs(index, item)
                        }
                      }
                    },
                    [
                      _c("u-text", { staticClass: ["text_name"] }, [
                        _vm._v(_vm._s(item.name))
                      ]),
                      _c("br"),
                      _c("u-text", { staticClass: ["text_address"] }, [
                        _vm._v(_vm._s(item.district + item.address))
                      ]),
                      _vm.addressIndex === index
                        ? _c("u-image", {
                            staticClass: ["choose_icon"],
                            attrs: { src: "../../../static/image/correct.png" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 55 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chooseLocation.nvue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLG9lQUFHLEVBQUMiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hvb3NlTG9jYXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hvb3NlTG9jYXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 57));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 59));\n\nvar _api = __webpack_require__(/*! @/api/api.js */ 60);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar dom = weex.requireModule('dom');var mapContext = null; //输入提示功能\nvar _default = { data: function data() {return { kehuinfo: {}, //客户信息,从上级页面传进来\n      userid: null, //用户id(从缓存中取)\n      iStatusBarHeight: 0, mapStyle: { 'width': '393px', 'height': '530px' }, mapWAH: { width: 0, height: 0 }, markers: [], controls: [], location: {}, addressText: \"暂未定位成功，请稍候···\", addressList: [], addressIndex: '', addressItem: {}, showListView: false, //存储选择的地址\n      chooselatitude: 0, chooselongitude: 0 };}, methods: { //返回上一页方法\n    back: function back() {uni.navigateBack({});}, //点击确定跳出页面并发送坐标方法\n    emitcorrect: function () {var _emitcorrect = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this = this;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.Request({ data: { proc: 'APP_YWY_PORT', type: '纠正坐标', userid: this.userid, c_id: this.kehuinfo.c_id, c_jd: this.chooselongitude, c_wd: this.chooselatitude } }).then(function (res) {var resdata = res.Msg_info;__f__(\"log\", resdata, \" at pages/index/item/chooseLocation.nvue:92\");var pages = getCurrentPages(); //获取所有页面栈实例列表\n                  var nowPage = pages[pages.length - 1]; //当前页页面实例\n                  var prevPage = pages[pages.length - 2]; //上一页页面实例\n                  prevPage.$vm.kehuinfo.c_wd = _this.chooselatitude; //修改上一页面的 couponNumber 参数值为 value\n                  prevPage.$vm.kehuinfo.c_jd = _this.chooselongitude; //修改上一页面的 couid 参数值为 vid\n                  // prevPage.$vm.markers[0].longitude = this.chooselongitude\n                  // prevPage.$vm.markers[0].latitude = this.chooselatitude\n                  // prevPage.$vm.mapkey += 1\n                });case 2:uni.$emit('add'); //目前仅向seeclient页面发送地址(add)变更事件，触发该页面更新地图\n                uni.navigateBack({//uni.navigateTo跳转的返回，默认1为返回上一级\n                });case 4:case \"end\":return _context.stop();}}}, _callee, this);}));function emitcorrect() {return _emitcorrect.apply(this, arguments);}return emitcorrect;}(),\n    // emitcorrect() {\n    // \t// const chooselocation = JSON.stringify(this.chooselocation)\n    // \tconst chooselatitude = this.chooselatitude\n    // \tconst chooselongitude = this.chooselongitude\n    // \t// console.log(chooselocation);\n    // \t// uni.redirectTo({\n    // \t// \turl:'taskdetail?chooselatitude='+chooselatitude+'&chooselongitude='+chooselongitude\n    // \t// })\n    // },\n    searchAddress: function searchAddress(e) {var _this2 = this;\n      (0, _api.inputtips)({ location: this.location.longitude + ',' + this.location.latitude, keywords: e.detail.value }).then(function (res) {\n        _this2.addressList = res.data.tips;\n        _this2.showListView = true;\n      });\n    },\n    chooseIs: function chooseIs(index, item) {\n      this.addressIndex = index;\n      this.addressItem = item;\n      var that = this;\n      uni.showLoading({\n        title: '请稍候···' });\n\n      that.addressIndex = '';\n      that.showListView = false;\n      // 选择完成之后移动地图到指定位置\n      this.location = {\n        longitude: item.location.split(',')[0],\n        latitude: item.location.split(',')[1] };\n\n      that.addressIndex = '';\n      that.showListView = false;\n    },\n    //移动地图获取中心点坐标\n    regionchange: function regionchange(e) {\n      __f__(\"log\", e.type, \" at pages/index/item/chooseLocation.nvue:144\");\n      var that = this;\n      if (e.type == \"end\") {\n        mapContext.getCenterLocation({\n          success: function success(res) {\n            __f__(\"log\", res, \" at pages/index/item/chooseLocation.nvue:149\");\n            that.chooselatitude = res.latitude;\n            that.chooselongitude = res.longitude;\n            __f__(\"log\", that.chooselocation, \" at pages/index/item/chooseLocation.nvue:152\");\n            that.getAddressText(res);\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at pages/index/item/chooseLocation.nvue:156\");\n          },\n          complete: function complete(res) {\n            __f__(\"log\", res, \" at pages/index/item/chooseLocation.nvue:159\");\n          } });\n\n      }\n    },\n    getAddressText: function getAddressText(point) {\n      var that = this;\n      uni.hideLoading();\n      plus.maps.Map.reverseGeocode(point, {}, function (event) {\n        that.addressText = event.address;\n      });\n    },\n    doCheckPermission: function doCheckPermission() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var status;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                uni.showLoading({ title: \"定位中···\" });_context2.next = 3;return (\n                  _this3.checkPermission());case 3:status = _context2.sent;if (!(\n                status !== 1)) {_context2.next = 7;break;}\n                uni.showToast({\n                  title: \"访问位置被拒绝\" });return _context2.abrupt(\"return\");case 7:\n\n\n\n                _this3.doGetLocation();case 8:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    doGetLocation: function doGetLocation() {var _this4 = this;\n      uni.getLocation(\n      {\n        type: 'gcj02',\n        altitude: true,\n        geocode: true,\n        success: function success(res) {\n          _this4.hasLocation = true;\n          _this4.location = res;\n          __f__(\"log\", res, \" at pages/index/item/chooseLocation.nvue:191\");\n          _this4.getAddressText({ latitude: res.latitude, longitude: res.longitude });\n          var marker = {\n            latitude: res.latitude,\n            longitude: res.longitude,\n            iconPath: '../../../static/image/appmaps.png' };\n\n          var markers = [];\n          markers.push(marker);\n          _this4.markers = markers;\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at pages/index/item/chooseLocation.nvue:203\");\n        } });\n\n\n    },\n    checkPermission: function checkPermission() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var status;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n                  _permission.default.requestAndroid('android.permission.ACCESS_FINE_LOCATION'));case 2:status = _context3.sent;\n                if (status === null || status === 1) {\n                  status = 1;\n                } else if (status === 2) {\n                  uni.showModal({\n                    content: \"系统定位已关闭\",\n                    confirmText: \"确定\",\n                    showCancel: false,\n                    success: function success(res) {\n                    } });\n\n                } else if (status.code) {\n                  uni.showModal({\n                    content: status.message });\n\n                } else {\n                  uni.showModal({\n                    title: \"尊敬的用户\",\n                    content: \"使用本APP需要定位权限，才能正常使用！\",\n                    confirmText: \"去设置\",\n                    success: function success(res) {\n                      if (res.confirm) {\n                        _permission.default.gotoAppSetting();\n                      } else {\n                        plus.runtime.quit();\n                      }\n                    } });\n\n                }return _context3.abrupt(\"return\",\n                status);case 5:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n    //请求封装\n    Request: function Request(options) {\n      var baseUrl = uni.getStorageSync('baseUrl') ? uni.getStorageSync('baseUrl') : '152.136.28.147:9007';\n      var api = \"http://\".concat(baseUrl, \"/VXMail/PublicUrl.ashx\");\n      var promise = new Promise(function (resolve, reject) {\n        uni.showLoading({\n          title: '加载中' });\n\n        __f__(\"log\", '加载中', \" at pages/index/item/chooseLocation.nvue:248\");\n        uni.request({\n          url: api, //+options.url\n          method: options.method || \"GET\",\n          data: options.data || {},\n          dataType: options.dataType || \"json\",\n          header: options.header || {},\n          success: function success(res) {\n            uni.hideLoading();\n            __f__(\"log\", '接口返回' + res, \" at pages/index/item/chooseLocation.nvue:257\");\n            if (res.statusCode == 200) {\n              resolve(res.data);\n            } else {\n              resolve(res.data);\n            }\n          },\n          fail: function fail(res) {\n            uni.hideLoading();\n            // console.log('接口失败'+ res);\n            reject('网络出错');\n          } });\n\n      });\n      return promise;\n    } },\n\n  onLoad: function onLoad(option) {\n    //监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发\n    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight; //标题栏顶部距离\n    this.doCheckPermission(); //检查定位权限\n    mapContext = uni.createMapContext('map', this);\n    this.kehuinfo = JSON.parse(option.kehuinfo);\n    this.userid = uni.getStorageSync('userid');\n  },\n  onShow: function onShow() {\n    //监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 \n  },\n  onReady: function onReady() {\n    var that = this;\n    var mapStyle = this.mapStyle;\n    uni.getSystemInfo({\n      success: function success(res) {// res - 各种参数\n        var winWidth = res.screenWidth;\n        var winHeight = res.windowHeight;\n        dom.getComponentRect(that.$refs.mapTop, function (option) {\n          var topHeight = option.size.height; // 地图距顶部\n          dom.getComponentRect(that.$refs.mapBottom, function (option) {\n            var bottomHeight = option.size.height;\n            var mapheight = winHeight - topHeight - bottomHeight;\n            mapStyle.height = mapheight + 'px';\n            mapStyle.width = winWidth + 'px';\n            mapStyle['margin-top'] = topHeight + 'px';\n            that.mapStyle = mapStyle;\n            that.mapWAH.height = mapheight;\n            that.mapWAH.width = winWidth;\n          });\n        });\n      } });\n\n  },\n  onHide: function onHide() {\n    //监听页面隐藏\n  },\n  onUnload: function onUnload() {\n    //监听页面卸载\n  },\n  onPullDownRefresh: function onPullDownRefresh() {\n    //监听用户下拉动作，一般用于下拉刷新\n  },\n  onReachBottom: function onReachBottom() {\n\n  } //页面上拉触底事件的处理函数，一般用于上滑加载\n  /*\r\n  \t\tonResize\t监听窗口尺寸变化\t\r\n  \t\tonTabItemTap\t点击 tab 时触发，参数为Object\r\n  \t\tonShareAppMessage\t用户点击右上角分享\t\r\n  \t\tonPageScroll\t监听页面滚动，参数为Object\t\t\r\n  \t\tonNavigationBarButtonTap\t监听原生标题栏按钮点击事件，参数为Object\r\n  \t\tonBackPress\t监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack \r\n  \t\tonNavigationBarSearchInputChanged\t监听原生标题栏搜索输入框输入内容变化事件\r\n  \t\tonNavigationBarSearchInputConfirmed\t监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。\r\n  \t\tonNavigationBarSearchInputClicked\t监听原生标题栏搜索输入框点击事件\r\n  \t\t*/ };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 32)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaXRlbS9jaG9vc2VMb2NhdGlvbi5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7O0FBRUEsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEEsb0NBRUEsc0IsQ0FDQTtlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsWUFEQSxFQUNBO0FBQ0Esa0JBRkEsRUFFQTtBQUNBLHlCQUhBLEVBSUEsaURBSkEsRUFLQSwrQkFMQSxFQU1BLFdBTkEsRUFPQSxZQVBBLEVBUUEsWUFSQSxFQVNBLDRCQVRBLEVBVUEsZUFWQSxFQVdBLGdCQVhBLEVBWUEsZUFaQSxFQWFBLG1CQWJBLEVBY0E7QUFDQSx1QkFmQSxFQWdCQSxrQkFoQkEsR0FrQkEsQ0FwQkEsRUFxQkEsV0FDQTtBQUNBLFFBRkEsa0JBRUEsQ0FDQSxxQkFFQSxDQUxBLEVBTUE7QUFDQSxpU0FHQSxlQUNBLFFBQ0Esb0JBREEsRUFFQSxZQUZBLEVBR0EsbUJBSEEsRUFJQSx3QkFKQSxFQUtBLDBCQUxBLEVBTUEseUJBTkEsRUFEQSxJQVNBLElBVEEsQ0FTQSxnQkFDQSwyQkFDQSxxRUFDQSw4QkFIQSxDQUdBO0FBQ0Esd0RBSkEsQ0FJQTtBQUNBLHlEQUxBLENBS0E7QUFDQSxvRUFOQSxDQU1BO0FBQ0EscUVBUEEsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlCQXJCQSxDQUhBLFFBeUJBLGlCQXpCQSxDQXlCQTtBQUNBO0FBQUEsbUJBMUJBLDJKQVBBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQWhEQSx5QkFnREEsQ0FoREEsRUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0FyREE7QUFzREEsWUF0REEsb0JBc0RBLEtBdERBLEVBc0RBLElBdERBLEVBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQURBO0FBRUEsNkNBRkE7O0FBSUE7QUFDQTtBQUNBLEtBdEVBO0FBdUVBO0FBQ0EsZ0JBeEVBLHdCQXdFQSxDQXhFQSxFQXdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FQQTtBQVFBO0FBQ0E7QUFDQSxXQVZBO0FBV0E7QUFDQTtBQUNBLFdBYkE7O0FBZUE7QUFDQSxLQTVGQTtBQTZGQSxrQkE3RkEsMEJBNkZBLEtBN0ZBLEVBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FuR0E7QUFvR0EscUJBcEdBLCtCQW9HQTtBQUNBLHFEQURBO0FBRUEsMENBRkEsU0FFQSxNQUZBO0FBR0EsNEJBSEE7QUFJQTtBQUNBLGtDQURBLElBSkE7Ozs7QUFTQSx1Q0FUQTtBQVVBLEtBOUdBO0FBK0dBLGlCQS9HQSwyQkErR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxvQ0FGQTtBQUdBLHlEQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLFNBakJBO0FBa0JBO0FBQ0E7QUFDQSxTQXBCQSxFQURBOzs7QUF3QkEsS0F4SUE7QUF5SUEsbUJBeklBLDZCQXlJQTtBQUNBLCtGQURBLFNBQ0EsTUFEQTtBQUVBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHFDQUZBO0FBR0EscUNBSEE7QUFJQTtBQUNBLHFCQUxBOztBQU9BLGlCQVJBLE1BUUE7QUFDQTtBQUNBLDJDQURBOztBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBLGtDQURBO0FBRUEsbURBRkE7QUFHQSxzQ0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLHVCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EscUJBVkE7O0FBWUEsaUJBN0JBO0FBOEJBLHNCQTlCQTtBQStCQSxLQXhLQTtBQXlLQTtBQUNBLFdBMUtBLG1CQTBLQSxPQTFLQSxFQTBLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7O0FBR0E7QUFDQTtBQUNBLGtCQURBLEVBQ0E7QUFDQSx5Q0FGQTtBQUdBLGtDQUhBO0FBSUEsOENBSkE7QUFLQSxzQ0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsV0FkQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FuQkE7O0FBcUJBLE9BMUJBO0FBMkJBO0FBQ0EsS0F6TUEsRUFyQkE7O0FBZ09BLFFBaE9BLGtCQWdPQSxNQWhPQSxFQWdPQTtBQUNBO0FBQ0Esb0VBRkEsQ0FFQTtBQUNBLDZCQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZPQTtBQXdPQSxRQXhPQSxvQkF3T0E7QUFDQTtBQUNBLEdBMU9BO0FBMk9BLFNBM09BLHFCQTJPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBVEE7QUFVQSxTQVpBO0FBYUEsT0FqQkE7O0FBbUJBLEdBalFBO0FBa1FBLFFBbFFBLG9CQWtRQTtBQUNBO0FBQ0EsR0FwUUE7QUFxUUEsVUFyUUEsc0JBcVFBO0FBQ0E7QUFDQSxHQXZRQTtBQXdRQSxtQkF4UUEsK0JBd1FBO0FBQ0E7QUFDQSxHQTFRQTtBQTJRQSxlQTNRQSwyQkEyUUE7O0FBRUEsR0E3UUEsQ0E0UUE7QUFFQTs7Ozs7Ozs7OztNQTlRQSxFIiwiZmlsZSI6IjU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHQ8IS0tIOagh+mimOagjyAtLT5cblx0XHQ8dmlldyBjbGFzcz1cInRvb2wtYmFyLWZpeGVkXCIgcmVmPVwibWFwVG9wXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF92aWV3XCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2VhcmNoX2ljb25cIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaW1hZ2UvYmFjay5wbmdcIiBAY2xpY2s9XCJiYWNrXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9pbnB1dFwiPlxyXG5cdFx0XHRcdFx05Zyw5Z2A57qg5q2jXHJcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIDxpbnB1dCBjbGFzcz1cIlwiIHBsYWNlaG9sZGVyLWNsYXNzPVwic2VhcmNoX2lucHV0cFwiIHBsYWNlaG9sZGVyPVwi5pCc57Si5oKo6KaB5L+u6L2m55qE5L2N572uKOWPr+aLluWKqOWcsOWbvui/m+ihjOiwg+aVtClcIiA6Zm9jdXM9XCJzaG93TGlzdFZpZXdcIiBAaW5wdXQ9XCJzZWFyY2hBZGRyZXNzXCIgLz4gLS0+XHJcblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSDmoIfpopjmoI8gLS0+XG5cdFx0PG1hcCBpZD1cIm1hcFwiIHJlZj1cIm1hcFwiIEByZWdpb25jaGFuZ2U9XCJyZWdpb25jaGFuZ2VcIiA6bWFya2Vycz1cIm1hcmtlcnNcIiA6Y29udHJvbHM9XCJjb250cm9sc1wiIDpsb25naXR1ZGU9XCJsb2NhdGlvbi5sb25naXR1ZGVcIiA6bGF0aXR1ZGU9XCJsb2NhdGlvbi5sYXRpdHVkZVwiICA6c3R5bGU9XCJtYXBTdHlsZVwiPlx0XHRcblx0XHQ8IS0tIOWcsOWbvuS4reW/g+eCueagh+iusCAtLT5cblx0XHQ8aW1hZ2UgY2xhc3M9XCJjb3Zlcl9tYXJrZXJcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaW1hZ2UvY2hvb3NlbG9jYXRpb24ucG5nXCIgOnN0eWxlPVwieydsZWZ0JzptYXBXQUgud2lkdGgvMi0xMCsncHgnLCd0b3AnOm1hcFdBSC5oZWlnaHQvMi0zMCsncHgnfVwiPjwvaW1hZ2U+XG5cdFx0PCEtLSDlrprkvY3mjqfku7YgLS0+XG5cdFx0PGltYWdlIGNsYXNzPVwiZG9fZ2V0X2xvY2F0aW9uXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ltYWdlL2NvcnJlY3QucG5nXCIgQGNsaWNrPVwiZG9DaGVja1Blcm1pc3Npb25cIj48L2ltYWdlPlxuXHRcdDwvbWFwPlxuXHRcdFxuXHRcdDwhLS0g5bqV6YOo5LiL5Y2VIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwibWFpbl9ib3R0b21cIiByZWY9XCJtYXBCb3R0b21cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJvbGRfYWRkcmVzc1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYWRkX3RleHRcIj7ljp/lnLDlnYA6e3trZWh1aW5mby5jX2dzX2FkZHJlc3N8fCAn5pegJ319PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNob29zZV9hZGRyZXNzXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYWRkX3RleHRcIj7lvZPliY3lnLDlnYA6e3thZGRyZXNzVGV4dH19PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktYnRuLXZcIiBAY2xpY2s9XCJlbWl0Y29ycmVjdFwiPumAieaLqei/memHjDwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSDlupXpg6jkuIvljZUgLS0+XHJcblx0XHRcclxuXHRcdDwhLS0g5pCc57Si5Ye65p2l55qE5Zyw5Z2AIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dMaXN0Vmlld1wiIGNsYXNzPVwic2VhcmNoX2xpc3Rfdmlld1wiPlxyXG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBhZGRyZXNzTGlzdFwiIDprZXk9XCJpdGVtLmlkXCIgY2xhc3M9XCJhZGRyZXNfaXRlbVwiIEBjbGljaz1cImNob29zZUlzKGluZGV4LGl0ZW0pXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0X25hbWVcIj57e2l0ZW0ubmFtZX19PC90ZXh0Pjxici8+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0X2FkZHJlc3NcIj57e2l0ZW0uZGlzdHJpY3QraXRlbS5hZGRyZXNzfX08L3RleHQ+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY2hvb3NlX2ljb25cIiB2LWlmPVwiYWRkcmVzc0luZGV4PT09aW5kZXhcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaW1hZ2UvY29ycmVjdC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaQnOe0ouWHuuadpeeahOWcsOWdgCAtLT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJykgXG5pbXBvcnQgcGVybWlzaW9uIGZyb20gXCJAL2NvbW1vbi9wZXJtaXNzaW9uLmpzXCJcbnZhciBtYXBDb250ZXh0PW51bGw7XHJcbmltcG9ydCB7IGlucHV0dGlwcyB9IGZyb20gJ0AvYXBpL2FwaS5qcycvL+i+k+WFpeaPkOekuuWKn+iDvVxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XHJcblx0XHRcdGtlaHVpbmZvOnt9LC8v5a6i5oi35L+h5oGvLOS7juS4iue6p+mhtemdouS8oOi/m+adpVxyXG5cdFx0XHR1c2VyaWQ6bnVsbCwvL+eUqOaIt2lkKOS7jue8k+WtmOS4reWPlilcblx0XHRcdGlTdGF0dXNCYXJIZWlnaHQ6MCxcblx0XHRcdG1hcFN0eWxlOnsnd2lkdGgnOiczOTNweCcsJ2hlaWdodCc6JzUzMHB4J30sXG5cdFx0XHRtYXBXQUg6e3dpZHRoOjAsaGVpZ2h0OjB9LFxuXHRcdFx0bWFya2VyczpbXSxcblx0XHRcdGNvbnRyb2xzOltdLFxuXHRcdFx0bG9jYXRpb246e30sXG5cdFx0XHRhZGRyZXNzVGV4dDpcIuaaguacquWumuS9jeaIkOWKn++8jOivt+eojeWAmcK3wrfCt1wiLFxuXHRcdFx0YWRkcmVzc0xpc3Q6W10sXHJcblx0XHRcdGFkZHJlc3NJbmRleDonJyxcclxuXHRcdFx0YWRkcmVzc0l0ZW06e30sXHJcblx0XHRcdHNob3dMaXN0VmlldzpmYWxzZSxcclxuXHRcdFx0Ly/lrZjlgqjpgInmi6nnmoTlnLDlnYBcclxuXHRcdFx0Y2hvb3NlbGF0aXR1ZGU6MCxcclxuXHRcdFx0Y2hvb3NlbG9uZ2l0dWRlOjBcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XHJcblx0XHQvL+i/lOWbnuS4iuS4gOmhteaWueazlVxyXG5cdFx0YmFjaygpe1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcdFx0ICAgXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly/ngrnlh7vnoa7lrprot7Plh7rpobXpnaLlubblj5HpgIHlnZDmoIfmlrnms5VcclxuXHRcdGVtaXRjb3JyZWN0OmFzeW5jICBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdGF3YWl0IHRoaXMuUmVxdWVzdCh7XHJcblx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRwcm9jOidBUFBfWVdZX1BPUlQnLFxyXG5cdFx0XHRcdFx0dHlwZTon57qg5q2j5Z2Q5qCHJyxcclxuXHRcdFx0XHRcdHVzZXJpZDp0aGlzLnVzZXJpZCxcclxuXHRcdFx0XHRcdGNfaWQ6dGhpcy5rZWh1aW5mby5jX2lkLFxyXG5cdFx0XHRcdFx0Y19qZDp0aGlzLmNob29zZWxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdGNfd2Q6dGhpcy5jaG9vc2VsYXRpdHVkZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc2RhdGEgPSByZXMuTXNnX2luZm9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNkYXRhKTtcclxuXHRcdFx0XHRsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTsgICAgICAgICAgICAgLy/ojrflj5bmiYDmnInpobXpnaLmoIjlrp7kvovliJfooahcclxuXHRcdFx0XHRsZXQgbm93UGFnZSA9IHBhZ2VzWyBwYWdlcy5sZW5ndGggLSAxXTsgICAgLy/lvZPliY3pobXpobXpnaLlrp7kvotcclxuXHRcdFx0XHRsZXQgcHJldlBhZ2UgPSBwYWdlc1sgcGFnZXMubGVuZ3RoIC0gMiBdOyAgLy/kuIrkuIDpobXpobXpnaLlrp7kvotcclxuXHRcdFx0XHRwcmV2UGFnZS4kdm0ua2VodWluZm8uY193ZCA9IHRoaXMuY2hvb3NlbGF0aXR1ZGU7ICAgICAgICAgLy/kv67mlLnkuIrkuIDpobXpnaLnmoQgY291cG9uTnVtYmVyIOWPguaVsOWAvOS4uiB2YWx1ZVxyXG5cdFx0XHRcdHByZXZQYWdlLiR2bS5rZWh1aW5mby5jX2pkPSB0aGlzLmNob29zZWxvbmdpdHVkZTsgICAgICAgICAgICAgICAgICAvL+S/ruaUueS4iuS4gOmhtemdoueahCBjb3VpZCDlj4LmlbDlgLzkuLogdmlkXHJcblx0XHRcdFx0Ly8gcHJldlBhZ2UuJHZtLm1hcmtlcnNbMF0ubG9uZ2l0dWRlID0gdGhpcy5jaG9vc2Vsb25naXR1ZGVcclxuXHRcdFx0XHQvLyBwcmV2UGFnZS4kdm0ubWFya2Vyc1swXS5sYXRpdHVkZSA9IHRoaXMuY2hvb3NlbGF0aXR1ZGVcclxuXHRcdFx0XHQvLyBwcmV2UGFnZS4kdm0ubWFwa2V5ICs9IDFcclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHRcdFx0dW5pLiRlbWl0KCdhZGQnKS8v55uu5YmN5LuF5ZCRc2VlY2xpZW506aG16Z2i5Y+R6YCB5Zyw5Z2AKGFkZCnlj5jmm7Tkuovku7bvvIzop6blj5Hor6XpobXpnaLmm7TmlrDlnLDlm75cclxuXHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vdW5pLm5hdmlnYXRlVG/ot7PovaznmoTov5Tlm57vvIzpu5jorqQx5Li66L+U5Zue5LiK5LiA57qnXHJcblx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGVtaXRjb3JyZWN0KCkge1xyXG5cdFx0Ly8gXHQvLyBjb25zdCBjaG9vc2Vsb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hvb3NlbG9jYXRpb24pXHJcblx0XHQvLyBcdGNvbnN0IGNob29zZWxhdGl0dWRlID0gdGhpcy5jaG9vc2VsYXRpdHVkZVxyXG5cdFx0Ly8gXHRjb25zdCBjaG9vc2Vsb25naXR1ZGUgPSB0aGlzLmNob29zZWxvbmdpdHVkZVxyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhjaG9vc2Vsb2NhdGlvbik7XHJcblx0XHQvLyBcdC8vIHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdC8vIFx0Ly8gXHR1cmw6J3Rhc2tkZXRhaWw/Y2hvb3NlbGF0aXR1ZGU9JytjaG9vc2VsYXRpdHVkZSsnJmNob29zZWxvbmdpdHVkZT0nK2Nob29zZWxvbmdpdHVkZVxyXG5cdFx0Ly8gXHQvLyB9KVxyXG5cdFx0Ly8gfSxcblx0XHRzZWFyY2hBZGRyZXNzKGUpe1xyXG5cdFx0XHRpbnB1dHRpcHMoe2xvY2F0aW9uOnRoaXMubG9jYXRpb24ubG9uZ2l0dWRlKycsJyt0aGlzLmxvY2F0aW9uLmxhdGl0dWRlLGtleXdvcmRzOmUuZGV0YWlsLnZhbHVlfSkudGhlbihyZXM9PntcclxuXHRcdFx0XHR0aGlzLmFkZHJlc3NMaXN0PXJlcy5kYXRhLnRpcHNcclxuXHRcdFx0XHR0aGlzLnNob3dMaXN0Vmlldz10cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9LFxuXHRcdGNob29zZUlzKGluZGV4LGl0ZW0pe1xyXG5cdFx0XHR0aGlzLmFkZHJlc3NJbmRleD1pbmRleFxyXG5cdFx0XHR0aGlzLmFkZHJlc3NJdGVtPWl0ZW1cclxuXHRcdFx0dmFyIHRoYXQ9dGhpc1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOifor7fnqI3lgJnCt8K3wrcnXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoYXQuYWRkcmVzc0luZGV4PScnXHJcblx0XHRcdHRoYXQuc2hvd0xpc3RWaWV3PWZhbHNlXHJcblx0XHRcdC8vIOmAieaLqeWujOaIkOS5i+WQjuenu+WKqOWcsOWbvuWIsOaMh+WumuS9jee9rlxyXG5cdFx0XHR0aGlzLmxvY2F0aW9uPXtcclxuXHRcdFx0XHRsb25naXR1ZGU6aXRlbS5sb2NhdGlvbi5zcGxpdCgnLCcpWzBdLFxyXG5cdFx0XHRcdGxhdGl0dWRlOml0ZW0ubG9jYXRpb24uc3BsaXQoJywnKVsxXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0dGhhdC5hZGRyZXNzSW5kZXg9JydcclxuXHRcdFx0dGhhdC5zaG93TGlzdFZpZXc9ZmFsc2VcclxuXHRcdH0sXHJcblx0XHQvL+enu+WKqOWcsOWbvuiOt+WPluS4reW/g+eCueWdkOagh1xuXHRcdHJlZ2lvbmNoYW5nZShlKXtcblx0XHRcdGNvbnNvbGUubG9nKGUudHlwZSlcblx0XHRcdHZhciB0aGF0PXRoaXNcblx0XHRcdGlmKGUudHlwZT09XCJlbmRcIil7XG5cdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oeyBcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT57IFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmNob29zZWxhdGl0dWRlID0gcmVzLmxhdGl0dWRlXHJcblx0XHRcdFx0XHRcdHRoYXQuY2hvb3NlbG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LmNob29zZWxvY2F0aW9uKTtcblx0XHRcdFx0XHRcdHRoYXQuZ2V0QWRkcmVzc1RleHQocmVzKVxuXHRcdFx0XHRcdH0sIFxuXHRcdFx0XHRcdGZhaWw6IGVyciA9PiB7IFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTsgXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjb21wbGV0ZTpyZXM9Pntcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdGdldEFkZHJlc3NUZXh0KHBvaW50KXtcblx0XHRcdHZhciB0aGF0PXRoaXNcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdHBsdXMubWFwcy5NYXAucmV2ZXJzZUdlb2NvZGUocG9pbnQse30sZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHR0aGF0LmFkZHJlc3NUZXh0PWV2ZW50LmFkZHJlc3Ncblx0XHRcdH0pXG5cdFx0fSxcblx0XHRhc3luYyBkb0NoZWNrUGVybWlzc2lvbigpIHtcclxuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHt0aXRsZTpcIuWumuS9jeS4rcK3wrfCt1wifSlcblx0XHQgICAgbGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuY2hlY2tQZXJtaXNzaW9uKCk7XG5cdFx0ICAgIGlmIChzdGF0dXMgIT09IDEpIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6IFwi6K6/6Zeu5L2N572u6KKr5ouS57udXCJcblx0XHRcdFx0fSlcblx0XHQgICAgICAgIHJldHVybjtcblx0XHQgICAgfVxuXHRcdCAgICB0aGlzLmRvR2V0TG9jYXRpb24oKTtcblx0XHR9LCBcblx0XHRkb0dldExvY2F0aW9uKCkge1xuXHRcdFx0dW5pLmdldExvY2F0aW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTonZ2NqMDInLFxuXHRcdFx0XHRcdGFsdGl0dWRlOnRydWUsXG5cdFx0XHRcdFx0Z2VvY29kZTp0cnVlLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGFzTG9jYXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5sb2NhdGlvbiA9IHJlcztcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0XHRcdHRoaXMuZ2V0QWRkcmVzc1RleHQoe2xhdGl0dWRlOnJlcy5sYXRpdHVkZSxsb25naXR1ZGU6cmVzLmxvbmdpdHVkZX0pXG5cdFx0XHRcdFx0XHR2YXIgbWFya2VyPXtcblx0XHRcdFx0XHRcdFx0bGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSxcblx0XHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlLFxuXHRcdFx0XHRcdFx0XHRpY29uUGF0aDogJy4uLy4uLy4uL3N0YXRpYy9pbWFnZS9hcHBtYXBzLnBuZydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBtYXJrZXJzPVtdXG5cdFx0XHRcdFx0XHRtYXJrZXJzLnB1c2gobWFya2VyKVxuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJzPW1hcmtlcnNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0YXN5bmMgY2hlY2tQZXJtaXNzaW9uKCkge1xuXHRcdFx0bGV0IHN0YXR1cyA9IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCgnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19GSU5FX0xPQ0FUSU9OJyk7XG5cdFx0XHRpZiAoc3RhdHVzID09PSBudWxsIHx8IHN0YXR1cyA9PT0gMSkge1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0fSBlbHNlIGlmIChzdGF0dXMgPT09IDIpIHtcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0Y29udGVudDogXCLns7vnu5/lrprkvY3lt7LlhbPpl61cIixcblx0XHRcdFx0XHRjb25maXJtVGV4dDogXCLnoa7lrppcIixcblx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXR1cy5jb2RlKSB7XG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6IHN0YXR1cy5tZXNzYWdlXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHR0aXRsZTpcIuWwiuaVrOeahOeUqOaIt1wiLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi5L2/55So5pysQVBQ6ZyA6KaB5a6a5L2N5p2D6ZmQ77yM5omN6IO95q2j5bi45L2/55So77yBXCIsXG5cdFx0XHRcdFx0Y29uZmlybVRleHQ6IFwi5Y676K6+572uXCIsXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0cGVybWlzaW9uLmdvdG9BcHBTZXR0aW5nKCk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLnF1aXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RhdHVzO1xuXHRcdH0sXHJcblx0XHQvL+ivt+axguWwgeijhVxyXG5cdFx0UmVxdWVzdChvcHRpb25zKXtcclxuXHRcdFx0Y29uc3QgYmFzZVVybCA9IHVuaS5nZXRTdG9yYWdlU3luYygnYmFzZVVybCcpID8gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYXNlVXJsJykgOiAnMTUyLjEzNi4yOC4xNDc6OTAwNyc7XHJcblx0XHRcdGNvbnN0IGFwaSA9IGBodHRwOi8vJHtiYXNlVXJsfS9WWE1haWwvUHVibGljVXJsLmFzaHhgIFxyXG5cdFx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTon5Yqg6L295LitJyxcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WKoOi9veS4rScpO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDphcGksLy8rb3B0aW9ucy51cmxcclxuXHRcdFx0XHRcdG1ldGhvZDpvcHRpb25zLm1ldGhvZCB8fFwiR0VUXCIsXHJcblx0XHRcdFx0XHRkYXRhOm9wdGlvbnMuZGF0YSB8fCB7fSxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOm9wdGlvbnMuZGF0YVR5cGUgfHwgXCJqc29uXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6b3B0aW9ucy5oZWFkZXIgfHwge30sXHJcblx0XHRcdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmjqXlj6Pov5Tlm54nKyByZXMpO1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuc3RhdHVzQ29kZSA9PSAyMDApe1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfmjqXlj6PlpLHotKUnKyByZXMpO1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoJ+e9kee7nOWHuumUmScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHR9LFxuXHR9LFxuXHRvbkxvYWQob3B0aW9uKSB7XG5cdFx0Ly/nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJDjgILms6jmhI/lpoLmnpzmuLLmn5PpgJ/luqblv6vvvIzkvJrlnKjpobXpnaLov5vlhaXliqjnlLvlrozmiJDliY3op6blj5Fcblx0XHR0aGlzLmlTdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQvL+agh+mimOagj+mhtumDqOi3neemu1xuXHRcdHRoaXMuZG9DaGVja1Blcm1pc3Npb24oKS8v5qOA5p+l5a6a5L2N5p2D6ZmQXG5cdFx0bWFwQ29udGV4dD11bmkuY3JlYXRlTWFwQ29udGV4dCgnbWFwJywgdGhpcylcclxuXHRcdHRoaXMua2VodWluZm8gPSBKU09OLnBhcnNlKG9wdGlvbi5rZWh1aW5mbylcclxuXHRcdHRoaXMudXNlcmlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyaWQnKVxuXHR9LFxuXHRvblNob3coKSB7XG5cdFx0Ly/nm5HlkKzpobXpnaLmmL7npLrjgILpobXpnaLmr4/mrKHlh7rnjrDlnKjlsY/luZXkuIrpg73op6blj5HvvIzljIXmi6zku47kuIvnuqfpobXpnaLngrnov5Tlm57pnLLlh7rlvZPliY3pobXpnaIgXG5cdH0sIFxuXHRvblJlYWR5KCkge1xuXHRcdHZhciB0aGF0PXRoaXNcblx0XHR2YXIgbWFwU3R5bGU9dGhpcy5tYXBTdHlsZVxuXHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcblx0XHTjgIDjgIBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHsgLy8gcmVzIC0g5ZCE56eN5Y+C5pWwXG5cdFx0XHRcdHZhciB3aW5XaWR0aD1yZXMuc2NyZWVuV2lkdGhcblx0XHRcdFx0dmFyIHdpbkhlaWdodD1yZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdFx0ZG9tLmdldENvbXBvbmVudFJlY3QodGhhdC4kcmVmcy5tYXBUb3AsIG9wdGlvbiA9PiB7XG5cdFx0XHRcdFx0dmFyIHRvcEhlaWdodD1vcHRpb24uc2l6ZS5oZWlnaHQvLyDlnLDlm77ot53pobbpg6hcblx0XHRcdFx0XHRkb20uZ2V0Q29tcG9uZW50UmVjdCh0aGF0LiRyZWZzLm1hcEJvdHRvbSwgb3B0aW9uID0+IHtcblx0XHRcdFx0XHRcdHZhciBib3R0b21IZWlnaHQ9b3B0aW9uLnNpemUuaGVpZ2h0XG5cdFx0XHRcdFx0XHR2YXIgbWFwaGVpZ2h0PSh3aW5IZWlnaHQtdG9wSGVpZ2h0LWJvdHRvbUhlaWdodClcblx0XHRcdFx0XHRcdG1hcFN0eWxlLmhlaWdodD1tYXBoZWlnaHQrJ3B4J1xuXHRcdFx0XHRcdFx0bWFwU3R5bGUud2lkdGg9d2luV2lkdGgrJ3B4J1xuXHRcdFx0XHRcdFx0bWFwU3R5bGVbJ21hcmdpbi10b3AnXT10b3BIZWlnaHQrJ3B4J1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1hcFN0eWxlPW1hcFN0eWxlXG5cdFx0XHRcdFx0XHR0aGF0Lm1hcFdBSC5oZWlnaHQ9bWFwaGVpZ2h0XG5cdFx0XHRcdFx0XHR0aGF0Lm1hcFdBSC53aWR0aD13aW5XaWR0aFxuXHRcdFx0XHRcdH0pICBcblx0XHRcdFx0fSkgIFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRvbkhpZGUoKSB7XG5cdFx0Ly/nm5HlkKzpobXpnaLpmpDol49cblx0fSxcblx0b25VbmxvYWQoKSB7XG5cdFx0Ly/nm5HlkKzpobXpnaLljbjovb1cblx0fSxcblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cdFx0Ly/nm5HlkKznlKjmiLfkuIvmi4nliqjkvZzvvIzkuIDoiKznlKjkuo7kuIvmi4nliLfmlrBcblx0fSxcblx0b25SZWFjaEJvdHRvbSgpIHtcblx0XHQvL+mhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsO+8jOS4gOiIrOeUqOS6juS4iua7keWKoOi9vVxuXHR9XG5cdC8qXG5cdFx0XHRvblJlc2l6ZVx055uR5ZCs56qX5Y+j5bC65a+45Y+Y5YyWXHRcblx0XHRcdG9uVGFiSXRlbVRhcFx054K55Ye7IHRhYiDml7bop6blj5HvvIzlj4LmlbDkuLpPYmplY3Rcblx0XHRcdG9uU2hhcmVBcHBNZXNzYWdlXHTnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcdFxuXHRcdFx0b25QYWdlU2Nyb2xsXHTnm5HlkKzpobXpnaLmu5rliqjvvIzlj4LmlbDkuLpPYmplY3RcdFx0XG5cdFx0XHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBcdOebkeWQrOWOn+eUn+agh+mimOagj+aMiemSrueCueWHu+S6i+S7tu+8jOWPguaVsOS4uk9iamVjdFxuXHRcdFx0b25CYWNrUHJlc3NcdOebkeWQrOmhtemdoui/lOWbnu+8jOi/lOWbniBldmVudCA9IHtmcm9tOmJhY2tidXR0b27jgIEgbmF2aWdhdGVCYWNrfSDvvIxiYWNrYnV0dG9uIOihqOekuuadpea6kOaYr+W3puS4iuinkui/lOWbnuaMiemSruaIliBhbmRyb2lkIOi/lOWbnumUru+8m25hdmlnYXRlQmFja+ihqOekuuadpea6kOaYryB1bmkubmF2aWdhdGVCYWNrIFxuXHRcdFx0b25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkXHTnm5HlkKzljp/nlJ/moIfpopjmoI/mkJzntKLovpPlhaXmoYbovpPlhaXlhoXlrrnlj5jljJbkuovku7Zcblx0XHRcdG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkXHTnm5HlkKzljp/nlJ/moIfpopjmoI/mkJzntKLovpPlhaXmoYbmkJzntKLkuovku7bvvIznlKjmiLfngrnlh7vova/plK7nm5jkuIrnmoTigJzmkJzntKLigJ3mjInpkq7ml7bop6blj5HjgIJcblx0XHRcdG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZFx055uR5ZCs5Y6f55Sf5qCH6aKY5qCP5pCc57Si6L6T5YWl5qGG54K55Ye75LqL5Lu2XG5cdFx0XHQqL1xufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4vKiDmoIfpopggKi9cbi50b29sLWJhci1maXhlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDA7bGVmdDogMDtyaWdodDogMDtwYWRkaW5nOiAzcHggMDt9XG4uc2VhcmNoX3ZpZXcge2ZsZXgtZGlyZWN0aW9uOnJvdztiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO2JvcmRlci1yYWRpdXM6IDEwdXB4O31cclxuLnNlYXJjaF9pbnB1dHtoZWlnaHQ6IDgwdXB4O2xpbmUtaGVpZ2h0OiA4MHVweDtmbGV4OiAxOyBmb250LXNpemU6IDMydXB4O21hcmdpbi1sZWZ0OiAtOTBweDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4vKiAuc2VhcmNoX2lucHV0cHtoZWlnaHQ6IDgwdXB4O2xpbmUtaGVpZ2h0OiA4MHVweDtmbGV4OiAxO2ZvbnQtc2l6ZTogMTR3eDt9ICovXHJcbi5zZWFyY2hfaWNvbnt3aWR0aDogNTB1cHg7aGVpZ2h0OiA1MHVweDttYXJnaW46IDE1dXB4O31cclxuLyog5pCc57Si5YiX6KGoICovXHJcbi5zZWFyY2hfbGlzdF92aWV3e3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDExNXVweDtib3R0b206IDB1cHg7bGVmdDogMHVweDtyaWdodDogMHVweDsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtwYWRkaW5nLXRvcDogMzV1cHg7fVxyXG4uYWRkcmVzX2l0ZW17Ym9yZGVyLWNvbG9yOiAjMDBhYTAwO2JvcmRlci1ib3R0b20td2lkdGg6IDF1cHg7cGFkZGluZzogMTB1cHggNDB1cHg7fVxyXG4udGV4dF9uYW1le2ZvbnQtc2l6ZTogMzZ1cHg7bGluZS1oZWlnaHQ6IDUwdXB4O31cclxuLnRleHRfYWRkcmVzc3tmb250LXNpemU6IDMwdXB4O2xpbmUtaGVpZ2h0OiA0MHVweDt9XHJcbi5jaG9vc2VfaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAzMHVweDtyaWdodDogMzB1cHg7IHdpZHRoOiA1MHVweDtoZWlnaHQ6IDUwdXB4O31cclxuLyog5Lit5b+D54K5ICovXG4uY292ZXJfbWFya2Vye3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7fVxuLyog5a6a5L2NICovXG4uZG9fZ2V0X2xvY2F0aW9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogNDBweDtoZWlnaHQ6NDBweDtyaWdodDogMjBweDtib3R0b206IDMwcHg7fVxuLyog5bqV6YOo5LiL5Y2VICovXG4ubWFpbl9ib3R0b217cG9zaXRpb246IGZpeGVkO2JvdHRvbTogMHVweDtsZWZ0OiAwdXB4O3JpZ2h0OiAwdXB4O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7aGVpZ2h0OiAzNTB1cHg7fVxuLm9sZF9hZGRyZXNzeyBtYXJnaW46IDIwdXB4IDQwdXB4IDEwdXB4IDQwdXB4OyBib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjF1cHg7Ym9yZGVyLWNvbG9yOiMwMGFhMDA7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzogMTB1cHg7fVxyXG4uY2hvb3NlX2FkZHJlc3N7IG1hcmdpbjogMjB1cHggNDB1cHggMjB1cHggNDB1cHg7IGJvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXVweDtib3JkZXItY29sb3I6IzAwYWEwMDtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOiAxMHVweDt9XG4uYWRkX3RleHR7Zm9udC1zaXplOiAzMnVweDtsaW5lLWhlaWdodDogNTV1cHg7fVxuLnVuaS1idG4tdntwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogNDB1cHg7cmlnaHQ6IDQwdXB4O2JvdHRvbTogMjB1cHg7YmFja2dyb3VuZC1jb2xvcjogIzAwYWEwMDtib3JkZXItcmFkaXVzOiAxMHVweDtoZWlnaHQ6IDgwdXB4O2xpbmUtaGVpZ2h0OiA4MHVweDtmb250LXNpemU6IDM0dXB4O2NvbG9yOiAjRkZGRkZGO3RleHQtYWxpZ246IGNlbnRlcjt9XG4vKiAucmVwYWlyX3R5cGV7aGVpZ2h0OiA4MHVweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7fVxuLnJlcGFpcl90eXBlX2l0ZW17aGVpZ2h0OiA4MHVweDtsaW5lLWhlaWdodDogODB1cHg7d2lkdGg6IDIwMHVweDtmb250LXNpemU6IDMwdXB4O3RleHQtYWxpZ246IGNlbnRlcjt9XG4uYWN0aXZpdHl7Y29sb3I6ICNGOThGMzQ7fVxuLmNob29zZV9hZGRyZXNze21hcmdpbjogMjB1cHggNDB1cHggMjB1cHggNDB1cHg7aGVpZ2h0OiA4MHVweDsgd2lkdGg6IGNhbGMoMTAwJSAtIDgwdXB4KTsgYm9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxdXB4O2JvcmRlci1jb2xvcjojZmYwMDAwO2JvcmRlci1yYWRpdXM6NXB4O31cbi5hZGRfaWNvbnt3aWR0aDogNDB1cHg7aGVpZ2h0OiA0MHVweDttYXJnaW46IDIwdXB4O2Zsb2F0OiBsZWZ0O31cbi5hZGRfdGV4dHtmb250LXNpemU6IDMydXB4O2xpbmUtaGVpZ2h0OiA4MHVweDtmbG9hdDogbGVmdDt3aWR0aDogY2FsYygxMDAlIC0gODB1cHgpO31cbi51bmktYnRuLXZ7bWFyZ2luOjIwdXB4IDQwdXB4IDIwdXB4IDQwdXB4O2JhY2tncm91bmQtY29sb3I6ICNGOThGMzQ7Ym9yZGVyLXJhZGl1czogMTB1cHg7aGVpZ2h0OiA4MHVweDtsaW5lLWhlaWdodDogODB1cHg7Zm9udC1zaXplOiAzNHVweDtjb2xvcjogI0ZGRkZGRjt0ZXh0LWFsaWduOiBjZW50ZXI7fSovXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 58);

/***/ }),
/* 58 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 59 */
/*!*******************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/common/permission.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/// null = 未请求，1 = 已允许，0 = 拒绝|受限, 2 = 系统未开启\n\nvar isIOS;\n\nfunction album() {\n  var result = 0;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\nfunction camera() {\n  var result = 0;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\nfunction location() {\n  var result = 0;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var enable = cllocationManger.locationServicesEnabled();\n  var status = cllocationManger.authorizationStatus();\n  if (!enable) {\n    result = 2;\n  } else if (status === 0) {\n    result = null;\n  } else if (status === 3 || status === 4) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\nfunction push() {\n  var result = 0;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    if (enabledTypes == 0) {\n      result = 0;\n      __f__(\"log\", \"推送权限没有开启\", \" at common/permission.js:63\");\n    } else {\n      result = 1;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:66\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      result = 3;\n      __f__(\"log\", \"推送权限没有开启!\", \" at common/permission.js:73\");\n    } else {\n      result = 4;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:76\");\n    }\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\nfunction contact() {\n  var result = 0;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus === 0) {\n    result = null;\n  } else if (cnAuthStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\nfunction record() {\n  var result = null;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var status = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + status, \" at common/permission.js:104\");\n  if (status === 1970168948) {\n    result = null;\n  } else if (status === 1735552628) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\nfunction calendar() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"日历权限已经开启\", \" at common/permission.js:122\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at common/permission.js:124\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\nfunction memo() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at common/permission.js:136\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at common/permission.js:138\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n\nfunction requestIOS(permissionID) {\n  return new Promise(function (resolve, reject) {\n    switch (permissionID) {\n      case \"push\":\n        resolve(push());\n        break;\n      case \"location\":\n        resolve(location());\n        break;\n      case \"record\":\n        resolve(record());\n        break;\n      case \"camera\":\n        resolve(camera());\n        break;\n      case \"album\":\n        resolve(album());\n        break;\n      case \"contact\":\n        resolve(contact());\n        break;\n      case \"calendar\":\n        resolve(calendar());\n        break;\n      case \"memo\":\n        resolve(memo());\n        break;\n      default:\n        resolve(0);\n        break;}\n\n  });\n}\n\nfunction requestAndroid(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID],\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at common/permission.js:187\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at common/permission.js:192\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at common/permission.js:197\");\n        result = -1;\n      }\n      resolve(result);\n    },\n    function (error) {\n      __f__(\"log\", 'result error: ' + error.message, \" at common/permission.js:203\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\nfunction gotoAppPermissionSetting() {\n  if (permission.isIOS) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\nvar permission = {\n  get isIOS() {\n    return typeof isIOS === 'boolean' ? isIOS : isIOS = uni.getSystemInfoSync().platform === 'ios';\n  },\n  requestIOS: requestIOS,\n  requestAndroid: requestAndroid,\n  gotoAppSetting: gotoAppPermissionSetting };\n\n\nmodule.exports = permission;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 32)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3Blcm1pc3Npb24uanMiXSwibmFtZXMiOlsiaXNJT1MiLCJhbGJ1bSIsInJlc3VsdCIsIlBIUGhvdG9MaWJyYXJ5IiwicGx1cyIsImlvcyIsImltcG9ydCIsImF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzIiwiZGVsZXRlT2JqZWN0IiwiY2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSIsImxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsImVuYWJsZSIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwic3RhdHVzIiwicHVzaCIsIlVJQXBwbGljYXRpb24iLCJhcHAiLCJzaGFyZWRBcHBsaWNhdGlvbiIsImVuYWJsZWRUeXBlcyIsImN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJzZXR0aW5ncyIsInBsdXNHZXRBdHRyaWJ1dGUiLCJlbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMiLCJjb250YWN0IiwiQ05Db250YWN0U3RvcmUiLCJjbkF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSIsInJlY29yZCIsImF2YXVkaW9zZXNzaW9uIiwiYXZhdWRpbyIsInNoYXJlZEluc3RhbmNlIiwicmVjb3JkUGVybWlzc2lvbiIsImNhbGVuZGFyIiwiRUtFdmVudFN0b3JlIiwiZWtBdXRoU3RhdHVzIiwibWVtbyIsInJlcXVlc3RJT1MiLCJwZXJtaXNzaW9uSUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RBbmRyb2lkIiwiYW5kcm9pZCIsInJlcXVlc3RQZXJtaXNzaW9ucyIsInJlc3VsdE9iaiIsImkiLCJncmFudGVkIiwibGVuZ3RoIiwiZ3JhbnRlZFBlcm1pc3Npb24iLCJkZW5pZWRQcmVzZW50IiwiZGVuaWVkUHJlc2VudFBlcm1pc3Npb24iLCJkZW5pZWRBbHdheXMiLCJkZW5pZWRBbHdheXNQZXJtaXNzaW9uIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZyIsInBlcm1pc3Npb24iLCJhcHBsaWNhdGlvbjIiLCJOU1VSTDIiLCJzZXR0aW5nMiIsIlVSTFdpdGhTdHJpbmciLCJvcGVuVVJMIiwiSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJTZXR0aW5ncyIsIlVyaSIsIm1haW5BY3Rpdml0eSIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJpbnRlbnQiLCJzZXRBY3Rpb24iLCJBQ1RJT05fQVBQTElDQVRJT05fREVUQUlMU19TRVRUSU5HUyIsInVyaSIsImZyb21QYXJ0cyIsImdldFBhY2thZ2VOYW1lIiwic2V0RGF0YSIsInN0YXJ0QWN0aXZpdHkiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwiZ290b0FwcFNldHRpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFDYixNQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlDLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixjQUFjLENBQUNLLG1CQUFmLEVBQWpCO0FBQ0EsTUFBSUQsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ2xCTCxVQUFNLEdBQUcsSUFBVDtBQUNILEdBRkQsTUFFTyxJQUFJSyxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDeEJMLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JOLGNBQXRCO0FBQ0EsU0FBT0QsTUFBUDtBQUNIOztBQUVELFNBQVNRLE1BQVQsR0FBa0I7QUFDZCxNQUFJUixNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlTLGVBQWUsR0FBR1AsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsaUJBQWhCLENBQXRCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSSxlQUFlLENBQUNDLCtCQUFoQixDQUFnRCxNQUFoRCxDQUFqQjtBQUNBLE1BQUlMLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtBQUNsQkwsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSUssVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ3hCTCxVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRk0sTUFFQTtBQUNIQSxVQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCRSxlQUF0QjtBQUNBLFNBQU9ULE1BQVA7QUFDSDs7QUFFRCxTQUFTVyxRQUFULEdBQW9CO0FBQ2hCLE1BQUlYLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSVksZ0JBQWdCLEdBQUdWLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLG1CQUFoQixDQUF2QjtBQUNBLE1BQUlTLE1BQU0sR0FBR0QsZ0JBQWdCLENBQUNFLHVCQUFqQixFQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxnQkFBZ0IsQ0FBQ04sbUJBQWpCLEVBQWI7QUFDQSxNQUFJLENBQUNPLE1BQUwsRUFBYTtBQUNUYixVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRkQsTUFFTyxJQUFJZSxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNyQmYsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZNLE1BRUEsSUFBSWUsTUFBTSxLQUFLLENBQVgsSUFBZ0JBLE1BQU0sS0FBSyxDQUEvQixFQUFrQztBQUNyQ2YsVUFBTSxHQUFHLENBQVQ7QUFDSCxHQUZNLE1BRUE7QUFDSEEsVUFBTSxHQUFHLENBQVQ7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQkssZ0JBQXRCO0FBQ0EsU0FBT1osTUFBUDtBQUNIOztBQUVELFNBQVNnQixJQUFULEdBQWdCO0FBQ1osTUFBSWhCLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSWlCLGFBQWEsR0FBR2YsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxNQUFJYyxHQUFHLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsRUFBVjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csK0JBQVIsRUFBeUM7QUFDckMsUUFBSUMsUUFBUSxHQUFHSixHQUFHLENBQUNHLCtCQUFKLEVBQWY7QUFDQUQsZ0JBQVksR0FBR0UsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFmO0FBQ0EsUUFBSUgsWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ25CcEIsWUFBTSxHQUFHLENBQVQ7QUFDQSxtQkFBWSxVQUFaO0FBQ0gsS0FIRCxNQUdPO0FBQ0hBLFlBQU0sR0FBRyxDQUFUO0FBQ0EsbUJBQVksV0FBWjtBQUNIO0FBQ0RFLFFBQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCZSxRQUF0QjtBQUNILEdBWEQsTUFXTztBQUNIRixnQkFBWSxHQUFHRixHQUFHLENBQUNNLDhCQUFKLEVBQWY7QUFDQSxRQUFJSixZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJwQixZQUFNLEdBQUcsQ0FBVDtBQUNBLG1CQUFZLFdBQVo7QUFDSCxLQUhELE1BR087QUFDSEEsWUFBTSxHQUFHLENBQVQ7QUFDQSxtQkFBWSxXQUFaO0FBQ0g7QUFDSjtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQlcsR0FBdEI7QUFDQWhCLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCVSxhQUF0QjtBQUNBLFNBQU9qQixNQUFQO0FBQ0g7O0FBRUQsU0FBU3lCLE9BQVQsR0FBbUI7QUFDZixNQUFJekIsTUFBTSxHQUFHLENBQWI7QUFDQSxNQUFJMEIsY0FBYyxHQUFHeEIsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSXVCLFlBQVksR0FBR0QsY0FBYyxDQUFDRSxnQ0FBZixDQUFnRCxDQUFoRCxDQUFuQjtBQUNBLE1BQUlELFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUNwQjNCLFVBQU0sR0FBRyxJQUFUO0FBQ0gsR0FGRCxNQUVPLElBQUkyQixZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDMUIzQixVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRk0sTUFFQTtBQUNIQSxVQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCbUIsY0FBdEI7QUFDQSxTQUFPMUIsTUFBUDtBQUNIOztBQUVELFNBQVM2QixNQUFULEdBQWtCO0FBQ2QsTUFBSTdCLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSThCLGNBQWMsR0FBRzVCLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLGdCQUFoQixDQUFyQjtBQUNBLE1BQUkyQixPQUFPLEdBQUdELGNBQWMsQ0FBQ0UsY0FBZixFQUFkO0FBQ0EsTUFBSWpCLE1BQU0sR0FBR2dCLE9BQU8sQ0FBQ0UsZ0JBQVIsRUFBYjtBQUNBLGVBQVksc0JBQXNCbEIsTUFBbEM7QUFDQSxNQUFJQSxNQUFNLEtBQUssVUFBZixFQUEyQjtBQUN2QmYsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSWUsTUFBTSxLQUFLLFVBQWYsRUFBMkI7QUFDOUJmLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0J1QixjQUF0QjtBQUNBLFNBQU85QixNQUFQO0FBQ0g7O0FBRUQsU0FBU2tDLFFBQVQsR0FBb0I7QUFDaEIsTUFBSWxDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSW1DLFlBQVksR0FBR2pDLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLGNBQWhCLENBQW5CO0FBQ0EsTUFBSWdDLFlBQVksR0FBR0QsWUFBWSxDQUFDUCxnQ0FBYixDQUE4QyxDQUE5QyxDQUFuQjtBQUNBLE1BQUlRLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUNuQnBDLFVBQU0sR0FBRyxDQUFUO0FBQ0EsaUJBQVksVUFBWjtBQUNILEdBSEQsTUFHTztBQUNILGlCQUFZLFVBQVo7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQjRCLFlBQXRCO0FBQ0EsU0FBT25DLE1BQVA7QUFDSDs7QUFFRCxTQUFTcUMsSUFBVCxHQUFnQjtBQUNaLE1BQUlyQyxNQUFNLEdBQUcsSUFBYjtBQUNBLE1BQUltQyxZQUFZLEdBQUdqQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixjQUFoQixDQUFuQjtBQUNBLE1BQUlnQyxZQUFZLEdBQUdELFlBQVksQ0FBQ1AsZ0NBQWIsQ0FBOEMsQ0FBOUMsQ0FBbkI7QUFDQSxNQUFJUSxZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJwQyxVQUFNLEdBQUcsQ0FBVDtBQUNBLGlCQUFZLFdBQVo7QUFDSCxHQUhELE1BR087QUFDSCxpQkFBWSxXQUFaO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0I0QixZQUF0QjtBQUNBLFNBQU9uQyxNQUFQO0FBQ0g7OztBQUdELFNBQVNzQyxVQUFULENBQW9CQyxZQUFwQixFQUFrQztBQUM5QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsWUFBUUgsWUFBUjtBQUNJLFdBQUssTUFBTDtBQUNJRSxlQUFPLENBQUN6QixJQUFJLEVBQUwsQ0FBUDtBQUNBO0FBQ0osV0FBSyxVQUFMO0FBQ0l5QixlQUFPLENBQUM5QixRQUFRLEVBQVQsQ0FBUDtBQUNBO0FBQ0osV0FBSyxRQUFMO0FBQ0k4QixlQUFPLENBQUNaLE1BQU0sRUFBUCxDQUFQO0FBQ0E7QUFDSixXQUFLLFFBQUw7QUFDSVksZUFBTyxDQUFDakMsTUFBTSxFQUFQLENBQVA7QUFDQTtBQUNKLFdBQUssT0FBTDtBQUNJaUMsZUFBTyxDQUFDMUMsS0FBSyxFQUFOLENBQVA7QUFDQTtBQUNKLFdBQUssU0FBTDtBQUNJMEMsZUFBTyxDQUFDaEIsT0FBTyxFQUFSLENBQVA7QUFDQTtBQUNKLFdBQUssVUFBTDtBQUNJZ0IsZUFBTyxDQUFDUCxRQUFRLEVBQVQsQ0FBUDtBQUNBO0FBQ0osV0FBSyxNQUFMO0FBQ0lPLGVBQU8sQ0FBQ0osSUFBSSxFQUFMLENBQVA7QUFDQTtBQUNKO0FBQ0lJLGVBQU8sQ0FBQyxDQUFELENBQVA7QUFDQSxjQTNCUjs7QUE2QkgsR0E5Qk0sQ0FBUDtBQStCSDs7QUFFRCxTQUFTRSxjQUFULENBQXdCSixZQUF4QixFQUFzQztBQUNsQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEN4QyxRQUFJLENBQUMwQyxPQUFMLENBQWFDLGtCQUFiO0FBQ0ksS0FBQ04sWUFBRCxDQURKO0FBRUksY0FBU08sU0FBVCxFQUFvQjtBQUNoQixVQUFJOUMsTUFBTSxHQUFHLENBQWI7QUFDQSxXQUFLLElBQUkrQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0JDLE1BQXRDLEVBQThDRixDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLFlBQUlHLGlCQUFpQixHQUFHSixTQUFTLENBQUNFLE9BQVYsQ0FBa0JELENBQWxCLENBQXhCO0FBQ0EscUJBQVksWUFBWUcsaUJBQXhCO0FBQ0FsRCxjQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0QsV0FBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsU0FBUyxDQUFDSyxhQUFWLENBQXdCRixNQUE1QyxFQUFvREYsQ0FBQyxFQUFyRCxFQUF5RDtBQUNyRCxZQUFJSyx1QkFBdUIsR0FBR04sU0FBUyxDQUFDSyxhQUFWLENBQXdCSixDQUF4QixDQUE5QjtBQUNBLHFCQUFZLGVBQWVLLHVCQUEzQjtBQUNBcEQsY0FBTSxHQUFHLENBQVQ7QUFDSDtBQUNELFdBQUssSUFBSStDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ08sWUFBVixDQUF1QkosTUFBM0MsRUFBbURGLENBQUMsRUFBcEQsRUFBd0Q7QUFDcEQsWUFBSU8sc0JBQXNCLEdBQUdSLFNBQVMsQ0FBQ08sWUFBVixDQUF1Qk4sQ0FBdkIsQ0FBN0I7QUFDQSxxQkFBWSxlQUFlTyxzQkFBM0I7QUFDQXRELGNBQU0sR0FBRyxDQUFDLENBQVY7QUFDSDtBQUNEeUMsYUFBTyxDQUFDekMsTUFBRCxDQUFQO0FBQ0gsS0FwQkw7QUFxQkksY0FBU3VELEtBQVQsRUFBZ0I7QUFDWixtQkFBWSxtQkFBbUJBLEtBQUssQ0FBQ0MsT0FBckM7QUFDQWYsYUFBTyxDQUFDO0FBQ0pnQixZQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFEUjtBQUVKRCxlQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FGWCxFQUFELENBQVA7O0FBSUgsS0EzQkw7O0FBNkJILEdBOUJNLENBQVA7QUErQkg7O0FBRUQsU0FBU0Usd0JBQVQsR0FBb0M7QUFDaEMsTUFBSUMsVUFBVSxDQUFDN0QsS0FBZixFQUFzQjtBQUNsQixRQUFJbUIsYUFBYSxHQUFHZixJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixlQUFoQixDQUFwQjtBQUNBLFFBQUl3RCxZQUFZLEdBQUczQyxhQUFhLENBQUNFLGlCQUFkLEVBQW5CO0FBQ0EsUUFBSTBDLE1BQU0sR0FBRzNELElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLE9BQWhCLENBQWI7QUFDQSxRQUFJMEQsUUFBUSxHQUFHRCxNQUFNLENBQUNFLGFBQVAsQ0FBcUIsZUFBckIsQ0FBZjtBQUNBSCxnQkFBWSxDQUFDSSxPQUFiLENBQXFCRixRQUFyQjtBQUNBNUQsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0J1RCxRQUF0QjtBQUNBNUQsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JzRCxNQUF0QjtBQUNBM0QsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JxRCxZQUF0QjtBQUNILEdBVEQsTUFTTztBQUNILFFBQUlLLE1BQU0sR0FBRy9ELElBQUksQ0FBQzBDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsd0JBQXpCLENBQWI7QUFDQSxRQUFJQyxRQUFRLEdBQUdqRSxJQUFJLENBQUMwQyxPQUFMLENBQWFzQixXQUFiLENBQXlCLDJCQUF6QixDQUFmO0FBQ0EsUUFBSUUsR0FBRyxHQUFHbEUsSUFBSSxDQUFDMEMsT0FBTCxDQUFhc0IsV0FBYixDQUF5QixpQkFBekIsQ0FBVjtBQUNBLFFBQUlHLFlBQVksR0FBR25FLElBQUksQ0FBQzBDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQW5CO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlOLE1BQUosRUFBYjtBQUNBTSxVQUFNLENBQUNDLFNBQVAsQ0FBaUJMLFFBQVEsQ0FBQ00sbUNBQTFCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHTixHQUFHLENBQUNPLFNBQUosQ0FBYyxTQUFkLEVBQXlCTixZQUFZLENBQUNPLGNBQWIsRUFBekIsRUFBd0QsSUFBeEQsQ0FBVjtBQUNBTCxVQUFNLENBQUNNLE9BQVAsQ0FBZUgsR0FBZjtBQUNBTCxnQkFBWSxDQUFDUyxhQUFiLENBQTJCUCxNQUEzQjtBQUNIO0FBQ0o7O0FBRUQsSUFBTVosVUFBVSxHQUFHO0FBQ2YsTUFBSTdELEtBQUosR0FBVztBQUNQLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixTQUFqQixHQUE2QkEsS0FBN0IsR0FBc0NBLEtBQUssR0FBR2lGLEdBQUcsQ0FBQ0MsaUJBQUosR0FBd0JDLFFBQXhCLEtBQXFDLEtBQTFGO0FBQ0gsR0FIYztBQUlmM0MsWUFBVSxFQUFFQSxVQUpHO0FBS2ZLLGdCQUFjLEVBQUVBLGNBTEQ7QUFNZnVDLGdCQUFjLEVBQUV4Qix3QkFORCxFQUFuQjs7O0FBU0F5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixVQUFqQixDIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIG51bGwgPSDmnKror7fmsYLvvIwxID0g5bey5YWB6K6477yMMCA9IOaLkue7nXzlj5fpmZAsIDIgPSDns7vnu5/mnKrlvIDlkK9cclxuXHJcbnZhciBpc0lPU1xyXG5cclxuZnVuY3Rpb24gYWxidW0oKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gMDtcclxuICAgIHZhciBQSFBob3RvTGlicmFyeSA9IHBsdXMuaW9zLmltcG9ydChcIlBIUGhvdG9MaWJyYXJ5XCIpO1xyXG4gICAgdmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcbiAgICBpZiAoYXV0aFN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG4gICAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IDA7XHJcbiAgICB9XHJcbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoUEhQaG90b0xpYnJhcnkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FtZXJhKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IDA7XHJcbiAgICB2YXIgQVZDYXB0dXJlRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZDYXB0dXJlRGV2aWNlXCIpO1xyXG4gICAgdmFyIGF1dGhTdGF0dXMgPSBBVkNhcHR1cmVEZXZpY2UuYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSgndmlkZScpO1xyXG4gICAgaWYgKGF1dGhTdGF0dXMgPT09IDApIHtcclxuICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChhdXRoU3RhdHVzID09IDMpIHtcclxuICAgICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgfVxyXG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2NhdGlvbigpIHtcclxuICAgIHZhciByZXN1bHQgPSAwO1xyXG4gICAgdmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuICAgIHZhciBlbmFibGUgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcbiAgICB2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcbiAgICBpZiAoIWVuYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCA9IDI7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMyB8fCBzdGF0dXMgPT09IDQpIHtcclxuICAgICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgfVxyXG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGNsbG9jYXRpb25NYW5nZXIpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaCgpIHtcclxuICAgIHZhciByZXN1bHQgPSAwO1xyXG4gICAgdmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG4gICAgdmFyIGFwcCA9IFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24oKTtcclxuICAgIHZhciBlbmFibGVkVHlwZXMgPSAwO1xyXG4gICAgaWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcbiAgICAgICAgdmFyIHNldHRpbmdzID0gYXBwLmN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKTtcclxuICAgICAgICBlbmFibGVkVHlwZXMgPSBzZXR0aW5ncy5wbHVzR2V0QXR0cmlidXRlKFwidHlwZXNcIik7XHJcbiAgICAgICAgaWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwbHVzLmlvcy5kZWxldGVPYmplY3Qoc2V0dGluZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbmFibGVkVHlwZXMgPSBhcHAuZW5hYmxlZFJlbW90ZU5vdGlmaWNhdGlvblR5cGVzKCk7XHJcbiAgICAgICAgaWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSA0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW3sue7j+W8gOWQr+aOqOmAgeWKn+iDvSFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwKTtcclxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChVSUFwcGxpY2F0aW9uKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gMDtcclxuICAgIHZhciBDTkNvbnRhY3RTdG9yZSA9IHBsdXMuaW9zLmltcG9ydChcIkNOQ29udGFjdFN0b3JlXCIpO1xyXG4gICAgdmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG4gICAgaWYgKGNuQXV0aFN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGNuQXV0aFN0YXR1cyA9PSAzKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gMDtcclxuICAgIH1cclxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChDTkNvbnRhY3RTdG9yZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvcmQoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgIHZhciBhdmF1ZGlvc2Vzc2lvbiA9IHBsdXMuaW9zLmltcG9ydChcIkFWQXVkaW9TZXNzaW9uXCIpO1xyXG4gICAgdmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG4gICAgdmFyIHN0YXR1cyA9IGF2YXVkaW8ucmVjb3JkUGVybWlzc2lvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgc3RhdHVzKTtcclxuICAgIGlmIChzdGF0dXMgPT09IDE5NzAxNjg5NDgpIHtcclxuICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDE3MzU1NTI2MjgpIHtcclxuICAgICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgfVxyXG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGF2YXVkaW9zZXNzaW9uKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGVuZGFyKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICB2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG4gICAgdmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuICAgIGlmIChla0F1dGhTdGF0dXMgPT0gMykge1xyXG4gICAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLml6XljobmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pel5Y6G5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG4gICAgfVxyXG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEVLRXZlbnRTdG9yZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW1vKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICB2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG4gICAgdmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgxKTtcclxuICAgIGlmIChla0F1dGhTdGF0dXMgPT0gMykge1xyXG4gICAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG4gICAgfVxyXG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEVLRXZlbnRTdG9yZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdElPUyhwZXJtaXNzaW9uSUQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChwZXJtaXNzaW9uSUQpIHtcclxuICAgICAgICAgICAgY2FzZSBcInB1c2hcIjpcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocHVzaCgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9jYXRpb25cIjpcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlY29yZFwiOlxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmQoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNhbWVyYVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYW1lcmEoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFsYnVtXCI6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFsYnVtKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRhY3QoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNhbGVuZGFyXCI6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhbGVuZGFyKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vXCI6XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1lbW8oKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEFuZHJvaWQocGVybWlzc2lvbklEKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHBsdXMuYW5kcm9pZC5yZXF1ZXN0UGVybWlzc2lvbnMoXHJcbiAgICAgICAgICAgIFtwZXJtaXNzaW9uSURdLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZ3JhbnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncmFudGVkUGVybWlzc2lvbiA9IHJlc3VsdE9iai5ncmFudGVkW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZFByZXNlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5ouS57ud5pys5qyh55Sz6K+355qE5p2D6ZmQ77yaJyArIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkQWx3YXlzUGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRBbHdheXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+awuOS5heaLkue7neeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRBbHdheXNQZXJtaXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAtMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCBlcnJvcjogJyArIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKSB7XHJcbiAgICBpZiAocGVybWlzc2lvbi5pc0lPUykge1xyXG4gICAgICAgIHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuICAgICAgICB2YXIgYXBwbGljYXRpb24yID0gVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbigpO1xyXG4gICAgICAgIHZhciBOU1VSTDIgPSBwbHVzLmlvcy5pbXBvcnQoXCJOU1VSTFwiKTtcclxuICAgICAgICB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcImFwcC1zZXR0aW5nczpcIik7XHJcbiAgICAgICAgYXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KE5TVVJMMik7XHJcbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcGxpY2F0aW9uMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmNvbnRlbnQuSW50ZW50XCIpO1xyXG4gICAgICAgIHZhciBTZXR0aW5ncyA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQucHJvdmlkZXIuU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuICAgICAgICB2YXIgbWFpbkFjdGl2aXR5ID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuICAgICAgICB2YXIgaW50ZW50ID0gbmV3IEludGVudCgpO1xyXG4gICAgICAgIGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG4gICAgICAgIHZhciB1cmkgPSBVcmkuZnJvbVBhcnRzKFwicGFja2FnZVwiLCBtYWluQWN0aXZpdHkuZ2V0UGFja2FnZU5hbWUoKSwgbnVsbCk7XHJcbiAgICAgICAgaW50ZW50LnNldERhdGEodXJpKTtcclxuICAgICAgICBtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwZXJtaXNzaW9uID0ge1xyXG4gICAgZ2V0IGlzSU9TKCl7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpc0lPUyA9PT0gJ2Jvb2xlYW4nID8gaXNJT1MgOiAoaXNJT1MgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2lvcycpXHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdElPUzogcmVxdWVzdElPUyxcclxuICAgIHJlcXVlc3RBbmRyb2lkOiByZXF1ZXN0QW5kcm9pZCxcclxuICAgIGdvdG9BcHBTZXR0aW5nOiBnb3RvQXBwUGVybWlzc2lvblNldHRpbmdcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwZXJtaXNzaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!*********************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/api/api.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.inputtips = inputtips;function inputtips(data) {\n  var url = \"https://restapi.amap.com/v3/assistant/inputtips?parameters\";\n  data.key = \"24b12f24bfa490d4574a6c6b05ee321a\";\n  return request.request({\n    url: url,\n    method: 'GET',\n    data: data });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJpbnB1dHRpcHMiLCJkYXRhIiwidXJsIiwia2V5IiwicmVxdWVzdCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6IjRGQUFPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzVCLE1BQUlDLEdBQUcsR0FBQyw0REFBUjtBQUNBRCxNQUFJLENBQUNFLEdBQUwsR0FBUyxrQ0FBVDtBQUNBLFNBQU9DLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQjtBQUNuQkYsT0FBRyxFQUFFQSxHQURjO0FBRW5CRyxVQUFNLEVBQUUsS0FGVztBQUduQkosUUFBSSxFQUFFQSxJQUhhLEVBQWhCLENBQVA7O0FBS0giLCJmaWxlIjoiNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaW5wdXR0aXBzKGRhdGEpIHtcbiAgICB2YXIgdXJsPVwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2Fzc2lzdGFudC9pbnB1dHRpcHM/cGFyYW1ldGVyc1wiXG4gICAgZGF0YS5rZXk9XCIyNGIxMmYyNGJmYTQ5MGQ0NTc0YTZjNmIwNWVlMzIxYVwiXG4gICAgcmV0dXJuIHJlcXVlc3QucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chooseLocation.nvue?vue&type=style&index=0&lang=css&mpType=page */ 62);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chooseLocation_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 62 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ZN/Documents/HBuilderProjects/TestAPPdemo/pages/index/item/chooseLocation.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tool-bar-fixed": {
    "backgroundColor": "#FFFFFF",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "paddingTop": "3",
    "paddingRight": 0,
    "paddingBottom": "3",
    "paddingLeft": 0
  },
  "search_view": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10upx"
  },
  "search_input": {
    "height": "80upx",
    "lineHeight": "80upx",
    "flex": 1,
    "fontSize": "32upx",
    "marginLeft": "-90",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "search_icon": {
    "width": "50upx",
    "height": "50upx",
    "marginTop": "15upx",
    "marginRight": "15upx",
    "marginBottom": "15upx",
    "marginLeft": "15upx"
  },
  "search_list_view": {
    "position": "fixed",
    "top": "115upx",
    "bottom": "0upx",
    "left": "0upx",
    "right": "0upx",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "35upx"
  },
  "addres_item": {
    "borderColor": "#00aa00",
    "borderBottomWidth": "1upx",
    "paddingTop": "10upx",
    "paddingRight": "40upx",
    "paddingBottom": "10upx",
    "paddingLeft": "40upx"
  },
  "text_name": {
    "fontSize": "36upx",
    "lineHeight": "50upx"
  },
  "text_address": {
    "fontSize": "30upx",
    "lineHeight": "40upx"
  },
  "choose_icon": {
    "position": "absolute",
    "top": "30upx",
    "right": "30upx",
    "width": "50upx",
    "height": "50upx"
  },
  "cover_marker": {
    "position": "absolute",
    "width": "40",
    "height": "40"
  },
  "do_get_location": {
    "position": "absolute",
    "width": "40",
    "height": "40",
    "right": "20",
    "bottom": "30"
  },
  "main_bottom": {
    "position": "fixed",
    "bottom": "0upx",
    "left": "0upx",
    "right": "0upx",
    "backgroundColor": "#FFFFFF",
    "height": "350upx"
  },
  "old_address": {
    "marginTop": "20upx",
    "marginRight": "40upx",
    "marginBottom": "10upx",
    "marginLeft": "40upx",
    "borderStyle": "solid",
    "borderWidth": "1upx",
    "borderColor": "#00aa00",
    "borderRadius": "5",
    "paddingTop": "10upx",
    "paddingRight": "10upx",
    "paddingBottom": "10upx",
    "paddingLeft": "10upx"
  },
  "choose_address": {
    "marginTop": "20upx",
    "marginRight": "40upx",
    "marginBottom": "20upx",
    "marginLeft": "40upx",
    "borderStyle": "solid",
    "borderWidth": "1upx",
    "borderColor": "#00aa00",
    "borderRadius": "5",
    "paddingTop": "10upx",
    "paddingRight": "10upx",
    "paddingBottom": "10upx",
    "paddingLeft": "10upx"
  },
  "add_text": {
    "fontSize": "32upx",
    "lineHeight": "55upx"
  },
  "uni-btn-v": {
    "position": "absolute",
    "left": "40upx",
    "right": "40upx",
    "bottom": "20upx",
    "backgroundColor": "#00aa00",
    "borderRadius": "10upx",
    "height": "80upx",
    "lineHeight": "80upx",
    "fontSize": "34upx",
    "color": "#FFFFFF",
    "textAlign": "center"
  }
}

/***/ })
/******/ ]);