<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  :title="pagecurrentindex == '1'?  'APP订单列表' :'ERP订单列表'" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="search" @cancel="cancle"/>
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item}}</view>
				</view>
			</view>	
		</view>
		<view class="zhanwei" style="height: 192rpx;"/>
		<block v-for="(item,index) in orderList" >
			<view class="ordercontent" :key="index" @click="Todetail(item,index)">
				<view class="ordercontent-title">
					<view class="">
						{{item.order_bianhao}}
					</view>
					<view class="">
						{{item.created_date}}
					</view>
					<view class="" style="padding:0 4px; text-align: center; border-radius: 4px; background-color: #00A200; color: #FFFFFF;">
						<view class="">
							{{item.order_status}}
						</view>
					</view>
				</view>
				<view class="ordercontent-body">
					<view class="body-item">
						{{item.c_company_name}}
					</view>
					<view class="body-item">
						联系人:{{item.c_contact}}&nbsp&nbsp&nbsp{{item.c_phone}}
					</view>
				</view>
				<view class="ordercontent-footer">
					<view class="">
						共{{item.goods_count}}个商品
					</view>
					<view class="">
						实付:<text style="margin-left: 3px; color: #ff0000;">¥{{item.goods_amount}}</text>
					</view>
				</view>
			</view>
		</block>
		<u-empty  text="没有搜索结果" mode="search"  :show="orderList.length < 1"
				:marginTop="400"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="orderList.length > 5"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pagecurrentindex:'1',//上级页面传过来的页面来源参数
				sub_type:'APP',//上级页面传过来的点击item内的sub_type参数
				order_type_id:'',//上级页面传过来的点击item内的order_type_id参数
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
				//tabbar数据
				titles:['待审核','已审核','已拒绝','已撤销'],
				order_type_list:[],
				currentIndex:0,
				orderList:[]
			}
		},
		onLoad(option) {
			console.log(option);
			this.currentIndex = option.currentIndex * 1
			this.pagecurrentindex = option.pageindex
			this.titles = this.pagecurrentindex == '1'?['待审核','已审核','已拒绝','撤销'] :['待发货','已发货','已配车','已完成']
			// this.order_type_list= this.pageindex == '1'?['APP1','APP2','APP3','APP4'] :['待发货','已发货','已配车','已完成']
			this.order_type_id = JSON.parse(option.item).order_type_id
			this.sub_type = this.pagecurrentindex == '1'? 'APP':'ERP'
			this.request()
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
		},
		onReachBottom(){
			if(this.pageindex >= this.total_page){
				this.status = 'nomore'
			}else{
				console.log('到底了');
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
			//数据请求方法
			request(){
				const _this = this
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'订单列表',
						userid:this.$userinfo.userid,
						sub_type:this.sub_type,
						order_type_id:this.currentIndex,
						current_page:this.pageindex,
						key:this.key
					}
				}).then(res => {
					const resdata = res.Msg_info
					// this.noticeList = resdata
					// console.log(resdata);
					if(resdata[0].error){
						this.orderList = []
					}else{
						// this.orderList = resdata
						
						_this.orderList.push(...resdata)
						_this.pageindex = resdata[0].current_page * 1
						_this.total_page = resdata[0].total_page * 1
						_this.status = 'loadmore'
						// console.log(_this.orderList);
					}
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.orderList = []
				this.request()
			},
			cancle(e){	//点击搜索二字
				console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.orderList = []
				this.request()
			},
			//tabbar切换方法
			itemclick(index) {
				let _this = this
				this.pageindex = 1
				this.key =''
				this.orderList = []
				//点击切换视图并回到顶部
				if (_this.currentIndex != index) {
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 100
					});
				}
				_this.currentIndex = index
				_this.request()
			},
			//点击列表跳转订单详情方法
			Todetail(item,index){
				uni.navigateTo({
					url:'orderdetail?orderdetail='+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style>
	page{
		background: #EEEEEE;
	}
	.container {
		width: 100vw;
		overflow: hidden;
	}	
	.content {
		width: 100vw;
		height: 200px;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.tabcontrol{
		display: flex;
		height: 40px;	
		line-height: 40px;
		width: 750rpx;
	    text-align: center;
	    font-size: 13px;
	    background-color: #fff;
	    z-index: 9;
		border-bottom: 2px solid #EEEEEE;
	 }
	.tabcontrolitem{
		width: 250rpx;
		height: 40px;
		line-height: 40px;			
	}
	.tabcontrolitem2 {
		height: 40px;
		line-height: 40px;	
	}
	.active{
		color: #00aa00;
		height: 34px !important;
		margin-top: 3px;
		line-height: 34px;
		border-bottom-width: 3px ;
		border-bottom-style: solid;
		border-bottom-color: #00aa00;
	}
	.ordercontent {
		margin: 5px 0;
		padding: 10px 10px;
		background-color: #FFFFFF;
	}
	.ordercontent-title {
		width: 100%;
		height: 24px;
		line-height: 24px;
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		color: #9e9e9e;
	}
	.ordercontent-body {
		width: 100%;
	
		padding: 5px 0;
		display: flex;
		flex-direction: column;
		/* background-color: #c6c6c6; */
	}
	.ordercontent-body .body-item {
		flex: 1;
		margin: 3px 0;
		font-size: 17px;
	}
	.ordercontent-footer {
		width: 100%;
		height: 20px;
		line-height: 20px;
		display: flex;
		justify-content: space-between;
		font-size: 17px;
	}
</style>
