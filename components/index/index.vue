<template>
		<view class="content">
			<!-- <uni-nav-bar rightIcon="chat" fixed="true" @clickRight="news">
				<view slot="left" class="iconfont icon-saoma" @click="saoma">
					<image src="../../static/image/saoma.png" mode=""></image>
				</view>
				<view slot="default" class="icon-font">
					<uni-search-bar   @input="" radius="90" cancelButton="none" placeholder="搜索商品编码/品名/厂商" />
				</view>
			</uni-nav-bar> -->
			<view class="navbar">
				登录人:{{navbarlist.name}}
			</view>
			<view class="" style="width: 100vw; height: 45px;">
				
			</view>
			<!-- <uni-nav-bar  :title="'登录人'+navbarlist.name" fixed="true"> -->
				
				<!-- <view class="" slot="default" style="font-size: 18px; height: 44px;" >
					<text></text>
				</view> -->
				<!-- <view class="navtext" slot="left">
					<view class="navicon">
						<uni-icons type="person-filled" color="#00a200" size="23"></uni-icons>
					</view>
					<view class="navicon">
						{{navbarlist.job}}
					</view>
				</view>
				<view class="navtext"  slot="right">
					<view class="navicon">
						<uni-icons type="paperplane-filled" color="#00a200" size="18"></uni-icons>
					</view>
					<view class="navicon">
						{{navbarlist.address}}
					</view>
				</view> -->
			<!-- </uni-nav-bar> -->
			<view class="swiper">
				<swiper autoplay="true" indicator-dots indicator-color="#ffffff" indicator-active-color="#ff0000"
						circular="true" interval="2000" 
						duration="1000" class="swiper_warp"
						style="height: 100%;">
					<block v-for="(item,i) in swiperlist" :key="i">
						<swiper-item >
							<view class="swiper-item">
								<image :src="item.swiperurl" mode=""></image>
							</view>
						</swiper-item>
					</block>		
				</swiper>
			</view>
			<view class="module">
				<view class="module-title">
					工作中心
				</view>
				<view class="module-flex">
					<block v-for="(item,i) in gridlist" :key="item.id" >
						<view class="module-item">
							<view hover-class="none" @click=jumphome(item,i)>
								<image :src="item.imgurl" mode=""></image>
								<!-- <uni-badge  :text="item.badge" type="error" size="small" class="badge"></uni-badge> -->
								<u-badge v-if="item.badge != 0" :is-dot="true" size="mini" :offset="[20,30]"></u-badge>
								<view class="item-title">
									{{item.text}}
								</view>
							</view>
							
						</view>	
						
					</block>
				</view>
			</view>
			<view class="return" v-if="name != 1">
				<view class="module-title">
					业绩报表
				</view>
				<view class="qiun-columns"  style="padding-top: 20px;background-color: #FFFFFF;">					
						<view class="qiun-charts">
							<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"> <!-- @touchstart="touchColumn" --></canvas>
						</view>
				</view> 
			</view>
			<view class="return" v-if="name != 1">
				<view class="module-title">
					类别分布
				</view>
				<view class="qiun-charts qiun-rows" style="background-color: #FFFFFF;">					
						<view class="qiun-charts">
							<canvas canvas-id="canvasPie" id="canvasPie" class="charts-pie" ><!-- @touchstart="touchPie" --></canvas>
						</view>
				</view> 
			</view>
		 </view>
	
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaColumn=null;
	var canvaPie=null;
	export default {
		props:{
			name: {
			        type: Number,
			        default: 0
			       }
		},
		data() {
			return {
				
				//导航栏展示信息
				navbarlist:{
					"job":'业务员',
					"name":"李伟(业务员)",
					address: '唐山市'
				},
				
				//功能栏相关数据
				gridlist:[
					{"id":"1","imgurl":"../../static/image/gerenyeji.png","text":"个人业绩","url":"perf","badge":0},
					{"id":"2","imgurl":"../../static/image/kehuminglu.png","text":"我的客户","url":"directory","badge":0},
					{"id":"3","imgurl":"../../static/image/fangkejihua.png","text":"访客任务","url":"task","badge":0},
					{"id":"4","imgurl":"../../static/image/kehufenbu.png","text":"客户分布","url":"kehufenbu","badge":0},
					{"id":"9","imgurl":"../../static/image/xiaoshousubao.png","text":"公司业绩","url":"sell","badge":0},
					{"id":"5","imgurl":"../../static/image/qiyegonggao.png","text":"企业公告","url":"notice","badge":3},
					{"id":"6","imgurl":"../../static/image/yewuyuan.png","text":"业务员排行","url":"clerk","badge":0},
					{"id":"7","imgurl":"../../static/image/zhangqichaxun.png","text":"账期查询","url":"check","badge":0},
					{"id":"8","imgurl":"../../static/image/shangpinchaxun.png","text":"商品查询","url":"goods","badge":0},
					{"id":"10","imgurl":"../../static/image/chuku.png","text":"出库单任务","url":"stockout","badge":5},
					{"id":"11","imgurl":"../../static/image/openaccount.png","text":"客户开户","url":"openaccount","badge":0}
				],
				//轮播图相关数据
				swiperlist:[
					{"id":"1", "swiperurl":"../../static/image/swiper4.jpg"},
					{"id":"2","swiperurl":"../../static/image/swiper5.jpg"},
					{"id":"3","swiperurl":"../../static/image/swiper6.jpg"},
				],
				//uchart相关数据
				cWidth:'',
				cHeight:'',
				serverData:'',
				pixelRatio:1,
				chartData: {
				  "categories": ["12-28", "12-29", "12-30"],
				  "series": [{
					"name": "销售额(万元)",
					"data": [15, {"value": 20,"color":"" }, 44,],
					// "color": "red"
				  }, {
					"name": "毛利额(万元)",
					"data": [20, {"value": 4.7,"color":""}, 35, ],
					// "color": "green"
				  }, {
					"name": "订单数量(万元)",
					"data": [30, {"value": 40,"color": ""}, 25, ],
					// "color": "yellow"
				  }]
				},
				"chartData2": {
				  "series": [{
					"name": "抗感染药",
					"data": 50
				  }, {
					"name": "散装普通中药饮片",
					"data": 30
				  }, {
					"name": "肠胃道疾病药",
					"data": 20
				  }, {
					"name": "滋补营养方",
					"data": 18
				  }, {
					"name": "抗生素药",
					"data": 8
				  }]
				}
			}	
		},
		created:function(){
			console.log('index:'+this.name);
			if(this.name == 0){
				this.gridlist = [
					{"id":"1","imgurl":"../../static/image/gerenyeji.png","text":"个人业绩","url":"perf","badge":0},
					{"id":"2","imgurl":"../../static/image/kehuminglu.png","text":"我的客户","url":"directory","badge":0},
					{"id":"3","imgurl":"../../static/image/fangkejihua.png","text":"访客任务","url":"task","badge":0},
					{"id":"4","imgurl":"../../static/image/kehufenbu.png","text":"客户分布","url":"kehufenbu","badge":0},
					{"id":"5","imgurl":"../../static/image/qiyegonggao.png","text":"企业公告","url":"notice","badge":3},
					{"id":"7","imgurl":"../../static/image/zhangqichaxun.png","text":"账期查询","url":"check","badge":0},
					{"id":"8","imgurl":"../../static/image/shangpinchaxun.png","text":"商品查询","url":"goods","badge":0},
					{"id":"11","imgurl":"../../static/image/openaccount.png","text":"客户开户","url":"openaccount","badge":0}
				]
			}else if(this.name == 1){
				this.navbarlist.name = '王磊(配送员)';
				this.gridlist = [
					{"id":"2","imgurl":"../../static/image/kehuminglu.png","text":"我的客户","url":"directory","badge":0},
					{"id":"4","imgurl":"../../static/image/kehufenbu.png","text":"客户分布","url":"kehufenbu","badge":0},
					{"id":"5","imgurl":"../../static/image/qiyegonggao.png","text":"企业公告","url":"notice","badge":3},
					{"id":"7","imgurl":"../../static/image/zhangqichaxun.png","text":"账期查询","url":"check","badge":0},
					{"id":"8","imgurl":"../../static/image/shangpinchaxun.png","text":"商品查询","url":"goods","badge":0},
					{"id":"10","imgurl":"../../static/image/chuku.png","text":"出库单任务","url":"stockout","badge":5}
				]
			}else {
				this.navbarlist.name = '张鑫(管理员)';
				this.gridlist = [
					{"id":"1","imgurl":"../../static/image/gerenyeji.png","text":"个人业绩","url":"perf","badge":0},
					{"id":"2","imgurl":"../../static/image/kehuminglu.png","text":"我的客户","url":"directory","badge":0},
					{"id":"3","imgurl":"../../static/image/fangkejihua.png","text":"访客任务","url":"task","badge":0},
					{"id":"4","imgurl":"../../static/image/kehufenbu.png","text":"客户分布","url":"kehufenbu","badge":0},
					{"id":"9","imgurl":"../../static/image/xiaoshousubao.png","text":"公司业绩","url":"sell","badge":0},
					{"id":"5","imgurl":"../../static/image/qiyegonggao.png","text":"企业公告","url":"notice","badge":3},
					{"id":"6","imgurl":"../../static/image/yewuyuan.png","text":"业务员排行","url":"clerk","badge":0},
					{"id":"7","imgurl":"../../static/image/zhangqichaxun.png","text":"账期查询","url":"check","badge":0},
					{"id":"8","imgurl":"../../static/image/shangpinchaxun.png","text":"商品查询","url":"goods","badge":0},
					{"id":"10","imgurl":"../../static/image/chuku.png","text":"出库单任务","url":"stockout","badge":5},
					{"id":"11","imgurl":"../../static/image/openaccount.png","text":"客户开户","url":"openaccount","badge":0}
				]
			}
		},
		mounted() {
			//uchart相关加载方法
			// console.log("eee");
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.showColumn("canvasColumn",this.$data.chartData);
			this.showPie("canvasPie",this.$data.chartData2);
			//导航显示当前地址信息
			uni.getLocation({
				type: 'gcj02',
				geocode:true,
				success: (res) => {
					
					const address = res.address.city || '唐山市'
					_self.navbarlist.address = address
					// console.log(res.address);
					// console.log(address.city);
				}
			})
		},
		methods: {
			saoma() {
				uni.scanCode({
					
				})
			},
			news() {
				uni.navigateTo({
					  url: './item/news'
				})
			},
			//功能页面跳转方法
			jumphome(item,i){
				uni.navigateTo({
					url:'./item/'+item.url
				})
			},
			//uchart相关加载方法
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
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					// enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:true,
					
						// type:'grid',
						// 	gridType:'dash',
						// 	itemCount:5,//x轴单屏显示数据的数量，默认为5个
						// 	scrollShow:true,//新增是否显示滚动条，默认false
						// 	scrollAlign:'left',//滚动条初始位置
						// 	scrollBackgroundColor:'#F7F7FF',//默认为 #EFEBEF
						// 	scrollColor:'#DEE7F7',//默认为 #A6A6A6
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
			//点击显示数据详情方法
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
			//饼状图显示方法
			showPie(canvasId,chartData){
							canvaPie=new uCharts({
								$this:_self,
								canvasId: canvasId,
								type: 'pie',
								fontSize:11,
								legend:{
								  show:true,
								  position:'right',
								  float:'center',
								  itemGap:20,
								  padding:0,
								  lineHeight:26,
								  margin:5,
								  borderWidth :1
								},
								background:'#FFFFFF',
								pixelRatio:_self.pixelRatio,
								series: chartData.series,
								animation: false,
								width: _self.cWidth*_self.pixelRatio,
								height: _self.cHeight*_self.pixelRatio,
								dataLabel: true,
								extra: {
									pie: {
									  labelWidth:15
									}
								},
							});
							this.piearr=canvaPie.opts.series;
						},
						touchPie(e){
							canvaPie.showToolTip(e, {
								format: function (item) {
									return item.name + ':' + item.data 
								}
							});
						},
		}
	}
