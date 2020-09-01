// router/index.js


import Vue from 'vue'
import Router, {RouterMount} from '../js_sdk/hhyang-uni-simple-router/index.js';

Vue.use(Router)
//初始化
const router = new Router({
    // routes: [...modules]//路由表
	routes:[
		{
			path:'/pages/index/index',
			name: '首页',
		},
		{
		    path: '/pages/login/loginpages',
	        name: '登录',
		},	
	]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
//判断是否登录
	if (!uni.getStorageSync('userinfo')) {
	        if (to.path !== '/pages/login/loginpages') {
	            return next({
                   path:'/pages/login/loginpages',
                   NAVTYPE:'push'
                });
				
	        }
	    next()
		plus.navigator.closeSplashscreen();
	}else{
		next()
	}

});
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;