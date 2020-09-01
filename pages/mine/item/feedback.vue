<template>
	<view class="container">
		<uni-nav-bar left-icon="back" title="反馈信息"rightIcon="paperplane"@clickRight="mail"  @clickLeft="back"></uni-nav-bar>
		<view class="input">
			<textarea type="text" placeholder="编辑您的建议" maxlength="-1" adjust-position="false" style="width: 99%; height: 95%;"/>
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
			mail() {
				uni.shareWithSystem({
					
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
	}
	.input {
		width: 95vw;
		height: 200px;
		margin: 0 auto;
		margin-top: 10px;
		background-color: #FFFFFF;
	}
</style>
