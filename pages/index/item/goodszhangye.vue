<template>
	<view class="container">
		<uni-nav-bar  fixed="true" left-icon="back"  @clickLeft="back"  title="商品账页查询"/>
		<view class="" style="position: fixed; top: 44px; left: 0; right: 0;">
			<view class="height-box" v-if="goodinfo.g_name">
				<view class="danjuinfo-box">
					{{goodinfo.g_name}}的账页明细
				</view>
				<u-form-item label-position="left" label="开始时间" prop="region" label-width="200" style="background-color: #FFFFFF; border-bottom: 3px solid #EEEEEE;border-top: 1px solid #EEEEEE;">
					<u-input type="select" :select-open="starttimeShow" v-model="starttime" placeholder="开始时间" input-align="right"  @click="starttimeShow = true"></u-input>
				</u-form-item>
				<u-picker mode="time" v-model="starttimeShow" @confirm="starttimesure" style="z-index: 99;"title="请选择开始时间"></u-picker>
			</view>		
		</view>
		<view class="zhanwei" style="width: 100%;background-color: #EEEEEE;" :style="{'height':height+'px'}"/>
		<template v-for="(item,index) in zyList">
			<view class="detail-box" :key="index">
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						类型:<text style="margin-left: 2px;":style="{color:item.z_type == '入库'?'#ff0000':'#5555ff'}">{{item.z_type}}</text>
					</view>
					<view class="detailbox-flex-item" >
						数量:<text style="margin-left: 2px; color: #000000;">{{item.num}}</text>
					</view>
					<!-- <view class="detailbox-flex-item">
						含税价:<text style="margin-left: 2px; color: #000000;">{{item.price}}</text>
					</view>
					<view class="detailbox-flex-item" >
						金额:<text style="margin-left: 2px; color: #000000;">{{item.sum_price}}</text>
					</view> -->
					<view class="detailbox-flex-item" style="flex: 1.2;">
						结余数量:<text style="margin-left: 2px; color: #000000;">{{item.jc_num}}</text>
					</view>
					<!-- <view class="detailbox-flex-item" style="flex: 1.3;">
						单据编号:<text style="margin-left: 2px; color: #000000;">{{item.dj_bh}}</text>
					</view>	 -->	
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						含税价:<text style="margin-left: 2px; color: #000000;">{{item.price}}</text>
					</view>
					<view class="detailbox-flex-item" style="flex: 2.2;">
						金额:<text style="margin-left: 2px; color: #000000;">{{item.sum_price}}</text>
					</view>
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						批号:<text style="margin-left: 2px; color: #000000;">{{item.sp_ph}}</text>
					</view>
					<view class="detailbox-flex-item" style="flex: 2.2;">
						单据编号:<text style="margin-left: 2px; color: #000000;">{{item.dj_bh}}</text>
					</view>	
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						有效期:<text style="margin-left: 2px; color: #000000;">{{item.date}}</text>
					</view>
					<view class="detailbox-flex-item">
						摘要:<text style="margin-left: 2px; color: #000000;">{{item.zhaiyao}}</text>
					</view>
					
				</view>
				<view class="detail-box-item">
					<view class="detailbox-flex-item">
						单位:<text style="margin-left: 2px; color: #000000;">{{item.dw_name}}</text>
					</view>
				</view>
			</view>
		</template>
		<u-empty  text="暂无信息" mode="search"  :show="zyList.length < 1"
				:marginTop="200"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="zyList.length > 3"/>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodinfo:{},
				height:null,
				starttime:'',
				starttimeShow:false,
				zyList:[],//商品账页数组
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad(option) {
			this.goodinfo = JSON.parse(option.goodinfo)
			console.log(this.goodinfo);
			let datetime = new Date();
			let year = datetime.getFullYear();
			let month = datetime.getMonth()+1;//js从0开始取 
			let day = datetime.getDate();
			if(month<10){
			month = "0" + month;
			}
			if(day<10){
			day = "0" + day;
			}
			this.starttime = year + '-' + month + '-01';
			this.zyList = []
			this.request()
		},
		onReady() {
			let obj = uni.createSelectorQuery().select('.height-box')
			obj.boundingClientRect(data => {
					// console.log(data);
					
						this.height = data.height
					
					
			}).exec()
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
			//返回上级页面方法
			back(){
				uni.navigateBack({				
				})
			},
			starttimesure(e) {
				console.log(e);
				this.starttime = e.year + '-' + e.month + '-' + e.day;
				this.zyList = []
				this.pageindex = 1;
				this.request()
			},
			request(){
				const _this =this
				_this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'商品账页',
						g_id:_this.goodinfo.g_id,
						start_date:_this.starttime,
						current_page:_this.pageindex,
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						_this.zyList = []
					}else{
						_this.zyList.push(...resdata)
						_this.pageindex = resdata[0].current_page * 1
						_this.total_page = resdata[0].total_page * 1
						_this.status = 'loadmore'
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow: hidden;
	}
	.danjuinfo-box{
		box-sizing: border-box;
		width: 100vw;
		padding: 5px 5px 5px 10px;
		font-size: 20px;
		background-color: #EEEEEE;
	}
	.detail-box{
		box-sizing: border-box;
		width: 100vw;
		padding: 2px 5px 2px 10px;
		border-bottom: 2px solid #EEEEEE;
		font-size: 14px;
		color: #737373;
		background-color: #FFFFFF;
	}
	.detail-box-item{
		width: 100%;
		padding: 3px 0;
	}
	.detail-box-flex{
		display: flex;
		justify-content: space-between;
	}
	.detailbox-flex-item{
		flex: 1;
	}
</style>
