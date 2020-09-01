<script>
	export default {
		onLaunch: ()=> {
			plus.screen.lockOrientation('portrait-primary');
			// console.log("APP onLaunch");			
			// let userinfo = uni.getStorageSync('userinfo');
			// //判断是否存在登录信息 
			// if(!userinfo.role){
			// 	//不存在则跳转登录页
			// 	 uni.redirectTo({
			// 		url:"/pages/login/loginpages",
			// 		success:()=>{
			// 			//跳转完页面后再关闭启动页
			// 			console.log("APP onLaunch中未登录跳转启动页成功回调");
			// 			// plus.navigator.closeSplashscreen();
			// 		}
			// 	})
			//  }
			//else{
			// 	//存在则关闭启动页进入首页
			//      plus.navigator.closeSplashscreen();
			// }
			// {
			// 	"id": "unipush",
			// 	"token": "86829ae1b857846629001a23332517b1",
			// 	"clientid": "86829ae1b857846629001a23332517b1",
			// 	"appid": "Wpcu1r6y8t6hkOF8hqd7W9",
			// 	"appkey": "Su1dHcLyr57VBHl9O0JvqA"
			// }
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	
	/* @import "colorui/main.css";
	@import "colorui/icon.css"; */
	/* #ifndef APP-PLUS */
		::-webkit-scrollbar {
			width: 0;
			height: 0;
		
			color: transparent;
		}
	/* #endif */
</style>
