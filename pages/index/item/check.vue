<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="账期查询" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="" style="position: fixed; top: 44px; left: 0; right: 0;">
			<view class="check">
				<view class="check-item">
					<view class="check-content" style="border-right: 2px solid #EEEEEE;">
						<view class="content-num">
							{{amountList.total_amount}}
						</view>
						<view class="content-title">
							总应收款(元)
						</view>
					</view>
				</view>
				<view class="check-item">
					<view class="check-content">
						<view class="content-num">
							{{amountList.yingshou_amount}}
						</view>
						<view class="content-title">
							本月应收款(元)
						</view>
					</view>
				</view>	
				<view class="check-item">
					<view class="check-content" style="border-right: 2px solid #EEEEEE;">
						<view class="content-num">
							{{amountList.yishou_amount}}
						</view>
						<view class="content-title">
							本月已收款(元)
						</view>
					</view>
				</view>	
				<view class="check-item">
					<view class="check-content">
						<view class="content-num">
							{{amountList.total_clients}}
						</view>
						<view class="content-title">
							总应收客户数
						</view>
					</view>
				</view>			
			</view>
			<view class="searchbar" style="border-top: 10rpx solid #EEEEEE; border-bottom: 1px solid #EEEEEE;">
				<uni-search-bar placeholder="请输入客户名/联系人" @confirm="search" @cancel="cancle"/>			
			</view>
		</view>
		<view class="zhanwei" style="width: 100%; height: 198px;">
			
		</view>
		<view class="receivable">
			<block v-for="(item,index) in zqList">
				<view class="receivablelist" :key="index" @click="checkdatil(item,index)">
					<view class="list-title">
						<view style="font-size: 18px; width: 95%; padding: 10px 0;">{{item.c_company_name}}</view>
						<text style="margin:6px 14px 6px 0;">{{item.c_contact}}</text>
						<text>{{item.c_phone}}</text>
					</view>
					<view class="list-money">
						<view class="money-item" style="border-right: 2px solid #EEEEEE;">
							<view class="">
								应收金额
							</view>
							<view class="" style="color: #ff0000;">
								¥{{item.yingshou_amount}}
							</view>
						</view>
						<view class="money-item">
							<view class="">
								逾期金额
							</view>
							<view class="" style="color: #ff0000;">
								¥{{item.yuqi_amount}}
							</view>
						</view>
					</view>
				</view>
			</block>
			<u-empty  text="没有搜索结果" mode="search"  :show="zqList.length < 1"
					:marginTop="200"
			></u-empty>
			<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
			<u-loadmore :status="status" v-if="zqList.length > 1"/>
		</view>
	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';

export default {

		data() {
			return {
				amountList:{},//账期汇总数据对象
				zqList:[],//账期列表数据
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad() {
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'账期汇总',
					userid:this.$userinfo.userid,
					role:this.$userinfo.role
				}
			}).then(res => {
				const resdata = res.Msg_info
				this.amountList = resdata[0]
				console.log(resdata);
			})
			this.request()
			// this.cWidth=uni.upx2px(750);
			// this.cHeight=uni.upx2px(500);
			// this.showColumn2("canvasColumn2",this.$data.chartData2);
			// console.log(this.$data)
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
		},
		onReachBottom(){
			if(this.pageindex >= this.total_page){
				this.status = 'nomore'
			}else{
				// console.log('到底了');
				this.status = 'loading';
				this.pageindex += 1;
				this.request()
			}
			
		},
		methods: {
			//数据请求方法
			request(){
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'账期列表',
						userid:this.$userinfo.userid,
						current_page:this.pageindex,
						key:this.key,
						role:this.$userinfo.role
					}
				}).then(res => {
					const resdata = res.Msg_info
					if(resdata[0].error){
						this.zqList = []
					}else{
						this.zqList.push(...resdata)
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
						console.log(resdata);
					}
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.zqList = []
				this.request()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.zqList = []
				this.request()
			},
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//跳转到往来账明细页面
			checkdatil(item,index){
				uni.navigateTo({
					url:'checkdetail?kehuinfo='+JSON.stringify(item)
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container{
		width: 100vw;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		/* white-space:nowrap; */
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
		/* height: 70px; */
		/* line-height: 35px; */
		padding-bottom: 10px;
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
