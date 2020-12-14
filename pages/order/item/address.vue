<template>
	<view class="tui-safe-area">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="选择地址" fixed="true" style="z-index: 99999999;"/>
		<view class="tui-address">
			<block v-for="(item,index) in addressList" :key="index">
				<tui-list-cell padding="0">
					<view class="tui-address-flex" @click="selectaddress(item,index)">
						<view class="tui-address-name tui-ellipsis">{{item.a_name}}</view>
						<view class="tui-address-name tui-address-tel">{{item.a_phone}}</view>
						<view class="tui-address-name tui-address-detail">
							<view class="tui-address-label" v-if="item.is_default == '1'">默认</view>
							<text>{{item.a_address}}</text>
						</view>
					</view>
				</tui-list-cell>
			</block>
		</view>
		<!-- 新增地址 -->
		<!-- <view class="tui-address-new">
			<tui-button shadow shape="circle" type="danger" height="88rpx" @click="editAddr">+ 新增收货地址</tui-button>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [1,2,3],
				kehuinfo:{}
			}
		},
		onLoad: function(options) {
			this.kehuinfo = JSON.parse(options.kehuinfo)
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'收货地址',
					userid:this.$userinfo.userid,
					c_id:this.kehuinfo.c_id,
				}
			}).then(res => {
			const resdata = res.Msg_info
			console.log(resdata);
			if(resdata[0].error){
				this.addressList = []
			}else{
				this.addressList = resdata
				}
			})
		},
		onShow: function() {},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			selectaddress(item,index){
				console.log(item);
				uni.navigateBack({
				})
				this.$nextTick(function(){
					this.$bus.$emit('selectaddress',item)
				})
				
			}
		}
	}
</script>

<style>
	.tui-address {
		width: 100%;
		padding-top: 20rpx;
		padding-bottom: 160rpx;
	}
	.tui-address-flex {
		box-sizing: border-box;
		padding: 5px 15px;
		/* display: flex;
		justify-content: space-between;
		align-items: center; */
	}

	.tui-address-main {
		width: 600rpx;
		height: 70rpx;
		display: flex;
		font-size: 36rpx;
		line-height: 86rpx;
		padding-left: 30rpx;
	}

	.tui-address-name {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
	}

	.tui-address-tel {
		/* margin-left: 10rpx; */
		font-size: 30rpx;
	}

	.tui-address-detail {
		font-size: 30rpx;
		word-break: break-all;
		padding-bottom: 25rpx;
		/* padding-left: 25rpx; */
		/* padding-right: 120rpx; */
	}

	.tui-address-label {
		padding: 5rpx 8rpx;
		flex-shrink: 0;
		background: #e41f19;
		border-radius: 6rpx;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		line-height: 25rpx;
		transform: scale(0.8);
		transform-origin: center center;
		margin-right: 6rpx;
	}

	.tui-address-imgbox {
		width: 80rpx;
		height: 100rpx;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 10rpx;
	}

	.tui-address-img {
		width: 36rpx;
		height: 36rpx;
	}

	.tui-address-new {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		padding: 20rpx 25rpx 30rpx;
		box-sizing: border-box;
		background: #fafafa;
	}

	.tui-safe-area {
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
