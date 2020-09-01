<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" title="消息中心"  @clickLeft="back"></uni-nav-bar>
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

</style>
