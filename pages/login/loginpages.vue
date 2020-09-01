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
				<input style="border-bottom: 2px solid #EEEEEE; margin-right: 2px;" type="number" v-model="user.loginname" value=""
				 cursor="1" maxlength="20" placeholder="请输入手机号" class="content" />
			</view>
			<view class="input-item">
				<uni-icons type="locked" size="30" color="#00aa00" style="margin-left: 5px;"></uni-icons>
				<input type="number" value="" v-model="user.password" placeholder="请输入登陆密码" maxlength="20" class="content" />
			</view>
		</view>
		<view class="footer">
			<view class="text" @click="passwordTo">
				忘记密码
			</view>
			<view class="text" style="display: flex;">
				<checkbox-group @change="change">
					<label>
						<checkbox value="cb" :checked="user.checked" />
					</label>
					<label style="display: none;">
						<checkbox value="cb" />未选中
					</label>
				</checkbox-group>记住密码
			</view>
		</view>
		<view class="login" @click="login">
			登录
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:['业务员','配送员','管理员',],
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
			//页面加载完成，获取本地存储的用户名及密码
			const userName = uni.getStorageSync('userName');
			const userPsw = uni.getStorageSync('userPsw');
			const userChecked = uni.getStorageSync('userChecked');
			// console.log(userChecked);
			if (userName && userPsw) {
				_this.user.loginname = userName;
				_this.user.password = userPsw;
				_this.user.checked = userChecked;
			} else {
				_this.user.loginname = "";
				_this.user.password = "";
				_this.user.checked = false;
			}
			//请求案例
			// this.$u.post('http://www.example.com', {
			// 				id: 3,
			// 				menu: 1
			// 			}).then(res => {
			// 				console.log(res);
			// 			});
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			currentchange(e) {
				console.log(e);
				
				this.current = e.detail.current

			},
			login() {
				let _this = this
				if (_this.passwordState) {
					//用户勾选“记住密码”
					// console.log('记住密码');
					uni.setStorageSync('userName', _this.user.loginname);
					uni.setStorageSync('userPsw', _this.user.password);
					uni.setStorageSync('userChecked', true);
				} else {
					//用户没有勾选“记住密码”
					// console.log('取消记住密码');
					uni.removeStorageSync('userName');
					uni.removeStorageSync('userPsw');
					uni.removeStorageSync('userChecked');
					// _this.user.loginname = "";
					// _this.user.password = "";	
					_this.user.checked = false;
				}
				if (this.user.loginname && this.user.password) {
					// this.change(e);
					const current = _this.current;
					uni.reLaunch({
						url: '../index/index?current='+current
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
				// console.log(e);
				// console.log(e.detail.value[0]); == cb
				// console.log(_this.$u.test.mobile(_this.user.loginname));验证手机号方法
				
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
</style>
