<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="企业公告"  @clickLeft="back"/>
		<block v-for="(item,i) in 3" :key="i">	
				<view class="item-container"  @click="noticsubpages">
					<view class="item-title">
						医药销售技巧
					</view>
					<view class="item-content">
						<view class="">
							2019-12-14
						</view> 
						<view class="list-item">
							系统管理员
						</view>
						<view class="" style="position: absolute; right: 18px;">
							阅读(12)
						</view>
					</view>
				</view>
		</block>		
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
			noticsubpages() {
				uni.navigateTo({
					url:'noticsubpages'
				})
			}
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
		margin-top: 8px;
		padding-left: 8px;
		background-color: #FFFFFF;
	}
	.item-title {
		width: 100vw;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		font-weight: 500;
	}
	.item-content {
		width: 100vw;
		height: 35px;
		line-height: 35px;
		position: relative;
		display: flex;
		font-size: 16px;
		color: #888888;
	}
	.list-item {
		margin-left: 9px;
	}
</style>
