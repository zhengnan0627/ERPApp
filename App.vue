<script>
	export default {
		onLaunch: ()=> {
			
			//#ifdef APP-PLUS
				plus.screen.lockOrientation('portrait-primary');
				
				const clientid = plus.push.getClientInfo();
				console.log('当前设备ID', clientid.clientid)
				uni.setStorageSync('clientid',clientid.clientid)
				uni.getSystemInfo({
					success(res) {
						uni.setStorageSync('model',res.model)
						console.log(res.model) //手机型号	
					}
				});
				// 判断缓存时间增加gitpull测试
				// var deadtime = parseInt(uni.getStorageSync('StorageTime'))
				// if (deadtime) {
				// 	if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
				// 		uni.removeStorageSync('baseUrl')
				// 		uni.removeStorageSync('StorageTime')
				// 	}
				// }else{
				// 	uni.removeStorageSync('baseUrl')
				// }
				// /** 检测升级 */ 
				// 	//整包更新前端代码
				// 	    // var server = "http://152.136.28.147:9009/VXMail/PublicUrl.ashx"; //检查更新地址  
				// 	    var req = { //升级检测数据
				// 			"proc":"APP_YWY_PORT",
				// 			"type":"获取版本更新",
				// 	        "appid": plus.runtime.appid,  
				// 	        "version": plus.runtime.version  
				// 	    }; 
				// 		if(uni.getStorageSync('baseUrl')){
				// 			this.$request({
				// 				data:req
				// 			}).then(res => {
				// 				if (res.Msg_info[0].status == 1) {
				// 				    uni.showModal({ //提醒用户更新  
				// 				        title: "更新提示",  
				// 				        content: res.Msg_info[0].note,  
				// 				        success: (ress) => {  
				// 				            if (ress.confirm) {  
													
				// 				                plus.runtime.openURL(res.Msg_info[0].url);  
				// 				            }  
				// 				        }  
				// 				    })  
				// 				} 
				// 			}) 
				// 		}else{
				// 			uni.showModal({ //提醒用户更新
				// 			    title: "无服务器配置",  
				// 			    content:"当前无服务器配置,请前往配置", 
				// 				showCancel:false,
				// 			    success: (ress) => {  
				// 			        if (ress.confirm) {  
				// 						console.log('adsas');	
				// 			            uni.reLaunch({
				// 			            	url:'pages/login/peizhi'
				// 			            }) 
				// 			        }  
				// 			    }  
				// 			})
				// 		}
						
					//     uni.request({  
					//         url: server,  
					//         data: req,  
					//         success: (res) => {  
					// 			// console.log(res.data);
					//             if (res.statusCode == 200 && res.data.Msg_info[0].status == 1) {  
					//                 uni.showModal({ //提醒用户更新  
					//                     title: "更新提示",  
					//                     content: res.data.Msg_info[0].note,  
					//                     success: (ress) => {  
					//                         if (ress.confirm) {  
					
					//                             plus.runtime.openURL(res.data.Msg_info[0].url);  
					//                         }  
					//                     }  
					//                 })  
					//             }  
					//         }  
					    // })  
			//#endif
			
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
