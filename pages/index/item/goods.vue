<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="商品查询"  @clickLeft="back"></uni-nav-bar>
		<view class="ser">
			<uni-search-bar  placeholder="快速查询商品数据" @confirm="search"/>
		</view>
		<view class="icon-container">
			<view class="icon-item" @click="navigator0">
				<view class="icon-img">
					<image src="../../../static/image/hot.png" mode=""></image>
				</view>
				<view class="icon-title">
					畅销排行
				</view>
			</view>
			<view class="icon-item" @click="navigator1">
				<view class="icon-img">
					<image src="../../../static/image/time.png" mode=""></image>
				</view>
				<view class="icon-title">
					效期品种
				</view>
			</view>
			<view class="icon-item" @click="navigator2">
				<view class="icon-img">
					<image src="../../../static/image/new.png" mode=""></image>
				</view>
				<view class="icon-title">
					新品速递
				</view>
			</view>
			<view class="icon-item" @click="navigator3">
				<view class="icon-img">
					<image src="../../../static/image/dull.png" mode=""></image>
				</view>
				<view class="icon-title">
					滞销查询
				</view>
			</view>
			<view class="icon-item" @click="navigator4">
				<view class="icon-img">
					<image src="../../../static/image/more.png" mode=""></image>
				</view>
				<view class="icon-title">
					商品列表
				</view>
			</view>
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
			},
			search() {
				
			},
			navigator0() {
				uni.navigateTo({
					url:'goodsitems?id=0'
				})
			},
			navigator1() {
				uni.navigateTo({
					url:'goodsitems?id=1'
				})
			},
			navigator2() {
				uni.navigateTo({
					url:'goodsitems?id=2'
				})
			},
			navigator3() {
				uni.navigateTo({
					url:'goodsitems?id=3'
				})
			},
			navigator4() {
				uni.navigateTo({
					url:'goodsitems?id=4'
				})
			}
		}
	}
</script>
	
<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.ser {
		width: 100vw;
		margin-top: 20px;	
	}
	.icon-container {
		width: 100vw;
		/* height: 180px; */
		margin-top: 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: flex-start;
		align-content: flex-start;
		/* background-color: #0077AA; */

	}
	.icon-item {
		width: 25vw;
		/* height: 88px; */
		padding:4px 0;
		text-align: center;
		/* background-color: #FFFFFF; */
	}
	.icon-img {
		width: 40px;
		height: 40px;
		text-align: center;
		margin: 0 auto;
		
	}
	.icon-img image {
		width: 100%;
		height: 100%;
	}
	.icon-title {
		width:100%;
		/* height: 20px; */
		padding: 1px 0;
		font-size: 36rpx;
		color: #818181;
	}

</style>
