<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品搜索" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="商品名/商品编号" @confirm="search" @cancel="cancle"/>
		</view>
		<!-- <view class="tui-searchbox">
			<view class="tui-search-input">
				<icon type="search" :size='13' color='#333'></icon>
				<input confirm-type="search" placeholder="大家都在搜：小儿感冒灵" :focus="true" auto-focus placeholder-class="tui-input-plholder"
				 class="tui-input" v-model.trim="key" @input="inputKey"/>
				<icon type="clear" :size='13' color='#bcbcbc' @tap="cleanKey" v-show="key"></icon>
			</view>
			<view class="tui-cancle" @tap="back">取消</view>
		</view> -->
		<view class="zhanwei" style="height: 104rpx;"/>
		<template v-if="goodList.length >= 1">
			<template v-for="(item,index) in goodList">
				<view class="goodlist2" :key="index">
						<view class="list-content2" >
							<view class="content-img2" @click="goodsdetail(item,index)">
								<image :src="item.g_image" mode="aspectFit"></image>
							</view>
							<view class="content-text2">
								<view class="text-item2 text-name2" style="font-size: 15px; color: #000000;" @click="goodsdetail(item,index)">
									{{item.g_name}}
								</view>
								<view class="text-item2 text-bianhao2" @click="goodsdetail(item,index)">
									商品编号:&nbsp{{item.g_bianhao}}
								</view>
								<view class="text-item2 text-factory2" @click="goodsdetail(item,index)">
									厂家:&nbsp{{item.g_factory}}
								</view>
								<view class="text-item2 text-guige2" @click="goodsdetail(item,index)">
									<view class="">
										规格:&nbsp{{item.g_property}}
									</view>
								</view>
								<view style="text-align: right; margin: 0 5px 4px 0; display: flex;justify-content: space-between;">
									<text style="text-align: left; color: #ff0000; font-size: 18px; flex: 1;" @click="goodsdetail(item,index)">
										零售价:&nbsp¥{{item.g_price}}
									</text>
								</view>
							</view>
						</view>
					</view>
				</template>
				<u-back-top :scroll-top="scrollTop"  :top="1200" :bottom="200"></u-back-top>						
				<u-loadmore :status="status" v-if="goodList.length >= 10"/>			
		</template>
	</view>
	
</template>

<script>
	// const util = require("@/utils/util.js")
	const util = require("@/util/util.js")
	export default {
		data() {
			return {
				//上级页面传进来的客户信息
				kehuinfo:{},
				key: "",
				showActionSheet: false,
				searchList:[],
				goodList:[
					// {"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"/static/image/login1.png","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
				],
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
				
			}
		},
		onLoad: function(options) {
			uni.$on('jiagefankui',() => {
				this.goodList = []
			})
		},
		onUnload() {
			uni.$off('jiagefankui')
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
			back() {
				uni.navigateBack();
			},
			//我的收藏页面数据接口,可反复调用,注意
			request(){
				if(!this.key){
					return
				}
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'药品搜索',
						userid:this.$userinfo.userid,
						c_id:this.kehuinfo.c_id||'',
						current_page:this.pageindex,
						key:this.key
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						this.goodList = []
						uni.showToast({
							title:'搜索结果为空',
							icon:'none'
						})
					}else{
						this.goodList.push(...resdata)
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
					}
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.goodList = []
				if(!this.key){
					uni.showToast({
						title:'请输入搜索关键字',
						icon:'none'
					})
					return
				}
				this.request()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.goodList = []
				if(!this.key){
					uni.showToast({
						title:'请输入搜索关键字',
						icon:'none'
					})
					return
				}
				this.request()
			},
			//跳转到商品详情页面方法
			goodsdetail(item,index){
				uni.navigateTo({
					url:'jiagefankuidetail?kehuinfo='+JSON.stringify(item)
				})
			},

			//搜索栏注释掉的方法
			cleanKey: function() {
				this.key = ''
			},
			inputKey: function(e) {
				this.key = util.trim(e.detail.value);
				if (!this.key) {
					this.searchList = [];
					return;
				}
				//根据关键词查找
				let arr = []
				//实际开发中，根据搜索返回结果集，此处只是做展示提示搜索哪些文字
				this.searchResult.forEach((item) => {
					arr.push({
						key: item,
						showKey: util.replaceAll(item, this.key, `<label style="color:#E41F19">${this.key}</label>`)
					})
				})
				this.searchList = arr
			},
		}
	}
