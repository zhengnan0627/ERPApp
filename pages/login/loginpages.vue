<template>
	<view class="container">
		<!-- <uni-nav-bar :title="{{name[current]}}"></uni-nav-bar> -->
		<view class="navbar">
			登录:{{name[current]}}
		</view>
		<view class="" style="width: 100vw; height: 45px;">
			
		</view>
		<view class="swiper">
			<swiper  interval="2000" :current="current" duration="20" class="swiper_warp" @change="currentchange"
			 style="height: 100%;">
				<block v-for="(item,i) in swiperlist" :key="i">
					<swiper-item>
						<view class="swiper-item">
							<image :src="item.swiperurl" mode=""></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="input">
			<view class="input-item">
				<uni-icons type="contact" size="30" color="#00aa00" style="margin-left: 5px;"></uni-icons>
				<input type="number" v-model="user.loginname" value=""
				style="border-bottom: 2px solid #EEEEEE; margin-right: 2px;" 
				 cursor="1" maxlength="20" placeholder="请输入手机号" class="content" />
			</view>
			<view class="input-item">
				<uni-icons type="locked" size="30" color="#00aa00" style="margin-left: 5px;"></uni-icons>
				<input type="text" value="" v-model="user.password" placeholder="请输入登陆密码" maxlength="20" class="content" />
			</view>
		</view>
		<view class="footer">
			<view class="text" @click="peizhi">
				修改配置
			</view>
			<view class="text" style="display: flex;">
				<checkbox-group @change="change">
					<label>
						<checkbox value="cb" :checked="user.checked" />
					</label>
					<label style="display: none;">
						<checkbox value="aa"/>未选中
					</label>
				</checkbox-group>记住密码
			</view>
		</view>
		<view class="login" @click="login">
			登录
		</view>
		<!-- <view class="peizhi" @click="peizhi">
		
				服务器配置
		
		</view> -->
	</view>
</template>

