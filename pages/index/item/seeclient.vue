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
						{{kehuinfo.c_type}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						公司名称
					</view>
					<view class="item-right">
						{{kehuinfo.c_company_name}}
					</view>
					<view class="">
						|<uni-icons type="paperplane" size="23" color="#55aa00" @click="mapnavigation"></uni-icons>
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						联系人
					</view>
					<view class="item-right">
						{{kehuinfo.c_contact}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						手机号码
					</view>
					<view class="item-right" style="">
						{{kehuinfo.c_phone}} |<uni-icons type="phone" size="23" color="#55aa00" @click="makePhoneCall"></uni-icons>
					</view>
				</view>
				<view class="list-item" style="border-bottom: 10px solid #e1e1e1;">
					<view class="item-left">
						收货地址
					</view>
					<view class="item-right">
						{{kehuinfo.c_shh_address}}
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						客户地址
					</view>
					<view class="item-right">
						<view class="right-address">
							{{kehuinfo.c_gs_address}}
						</view>
						
						<text @click="ToLocation" style="color: #FFFFFF;margin-left: 5px;
						 height: 25px; line-height: 25px;
						  padding: 0px 7px; background-color: #55aa00;
						   border-radius: 10px;"
						>纠正坐标</text>
					</view>
				</view>
			</view>
		</view>
		<!-- <map :latitude="" :longitude=""></map> -->
		<view class="addressmap">
			<map :latitude="latitude" :longitude="longitude" @regionchange="regionchange"
				 :markers="markers"	:scale="scale" :key="mapkey"
				 style="width: inherit; height: inherit;"
			></map>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kehuinfo:{},//客户信息，从上级页面传参过来
				kh_data:{
					"kh_type":"其他","kh_name":"东莞市步前方药店","kh_person":"李伟",
					"kh_phone":"15123041341","kh_sh_address":"广东省东莞市寮步镇向西村",
					"kh_address":"广东省东莞市寮步镇向西村",
					"kh_map":{
						
					}
				},
				//地图组件相应数据
				title:"map",
				mapkey:1,
				scale:13,
				latitude: 39.909,
				longitude: 116.39742,
				markers:[
					    {
						id:1,
						latitude: 39.909,
						longitude: 116.39742,
						iconPath:'../../../static/image/map2.png',
						width:2,
						height:2,
						},
					]	
			}
		},
		onLoad:function(option){
			this.kehuinfo = JSON.parse(option.item)
			console.log(this.kehuinfo);
			this.longitude = this.kehuinfo.c_jd
			this.latitude = this.kehuinfo.c_wd
			this.markers[0].longitude = this.kehuinfo.c_jd
			this.markers[0].latitude = this.kehuinfo.c_wd
			uni.$on('add',this.addressupdata)
		},
		onUnload(){
			uni.$off('add')
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			addressupdata(){
				setTimeout(() => {
					console.log('监听到发送事件');
					this.longitude = this.kehuinfo.c_jd
					this.latitude = this.kehuinfo.c_wd
					this.markers[0].longitude = this.kehuinfo.c_jd
					this.markers[0].latitude = this.kehuinfo.c_wd
					// this.mapkey += 1
					console.log(this.kehuinfo.c_jd,this.kehuinfo.c_wd);
				}, 0)
			},
			//地图导航方法
			mapnavigation() {
				console.log('地图导航方法');
				let _this = this
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					geocode: true,
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;
						// console.log(latitude,        longitude);
					// 	const address = res.address;
					// console.log('详细地址123：' + address.name);
					console.log();
				        uni.openLocation({
				            latitude: +_this.kehuinfo.c_wd,
				            longitude: +_this.kehuinfo.c_jd,
							name:_this.kehuinfo.c_company_name,
							address:_this.kehuinfo.c_gs_address,
				            success: function (res) {
				                console.log('success');
								 console.log('详细地址：' + res.address);
				            }
				        });
				    }
				});
			},
			//拨号方法
			makePhoneCall() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: this.kehuinfo.c_phone,
				
				})
			},
			//地图视野发生变化方法
			regionchange(e){
				
				// this.scale = 12.341231
				// console.log(e);
				// console.log(this.scale);
			},
			ToLocation(){
				uni.navigateTo({
					url:'chooseLocation?kehuinfo='+JSON.stringify(this.kehuinfo)
				})
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
		box-sizing: border-box;
		width: 100%;
		height: 45px;
		padding: 0 10px;
		line-height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e1e1e1;
		
	}
	.item-right{
		flex: 1;
		text-align: right;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		justify-content: center;
		vertical-align: middle;
	}
	.list-item:last-child .item-right{
		display: flex;
		height: 45px;
		margin-left: 5px;
		align-items: center;
	}
	.right-address{
		flex: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.addressmap {
		width: 94vw;
		height: calc(100vh - 358px);
		margin: 10px auto;
		/* background-color: #0077AA; */
	}
</style>
