<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" @clickLeft="back" rightIcon="map" @clickRight="rightmap">
			<view slot="default" class="icon-font" style="width: 70vw;">
				<!-- <uni-search-bar @input="" radius="90" cancelButton="none" placeholder="手机号/客户公司/客户名称" /> -->
				<uni-search-bar radius="90"  placeholder="手机号/客户公司/客户名称" @confirm="search" @cancel="cancle"/>
			</view>
		</uni-nav-bar>
		<!-- <view class="tabbar">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view> -->
		<!-- <view class="header">
			<text>我的客户</text>
		</view> -->
		<!-- <view v-if="clientList.length < 1" class="" style="width: 100%; height: 80vh;align-items: center; display: flex; flex-direction: column;justify-content: center;">
		</view> -->
			
		
		<block v-for="(item,index) in resdataList">
			<view class="scroll-item">
				<view class="items scroll-number" style="font-size: 15px; display: flex;">
					<text style="flex: 1;"  @click="Toseeclient(item)">编号:{{item.c_bianhao}}</text> 
					<view class="gotask" @click="gotask(item)">
						前往拜访
					</view>
				</view>
				<view class="items scroll-store" @click="Toseeclient(item)">
					{{item.c_company_name}}
				</view>
				<view class="items scroll-address"  @click="Toseeclient(item)">
					{{item.c_gs_address}}
				</view>
				<view class="items scroll-person"  @click="Toseeclient(item)">
					{{item.c_contact}}&nbsp{{item.c_phone}}
				</view>
				<view class="items body-item" style="color: #ff0000; font-size: 15px;">
					{{item.is_outdate == '1'?'已过期':''}}
				</view>
				<view class="staricon"  @click.stop="star(item,index)">
					<uni-icons type="star" size="18"  v-if="item.is_liked == '0'"></uni-icons>
					<uni-icons type="star-filled" size="18"  v-else color="#ffaa00"></uni-icons>
				</view>
			</view>	
		</block>
		<u-empty  text="没有搜索结果" mode="search"  :show="resdataList.length < 1"
				:marginTop="500"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="resdataList.length > 1"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:null,//用户id(从缓存中取)
				index: 0,
				resdataList: [],//客户列表信息
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad() {
			this.userid = uni.getStorageSync('userid')
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
						type:'我的客户',
						userid:this.$userinfo.userid,
						current_page:this.pageindex,
						key:this.key
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						this.resdataList = []
					}else{
						this.resdataList.push(...resdata)
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
					}
					
				})
			},
			//返回上级页面
			back() {
				uni.navigateBack({

				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.resdataList = []
				this.request()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.resdataList = []
				this.request()
			},
			//跳转至客户地图页面(默认半径5KM)
			rightmap(){
				uni.navigateTo({
					url:'/pages/index/item/kehufenbu'
				})
			},
			//点击整体内容跳转至客户详情页面并传递item当前选择项
			Toseeclient(item){
				const logitem = JSON.stringify(item)
				uni.navigateTo({
					url:'seeclient?item='+logitem
				})
			},
			//点击前往拜访跳转至拜访日志页面并传递item当前选择项
			gotask(item) {
				console.log(item);
				
				const logitem = JSON.stringify(item)
				uni.navigateTo({
					url:'visitorslog?item='+logitem
				})
			},
			//收藏方法
			star(item,index) {
				// console.log(item);
				// console.log(item.is_liked);
				// item.is_liked = !item.is_liked
				if(item.is_liked == '0') {
					this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'客户收藏',
							userid:this.userid,
							c_id:item.c_id,
							is_liked:1
						}
					}).then(res => {
						item.is_liked = '1'
						const resdata = res.Msg_info[0]
						console.log(resdata);
						uni.showToast({
							title:'收藏成功',
							duration:800
						})
					})
					
				}else {
					this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'客户收藏',
							userid:this.userid,
							c_id:item.c_id,
							is_liked:0
						}
					}).then(res => {
						item.is_liked = '0'
						const resdata = res.Msg_info[0]
						console.log(resdata);
						uni.showToast({
							title:'取消收藏',
							duration:800
						})
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}

	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.scroll-item {
		position: relative;
		box-sizing: border-box;
		width: 100vw;
		padding: 20rpx 20rpx;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #EEEEEE;
	}

	.items {
		/* box-sizing: border-box; */
		flex: 1;
		margin: 4rpx 0;
	}
	.scroll-number{
		width: 100%;
		height: 28px;
		line-height: 28px;
	}
	.gotask {
		width: 30vw;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color:#FFFFFF;
		background-color: #4CD964;
		border-radius: 30px;
	}
	.scroll-item .scroll-title {
		flex: 1;
		font-size: 24rpx;
		color: #4CD964;
	}

	.scroll-item .scroll-store {
		flex: 1;
		font-size: 38rpx;
		font-weight: 500;
		color: #000000;
	}

	.scroll-item .scroll-address,
	.scroll-item .scroll-person {
		flex: 1;
		font-size: 30rpx;
		display: flex;
	}
	.staricon {
		position: absolute;
		right: 13px;
		bottom: 13px;
		width: 21px;
		height: 21px;
		line-height: 21px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #EEEEEE;
	}
</style>