</script>

<style>
	page {
		color: #333;
		background: #fff;
	}

	.container {
		
		box-sizing: border-box;
	}

	.tui-searchbox {
		margin: 0 30rpx 0 30rpx;
		padding: 30rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-search-input {
		width: 100%;
		height: 66rpx;
		border-radius: 35rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}

	.tui-input {
		flex: 1;
		color: #333;
		padding: 0 16rpx;
		font-size: 28rpx;
	}

	.tui-input-plholder {
		font-size: 28rpx;
		color: #b2b2b2;
	}

	.tui-cancle {
		color: #888;
		font-size: 28rpx;
		padding-left: 30rpx;
		flex-shrink: 0;
	}
	.tui-search-history,
	.tui-search-hot,
	.tui-result-box
	{
		margin: 0 30rpx 0 30rpx;
	}
	.tui-history-header {
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 0;
	}
	.tui-hot-content,
	.tui-history-content{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.tui-icon-delete {
		padding: 10rpx;
	}

	.tui-search-title {
		font-size: 28rpx;
		font-weight: bold;
	}

	.tui-hot-header {
		padding: 30rpx 0;
	}
	
	.tui-header {
		padding: 26rpx 26rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.tui-header-left {
		font-size: 30rpx;
		color: #222;
		border-left: 4rpx solid #EB0909;
		padding-left: 10rpx;
		word-break: break-all;
	}
	
	.tui-noboredr {
		border-left: 0 !important;
	}

	.tui-result-box {
		font-size: 28rpx;
	}
	
	.tui-result-item {
		line-height: 28rpx;
		padding: 28rpx 0;
	}
	.goodlist2 {
		width: 100vw;
		margin: 4px 0;
		background-color: #FFFFFF;
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
	}
	.list-content2 {
		width: 97vw;
		padding: 5px 5px;
		display: flex;
	}
	.content-img2 {
		position: relative;
		width: 30vw;
		margin-right: 10px;
		justify-content: center;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.kucun2{
		position: absolute; 
		bottom:  0rpx; 
		width: 100%; 
		height: 20px; 
		text-align: center;
		font-size: 16px;
		color: #ff0000;
	}
	.content-img2 image {
		width: 100%;
		height: 100%;
	}
	.content-text2 {
		flex: 1;	
		font-size: 15px;
		color: #767676;
	}
	.text-item2 {
		margin: 3px 0;
		font-size: 14px;
	}
	.text-guige2 {
		display: flex;
		justify-content: space-between;
		padding-right: 5px;
	}
	.list-icon2 {
		width: 97vw;
		height: 35px;
		line-height: 35px;
		display: flex;
		flex-direction: row-reverse;
	}
	.staricon2 {	
		width: 21px;
		height: 21px;
		line-height: 21px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #EEEEEE;	
	}
/* 购物车弹出层样式 */
	.popup {
		width: 100vw;
		height: 370px;
		background-color: #FFFFFF;
		border-radius: 10px 10px 0 0;
	}
	.popup-kehu{
		flex: 1;
		padding-left: 10px;
		font-size: 16px;
		max-width: 90vw;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.popup-content {
		width: 94vw;
		margin: 0 auto;
		height: 90px;
		display: flex;
		font-size: 17px;
		align-items: center;
	}
	.popup-img {
		width: 30vw;
		height: 100px;
		margin-right: 15px;
		justify-content: center;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.popup-img image {
		width: 100%;
		height: 100%;
	}
	.popup-pihao {
		width: 100vw;
		margin-top: 10px;
	}
	.pihao-title {
		width: 100vw;
		padding-left: 10px;
		height: 30px;
		line-height: 30px;
		background-color: #EEEEEE;
	}
	.pihao-text {
		width: 100vw;
		height: 60px;
		margin-top: 10px;
		padding-left: 10px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		color: #323232;
	}
	.pihao-item {
		width: 49vw;
		font-size: 16px;
	}
	.popup-addcart {
		position: fixed;
		bottom: 5px;
		left: 5vw;
		width: 90vw;
		height: 35px;
		line-height: 35px;
		text-align: center;
		background-color: #ff0000;
		color: #FFFFFF;
		border-radius: 20px;
	}		
</style>