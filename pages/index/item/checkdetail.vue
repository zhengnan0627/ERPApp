<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="往来账查询" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="" style="position: fixed; top: 44px; left: 0; right: 0;">
			<view class="receivablelist">
				<view class="list-title">
					<view style="font-size: 18px; width: 95%; padding: 10px 0;text-overflow: ellipsis;
									white-space: nowrap;overflow:hidden;"
					>{{kehuinfo.c_company_name}}</view>
					<text style="margin:6px 14px 6px 0;">{{kehuinfo.c_contact}}</text>
					<text>{{kehuinfo.c_phone}}</text>
					<uni-icons style="margin-left: 4px;" type="phone" size="23" color="#4CD964"  @click="makePhoneCall(list)"></uni-icons>
				</view>
				<view class="list-money">
					<view class="money-item" style="border-right: 2px solid #EEEEEE;">
						<view class="">
							应收金额
						</view>
						<view class="" style="color: #ff0000;">
							¥{{kehuinfo.yingshou_amount}}
						</view>
					</view>
					<view class="money-item">
						<view class="">
							逾期金额
						</view>
						<view class="" style="color: #ff0000;">
							¥{{kehuinfo.yuqi_amount}}
						</view>
					</view>
				</view>
			</view>
			<u-form-item label-position="left" label="开始时间" prop="region" label-width="200" style="background-color: #FFFFFF; border-bottom: 10px solid #EEEEEE;border-top: 10px solid #EEEEEE;">
				<u-input type="select" :select-open="pickerShow" v-model="model.region" placeholder="开始时间" input-align="right" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-picker mode="time" v-model="pickerShow" @confirm="regionConfirm" style="z-index: 99;"></u-picker>
		</view>
		<view class="">
			
		</view>
		
		<view class="zhanwei" style="width: 100%; height: 208px;">
			
		</view>
		<view class="receivable">
			<block v-for="(item,index) in zqList">
				<view class="receivablelist" :key="index">
					<view class="list-item">
						<view class="item-flex" style="color: #000000;font-weight: 550;flex: 0.8;">
							{{item.date}}
						</view>
						<view class="item-flex">
							开票员:&nbsp&nbsp <text style="color: #000000;font-weight: 550; padding-left: 5px;">{{item.kaipiaoyuan}}</text> 
						</view>
						<view class="item-flex">
							业务员:&nbsp&nbsp<text style="color: #000000;font-weight: 550;padding-left: 5px;">{{item.yewuyuan}}</text>
						</view>
					</view>
					<view class="list-item">
						<view class="item-flex" style="flex: 0.8;">
							类型:<text style="font-weight: 550;padding-left: 5px;" :style="{color:+item.jie_amount == 0? '#ff0000':'#0000ff'}">{{+item.jie_amount == 0?'结算':'销售'}}</text>
						</view>
						<view class="item-flex">
							金额:&nbsp&nbsp<text style="color: #000000;font-weight: 550;padding-left: 5px;">{{+item.dai_amount == 0?item.jie_amount:item.dai_amount}}</text>
						</view>
						<view class="item-flex">
							余额:&nbsp&nbsp<text style="color: #000000;font-weight: 550;padding-left: 5px;">{{item.shengyu_amount}}</text>
						</view>
					</view>
					<view class="list-item">
						<view class="item-flex" style="flex: 0.7;">
							{{item.djbh}}
						</view>
						<view class="item-flex">
							摘要:&nbsp&nbsp{{item.zhaiyao}}
						</view>
					</view>	
				</view>	
			</block>
			<u-empty  text="暂无信息" mode="search"  :show="zqList.length < 1"
					:marginTop="100"
			></u-empty>
			<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
			<u-loadmore :status="status" v-if="zqList.length > 4"/>
		</view>
	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';

export default {

		data() {
			return {
				kehuinfo:{},//上级页面传递过来的客户信息
				zqList:[
				// 	{date:'2020-10-12',djbh:'XASD12381',zhaiyao:'销售出库单(一步)',
				// 	kaipiaoyuan:'张晓磊',yewuyuan:'王晓丽' , jie_amount:'36.00',  dai_amount:'0.00'  ,shengyu_amount:'1912.00', current_page:'1' ,total_page:'21'}
				
				],//账期列表数据
				model: {
					region: '',//当前时间
				},
				pickerShow: false,
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad(option) {
			this.kehuinfo = JSON.parse(option.kehuinfo) 
			console.log(option.kehuinfo);
			
			let datetime = new Date();
			let year = datetime.getFullYear();
			let month = datetime.getMonth()+1;//js从0开始取 
			if(month<10){
			month = "0" + month;
			}
			this.model.region = year + '-' + month + '-01';
			this.request()
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
						type:'往来账查询',
						userid:this.$userinfo.userid,
						c_id:this.kehuinfo.C_ID,
						date:this.model.region,
						current_page:this.pageindex,
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
			//拨号方法
			makePhoneCall(list) {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: list.phone,
				})
			},
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},		
			// 选择地区回调
			regionConfirm(e) {
				console.log(e);
				this.model.region = e.year + '-' + e.month + '-' + e.day;
				this.pageindex = 1
				this.zqList = []
				this.request()
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
		border-top: 10px solid #EEEEEE;
		width: 100vw;
		/* padding-top: 10px; */
		font-size: 16px;
		background-color: #FFFFFF;
	}
	.list-item{
		box-sizing: border-box;
		padding-left: 10px;
		display: flex;
		height: 35px;
		line-height: 35px;
		color: #303133;
	}
	.list-item .item-flex{
		flex: 1;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow:hidden;
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
</style>
