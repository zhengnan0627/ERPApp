<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="选择客户" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="search" @cancel="cancle"/>
		</view>
		<view class="zhanwei" style="height: 104rpx;"/>
		<block v-for="(item,index) in kehuList" >
			<view class="ordercontent" :key="index" @click="Tocartlist(item,index)">
				<view class="ordercontent-title">
					<view class="" style="flex: 1; font-size: 14px;">
						{{item.c_company_name}}
					</view>	
					<view class="" style="font-size: 14px;">
						编号:&nbsp{{item.c_bianhao}}
					</view>
				</view>	
				<view class="ordercontent-scroll">
					<view class="scroll-left">
						<uni-icons type="cart" color='#ff5500' size="35"></uni-icons>
					</view>
					<view class="scroll-box">
						<scroll-view scroll-x="true" >
							<view style="width: 100%;height: 100%; display: flex; align-items: center;">
								<view class="scroll-img" v-for="(img,imgindex) in item.imgList" :key="imgindex">
									<image :src="img.g_image" mode="aspectFit" :lazy-load="true"></image>
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="scroll-right">
						共{{item.c_items_count}}种<uni-icons type="arrowright"></uni-icons>
					</view>
				</view>
			</view>
		</block>
		<u-empty  text="没有搜索结果" mode="search"  :show="kehuList.length < 1"
				:marginTop="500"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="kehuList.length > 5"/>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//客户列表信息
				kehuList:[],
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad() {
			const _this =this
			_this.request()
			uni.$on('cart',() => {
				console.log('购物车汇总信息刷新');
				_this.kehuList = []
				_this.request()
			})
		},
		onUnload() {
			uni.$off('cart')
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
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			request(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'获取已购买商品客户',
						userid:_this.$userinfo.userid,	
						current_page:_this.pageindex,
						key:_this.key
					}
				}).then(res => {
					const resdata = res.Msg_info
					// console.log(resdata);
					if(resdata[0].error){
						_this.kehuList = []
					}else{
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
						resdata.map(item => {
							_this.$request({
								data:{
									proc:'APP_YWY_PORT',
									type:'客户已购商品列表',
									userid:_this.$userinfo.userid,
									c_id:item.c_id,
								}
							}).then(res => {
							const imgdata = res.Msg_info
							_this.$set(item,'imgList',imgdata)
							})
						})
						console.log(resdata);
						_this.kehuList.push(...resdata)
					}
					// _this.kehuList = resdata
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.kehuList = []
				this.request()
			},
			cancle(e){	//点击搜索二字
				console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.kehuList = []
				this.request()
			},
			//跳转购物车方法
			Tocartlist(item,index) {
				console.log(item);
				const kehuinfo = JSON.stringify(item)
				uni.navigateTo({
					url:'cart?kehuinfo='+ kehuinfo
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
		background-color: #EEEEEE;
		overflow: hidden;
	}	
	.content {
		width: 100vw;
		height: 200px;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.ordercontent {
		box-sizing: border-box;
		margin: 5px 0;
		padding: 10px 10px;
		background-color: #FFFFFF;
		position: relative;
	}
	.ordercontent-title{
		display: flex;
		justify-content: space-between;
	}
	.ordercontent-scroll{
		display: flex;
		align-items: center;
		width: 100%;
		height: 80px;
		line-height: 80px;
	}
	.scroll-left{
		width: 98rpx;
		height: 50px;
		line-height: 50px;
		text-align: left;
		border-right: 1px solid #000000;
	}
	.scroll-box{
		box-sizing: border-box;
		padding-left: 10px;
		width: 450rpx;
		height: 70px;
		line-height: 70px;
		
		/* background-color: #0086B3; */
		
	}
	.scroll-img{
		margin: 0 3px;
		width: 70px;
		height: 70px;
	}
	.scroll-img image{
		width: 70px;
		height: 70px;
	}
	.scroll-right{
		display: flex;
		justify-content: flex-end;
		width: 150rpx;
		height: 70px;
		line-height: 70px;
		text-align: right;
		font-size: 16px;
	}
</style>
