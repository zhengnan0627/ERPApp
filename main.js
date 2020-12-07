import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// //引入路由管理插件
// import router from './router';
// import Router, {RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js';
// import {default as Router, RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js'

//引入VUEX
import store from './store'  
Vue.prototype.$store = store

//引入自建请求封装
import $request from './common/request.js'
Vue.prototype.$request = $request

//引入eventBus
Vue.prototype.$bus = new Vue();

App.mpType = 'app'

//引入封装的请求并进行全局挂载
import { myRequest } from './util/api.js'
Vue.prototype.$myRequest = myRequest

// 引入全局uView
import uView from "uview-ui";
Vue.use(uView);
// import uView from '@/common/index.js'
// Vue.use(uView)

const app = new Vue({
    ...App
})
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)


app.$mount()
