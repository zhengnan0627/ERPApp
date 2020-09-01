<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="个人业绩"  @clickLeft="back"></uni-nav-bar>
		<view class="header">
			<view class="header-icon">
				<image src="../../../static/image/logo1.png" mode=""></image>
			</view>
			<view class="header-mine">
				<view class="mine-name">
					员工姓名(员工编号)
				</view>
				<view class="mine-name">
					金牌业务员
				</view>
			</view>
		</view>
		<view class="body-title">
			<view class="title-item" v-for="(item,index) in dataList.dataList1" :key="index">
				<view class="item-num">
					{{item.itemnum}}
				</view>
				<view class="item-title">
					{{item.itemname}}
				</view>
			</view>
		</view>
		<view class="bode-top">
			<view class="top-container">
				<view class="top-title" style="font-size: 30rpx; font-weight: 600; color: #000000;">
					本月销售排名
				</view>
				<view class="top-num" style="color: #00aa00; margin-right: 20rpx; font-size: 40rpx;">
					第一名
				</view>
			</view>
		</view>
		<view class="body-title">
			<view class="title-item"  v-for="(item,index) in dataList.dataList2" :key="index">
				<view class="item-num">
					{{item.itemnum}}
				</view>
				<view class="item-title">
					{{item.itemname}}
				</view>
			</view>
		</view>
		<view class="u-charts">
			<view class="bode-top">
				<view class="top-container">
					<view class="top-title" style="font-size: 30rpx; font-weight: 600; color: #000000;">
						个人业绩曲线图
					</view>
					<view class="tabbar" style="width: 20vw; ">
						<sun-tab style="font-size: 20px;" 
								:value.sync="index2" :tabList="tabList2" @change="objectChange"
								bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
					</view>
				</view>
			</view>
			<view class="qiun-charts" >
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
			</view>
		</view>
		<view class="u-charts" style="border-top: 20rpx solid #EEEEEE;">
			<view class="bode-top" style="border-bottom: 6rpx solid #EEEEEE;">
				<view class="top-container">
					<view class="top-title" style="font-size: 30rpx; font-weight: 600; color: #000000;">
						本月个人销售类别分布
					</view>
				</view>
			</view>
			<view class="bg-white" style="width: 96vw; padding: 0 2vw; background-color: #FFFFFF;">				
				<view class="sort-item" v-for="(item,index) in dataList.dataList3" :key="index">
					<view class="name">
						{{item.itemname}}
					</view>
					<text class="margin-left" style="margin-right: 14rpx;">{{item.itemnum}}%</text>
					<u-line-progress :percent="item.itemnum" :show-percent="false"
									 :height="20"></u-line-progress>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				dataList:{
					"dataList1":[
						{"itemname":"今日销售(元)","itemnum":"3041"},
						{"itemname":"本月应收(元)","itemnum":"3912"},
						{"itemname":"本月回款(元)","itemnum":"3085"},
						{"itemname":"本月销售(元)","itemnum":"8271"},
					],
					"dataList2":[
						{"itemname":"本月订单数","itemnum":"230"},
						{"itemname":"本月客单价","itemnum":"45"},
						{"itemname":"本月客户数","itemnum":"102"},
						{"itemname":"上月客户数","itemnum":"123"},
					],
					"dataList3":[
						{"itemname":"期初中类","itemnum":74.44},
						{"itemname":"抗感染药","itemnum":9.11},
						{"itemname":"散装普通中药饮片","itemnum":7.59},
						{"itemname":"肠胃道疾病用药","itemnum":5.42},
						{"itemname":"滋补营养药","itemnum":3.44}
					],
				},
				index2: 0,
				tabList2: ['日','月'], //普通数据赋值
				//u-chart相关数据
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				chartData: {
					categories: ['04-08', '04-09', '04-10', '04-11', '04-12', '04-13'],
					series: [{
						name: '销售额',
						data: [0.80,1.70,1.20,1.64,1.00,1.70],
						color: '#00aa00'
					}, {
						name: '毛利额',
						data: [1.80, 2.70, 2.20, 2.40, 2.00, 2.70],
						color: '#ff0000'
					}, {
						name: '回款额',
						data: [2.80, 3.70, 3.20, 3.40, 3.00, 3.70],
						color: '#0000ff'
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.showLineA("canvasLineA",this.$data.chartData);
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//日月tabbar切换方法
			objectChange(e){
				// console.log(e.tab);日/月
				console.log(e.tab == '日');
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						min:0.0,
						max:3.7,
						format:(val)=>{return val.toFixed(0)+'万元'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
		}
	}	
</script>

<style>
	@import "/components/colorui/main.css";
	@import "/components/colorui/icon.css";
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
	}
	
	.header {
		width: 100vw;
		height: 250rpx;
		background-color: #00dc00;
		display: flex;
		align-items: center;
	}
	.header-icon {
		width: 80px;
		height: 80px;
		margin-left: 60rpx;
		border-radius: 20px;
		overflow: hidden;
		text-align: center;
	}
	.header-icon image {
		width: 100px;
		height: 100px;
		position: relative;
		top: -16rpx;
		left: -7px;
		max-width: 200% !important;
		overflow: hidden;
		border-radius: 30px;
	}
	.header-mine{
		width: 50vw;
		margin-left: 40rpx;
		font-size: ;
		color: #FFFFFF;
	}
	.mine-name {
		width: 50vw;
		height: 60rpx;
		line-height: 60rpx;
	}
	.body-title {
		width: 100vw;
		height: 150rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.title-item {
		flex: 1;
		height: 100rpx;
		font-size: 30rpx;
		text-align: center;
		padding: 0 4rpx;
		border-right: 4rpx solid #EEEEEE;
	}
	.title-item:last-child{
		border-right: none;
	}
	.item-title {
		color: #4d4d4d;
	}
	.item-num {
		color: #ff0000;
	}
	.bode-top {
		width: 100vw;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FFFFFF;
		margin-bottom: 4rpx;
	}
	.u-charts {
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
	}
	.top-container {
		display: flex;
		justify-content:space-between;
		margin: 0 20rpx;
	}
	.day {
		width: 10vw;
		text-align: center;
	}
	.qiun-charts {
			width: 750upx;
			height: 500upx;
			background-color: #FFFFFF;
	}
		
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.sort-item {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
	}
	.name {
		width: 800rpx;
		
	}
</style>
