<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="积分记录" @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="content-item" style="width: 100px; height: 100px; margin: 0 auto;">
				<image src="../../../static/image/integral.png" mode=""></image>
			</view>
			<view class="content-item" style="margin: 20px 0; ">
				
			</view>
			<view class="content-item">
				当前积分：0
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
		height: 200px;
		padding-top: 15px;
		text-align: center;
		color: #FFFFFF;
		background-color: #00AA00;
		
	}
	.content-item image {
		width: 100%;
		height: 100%;
	}
</style>
