<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="收藏客户" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="search" @cancel="cancle"/>
		</view>
		<view class="zhanwei" style="height: 104rpx;"/>
		<block v-for="(item,index) in resdataList"  >
			<view class="ordercontent" :key="index">
				<view class="ordercontent-title"  @click="Togoodslist(item,index)">
					<view class="" style="font-size: 18px;">
						{{item.c_company_name}}
					</view>
				</view>
				<view class="ordercontent-body">
					<view class="body-item">
						编号:&nbsp{{item.c_bianhao}}
					</view>
					<view class="body-item"  @click="Togoodslist(item,index)">
						联系人:&nbsp{{item.c_contact}}&nbsp&nbsp&nbsp{{item.c_phone}}
					</view>
					<view class="body-item"  @click="Togoodslist(item,index)">
						地址:&nbsp{{item.c_gs_address}}
					</view>
					<view class="body-item" style="color: #ff0000;"  @click="Togoodslist(item,index)">
						{{item.is_outdate == '1'?'已过期':''}}
					</view>
					<view class="staricon"  @click="star(item,index)">
						<uni-icons type="star" size="18"  v-if="item.is_liked == '0'"></uni-icons>
						<uni-icons type="star-filled" size="18"  v-else color="#ffaa00"></uni-icons>
					</view>
				</view>
			</view>
		</block>
		<u-empty  text="没有搜索结果" mode="search"  :show="resdataList.length < 1"
				:marginTop="500"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="resdataList.length > 20"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:null,//用户id(从缓存中取)
				//收藏列表信息
				resdataList:[				
						// {"id":"0","state":"","star":true, "bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","address":"贵安新区人民路23号","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880"},
				],
				//收藏星颜色
				starcolor:'',
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
						type:'我的客户收藏',
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
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//收藏方法
			star(item,index) {
				console.log(item);
				// console.log(item.is_liked);
				// item.is_liked = !item.is_liked
				if(item.is_liked == '0') {
					this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'客户收藏',
							userid:this.$userinfo.userid,
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
							userid:this.$userinfo.userid,
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
			//跳转商品列表方法
			Togoodslist(item,index) {
				// console.log(item);
				if(item.is_outdate != '0'){
					uni.showModal({
						content:'该客户证件照已过期',
						showCancel:false,
						confirmColor:'#00A200'
					})
				}
				else{
					const kehuinfo = JSON.stringify(item)
					uni.navigateTo({
						url:'goodslist?kehuinfo='+ kehuinfo
					})
				}
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
		margin: 5px 0;
		padding: 10px 10px;
		background-color: #FFFFFF;
		position: relative;
	}
	.body-item {
		margin: 4px 0;
		color: #3f3f3f;
		font-size: 15px;
	}
	.staricon {
		position: absolute;
		right: 13px;
		bottom: 13px;
		width: 21px;
		height: 21px;
		line-height: 17px;
		text-align: center;
		border: 1px solid #EEEEEE;
	}
</style>
