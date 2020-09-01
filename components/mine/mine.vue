<template>
	<view class="container">
		<view class="header">
			<view class="header-contont">
				<view class="header-icon">
					<image src="../../static/image/logo1.png" mode=""></image>
				</view>
				<view class="header-mine">
					<view class="mine-name">
						52号业务员
					</view>
					<view class="mine-name">
						13350001513
					</view>
					<view   style="text-align: right; width: 60vw; display: flex; flex-direction: row-reverse;">
						<view class="mine-qiehuan" @click="changerole">
							切换账户
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="content">
			<navigator url="../../pages/mine/item/integral" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/jifen.png" mode=""></image>
					</view>
					<view class="item-title">
						积分记录
					</view>
				</view>
			</navigator>
			<navigator url="../../pages/mine/item/earnings" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/shouyi.png" mode=""></image>
					</view>
					<view class="item-title">
						提成收益
					</view>
				</view>
			</navigator>
			<navigator url="../../pages/mine/item/order" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/dingdan.png" mode=""></image>
					</view>
					<view class="item-title">
						我的订单
					</view>
				</view>
			</navigator>
			<navigator url="../../pages/mine/item/news" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font"> 
						<image src="../../static/image/xiaoxi.png" mode=""></image>
					</view>
					<view class="item-title">
						消息中心
					</view>
				</view>
			</navigator> 
			
			
		</view>
		<view class="content">
			<navigator url="../../pages/mine/item/password" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/mima.png" mode=""></image>
					</view>
					<view class="item-title">
						修改密码
					</view>
				</view>
			</navigator>
			
			<navigator url="../../pages/mine/item/feedback" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/fankui.png" mode=""></image>
					</view>
					<view class="item-title">
						反馈信息
					</view>
				</view>
			</navigator>
			
			<view class="content-item" style="display: flex;">
				<view class="icon-font">
					<image src="../../static/image/banben.png" mode=""></image>
				</view>
				<view class="item-title">
					版本信息
					<view class="number" style="float: right; font-size: 26rpx; margin-right: 14rpx;">
						1.0
					</view>
				</view>
				
			</view>		
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			changerole() {
				uni.reLaunch({
					url: '../../pages/login/loginpages'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE !important;
	}
	.container {
		width: 100vw;
		height:calc(100vh - 100rpx);
		padding-bottom: 100rpx;
		overflow: hidden;
		background-color: #EEEEEE;
	}
	.header {
		width: 100vw;
		height: 250rpx;
		background-color: #00e700;
		border-radius:0 0 30% 30%;
		position: relative;
		margin-bottom: 150rpx;
	}
	.header-contont {
		position: absolute;
		top: 150rpx;
		left: 3vw;
		width: 94vw;
		padding: 10px 0;
		display: flex;
		align-items: center;
		border-radius: 10px;
		background-color: #ffffff;
		color: #000000;
	}
	.header-icon {
		width: 22vw;
		height: 22vw;
		margin-left: 40rpx;
		border-radius: 20px;
		overflow: hidden;
		text-align: center;
	}
	.header-icon image {
		width: 22vw;
		height: 22vw;
		/* position: relative;
		top: -2.5vw;
		left: -2vw; */
		overflow: hidden;
		border-radius: 30px;
	}
	.header-mine{
		width: 50vw;
		margin-left: 40rpx;
		font-size: ;
		color: #000000;
	}
	.mine-name {
		width: 60vw;
		height: 50rpx;
		font-size: 17px;
		line-height: 50rpx;
	}
	.mine-qiehuan {
		margin-right: 3vw;
		font-size: 14px;
		width: 20vw;
		height: 20px;
		line-height: 20px;
		text-align: center;
		padding: 2px 5px;
		border-radius: 10px;
		border: 1px solid #00DC00 ;
		color: #00DC00;
	}
	.content {
		width: 94vw;
		margin: 0 3vw;
		margin-top: 30rpx;
		background-color: #FFFFFF;
		border-radius: 10px;
	}
	.content .content-item {
		width: 100%;
		height: 90rpx;
		line-height:90rpx;
		vertical-align: middle;
		font-size: 36rpx;
		color: #000000;
		border-radius: 10px;
		
	}
	.icon-font {
		margin-left: 10rpx;
		position: relative;
		top: 22rpx;
		width: 60rpx;
		height: 55rpx;
		line-height: 55rpx;
	}
	.icon-font image {
		width: 100%;
		height: 100%;
	}	
	.item-title {
		margin-left: 10rpx;
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
	}
</style>
