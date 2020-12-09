<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="销售记录查询"  @clickLeft="back"></uni-nav-bar>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
		}
	}
</script>

<style>

</style>
