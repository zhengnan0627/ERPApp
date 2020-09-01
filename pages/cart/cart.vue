<template>
	<view class="container">
		<uni-nav-bar rightIcon="trash" size="30" title="购物车" fixed="true"></uni-nav-bar>
		<scroll-view scroll-y="true" class="scroll-view">
			<view class="scroll-content">
				<view class="content-title">
					明目地黄丸
				</view>
				<view class="content-list">
					<view class="content-img list-item">
						<image src="../../static/image/carticon.png" mode=""></image>
					</view>
					<view class="list-item content-word">
						<view class="word1">
							包装说明:件装:600 中包装:1最小包装:1
						</view>
						<view class="word2">
							商品id:SPH0059251
						</view>
						<view class="word3">
							¥ 100.0元/盒
						</view>
						<view class="word4">
							数量:X2
						</view>
					</view>
				</view>
			</view>
			<view class="scroll-content">
				<view class="content-title">
					明目地黄丸
				</view>
				<view class="content-list">
					<view class="content-img list-item">
						<image src="../../static/image/carticon.png" mode=""></image>
					</view>
					<view class="list-item content-word">
						<view class="word1">
							包装说明:件装:600 中包装:1最小包装:1
						</view>
						<view class="word2">
							商品id:SPH0059251
						</view>
						<view class="word3">
							¥ 100.0元/盒
						</view>
						<view class="word4">
							数量:X2
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="footer-icon">
				<block class="footer-r">结算</block>
			</view>
			<view class="footer-title" style="display: flex;">
				合计：<view class="footer-l" style="color:#ff0000;">¥400.0</view>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
	}
	.scroll-view {
		height: 1040rpx;
	}
	.scroll-content {
		width: 100vw;
		height: 360rpx;
		background-color: #FFFFFF;
		border-top: 16rpx solid #EEEEEE;
	
	}
	.scroll-content .content-title {
		padding:14rpx;
		font-size: 44rpx;
		font-weight: 500;
		border-bottom: 2px solid #EEEEEE;
		
	}
	.content-list {
		display: flex;
		width: 100vw;
		height: 20vh;
		line-height: 60rpx;
		justify-content: center;
		align-items: center;
		/* background-color: #222222; */
	}
	.content-img {
		width: 30vw;
		height: 15vh;
	}
	.content-img image {
		width: 100%;
		height: 100%;
	}
	.content-word {
		font-size: 30rpx;
	}
	.content-word .word2 {
		color: #a6a6a6;	
	}
	.content-word .word3 {
		color: #ff0800;
	}
	.footer {
		width: 100vw;
		position: fixed;
		
		/* #ifdef APP-PLUS*/
			bottom: 0 !important;
		/* #endif */
		bottom: 100rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #EEEEEE;
		background-color: #FFFFFF;
		display: flex;
		flex-direction:row-reverse;
	}
	.footer-icon {
		width: 20vw;
		height: 100%;
		background-color: #ff0000;
		color: #FFFFFF;
		text-align: center;
	}
	.footer-title {
		width: 40vw;
		height: 100%;
		font-size: 36rpx;
	}
	.footer-l{
		color: #ff0000;
	}
</style>
