<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="销售速报" rightIcon="more-filled" @clickRight="navigator" @clickLeft="back"></uni-nav-bar>
		<view class="tabbar">
			<sun-tab :value.sync="index" :tabList="tabList" @change="objectChange" bgColor="#eeeeee" activeColor="#55aa00"></sun-tab>
		</view>
		<view class="return">
			<view class="qiun-columns"  style="padding-top: 20px; background-color: #FFFFFF;">					
					<view class="qiun-charts">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
					</view>
			</view> 
		</view>
		<view class="return2" style="margin-top: 10px;">
			<view class="qiun-columns"  style="padding-top: 20px; background-color: #FFFFFF;">					
					<view class="qiun-charts">
						<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts" @touchstart="touchColumn2"></canvas>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	 import uCharts from '@/components/u-charts/u-charts.js';
	 	var _self;
	 	var canvaColumn=null;
		var canvaColumn2=null;
	export default {
		components: {
		            sunTab
		        },
		data() {
			return {
				index: 0,
				tabList: ['昨天','近7天','近30天'], //普通数据赋值
				//uchart相关数据
				cWidth:'',
				cHeight:'',
				serverData:'',
				pixelRatio:1,
				chartData: {
				  "categories": ["12-28", "12-29", "12-30"],
				  "series": [{
					"name": "销售额(万元)",
					"data": [15, {"value": 20,"color":"" }, 44,]
				  }, {
					"name": "毛利额(万元)",
					"data": [30, {"value": -4.7,"color": "#ff0000"}, 25, ]
				  }, {
					"name": "订单数量(万元)",
					"data": [30, {"value": 40,"color": ""}, 25, ]
				  }]
				},
				chartData2: {
				  "categories": ["12-28", "12-29", "12-30"],
				  "series": [{
					"name": "退货率(%)",
					"data": [21.8, {"value": 17.7,"color":"" }, 8.3,]
				  }]
				}
			}
		},
		created() {
					_self = this;
					this.cWidth=uni.upx2px(750);
					this.cHeight=uni.upx2px(500);
					this.showColumn("canvasColumn",this.$data.chartData);
					this.showColumn2("canvasColumn2",this.$data.chartData2);
					// console.log(this.$data)
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//切换tabbar之后重新渲染
			objectChange() {
				this.$forceUpdate()
			},
			//导航到子页面选择查询条件页面方法
			navigator() {
				uni.navigateTo({
					url:'sellsubpage'
				})
			},
			//---------uchart图表方法
						showColumn(canvasId,chartData){
							// console.log("aaa")
							canvaColumn=new uCharts({
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
										width: _self.cWidth*_self.pixelRatio*0.2/chartData.categories.length
									}
								  }
							});
							
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
						touchColumn(e){
							canvaColumn.showToolTip(e, {
								format: function (item, category) {
									if(typeof item.data === 'object'){
										return category + ' ' + item.name + ':' + item.data.value 
									}else{
										return category + ' ' + item.name + ':' + item.data 
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
		height: 100vh;
		background-color: #EEEEEE;
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
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
