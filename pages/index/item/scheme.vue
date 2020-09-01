<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="促销方案"  @clickLeft="back"/>
		<navigator url="">
			<view class="item-container">
				<view class="item-title">
					最新促销方案
				</view>
				<view class="item-content">
					<view class="">
						2017-12-14
					</view> 
					<view class="list-item">
						admin
					</view>
				</view>
			</view>
		</navigator>
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
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.item-container {
		width: 100vw;
		height: 80px;
		margin-top: 8px;
		padding-left: 8px;
		background-color: #FFFFFF;
	}
	.item-title {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		font-size: 22px;
		font-weight: 500;
	}
	.item-content {
		width: 100vw;
		height: 27px;
		line-height: 27px;
		display: flex;
		font-size: 17px;
		color: #888888;
	}
	.list-item {
		margin-left: 9px;
	}
</style>
