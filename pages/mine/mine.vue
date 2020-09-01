<template>
	<view class="container">
		<view class="header">
			<view class="header-icon">
				<image src="../../static/image/carticon.png" mode=""></image>
			</view>
			<view class="header-mine">
				<view class="mine-name">
					52号业务员
				</view>
				<view class="mine-name">
					13350001513
				</view>
			</view>
		</view>
		<view class="content">
			<navigator url="./item/integral" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/jifen.png" mode=""></image>
					</view>
					<view class="item-title">
						积分记录
					</view>
				</view>
			</navigator>
			<navigator url="./item/earnings" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/shouyi.png" mode=""></image>
					</view>
					<view class="item-title">
						提成收益
					</view>
				</view>
			</navigator>
			<navigator url="./item/order" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/dingdan.png" mode=""></image>
					</view>
					<view class="item-title">
						我的订单
					</view>
				</view>
			</navigator>
			<navigator url="./item/news" hover-class="none">
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
			<navigator url="item/password" hover-class="none">
				<view class="content-item" style="display: flex;">
					<view class="icon-font">
						<image src="../../static/image/mima.png" mode=""></image>
					</view>
					<view class="item-title">
						修改密码
					</view>
				</view>
			</navigator>
			
			<navigator url="item/feedback" hover-class="none">
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
	
</script>

<style>

	.container {
		width: 100vw;
		height:1500px;
		background-color: #EEEEEE;
	}
	.header {
		width: 100vw;
		height: 250rpx;
		background-color: #00aa00;
		display: flex;
		align-items: center;
	}
	.header-icon {
		width: 24vw;
		height: 14vh;
		margin-left: 60rpx;
		border-radius: 20px;
		overflow: hidden;
		text-align: center;
	}
	.header-icon image {
		width: 27vw;
		height: 16vh;
		position: relative;
		top: -16rpx;
		left: -10rpx;
		overflow: hidden;
		border-radius: 30px;
	}
	.header-mine{
		width: 50vw;
		margin-left: 40rpx;
		font-size: ;
		color: #FFFFFF;
	}
	.mine-name {
		width: 50vw;
		height: 60rpx;
		line-height: 60rpx;
	}
	.content {
		width: 100vw;
		margin-top: 30rpx;
		background-color: #FFFFFF;
	}
	.content .content-item {
		width: 100vw;
		height: 110rpx;
		line-height:110rpx;
		font-size: 36rpx;
		color: #000000;
		
	}
	.icon-font {
		margin-left: 10rpx;
		position: relative;
		top: 26rpx;
		width: 80rpx;
		height: 70rpx;
		line-height: 70rpx;
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
