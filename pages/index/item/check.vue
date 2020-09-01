<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="账期查询" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="check">
			<view class="check-item">
				<view class="check-content" style="border-right: 2px solid #EEEEEE;">
					<view class="content-num">
						80000.25
					</view>
					<view class="content-title">
						总应收款(元)
					</view>
				</view>
			</view>
			<view class="check-item">
				<view class="check-content">
					<view class="content-num">
						34000.25
					</view>
					<view class="content-title">
						本月应收款(元)
					</view>
				</view>
			</view>	
			<view class="check-item">
				<view class="check-content" style="border-right: 2px solid #EEEEEE;">
					<view class="content-num">
						25300.25
					</view>
					<view class="content-title">
						本月已收款(元)
					</view>
				</view>
			</view>	
			<view class="check-item">
				<view class="check-content">
					<view class="content-num">
						241
					</view>
					<view class="content-title">
						总应收客户数
					</view>
				</view>
			</view>			
		</view>
		<view class="searchbar" style="margin-top: 10rpx; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="请输入客户号/联系人" @confirm="search" @cancel="cancle"/>			
		</view>
		<view class="receivable">
			<block v-for="item in 10">
				<view class="receivablelist">
					<view class="list-title">
						<view style="font-size: 18px; ">东莞市步前方药店</view>
						<text style="margin-right:14rpx;">刘伟</text>
						<text>13429585373</text>
					</view>
					<view class="list-money">
						<view class="money-item" style="border-right: 2px solid #EEEEEE;">
							<view class="">
								应收金额
							</view>
							<view class="" style="color: #ff0000;">
								¥3194
							</view>
						</view>
						<view class="money-item">
							<view class="">
								逾期金额
							</view>
							<view class="" style="color: #ff0000;">
								¥3194
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- <view class="u-charts">
			<view class="bode-top">
				<view class="top-container">
					<view class="top-title" style="font-size: 38rpx; font-weight: 600; color: #000000;">
						每月收款金额
					</view>
					<view class="tabbar" style="width: 20vw; ">
						<sun-tab style="font-size: 20px;" :value.sync="index2" :tabList="tabList2" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
					</view>
					</view>
				</view>
			</view>
			<view class="return2" >
				<view class="qiun-columns"  style="padding-top: 20px; background-color: #FFFFFF;">					
						<view class="qiun-charts">
							<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts" @touchstart="touchColumn2"></canvas>
						</view>
				</view>
			</view>
		</view>
		<view class="tabbar" style="margin-top: 5px;">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view>
		<view class="check2">
			<view class="check-item2" @click="navigator0">
				<view class="check-content" style="border-right: 2px solid #EEEEEE;">
					<view class="content-num">
						27160.25
					</view>
					<view class="content-title">
						本月到期(元)
					</view>
				</view>
			</view>
			<view class="check-item2" @click="navigator1">
				<view class="check-content" style="border-right: 2px solid #EEEEEE;">
					<view class="content-num">
						7150.25
					</view>
					<view class="content-title">
						未到期(元)
					</view>
				</view>
			</view>	
			<view class="check-item2" @click="navigator2">
				<view class="check-content" >
					<view class="content-num">
						4150.25
					</view>
					<view class="content-title">
						逾期(元)
					</view>
				</view>
			</view>			
		</view>
		<view class="footer" style="color: #505050; font-size: 15px; margin-left: 10px;">
			<text>*点击对应账单查看明细</text>
		</view> -->
	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import uCharts from '@/components/u-charts/u-charts.js';
		var _self;
		var canvaColumn=null;
			var canvaColumn2=null;
export default {

		data() {
			return {
				index: 0,
				tabList: ['账期','客户'], //普通数据赋值
				index2: 0,
				tabList2: ['日','月'], //普通数据赋值
				cWidth:'',
				cHeight:'',
				serverData:'',
				pixelRatio:1,
				chartData2: {
				  "categories": ["1", "2", "3","4", "5", "6"],
				  "series": [{
					"name": "收款金额(万元)",
					"data": [18.42, {"value": 29.87,"color":"" }, 23.56,18.49,20.98,18.42]
				  }]
				}
			}
		},
		onLoad() {
					_self = this;
					this.cWidth=uni.upx2px(750);
					this.cHeight=uni.upx2px(500);
					this.showColumn2("canvasColumn2",this.$data.chartData2);
					// console.log(this.$data)
		},
		methods: {
			//底部栏跳转页面方法
			navigator0() {
				uni.navigateTo({
					url:'checksubpage?id=0'
				})
			},
			navigator1() {
				uni.navigateTo({
					url:'checksubpage?id=1'
				})
			},
			navigator2() {
				uni.navigateTo({
					url:'checksubpage?id=2'
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
			},
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
						showColumn2(canvasId,chartData){
							// console.log("aaa")
							canvaColumn2=new uCharts({ 
								$this:_self,
								canvasId: canvasId,
								type: 'column',
								legend:{show:true},
								fontSize:11,
								background:'#FFFFFF',
								pixelRatio:_self.pixelRatio,
								animation: true,
								categories: chartData.categories,
								series: chartData.series,
								xAxis: {
									disableGrid:true,
								},
								yAxis: {
									//disabled:true
								},
								dataLabel: true,
								width: _self.cWidth*_self.pixelRatio,
								height: _self.cHeight*_self.pixelRatio,
								extra: {
									column: {
										type:'group',
										width: _self.cWidth*_self.pixelRatio*0.4/chartData.categories.length
									}
								  }
							});
							
						},		
						touchColumn2(e){
							canvaColumn2.showToolTip(e, {
								format: function (item, category) {
									if(typeof item.data === 'object'){
										return category + ' ' + item.name + ':' + item.data.value 
									}else{
										return category + ' ' + item.name + ':' + item.data 
									}
								}
							});
						},
						
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.check {
		width: 100vw;
		height: 140px;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.check2 {
		width: 100vw;
		height: 80px;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.check-item {
		width: 49vw;
		height:60px;
		line-height: 34px;
		/* background-color: #0077AA; */
		text-align: center;
	}
	.check-item2{
		width: 33vw;
		height: 60px;
		line-height: 35px;
		text-align: center;
	}
	.check-content {
		height: 60px;
		line-height: 30px;
	}
	.content-num {
		font-size: 18px;
		color: #ff0000;
	}
	.content-title {
		font-size: 18px;
		color: #686868;
	}	
	.bode-top {
		width: 100vw;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}
	.receivable {
		width: 100vw;
	}
	.receivablelist {
		width: 100vw;
		/* padding-top: 10px; */
		margin-bottom: 10px;
		font-size: 16px;
		background-color: #FFFFFF;
	}
	.list-title {
		width: 100vw;
		height: 70px;
		line-height: 35px;
		padding-left: 10px;
	}
	.list-money {
		width: 100vw;
		height: 54px;
		
		display: flex;
		align-items: center;
		border-top: 1px solid #EEEEEE;
	}
	.money-item {
		flex: 1;
		height: 50px;
		line-height:25px;
		text-align: center;
	}
	/* .u-charts {
		margin-top: 10px;
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
		width: 100vw;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.name {
		width: 800rpx;
		
	}
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;} */
</style>
