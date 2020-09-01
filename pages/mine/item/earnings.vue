<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="提成收益" @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="content-item" style="width: 100vw; height: 50px; line-height: 50px;">
				电子钱包(元)
			</view>
			<view class="content-item" style="width: 100vw; height: 100px; line-height: 100px; font-size: 50px; ">
				1200
			</view>
			<view class="content-item content-item3">
				<view class="item-text" style="border-right: 2px solid #FFFFFF;">
					<view class="">
						500
					</view>
					<view class="">
						本月收益(元)
					</view>
				</view>
				<view class="item-text">
					<view class="">
						500
					</view>
					<view class="">
						本月提取(元)
					</view>
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
			} 
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	}
	.content {
		width: 100vw;
		height: 210px;
		padding-top: 15px;
		text-align: center;
		color: #FFFFFF;
		background-color: #00AA00;
		
	}
	.content-item3 {
		width: 100vw;
		height: 50px;
		display: flex; 
	}
	.item-text {
		width: 49vw;
		height: 50px;
	}
</style>