<script>
	import Vue from 'vue'     //注意，要在这个页面中引入vue，不然下面的Vue.prototype会报错
	export default {
		data() {
			return {
				name:['业务员','配送员','高管',],
				role:'业务员',//登录角色参数
				clientid:'',//登录设备唯一表示，APP.vue中获取到存入缓存，本页面取出
				model:'',//登录设备型号，APP.vue中获取到存入缓存，本页面取出
				//用户名信息
				user: {
					loginname: '',
					password: '',
					checked: false,
				},
				current: 0,
				passwordState:null,
				//轮播图相关数据
				swiperlist: [{
						"id": "1",
						"swiperurl": "../../static/image/login1.png"
					},
					{
						"id": "2",
						"swiperurl": "../../static/image/login2.png"
					},
					{
						"id": "3",
						"swiperurl": "../../static/image/login3.png"
					},
				],
			}
		},
		onLoad() {
			console.log("登录页onload");
			let _this = this;
			clearInterval(Vue.prototype.$dingshi)//进入登录页进行一次清空定时器操作
			//页面加载完成，获取本地存储的用户名及密码及记住密码按钮状态
			const userName = uni.getStorageSync('userName');
			const userPsw = uni.getStorageSync('userPsw');
			_this.clientid = uni.getStorageSync('clientid');
			_this.model = uni.getStorageSync('model');
			if (userName && userPsw) {
				_this.user.loginname = userName;
				_this.user.password = userPsw;
				_this.user.checked = true;
				_this.passwordState = 'cb';
			} else {
				_this.user.loginname = "";
				_this.user.password = "";
				_this.user.checked = false;
				_this.passwordState = '';
			}
			//#ifdef APP-PLUS
				// 判断缓存时间
				var deadtime = parseInt(uni.getStorageSync('StorageTime'))
				if (deadtime) {
					if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
						uni.removeStorageSync('baseUrl')
						uni.removeStorageSync('StorageTime')
					}
				}else{
					uni.removeStorageSync('baseUrl')
				}
				/** 检测升级 */ 
					//整包更新前端代码
					    // var server = "http://152.136.28.147:9009/VXMail/PublicUrl.ashx"; //检查更新地址  
					    var req = { //升级检测数据
							"proc":"APP_YWY_PORT",
							"type":"获取版本更新",
					        "appid": plus.runtime.appid,  
					        "version": plus.runtime.version  
					    }; 
						if(uni.getStorageSync('baseUrl')){
							this.$request({
								data:req
							}).then(res => {
								if (res.Msg_info[0].status == 1) {
								    uni.showModal({ //提醒用户更新  
								        title: "更新提示",  
								        content: res.Msg_info[0].note,  
								        success: (ress) => {  
								            if (ress.confirm) {  
													
								                plus.runtime.openURL(res.Msg_info[0].url);  
								            }  
								        }  
								    })  
								} 
							}) 
						}else{
							uni.showModal({ //提醒用户更新
							    title: "无服务器配置",  
							    content:"当前无服务器配置,请前往配置", 
								showCancel:false,
							    success: (ress) => {  
							        if (ress.confirm) {  
										console.log('adsas');	
							            uni.navigateTo({
							            	url:'peizhi'
							            }) 
							        }  
							    }  
							})
						}
			//#endif
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			currentchange(e) {
				// console.log(e);
				this.current = e.detail.current
				this.role = this.name[this.current]
			},
			login() {
				let _this = this
				if (_this.passwordState == 'cb') {
					//用户勾选“记住密码”
					_this.user.checked = true
					console.log('记住密码');
					uni.setStorageSync('userName', _this.user.loginname);
					uni.setStorageSync('userPsw', _this.user.password);
		
				} else {
					//用户没有勾选“记住密码”
					console.log('取消记住密码');
					uni.removeStorageSync('userName');
					uni.removeStorageSync('userPsw');
		
					_this.user.checked = false
				}
				if (_this.user.loginname && _this.user.password) {
					const current = _this.current;
					_this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'登录',
							role:_this.role,
							// phone:'17752546017',
							// password:'z',
							phone:_this.user.loginname,
							password:_this.user.password
						}
					}).then(res => {
						console.log(res.Msg_info[0]);
						if(res.Msg_info[0].error){
							uni.showToast({
								title:res.Msg_info[0].error,
								icon:'none'
							})
							return
						}
						const resdata = res.Msg_info[0]
						const userinfo = {
						    userid : resdata.userid,
						    userName : resdata.userName,
						    userDept : resdata.userDept,
							company_name : 	resdata.company_name,
							company_id : resdata.company_id,
							role:_this.role,
						}
						Vue.prototype.$userinfo = userinfo;    //将全局变量模块挂载到Vue.prototype中
						// uni.setStorageSync('company_id',resdata.company_id)
						// uni.setStorageSync('company_name',resdata.company_name)
						// uni.setStorageSync('userDept',resdata.userDept)
						// // uni.setStorageSync('userName',resdata.userName)
						uni.setStorageSync('userid',resdata.userid)
						uni.setStorageSync('role', _this.role)
						Vue.prototype.$dingshi = setInterval(()=>{
							uni.getLocation({
							    type: 'gcj02',
							    success: function (res) {
							        console.log('当前位置的经度：' + res.longitude);
							        console.log('当前位置的纬度：' + res.latitude);
									_this.$request({
										data:{
											proc:'APP_YWY_PORT',
											type:'GPS',
											userid:_this.$userinfo.userid,
											user_jd:res.longitude,
											user_wd:res.latitude,
											clientid:_this.clientid ||uni.getStorageSync('clientid'),
											model:_this.model||uni.getStorageSync('model')
										}
									}).then(ress => {
										console.log(ress);
									})
							    }
							});
							console.log('全局定时器');
						},120000)
						uni.reLaunch({
							url: '../index/index?current='+current
						})
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '账号密码不能为空',
					})
				}
			},
			//忘记密码方法
			passwordTo() {
				uni.navigateTo({
					url: 'password'
				})
			},
			//记住密码方法
			change(e) {
				const _this = this
				_this.passwordState = e.detail.value[0];
				console.log(e.detail.value[0]);
				console.log(_this.user.checked);
				// console.log(e.detail.value[0]); == cb
				// console.log(_this.$u.test.mobile(_this.user.loginname));验证手机号方法
				
			},
			peizhi(){
				uni.navigateTo({
					url:'peizhi'
				})
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		text-align: center;
		overflow: hidden;
	}
.navbar{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100vw;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
		font-size: 18px !important;
		
	}
	.icon-img {
		width: 100px;
		height: 100px;
		margin: 70px auto;
		border-radius: 30px;
		overflow: hidden;
	}

	.icon-img image {
		position: relative;
		left: -2px;
		top: -3px;
		width: 105px;
		height: 105px;
	}

	.swiper {
		width: 100vw;
		height: 460rpx;
	}

	.swiper .swiper-item {
		width: 100vw;
		height: 100%;
	}

	.swiper .swiper-item image {
		width: 100%;
		height: 100%;
	}

	.input {
		margin: 20px auto;
		width: 94vw;
		height: 100px;
		overflow: hidden;
		border-radius: 5px;
		background-color: #FFFFFF;
	}

	.input-item {
		display: flex;
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 25px;
	}

	.content {
		width: 100%;
		display: inline-block;
		height: 50px;
		padding-left: 10px;
		line-height: 50px;
		text-align: left;
		font-size: 21px;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		width: 90vw;
		height: 20px;
		line-height: 20px;
		margin: 10px auto;
	}

	.login {
		width: 70vw;
		height: 40px;
		margin: 50px auto;
		line-height: 40px;
		background-color: #00b800;
		color: #FFFFFF;
		font-size: 25px;
		border-radius: 7px;

	}
	.peizhi{
		box-sizing: border-box;
		margin-top: 230rpx;
		width: 100vw;
		/* height: 200px;
		line-height: 200px; */
		text-align: center;
		
	}
</style>
