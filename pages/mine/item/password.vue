<template>
	<view class="container">
		<uni-nav-bar left-icon="back" title="修改密码"  @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="phone" style="display: flex;">
				<uni-icons type="phone" size="40"/>
				<view class="phone-title">
					<input type="number" placeholder="" />
				</view>
			</view>
			<view class="verify">
				<uni-icons type="locked" size="40"></uni-icons>
				<view class="verify-title">
					<input type="number" placeholder="请输入验证码" />
				</view>
				<view class="verify-tip">
					发送验证码
				</view>
			</view>
		</view>
		<view class="next">
			下一步
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
	}
	.content {
		width: 100vw;
		height: 100px;
		margin-top: 10px;
		background-color: #FFFFFF;
	}
	.phone {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
	}
	.phone-title {
		width: 100%;
		height: 42px;
		line-height: 42px;
	}
	.phone input {
		width: 100%;
		height: 42px;
		line-height: 42px;
		margin-left: 5px;
		border-bottom: 1px solid #EEEEEE;
	}
	.verify {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
	}
	.verify-title {
		width: 50%;
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
		height: 35px;
		line-height: 35px;
		border-left: 1px solid #00DC00;
		padding-left: 10px;
	}
	.next {
		width: 50vw;
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin: 0 auto;
		margin-top: 20px;
		border:2px solid #00AA00;
		background-color: #FFFFFF;
		border-radius: 40px;
		color: #00AA00;
	}
</style>
