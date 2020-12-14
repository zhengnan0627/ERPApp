<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="单位查询" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="单位名称" @confirm="search" @cancel="cancle"/>
		</view>
		<view class="zhanwei" style="height: 104rpx;"/>
		<template v-for="(item,index) in danweiList">
			<view class="jilu-box":key="index">
				<view class="jilubox-left" @click="popup(item)">
					<view class="jilubox-left-flex">
						<view class="left-flex-item">
							单位:&nbsp&nbsp <text style="font-size: 14px; color: #000000;">{{item.dw_name}}</text>
						</view>
					</view>
					<view class="jilubox-left-flex">
						<view class="left-flex-item" >
							区域:&nbsp&nbsp <text style="color: #000000;">{{item.dw_area}}</text>
						</view>
						<view class="left-flex-item" style="flex: 1.4;">
							客户等级:&nbsp&nbsp <text style="color: #000000;">{{item.dw_level}}</text>
						</view>
					</view>
					<view class="jilubox-left-flex">
						<view class="left-flex-item" >
							应收金额:&nbsp&nbsp<text style="color: #000000;">{{item.ys_amount}}</text>
						</view>
						<view class="left-flex-item" style="flex: 1.4;">
							联系人:&nbsp&nbsp <text style="color: #000000;">{{item.dw_contact}}<text v-if="item.dw_phone">({{item.dw_phone}})</text></text>
						</view>	
					</view>
					<view class="jilubox-left-flex">
						<view class="left-flex-item">
							业务员:&nbsp&nbsp <text style="color: #000000;">{{item.ywy_name}}</text>
						</view>
						<view class="left-flex-item" style="flex: 1.4;">
							最后销售时间:&nbsp&nbsp<text style="color: #000000;">{{item.last_sale_date}}</text>
						</view>
					</view>
				</view>
				<view class="jilubox-right">
					<uni-icons type="arrowright" size="30" @click="Tomingxi(item,index)"></uni-icons>
				</view>
			</view>
		</template>
		<u-empty  text="暂无信息" mode="search"  :show="danweiList.length < 1"
				:marginTop="300"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="danweiList.length > 5"/>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danweiinfo:{},//单位信息从上级页面传入
				danweiList:[],//单位查询数组
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad(option) {
			this.danweiinfo = JSON.parse(option.danweiinfo)
			console.log(this.danweiinfo);
			this.danweiList = []
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
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.danweiList = []
				this.request()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.danweiList = []
				this.request()
			},
			Tomingxi(item,index){
				uni.navigateTo({
					url:'danweizhangye?danweiinfo='+JSON.stringify(item)
				})
			},
			request(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'单位查询',
						userid:_this.$userinfo.userid,
						role:_this.$userinfo.role,
						sub_type:_this.danweiinfo.sub_type,
						key:_this.key,
						current_page:_this.pageindex,
					}
				}).then(res => {
					const resdata = res.Msg_info
					if(resdata[0].error){
						_this.danweiList = []
					}else{
						
						_this.danweiList.push(...resdata)
						_this.pageindex = resdata[0].current_page * 1
						_this.total_page = resdata[0].total_page * 1
						_this.status = 'loadmore'
					}
				})
			},		
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
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.jilu-box{
		width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		border-top: 1px solid #CCCCCC;
		color: #737373;
	}
	.jilubox-right{
		height: 100%;
		width: 35px;
		text-align: center;
	}
	.jilubox-left{
		flex: 1;
		box-sizing: border-box;
		padding: 0 0 0 10px;
		font-size: 14px;
	}
	.jilubox-left-flex{
		box-sizing: border-box;
		padding: 4px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left-flex-item{
		flex: 1;
	}
	.left-flex-item text{
		padding-left: 2px;
	}
</style>
