!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=49)}([function(t,e,o){"use strict";function n(t,e,o,n,r,i,a,s,u,c){var l,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var d=Object.prototype.hasOwnProperty;for(var f in u)d.call(u,f)&&!d.call(p.components,f)&&(p.components[f]=u[f])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=o,p._compiled=!0),n&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(p.functional){p._injectStyles=l;var h=p.render;p.render=function(t,e){return l.call(e),h(t,e)}}else{var g=p.beforeCreate;p.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:p}}o.d(e,"a",(function(){return n}))},function(t,e){t.exports={}},,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var i=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=n(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[i](s)}},function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(21).default,Vue.prototype.__$appStyle__)},function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},,,,function(t,e,o){"use strict";var n=o(43),r=o(31),i=o(0);var a=Object(i.a)(r.default,n.b,n.c,!1,null,null,"75de0eb2",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(45).default,this.options.style):Object.assign(this.options.style,o(45).default)}).call(a),e.default=a.exports},,,,,,function(t,e,o){"use strict";var n=o(32),r=o.n(n);e.default=r.a},function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o(50)),r=a(o(52)),i=o(53);function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,o,n,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void o(t)}s.done?e(u):Promise.resolve(u).then(n,r)}function u(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){s(i,n,r,a,u,"next",t)}function u(t){s(i,n,r,a,u,"throw",t)}a(void 0)}))}}var c=weex.requireModule("dom"),l=null,p={data:function(){return{iStatusBarHeight:0,mapStyle:{width:"393px",height:"530px"},mapWAH:{width:0,height:0},markers:[],controls:[],location:{},addressText:"\u6682\u672a\u5b9a\u4f4d\u6210\u529f\uff0c\u8bf7\u7a0d\u5019\xb7\xb7\xb7",addressList:[],addressIndex:"",addressItem:{},showListView:!1,chooselatitude:0,chooselongitude:0}},methods:{back:function(){uni.navigateBack({})},emitcorrect:function(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);e.$vm.chooselocation.latitude=this.chooselatitude,e.$vm.chooselocation.longitude=this.chooselongitude,uni.navigateBack({})},searchAddress:function(t){var e=this;(0,i.inputtips)({location:this.location.longitude+","+this.location.latitude,keywords:t.detail.value}).then((function(t){e.addressList=t.data.tips,e.showListView=!0}))},chooseIs:function(t,e){this.addressIndex=t,this.addressItem=e;uni.showLoading({title:"\u8bf7\u7a0d\u5019\xb7\xb7\xb7"}),this.addressIndex="",this.showListView=!1,this.location={longitude:e.location.split(",")[0],latitude:e.location.split(",")[1]},this.addressIndex="",this.showListView=!1},regionchange:function(e){t("log",e.type," at pages/index/item/chooseLocation.nvue:120");var o=this;"end"==e.type&&l.getCenterLocation({success:function(e){t("log",e," at pages/index/item/chooseLocation.nvue:125"),o.chooselatitude=e.latitude,o.chooselongitude=e.longitude,t("log",o.chooselocation," at pages/index/item/chooseLocation.nvue:128"),o.getAddressText(e)},fail:function(e){t("log",e," at pages/index/item/chooseLocation.nvue:132")},complete:function(e){t("log",e," at pages/index/item/chooseLocation.nvue:135")}})},getAddressText:function(t){var e=this;uni.hideLoading(),plus.maps.Map.reverseGeocode(t,{},(function(t){e.addressText=t.address}))},doCheckPermission:function(){var t=this;return u(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return uni.showLoading({title:"\u5b9a\u4f4d\u4e2d\xb7\xb7\xb7"}),e.next=3,t.checkPermission();case 3:if(1===e.sent){e.next=7;break}return uni.showToast({title:"\u8bbf\u95ee\u4f4d\u7f6e\u88ab\u62d2\u7edd"}),e.abrupt("return");case 7:t.doGetLocation();case 8:case"end":return e.stop()}}),e)})))()},doGetLocation:function(){var e=this;uni.getLocation({type:"gcj02",altitude:!0,geocode:!0,success:function(o){e.hasLocation=!0,e.location=o,t("log",o," at pages/index/item/chooseLocation.nvue:167"),e.getAddressText({latitude:o.latitude,longitude:o.longitude});var n={latitude:o.latitude,longitude:o.longitude,iconPath:"../../../static/image/appmaps.png"},r=[];r.push(n),e.markers=r},fail:function(e){t("log",e," at pages/index/item/chooseLocation.nvue:179")}})},checkPermission:function(){return u(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.default.isIOS){t.next=6;break}return t.next=3,r.default.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,r.default.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return null===(e=t.t0)||1===e?e=1:2===e?uni.showModal({content:"\u7cfb\u7edf\u5b9a\u4f4d\u5df2\u5173\u95ed",confirmText:"\u786e\u5b9a",showCancel:!1,success:function(t){}}):e.code?uni.showModal({content:e.message}):uni.showModal({title:"\u5c0a\u656c\u7684\u7528\u6237",content:"\u4f7f\u7528\u672cAPP\u9700\u8981\u5b9a\u4f4d\u6743\u9650\uff0c\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\uff01",confirmText:"\u53bb\u8bbe\u7f6e",success:function(t){t.confirm?r.default.gotoAppSetting():plus.runtime.quit()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}}),t)})))()}},onLoad:function(t){this.iStatusBarHeight=uni.getSystemInfoSync().statusBarHeight,this.doCheckPermission(),l=uni.createMapContext("map",this)},onShow:function(){},onReady:function(){var t=this,e=this.mapStyle;uni.getSystemInfo({success:function(o){var n=o.screenWidth,r=o.windowHeight;c.getComponentRect(t.$refs.mapTop,(function(o){var i=o.size.height;c.getComponentRect(t.$refs.mapBottom,(function(o){var a=o.size.height,s=r-i-a;e.height=s+"px",e.width=n+"px",e["margin-top"]=i+"px",t.mapStyle=e,t.mapWAH.height=s,t.mapWAH.width=n}))}))}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}};e.default=p}).call(this,o(19).default)},function(t,e){t.exports={"tool-bar-fixed":{backgroundColor:"#FFFFFF",position:"fixed",top:0,left:0,right:0,paddingTop:"3",paddingRight:0,paddingBottom:"3",paddingLeft:0},search_view:{flexDirection:"row",backgroundColor:"#FFFFFF",borderRadius:"10upx"},search_input:{height:"80upx",lineHeight:"80upx",flex:1,fontSize:"32upx",marginLeft:"-90",justifyContent:"center",alignItems:"center"},search_icon:{width:"50upx",height:"50upx",marginTop:"15upx",marginRight:"15upx",marginBottom:"15upx",marginLeft:"15upx"},search_list_view:{position:"fixed",top:"115upx",bottom:"0upx",left:"0upx",right:"0upx",backgroundColor:"#FFFFFF",paddingTop:"35upx"},addres_item:{borderColor:"#00aa00",borderBottomWidth:"1upx",paddingTop:"10upx",paddingRight:"40upx",paddingBottom:"10upx",paddingLeft:"40upx"},text_name:{fontSize:"36upx",lineHeight:"50upx"},text_address:{fontSize:"30upx",lineHeight:"40upx"},choose_icon:{position:"absolute",top:"30upx",right:"30upx",width:"50upx",height:"50upx"},cover_marker:{position:"absolute",width:"40",height:"40"},do_get_location:{position:"absolute",width:"40",height:"40",right:"20",bottom:"30"},main_bottom:{position:"fixed",bottom:"0upx",left:"0upx",right:"0upx",backgroundColor:"#FFFFFF",height:"350upx"},old_address:{marginTop:"20upx",marginRight:"40upx",marginBottom:"10upx",marginLeft:"40upx",borderStyle:"solid",borderWidth:"1upx",borderColor:"#00aa00",borderRadius:"5",paddingTop:"10upx",paddingRight:"10upx",paddingBottom:"10upx",paddingLeft:"10upx"},choose_address:{marginTop:"20upx",marginRight:"40upx",marginBottom:"20upx",marginLeft:"40upx",borderStyle:"solid",borderWidth:"1upx",borderColor:"#00aa00",borderRadius:"5",paddingTop:"10upx",paddingRight:"10upx",paddingBottom:"10upx",paddingLeft:"10upx"},add_text:{fontSize:"32upx",lineHeight:"55upx"},"uni-btn-v":{position:"absolute",left:"40upx",right:"40upx",bottom:"20upx",backgroundColor:"#00aa00",borderRadius:"10upx",height:"80upx",lineHeight:"80upx",fontSize:"34upx",color:"#FFFFFF",textAlign:"center"}}},,,,,,,,,,function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!1,enableBackToTop:!0,bubble:"true"}},[o("view",[o("view",{ref:"mapTop",staticClass:["tool-bar-fixed"]},[o("view",{staticClass:["search_view"]},[o("u-image",{staticClass:["search_icon"],attrs:{src:"../../../static/image/back.png"},on:{click:t.back}}),o("view",{staticClass:["search_input"]},[o("u-text",[t._v("\n\t\t\t\t\u5730\u5740\u7ea0\u6b63\n\t\t\t")])])],1)]),o("map",{ref:"map",style:t.mapStyle,attrs:{id:"map",markers:t.markers,controls:t.controls,longitude:t.location.longitude,latitude:t.location.latitude},on:{regionchange:t.regionchange}},[o("u-image",{staticClass:["cover_marker"],style:{left:t.mapWAH.width/2-10+"px",top:t.mapWAH.height/2-30+"px"},attrs:{src:"../../../static/image/chooselocation.png"}}),o("u-image",{staticClass:["do_get_location"],attrs:{src:"../../../static/image/correct.png"},on:{click:t.doCheckPermission}})],1),o("view",{ref:"mapBottom",staticClass:["main_bottom"]},[o("view",{staticClass:["old_address"]},[o("u-text",{staticClass:["add_text"]},[t._v("\u539f\u5730\u5740:\u6e05\u9547\u5e02\u65b0\u5e97\u9547\u8857\u4e0a")])]),o("view",{staticClass:["choose_address"]},[o("u-text",{staticClass:["add_text"]},[t._v("\u5f53\u524d\u5730\u5740:"+t._s(t.addressText))])]),o("u-text",{staticClass:["uni-btn-v"],on:{click:t.emitcorrect}},[t._v("\u9009\u62e9\u8fd9\u91cc")])]),t.showListView?o("view",{staticClass:["search_list_view"]},t._l(t.addressList,(function(e,n){return o("view",{key:e.id,staticClass:["addres_item"],on:{click:function(o){t.chooseIs(n,e)}}},[o("u-text",{staticClass:["text_name"]},[t._v(t._s(e.name))]),o("br"),o("u-text",{staticClass:["text_address"]},[t._v(t._s(e.district+e.address))]),t.addressIndex===n?o("u-image",{staticClass:["choose_icon"],attrs:{src:"../../../static/image/correct.png"}}):t._e()],1)})),0):t._e()],1)])},r=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){}))},,function(t,e,o){"use strict";o.r(e);var n=o(33),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},,,,function(t,e,o){"use strict";o.r(e);o(20);var n=o(25);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){const e=this.constructor;return this.then(o=>e.resolve(t()).then(()=>o),o=>e.resolve(t()).then(()=>{throw o}))}),n.default.mpType="page",n.default.route="pages/index/item/chooseLocation",n.default.el="#root",new Vue(n.default)},function(t,e,o){t.exports=o(51)},function(t,e,o){var n=function(t){"use strict";var e=Object.prototype,o=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,o,n){var r=e&&e.prototype instanceof l?e:l,i=Object.create(r.prototype),a=new w(n||[]);return i._invoke=function(t,e,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return L()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var s=x(a,o);if(s){if(s===c)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var l=u(t,e,o);if("normal"===l.type){if(n=o.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n="completed",o.method="throw",o.arg=l.arg)}}}(t,o,a),i}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function l(){}function p(){}function d(){}var f={};f[r]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(S([])));g&&g!==e&&o.call(g,r)&&(f=g);var m=d.prototype=l.prototype=Object.create(f);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(r,i){function a(){return new e((function(n,a){!function n(r,i,a,s){var c=u(t[r],t,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(r,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var o=t.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m.constructor=d,d.constructor=p,d[a]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,o,n,r,i){void 0===i&&(i=Promise);var a=new y(s(e,o,n,r),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(m),m[a]="Generator",m[r]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=S,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(o,n){return a.type="throw",a.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),b(o),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;b(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:S(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,o){(function(e){var o;var n={get isIOS(){return"boolean"==typeof o?o:o="ios"===uni.getSystemInfoSync().platform},requestIOS:function(t){return new Promise((function(o,n){switch(t){case"push":o(function(){var t=0,o=plus.ios.import("UIApplication"),n=o.sharedApplication();if(n.currentUserNotificationSettings){var r=n.currentUserNotificationSettings();0==r.plusGetAttribute("types")?(t=0,e("log","\u63a8\u9001\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at common/permission.js:63")):(t=1,e("log","\u5df2\u7ecf\u5f00\u542f\u63a8\u9001\u529f\u80fd!"," at common/permission.js:66")),plus.ios.deleteObject(r)}else 0==n.enabledRemoteNotificationTypes()?(t=3,e("log","\u63a8\u9001\u6743\u9650\u6ca1\u6709\u5f00\u542f!"," at common/permission.js:73")):(t=4,e("log","\u5df2\u7ecf\u5f00\u542f\u63a8\u9001\u529f\u80fd!"," at common/permission.js:76"));return plus.ios.deleteObject(n),plus.ios.deleteObject(o),t}());break;case"location":o((r=0,i=plus.ios.import("CLLocationManager"),a=i.locationServicesEnabled(),s=i.authorizationStatus(),r=a?0===s?null:3===s||4===s?1:0:2,plus.ios.deleteObject(i),r));break;case"record":o(function(){var t=null,o=plus.ios.import("AVAudioSession"),n=o.sharedInstance().recordPermission();return e("log","permissionStatus:"+n," at common/permission.js:104"),t=1970168948===n?null:1735552628===n?1:0,plus.ios.deleteObject(o),t}());break;case"camera":o(function(){var t=0,e=plus.ios.import("AVCaptureDevice"),o=e.authorizationStatusForMediaType("vide");return t=0===o?null:3==o?1:0,plus.ios.deleteObject(e),t}());break;case"album":o(function(){var t=0,e=plus.ios.import("PHPhotoLibrary"),o=e.authorizationStatus();return t=0===o?null:3==o?1:0,plus.ios.deleteObject(e),t}());break;case"contact":o(function(){var t=0,e=plus.ios.import("CNContactStore"),o=e.authorizationStatusForEntityType(0);return t=0===o?null:3==o?1:0,plus.ios.deleteObject(e),t}());break;case"calendar":o(function(){var t=null,o=plus.ios.import("EKEventStore");return 3==o.authorizationStatusForEntityType(0)?(t=1,e("log","\u65e5\u5386\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at common/permission.js:122")):e("log","\u65e5\u5386\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at common/permission.js:124"),plus.ios.deleteObject(o),t}());break;case"memo":o(function(){var t=null,o=plus.ios.import("EKEventStore");return 3==o.authorizationStatusForEntityType(1)?(t=1,e("log","\u5907\u5fd8\u5f55\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at common/permission.js:136")):e("log","\u5907\u5fd8\u5f55\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at common/permission.js:138"),plus.ios.deleteObject(o),t}());break;default:o(0)}var r,i,a,s}))},requestAndroid:function(t){return new Promise((function(o,n){plus.android.requestPermissions([t],(function(t){for(var n=0,r=0;r<t.granted.length;r++){var i=t.granted[r];e("log","\u5df2\u83b7\u53d6\u7684\u6743\u9650\uff1a"+i," at common/permission.js:187"),n=1}for(r=0;r<t.deniedPresent.length;r++){var a=t.deniedPresent[r];e("log","\u62d2\u7edd\u672c\u6b21\u7533\u8bf7\u7684\u6743\u9650\uff1a"+a," at common/permission.js:192"),n=0}for(r=0;r<t.deniedAlways.length;r++){var s=t.deniedAlways[r];e("log","\u6c38\u4e45\u62d2\u7edd\u7533\u8bf7\u7684\u6743\u9650\uff1a"+s," at common/permission.js:197"),n=-1}o(n)}),(function(t){e("log","result error: "+t.message," at common/permission.js:203"),o({code:t.code,message:t.message})}))}))},gotoAppSetting:function(){if(n.isIOS){var t=plus.ios.import("UIApplication").sharedApplication(),e=plus.ios.import("NSURL"),o=e.URLWithString("app-settings:");t.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(e),plus.ios.deleteObject(t)}else{var r=plus.android.importClass("android.content.Intent"),i=plus.android.importClass("android.provider.Settings"),a=plus.android.importClass("android.net.Uri"),s=plus.android.runtimeMainActivity(),u=new r;u.setAction(i.ACTION_APPLICATION_DETAILS_SETTINGS);var c=a.fromParts("package",s.getPackageName(),null);u.setData(c),s.startActivity(u)}}};t.exports=n}).call(this,o(19).default)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.inputtips=function(t){return t.key="24b12f24bfa490d4574a6c6b05ee321a",request.request({url:"https://restapi.amap.com/v3/assistant/inputtips?parameters",method:"GET",data:t})}}]);