</script>

<style lang="scss">
	.content {
		padding-bottom: 55px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #FFFFFF; */
	}
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100vw;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
		font-size: 17px !important;
		
	}
	.navtext {
		width: 15vw;
		text-align: center;
		vertical-align: middle;
	}
	.navicon {
		width: 100%;
		height: 20px;
		padding-right: -20rpx !important;
		line-height: 20px;
	}
/* 	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.iconfont image {
		width: 100%;
		height: 100%;
	}
	.icon-saoma {
		width: 10vw;
		height: 75rpx;
		line-height: 75rpx;
	}
	.icon-font {
		width: 73vw;
	}
	.icon-news{
		width: 10vw;
		height: 75rpx;
		line-height: 75rpx;
		margin-right: 10rpx;
	} */
	.swiper {
		width: 100vw;
		height: 460rpx;
	}
	.swiper .swiper-item{
		width: 100vw;
		height: 100%;
	}
	.swiper .swiper-item image {
		width: 100%;
		height: 100%;
	}
	.module {
		width: 100vw;

	
		/* background-color: #0086B3; */
		border-top: 20rpx solid #eeeeee;
	}
	.module-title {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 40rpx;
		font-weight: 600;
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
		position: relative !important;
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
	.badge {
			position: absolute;
			right: 10px;
			top: 3px;
			width: auto !important;
			display: inline !important;
		
		}
	.return {
		border-top: 10px solid #EEEEEE;
	}
	/* uchart相关css */
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
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts-pie{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts-right{display:flex;align-items:center;width: 250upx; height:500upx;background-color: #FFFFFF;}
	.legend-itme{width: 200upx; margin-left: 30upx; height:50upx;align-items:center;}
	.legend-itme-point{width: 20upx; height:20upx; margin: 15upx;  border: 1px solid #FFFFFF; border-radius: 20upx;background-color: #000000;}
	.legend-itme-text{height:50upx;line-height: 50upx;color: #666666;font-size: 26upx;}
</style>
