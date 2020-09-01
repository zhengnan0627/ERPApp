<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="忘记密码" @clickLeft="back"></uni-nav-bar>
		<view class="icon-img">
			<image src="../../static/image/carticon.png" mode=""></image>
		</view>
		<view class="input">
			<view class="input-item" >
				<uni-icons type="contact" size="30" color="#00aa00"></uni-icons>
				<input type="number" value="" cursor="1" v-model="account" maxlength="20" placeholder="请输入手机号" class="content"/>
			</view>
			<view class="input-item">
				<uni-icons type="locked"size="30" color="#00aa00"></uni-icons>
				<input type="number" value="" v-model="password" placeholder="请输入新密码" maxlength="20" class="content"/>
			</view>
			<view class="verify  input-item">
				<uni-icons type="email" size="30" color="#00aa00"></uni-icons>
				<view class="verify-title">
					<input type="number" placeholder="请输入验证码"class="content" />
				</view>
				<view class="verify-tip">
					<!-- 发送验证码 -->
					<u-button type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
					<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
				</view>
				<!-- <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
					<u-form-item prop="code">
						<u-input :border="0" placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
						<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
					</u-form-item>
				</u-form> -->
			</view>
		</view>
		
		<view class="login" @click="login">
			确定
		</view>
	<!-- 	<view class="">
			<button @click="decrement">-</button>
			    {{count}}{{sex}}{{from}}{{myCmpted}}
			<button @click="increment">+</button>
		</view> -->
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		
		data() {
			let that = this;
			return {
				str:'国籍',
				account:'',
				password:'',
				model: {
					code: '',
				},
				rules: {
					code: [
						{
							required: true,
							message: '请输入验证码',
							trigger: ['change','blur'],
						},
						{
							type: 'number',
							message: '验证码只能为数字',
							trigger: ['change','blur'],
						}
					],
				},
				codeTips: '',
				errorType: ['message'],
			}
		},
		// computed:{
		// 	count(){
		// 		return this.$store.state.count
		// 	},
		// 	...mapState({ //...对象展开符 展开mapState返回的对象并合并到computed中
		// 		count:'count'
		// 	})
		// },
		computed:mapState({
			count:'count',//第一种写法 字面量
			sex:(state)=>state.sex,//第二种写法
			from:function(state){//用普通函数this是指向vue实例的
				return this.str+':'+state.from
			},
			//注意下面的写法看起来和上面一样，只是使用了箭头函数，事实上箭头函数的this指针并没有
			//指向vue实例，因此不能滥用箭头函数
			// from:(state)=> this.str+':'+state.from,
			myCmpted:function(){
				//这里不使用state参数，测试一下computed的原有用法
				return "测试"+this.str
			}
		}),
		onReady() {
			// this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			//vuex方法测试
			increment(){
				this.$store.commit('increment')
				
			},
			decrement(){
				this.$store.commit('decrement')
			},
			//返回上级页面方法
			back() {
				uni.navigateBack({			
				})
			},
			login() {
				uni.showToast({
					icon:'none',
					title:'更改成功',
					
					complete: () => {
							setTimeout(function(){
								uni.redirectTo({
									url:'loginpages'
								})
							},1000) 
					}
				})
			},
			codeChange(text) {
				this.codeTips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
		}
	}
</script>

<style>
	/* @import "../../uview-ui/index.scss"; */
	.container {
			 width: 100vw;
			 height: 100vh;
			 background-color: #EEEEEE;
			 text-align: center;
			 overflow: hidden;
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
	.input {
		
		width: 100vw;
		overflow: hidden;
		background-color: #FFFFFF;
	}
	.input-item {
		display: flex;
		width: 100%;
		padding-left: 8px;
		height: 50px;
		line-height: 50px;
		font-size: 25px;
	}
	.input-item input{
		border-bottom: 1px solid #EEEEEE;
	}
	.content {
		width: 100%;
		display: inline-block;
		height: 50px;
		padding-left: 10px;
		line-height:50px;
		text-align:left;
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
	.verify {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
	}
	.verify-title {
		width: 55vw;
		height: 42px;
		line-height: 42px;
	}
	.verify input {
		width: 100%;
		height: 42px;
		line-height: 42px;
		margin-left: 5px;
	}
	.verify-tip {
		flex: 1;
		/* width: 30vw; */
		height: 43px;
		/* line-height: 43px; */
		display: flex;
		align-items: center;
		text-align: center;
		/* border-left: 1px solid #00DC00; */
		margin-left: 15px;
		font-size: 22px;
		color: #00DC00;
		border-bottom: 1px solid #EEEEEE;
	}
</style>

