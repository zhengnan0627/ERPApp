<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" @clickLeft="back">
			<view slot="default" class="icon-font" style="width: 70vw;">
				<uni-search-bar @input="" radius="90" cancelButton="none" placeholder="手机号/客户公司/客户名称" />
			</view>
		</uni-nav-bar>
		<!-- <view class="tabbar">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view> -->
		<!-- <view class="header">
			<text>我的客户</text>
		</view> -->
		<block v-for="item in 3">
			<navigator url="seeclient">
				<view class="scroll-item">
					<view class="items scroll-number" style="font-size: 15px;">
						编号:{{item}}
					</view>
					<view class="items scroll-store">
						东莞市千房药店
					</view>
					<view class="items scroll-address">
						东莞市步前村
					</view>
					<view class="items scroll-person">
						林伟 15137317677
					</view>
				</view>
			</navigator>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				tabList: ['我的客户', '公司客户'], //普通数据赋值
				//客户列表信息
				clientList: [{
					"kehu_id": "0",
					"kehu_store": "东莞市千房药店",
					"kehu_address": "东莞市步前村",
					"kehu_person": "林伟",
					"kehu_phone": "15137317677",
				}],
			}
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}

	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.scroll-item {
		width: 100vw;
		height: 200rpx;
		padding: 20rpx 20rpx;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #EEEEEE;
	}

	.items {
		flex: 1;
		margin: 4rpx 0;
	}

	.scroll-item .scroll-title {
		flex: 1;
		font-size: 24rpx;
		color: #4CD964;
	}

	.scroll-item .scroll-store {
		flex: 1;
		font-size: 38rpx;
		font-weight: 500;
		color: #000000;
	}

	.scroll-item .scroll-address,
	.scroll-item .scroll-person {
		flex: 1;
		font-size: 30rpx;
	}
</style>
