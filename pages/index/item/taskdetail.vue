<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  @clickLeft="back"  title="任务详情"/>
		<view class="updata" v-if="updata">
			<view class="content">
				<view class="content-header">
					<view class="header-item item-left">
						任务编号:
					</view>
					<view class="header-item">
						ZHCNDA001298537
					</view>
					<view class="header-item item-left">
						公司名称:
					</view>
					<view class="header-item">
						{{taskdetailList.name}}
						
					</view>
					<view class="header-item item-left">
						公司地址:
					</view>
					<view class="header-item  item-site">
						
							<view class="site">
								{{taskdetailList.address}}
							
							</view>
						
					</view>
					<view class="header-item item-left">
						联系人:
					</view>
					<view class="header-item item-site">
						<view class="">
							{{taskdetailList.person+' '+taskdetailList.phone}}
						</view>
						<uni-icons type="phone" size="25"  @click="makePhoneCall" color="#00aa00"></uni-icons>
					</view>
				</view>
				<view class="content-footer">
					<view class="footer-item" @click="coordinates">
						<uni-icons type="compose" size="25" color="#00aa00" ></uni-icons>
						<view class="item-title">
							纠正坐标
						</view>
					</view>
					<view class="footer-item" @click="mapnavigation">
						<uni-icons type="location-filled" size="25" color="#00aa00"></uni-icons>
						<view class="item-title">
							导航
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="zhanwei" style="width: 100vw; height: 180px; background-color: #EEEEEE;">
			
		</view>
		<!-- <view class="tabbar" style="font-size: 20px;">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view>
		<view class="zhanwei" style="width: 100vw; height: 54px; background-color: #EEEEEE;">
			
		</view> -->
		<block v-for="item in 6">
			<view class="order-list">
				<view class="list-content">
					<view class="list-flex">
						<view class="">
							2020-06-06
						</view>
						<view class="" style="color: #55aa00;">
							出库单
						</view>
					</view>
					<view class="list-order">
						出库单号:XAZSAD00115648
					</view>
					<view class="list-flex">
						<view class="">
							整件:0
						</view>
						<view class="">
							散件:1
						</view>
						<view class="">
							袋装:0
						</view>
					</view>
				</view>
				<view class="list-icon">
					<navigator url="deliverylistdetails" hover-class="none"><uni-icons type="arrowright" size="30"></uni-icons></navigator>
				</view>
			</view>
			
		</block>
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		data() {
			return {
				index: 0,
				tabList: ['送货','取退货','收付款'], //普通数据赋值
				//上级页面传过来的任务详情数据
				taskdetailList:{},
				name:'',
				address:'',
				updata:true,
				chooselocation:{
					latitude:34.90183,
					longitude:113.904584
				}
			}
		},
		onLoad:function(option){
			// console.log('打印出上个页面传递的参数'+ option.taskdetailList); //打印出上个页面传递的参数。
			this.taskdetailList = JSON.parse(option.taskdetailList)
			// console.log(this.taskdetailList);
			// // const chooselocation = JSON.parse(option.chooselocation)
			// // console.log('打印出上个页面传递的参数'+JSON.parse(option.chooselocation)); //打印出上个页面传递的参数。
			// // console.log(option.chooselocation.latitude ); 
			// console.log('打印出上个页面传递的参数'+option.chooselongitude); //打印出上个页面传递的参数。
			// console.log('打印出上个页面传递的参数'+option.chooselatitude); //打印出上个页面传递的参数。
			// this.address =option.address
			// this.name = option.name
			// this.chooselocation.latitude   = option.chooselocation.latitude 
			// this.chooselocation.longitude   = option.chooselocation.longitude 
			// chooselocation.latitude   	 chooselocation.longitude 

			// console.log(this.chooselocation.longitude);
			
			 // console.log(this.address);
		},
		// onShow:function(option){
		// 	// const location = option.location.replace(/""/g, "");
		// 	// location = JSON.parse(location)
		// 	console.log('打印出上个页面传递的参数'+option); //打印出上个页面传递的参数。
		// },
		methods: {
			back(){
				uni.navigateBack({		   
				})
			},
			//拨号方法
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '1345576897'
				})
			},
			//地图导航方法
			mapnavigation() {
				let _this = this
				// console.log(_this.chooselocation);
				// console.log(_this.chooselocation.latitude);
				let chooselatitude = _this.chooselocation.latitude
				let chooselongitude = _this.chooselocation.longitude 
				// const aaa = 34.76858
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					geocode: true,
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;		
					// 	const address = res.address;
					// console.log('详细地址123：' + address.name);
				        uni.openLocation({
				            latitude: chooselatitude,
				            longitude:chooselongitude,
							name:"青春大药房",
							address:_this.address,
							
				            success: function (res) {
				                console.log('success');
								 console.log('详细地址：' + res.address);
				            }
				        });
				    }
				});
			},
			//纠正坐标方法
			coordinates() {
				uni.navigateTo({
					url:'chooseLocation'
				})
				// let _this = this
				
				// uni.getLocation({
				//     type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				//     success: function (res) {
				//         const latitude = res.latitude;
				//         const longitude = res.longitude;	
				// 			// console.log("eee");
				// 		uni.chooseLocation({
				// 		    success: function (res) {
				// 		        console.log('位置名称：' + res.name);
				// 		        console.log('详细地址：' + res.address);
				// 		        console.log('纬度：' + res.latitude);
				// 		        console.log('经度：' + res.longitude);
				// 				// _this.address = "1232"
								
				// 				const address = res.address;
				// 				// console.log(address);
								
				// 				_this.address =address;
				// 				// console.log(_this.address);
				// 				// this.$set('this.address','address');
				// 				 uni.$emit('addressupdate',address); 
				// 		    }
				// 		});
				//     },
				// 	fail:function(err){
				// 		console.log(err);
				// 	}
				// });
				
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.content {
		position: fixed;
		width: 100vw;
		height: 170px;
		border-top: 10px solid #EEEEEE;
		background-color: #FFFFFF;
	}
	.content-header {
		width: 100vw;
		height: 120px;
		display: flex;
		font-size: 17px;
		flex-wrap: wrap;
		padding-top: 10px;
		border-bottom: 2px solid #EEEEEE;
	}
	.header-item {
		width: 68vw;
		height: 25px;
		line-height: 25px;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.item-left {
		width: 25vw !important;
		padding-left: 10px;
	}
	.item-site {
		display: flex;
		justify-content: space-between;
		padding-right: 10px;
	}
	.site{
		width: 68vw;
		overflow: hidden;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.content-footer {
		width: 100vw;
		height: 40px;
		display: flex;
		justify-content: center;
		
		align-items: center;
	}
	.tabbar {
		width: 100vw;
		position: fixed;
		border-top: 10px solid #EEEEEE;
		z-index: 999;
	}
	.footer-item {
		width: 50vw;
		height: 30px;
		line-height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color:#00aa00 ;
	}
	.order-list {
		width: 100vw;
		height: 90px;
		margin-top: 5px;
		background-color: #FFFFFF;
		font-size: 16px;
		display: flex;
		align-items: center;
	}
	.list-content {
		width: 88vw;
		height: 80px;
		line-height: 25px;
		padding-left: 10px;
	}
	.list-flex {
		display: flex;
		justify-content: space-between;
	}
	.list-icon {
		width: 12vw;
		height: 80px;
		line-height: 80px;
		text-align: center;
	}
</style>
