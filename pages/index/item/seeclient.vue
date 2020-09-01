<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" title="查看客户"  @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="content-list">
				<view class="list-item" style="border-bottom: 10px solid #e1e1e1;">
					<view class="item-left">
						客户类型
					</view>
					<view class="item-right">
						{{kh_data.kh_type}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						公司名称
					</view>
					<view class="item-right">
						{{kh_data.kh_name}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						联系人
					</view>
					<view class="item-right">
						{{kh_data.kh_person}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						手机号码
					</view>
					<view class="item-right" style="">
						{{kh_data.kh_phone}} |<uni-icons type="phone" size="23" color="#55aa00" @click="makePhoneCall"></uni-icons>
					</view>
				</view>
				<view class="list-item" style="border-bottom: 10px solid #e1e1e1;">
					<view class="item-left">
						收货地址
					</view>
					<view class="item-right">
						{{kh_data.kh_sh_address}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						客户地址
					</view>
					<view class="item-right">
						{{kh_data.kh_address}}
					</view>
				</view>
			</view>
		</view>
		<!-- <map :latitude="" :longitude=""></map> -->
		<view class="addressmap">
			<map :latitude="latitude" :longitude="longitude"
				 :markers="markers"	scale="11"
				 style="width: inherit; height: inherit;"
			></map>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kh_data:{
					"kh_type":"其他","kh_name":"东莞市步前方药店","kh_person":"李伟",
					"kh_phone":"15123041341","kh_sh_address":"广东省东莞市寮步镇向西村",
					"kh_address":"广东省东莞市寮步镇向西村",
					"kh_map":{
						
					}
				},
				//地图组件相应数据
				title:"map",
				latitude: 39.909,
				longitude: 116.39742,
				markers:[
					    {
						id:1,
						latitude: 39.909,
						longitude: 116.39742,
						iconPath:'../../../static/image/map2.png',
						width:10,
						height:10,	
						callout:{
							content:"公司\n公司名称",
							bgColor:"#ffffff"
							},
						},
					]	
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			//拨号方法
			makePhoneCall() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: '1345576897',
				
				})
			},
			//地图视野发生变化方法
			regionchange(e){
				// console.log(e);
			}
		}
	}
</script>
	
<style lang="scss">
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	}
	.content {
		width: 100vw;
		font-size: $uni-font-size-lg;
	}
	.list-item {
		height: 45px;
		padding: 0 10px;
		line-height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e1e1e1;
	}
	.addressmap {
		width: 94vw;
		height: calc(100vh - 358px);
		margin: 10px auto;
		/* background-color: #0077AA; */
	}
</style>
