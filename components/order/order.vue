<template>
	<view class="container">
		<uni-nav-bar title="ERP代客下单" rightIcon="chat" fixed="true" @clickRight="Tonews"></uni-nav-bar>
		<view class="order-header">
			<view class="header-top">
				<view class="top-item top-item1" style="border-right: 1px solid #FFFFFF;">
					<view class="" style="	font-size: 32rpx;">
						今日订单(元)
					</view>
					<view class="" style="	font-size: 56rpx;">
						0.00
					</view>
				</view>
				<view class="top-item">	
					<view class="" style="	font-size: 32rpx;">
						本月订单(元)
					</view>
					<view class="" style="	font-size: 56rpx;">
						39004.00
					</view>
				</view>
			</view>
		</view>
		<view class="order-boby">
			<view class="body-title">
				APP订单
			</view>
			<view class="body-item">
				<block v-for="(item,index) in orderList.APPList">
					<view class="item-list" :key="index" @click="ToorderList(item,index)">
						<view class="">
							{{item.num}}
						</view>
						<view class="item-font">
							{{item.title}}
						</view>
					</view>
				</block>
			</view>
		</view>
		<view class="order-boby">
				<view class="body-title">
					ERP订单
				</view>
				<view class="body-item">
					<block v-for="(item,index) in orderList.ERPList">
						<view class="item-list" :key="index"  @click="ToorderList(item,index)">
							<view class="">
								{{item.num}}
							</view>
							<view class="item-font">
								{{item.title}}
							</view>
						</view>
					</block>
				</view>
		</view>
		<view class="module">
			<view class="module-title">
				业务工作台
			</view>
			<view class="module-flex">
				<block v-for="(item,index) in gridlist" :key="index" >
					<view class="module-item">
						<view hover-class="none" @click=jumphome(item,index)>
							<image :src="item.imgurl" mode=""></image>
							<view class="item-title">
								{{item.text}}
							</view>
						</view>
					</view>	
					
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//功能栏相关数据
				gridlist:[
					{"id":"0","imgurl":"../../static/image/daikexiadan.png","text":"代客下单","url":"selectkehu"},
					{"id":"1","imgurl":"../../static/image/gouwuche.png","text":"购物车","url":"cartselectkehu"},
					{"id":"2","imgurl":"../../static/image/sckehu.png","text":"收藏客户","url":"sckehu"},
					{"id":"3","imgurl":"../../static/image/scshangpin.png","text":"收藏商品","url":"scshangpin"},
					// {"id":"4","imgurl":"../../static/image/fapiaohuiqian.png","text":"发票回签","url":"fphuiqian"},
					// {"id":"5","imgurl":"../../static/image/chuku.png","text":"出库单回访","url":"chukudanhf"},
					// {"id":"6","imgurl":"../../static/image/fapiaohuifang.png","text":"发票回访","url":"fphuifang"},
				],
				orderList:{
					"APPList":[
						{"id":"1","title":"待审核","num":"0",},
						{"id":"2","title":"已审核","num":"113",},
						{"id":"3","title":"拒绝审核","num":"0",},
						{"id":"4","title":"撤销","num":"4",},						
					],
					"ERPList":[
						{"id":"1","title":"待发货","num":"0",},
						{"id":"2","title":"已发货","num":"0",},
						{"id":"3","title":"已配车","num":"0",},
						{"id":"4","title":"已完成","num":"0",},	
					]
						
				}
			}
		},
		methods:{
			//navbar消息中心跳转方法
			Tonews(){
				uni.navigateTo({
					url:'../../pages/order/item/news'
				})
			},
			//订单列表跳转方法
			ToorderList(item) {
				uni.navigateTo({
					url:'../../pages/order/item/orderlist'
				})
			},
			//功能页面跳转方法
			jumphome(item,index){
				uni.navigateTo({
					url:'/pages/order/item/'+item.url+'?id='+item.id
				})
			},
		}
	}
</script>

<style>
	page{
		border-color: #EEEEEE !important;
	}
	.container {
		width: 100vw;
		height:calc(100vh - 100rpx);
		padding-bottom: 100rpx;
		background-color: #EEEEEE;
		overflow: hidden;
	}
	.order-header {
		width: 100vw;
		height: 210rpx;
		border-bottom: 16rpx solid #EEEEEE;
	}
	.header-top {
		width: 100vw;
		height: 220rpx;
		line-height: 65rpx;		
		background-color: #0fc136;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-item {
		flex: 1;
		text-align: center;
		padding: 0 0 6rpx 0;
		color: #FFFFFF;
	}
	.order-boby {
		width: 100vw;
		height: 220rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}
	.order-boby .body-title {
		width: 100vw;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.order-boby .body-item {
		width: 100vw;
		height: 139rpx;
		display: flex;
		border-top: 2rpx solid #EEEEEE;
	}
	.order-boby .item-list {
		padding: 10rpx;
		flex: 1;
		text-align: center;
	}
	.item-font {
		color: #626262;
	}
	.module {
		width: 100vw;		
	}
	.module-title {
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 20rpx;
		background-color: #FFFFFF;
		border-bottom: 1px solid #D5D5D5;
	}
	.module-flex {
		width: 100vw;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		align-content:flex-start;
	}
	.module-item {
		width: 25%;
		height: 180rpx;
		border: 0;
		font-size: 32rpx;
		text-align: center;
		margin: 10rpx 0;
		/* background-color: #4CD964; */
	}
	.module-item image {
		width: 80rpx !important;
		height: 80rpx !important;
		margin-top: 18rpx;
		margin-bottom: 10rpx;
		display: inline-block !important;
		overflow: hidden !important;
		position: relative !important;
	}
</style>
