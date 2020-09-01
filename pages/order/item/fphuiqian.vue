<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="发票回签" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" cancelButton="none"/>
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item}}</view>
				</view>
			</view>		
		</view>
		<view class="zhanwei" style="height: 192rpx;"/>		
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
	page{
		background: #EEEEEE;
	}
	.container {
		width: 100vw;
		overflow: hidden;
	}	
</style>
