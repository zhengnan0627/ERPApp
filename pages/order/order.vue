<template>
	<view class="container" >
		<uni-nav-bar title="代客下单" fixed="true"></uni-nav-bar>
		<view class="order-header">
			<view class="header-top">
				<view class="top-item top-item1">
					<uni-icons type="scan" size="100" color="white"></uni-icons>
				</view>
				<view class="top-item">	
					<uni-icons type="bars" size="100" color="white"></uni-icons>
				</view>
			</view>
			<view class="header-footer">
				<view class="footer-title">
					选择客户
				</view>
				<view class="footer-select">
					<uni-search-bar placeholder="请输入客户号" @confirm="search" cancelButton="none"/>
					<view class="select-tag">
						<view class="tag-item" style="background-color: #ff0000;">
							重置
						</view>
						<view class="tag-item" style="background-color: #00ff00;">
							确定
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="order-footer">
			<scroll-view scroll-y="true"  class="scroll-height" style="height: 300rpx;" >
				<view class="scroll-item"> 
					<view class="scroll-title">
						<uni-icons type="person" size="30" color="#3cff06"></uni-icons>普通用户
					</view>
					<view class="scroll-store">
						东莞市千房药店
					</view>
					<view class="scroll-person">
						林伟 15137317677
					</view>
				</view>
				<view class="scroll-item">
					<view class="scroll-title">
						<uni-icons type="person" size="30" color="#3cff06"></uni-icons>普通用户
					</view>
					<view class="scroll-store">
						东莞市千房药店
					</view>
					<view class="scroll-person">
						林伟 15137317677
					</view>
				</view>
				<view class="scroll-item">
					<view class="scroll-title">
						<uni-icons type="person" size="30" color="#3cff06"></uni-icons>普通用户
					</view>
					<view class="scroll-store">
						东莞市千房药店
					</view>
					<view class="scroll-person">
						林伟 15137317677
					</view>
				</view>
				<view class="scroll-item">
					<view class="scroll-title">
						<uni-icons type="person" size="30" color="#3cff06"></uni-icons>普通用户
					</view>
					<view class="scroll-store">
						东莞市千房药店
					</view>
					<view class="scroll-person">
						林伟 15137317677
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.container {
		width: 100vw;
	}
	.order-header {
		width: 100vw;
		height: 820rpx;
		position: relative;
		border-bottom: 16rpx solid #EEEEEE;
		/* background-color: #0086B3; */
	}
	.header-top {
		width: 100vw;
		height: 500rpx;
		line-height: 500rpx;
		background-color: #4CD964;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-item{
		width: 50vw;
		height: 240rpx;
		line-height: 240rpx;
		text-align: center;
	}
	.top-item1 {
		border-right: 10rpx solid #FFFDEF;
	}
	/* #ifdef APP-PLUS */
	.scroll-height {
		height: 160rpx !important;
	}
	/* #endif */
	.footer-title {
		width: 100vw;
		height: 100rpx;
		font-size: 40rpx;
		line-height: 100rpx;
		background-color: #EEEEEE;
	}
	.select-tag {
		width: 100vw;
		height: 80rpx;
		margin-top: 14rpx;
		display: flex;
		justify-content: flex-end;
		/* background-color: #FFFDEF; */
	}
	.select-tag .tag-item {
		width: 23vw;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-right: 50rpx;
		color: #FFFFFF;
	}
	.scroll-item {
		width: 100vw;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
	}
	.scroll-item .scroll-title {
		font-size: 30rpx;
		color: #4CD964;
	}
	.scroll-item .scroll-store {
		font-size: 40rpx;
		font-weight: 500;
		color: #000000;
	}
	.scroll-item .scroll-person {
		font-size: 30rpx;
	}
</style>
