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
		<template v-if="goodList.length < 1">
			<view class="tui-search-history" v-show="history.length>0">
				<view class="tui-history-header">
					<view class="tui-search-title">搜索历史</view>
					<!-- <uni-icons type="trash"></uni-icons> -->
					<uni-icons type="trash" :size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></uni-icons>
				</view>
				<view class="tui-history-content">
					<block v-for="(item,index) in history" :key="index">
						<tui-tag  @click="tagclick(item,index)" margin="0 24rpx 24rpx 0" type="gray" shape="circle">{{item}}</tui-tag>
					</block>
				</view>
			</view>
			<!-- <view v-show="key">
				<view class="tui-header">
					<view class="tui-header-left tui-noboredr">搜索 “{{key}}”</view>
				</view>
				<view class="tui-result-box">
					<block v-for="(item,index) in searchList" :key="index">
						<view class="tui-result-item" hover-class="tui-opcity" :hover-stay-time="150">
							<rich-text :nodes="item.showKey"></rich-text>
						</view>
					</block>
				</view>
			</view> -->
			
			<view class="tui-search-hot">
				<view class="tui-hot-header">
					<view class="tui-search-title">热销商品</view>
				</view>
				<view class="tui-hot-content">
					<block v-for="(item,index) in hot" :key="index" >
						<tui-tag @click="hottagclick(item,index)"  margin="0 12rpx 24rpx 0" type="gray" shape="circle">{{item.name}}</tui-tag>
					</block>
				</view>
			</view>
			<tui-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
		</template>
		<template v-if="goodList.length >= 1">
			<template v-for="(item,index) in goodList">
				<view class="goodlist2" :key="index">
						<view class="list-content2" >
							<view class="content-img2" @click="goodsdetail(item,index)">
								<image :src="item.g_image" mode="aspectFit"></image>
								<view class="kucun2" >
									{{item.kx_count * 1 < item.warning_count * 1? '库存紧张' : ''}}
								</view>
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
									<!-- <view class="">
										<view class="staricon2"  @click.stop="star(item,index)">
											<uni-icons type="star" size="18"  v-if="item.star"></uni-icons>
											<uni-icons type="star-filled" size="18"  v-else color="#ffaa00"></uni-icons>
										</view>
									</view> -->
								</view>
								<view style="text-align: right; margin: 0 5px 4px 0; display: flex;justify-content: space-between;">
									<text style="text-align: left; color: #ff0000; font-size: 20px; flex: 1;" @click="goodsdetail(item,index)">
										¥:&nbsp{{item.g_price}}
									</text>
									<uni-icons v-if="item.is_liked == '0'" type="star" size="24" style="margin-right: 24rpx;" @click="star(item,index)"></uni-icons>
									<uni-icons v-else type="star-filled" size="24" style="margin-right: 24rpx;" color="#ffaa00" @click="star(item,index)"></uni-icons>
									<uni-icons type="plus-filled" size="26" color="#ff0000"  @click="open(item,index)" ></uni-icons>
								</view>
							</view>
						</view>
					</view>
				</template>
				<!-- <u-empty  text="没有搜索结果" mode="search"  :show="goodList.length < 1"
						:marginTop="500"
				></u-empty> -->
				<u-back-top :scroll-top="scrollTop"  :top="1200" :bottom="200"></u-back-top>						
				<u-loadmore :status="status" v-if="goodList.length >= 10"/>					
							
		</template>
		<!-- 购物车弹出层start -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup" v-if="popuplist">
				<view class="" style="display: flex; padding:5px 5px 0 0;">
					<view class="popup-kehu">
						代下单客户:&nbsp{{kehuinfo.c_company_name}}
					</view>
					<uni-icons type="close" size="24" color="#b4b4b4" @click="close"></uni-icons>
				</view>
				<view class="popup-content">
					<view class="popup-img">
						<image :src="popuplist.g_image" mode="aspectFit"></image>
					</view>
					<view class="popup-text">
						<view class="popup-item">
							{{popuplist.g_name}}
						</view>
						<view class="popup-item" style="color: #ff0000;">
							¥&nbsp{{popuplist.g_price}}
						</view>
						<view class="popup-item">
							库存:&nbsp{{popuplist.kx_count}}
							<!-- <text>{{popuplist.kx_count * 1 > popuplist.warning_count * 1? '库存紧张' : ''}}</text> -->
						</view>
					</view>
				</view>
				<view class="popup-pihao">
					<view class="pihao-title">
						选择批号
					</view>
					<scroll-view scroll-y="true" style="height: 300rpx;">
						<view class="" style="height: 1px;">
						</view>
						<view class="pihao-text" v-for="(item,index) in pihaoList" :key="index">
								<view class="pihao-item">
									批号:&nbsp{{item.g_pihao}}
								</view>
								<view class="pihao-item">
									有效期至:&nbsp{{item.g_expired_date}}
								</view>
								<view class="pihao-item">
									库存:&nbsp{{item.ku_count}}盒
								</view>
								<view class="pihao-item">
									<!-- <uni-number-box :key="index" value="1" @change="numchange(item,$event)"></uni-number-box> -->
									<u-number-box v-model="item.g_number" :index="item.g_buy_ratio"
									@change="valChange" :step="item.g_buy_ratio" 
									:min="0" :max="item.ku_count"
									></u-number-box>
								</view>
						</view>
						
					</scroll-view>
				</view>
				<view class="popup-addcart" @click="addcart(popuplist,pihaoList)">
					<text>添加到购物车</text>
				</view>
			</view>
		</uni-popup>
		<!-- 购物车弹出层end -->
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
				history: [
					"灵芝胶囊",
					"布洛伪麻颗粒",
					"川贝止咳",
					"妇科调经",
					"穿心莲片",
				],
				hot: [
					// {name:"冷敷贴"},
					// {name:"小儿腹泻贴"},
					// {name:"灵芝胶囊"},
					// {name:"阿莫西林"},
					// {name:"川贝止咳"},
				],
				key: "",
				showActionSheet: false,
				tips: "确认清空搜索历史吗？",
				searchResult:["按照展示的列表输入关键词看效果","新药尝鲜","阿莫西林胶囊",],
				searchList:[],
				goodList:[
					// {"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"/static/image/login1.png","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
				],
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
				popuplist:{},//购物车弹出层数据
				pihaoList:[],//购物车页面批号数据列表
			}
		},
		onLoad: function(options) {
			
			this.history = uni.getStorageSync('history') || []
			console.log();
			// console.log(JSON.stringify(this.history));
			this.kehuinfo = JSON.parse(options.kehuinfo)
			this.request()
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'热门搜索关键字',
					userid:this.$userinfo.userid,
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				this.hot = resdata
			})
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
						c_id:this.kehuinfo.c_id,
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
						if(!this.history.includes(this.key)){
							this.history.push(this.key)
							console.log(this.history);
							uni.setStorageSync('history',this.history)
						}
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
					return
				}
				this.request()
			},
			//点击历史搜索标签按钮
			tagclick(item,index){
				console.log(item,index);
				this.pageindex = 1
				this.key = item
				this.goodList = []
				if(!this.key){
					return
				}
				this.request()
			},
			//点击热门搜索标签按钮
			hottagclick(item,index){
				console.log(item,index);
				this.pageindex = 1
				this.key = item.name
				this.goodList = []
				if(!this.key){
					return
				}
				this.request()
			},
			//跳转到商品详情页面方法
			goodsdetail(item,index){
				const kehuinfo = JSON.stringify(this.kehuinfo)
				uni.navigateTo({
					url:'goodsdetail?item='+JSON.stringify(item)+'&kehuinfo='+ kehuinfo
				})
			},
			//收藏方法
			star(item,index) {
				if(item.is_liked == '0') {
					this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'商品收藏',
							userid:this.$userinfo.userid,
							g_id:item.g_id,
							is_liked:1
						}
					}).then(res => {
						item.is_liked = '1'
						const resdata = res.Msg_info[0]
						// console.log(resdata);
						uni.showToast({
							title:'收藏成功',
							duration:800
						})
					})
					
				}else {
					this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'商品收藏',
							userid:this.$userinfo.userid,
							g_id:item.g_id,
							is_liked:0
						}
					}).then(res => {
						item.is_liked = '0'
						const resdata = res.Msg_info[0]
						// console.log(resdata);
						uni.showToast({
							title:'取消收藏',
							duration:800
						})
					})
				}
			},
			
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true
			},
			itemClick: function(e) {
				let index = e.index;
				if (index == 0) {
					this.showActionSheet = false;
					this.history = []
					uni.removeStorageSync('history')
				}
			},
			//购物车弹出层方法
			open(item,index){
				// console.log(item);
			    this.$refs.popup.open()
				this.popuplist = item
				this.pihaoList = []
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'药品批号',
						userid:this.$userinfo.userid,
						g_id:item.g_id,
					}
				}).then(res => {
					const resdata = res.Msg_info
					// console.log(resdata);
					if(resdata[0].error){
						this.pihaoList = []
					}else{
						this.pihaoList = resdata.map(item =>{
						item.ku_count = item.ku_count * 1
						item.g_buy_ratio = item.g_buy_ratio * 1
						item.g_number = item.g_number * 1
						return item
					})
			
					}
				})
			},
			//数字输入框方法
			numchange(item,e) {
				this.badgenumchange = e
				item.ku_count  =  item.ku_count * 1 + e * 1
				console.log(e);
				console.log(item);
			},
			valChange(e){
				console.log(e.index + '    ' +e.value);
			},
			//添加到购物车方法
			addcart(popuplist,pihaoList) {
				console.log(pihaoList);
				console.log(popuplist);
				// console.log(this.kehuinfo);
				const _this = this
				// _this.badge = _this.badge*1+_this.badgenumchange*1
				//every判断选择的批号数组中购买数量是否有不为0的值,如果没有则不能添加到购物车
				if(pihaoList.every(item => item.g_number == 0)){
					uni.showToast({
						icon:'none',
						title:'添加失败,请选择数量'
					})
				}else if (pihaoList.some(item => item.g_number % item.g_buy_ratio != 0)){
					uni.showToast({
						icon:'none',
						title:'添加失败,请确认数量'
					})
				}
				else{
					pihaoList.map(item =>{
						if(item.g_number != 0){
							_this.$request({
								data:{
									proc:'APP_YWY_PORT',
									type:'加入购物车',
									userid:_this.$userinfo.userid,
									c_id:_this.kehuinfo.c_id,
									g_id:popuplist.g_id,
									g_pihao:item.g_pihao,
									g_number:item.g_number
								}
							}).then(res => {
								const resdata = res.Msg_info
								console.log(resdata);
								if(resdata[0].error){
									uni.hideToast()
									uni.showToast({
										title:resdata[0].error,
										icon:'none'
									})
									_this.$refs.popup.close()
								}else{
									_this.$refs.popup.close()
									_this.$bus.$emit('CartUpdata')
									uni.hideToast()
									uni.showToast({
										title:resdata[0].note,
										duration:1500,
									})
								}
							})
						}
					})
				}
				
			},
			close(){
				this.$refs.popup.close()
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
<!-- <template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品列表" fixed="true">
			<view slot="right"  @click=""  style="position: relative;">
				<uni-icons type="cart" size="28"></uni-icons>
				<uni-badge :text="badge" type="error" size="small" class="badge"></uni-badge>
			</view>
		</uni-nav-bar>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" cancelButton="none"/>
		</view>
		
		<view class="zhanwei" style="height: 104rpx;"/>
		<view class="" style="width: 50px; height: 50px; line-height: 50px; text-align: center; position: fixed; bottom: 10px; right: 10px; z-index: 99;background-color:#ffaa00; border-radius: 50px;">
					<uni-icons type="cart" size="28" color="#ffffff"></uni-icons>
		</view>
		<block v-for="(item,index) in goodList">
			<view class="goodlist" :key="index">
				<view class="list-content" @click="goodsdetail(item,index)">
					<view class="content-img">
						<image :src="item.g_image" mode="widthFix"></image>
					</view>
					<view class="content-text">
						<view class="text-item text-name" style="font-size: 21px; color: #000000;">
							{{item.g_name}}
						</view>
						<view class="text-item text-bianhao">
							商品编号:&nbsp{{item.g_bianhao}}
						</view>
						<view class="text-item text-zhuji">
							助记码:&nbsp{{item.g_zhuji}}
						</view>
						<view class="text-item text-factory">
							厂家:&nbsp{{item.g_factory}}
						</view>
						<view class="text-item text-guige">
							规格:&nbsp{{item.g_guige}}
						</view>
					</view>
				</view>
				<view class="list-icon">
					<view class="staricon" @click="open(item,index)">
						<uni-icons type="plus-filled" size="23" color="#ff0000"></uni-icons>
						<text>加入购物车</text>
					</view>
					<view class="staricon"  @click.stop="star(item,index)">
						<view class=""  v-if="item.star">
							<uni-icons type="star" size="23" ></uni-icons>
							<text>收藏</text>
						</view>
						<view class=""  v-else>
							<uni-icons type="star-filled" size="23"  color="#ffaa00"></uni-icons>
							<text>已收藏</text>
						</view>
					
					</view>
				</view>
			</view>
		</block>
		<uni-popup ref="popup" type="bottom">
			<view class="popup" v-if="popuplist">
				<view class="" style="display: flex; flex-direction: row-reverse;padding:5px 5px 0 0;">
					<uni-icons type="close" size="24" color="#b4b4b4" @click="close"></uni-icons>
				</view>
				<view class="popup-content">
					<view class="popup-img">
						<image :src="popuplist.g_image" mode="aspectFit"></image>
					</view>
					<view class="popup-text">
						<view class="popup-item">
							{{popuplist.g_name}}
						</view>
						<view class="popup-item" style="color: #ff0000;">
							¥&nbsp{{popuplist.g_price}}
						</view>
						<view class="popup-item">
							库存:&nbsp{{popuplist.g_kucun}}
						</view>
					</view>
				</view>
				<view class="popup-pihao">
					<view class="pihao-title">
						选择批号
					</view>
					<scroll-view scroll-y="true" style="height: 300rpx;">
						<view class="" style="height: 1px;">
						</view>
						<view class="pihao-text" v-for="item in 3">
								<view class="pihao-item">
									批号:&nbsp{{popuplist.g_pihao}}
								</view>
								<view class="pihao-item">
									有效期至:&nbsp{{popuplist.g_youxiaoqi}}
								</view>
								<view class="pihao-item">
									库存:&nbsp{{popuplist.g_kucun1}}盒
								</view>
								<view class="pihao-item">
									<uni-number-box value="1" @change="numchange"></uni-number-box>
								</view>
						</view>
						
					</scroll-view>
				</view>
				<view class="popup-addcart" @click="addcart(popuplist)">
					<text>添加到购物车</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		data() {
			return {
				//购物车数字角标
				badge:2,
				//选择批号商品数
				badgenumchange:0,
				index:0,
				popuplist:{},
				goodList:[
					{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin2.jpg","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
					{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.jpg","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
					{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
					{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.jpg","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
					{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.jpg","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
				]
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({				
				})
			},
			//跳转到商品详情页面方法
			goodsdetail(item,index){
				uni.navigateTo({
					url:'goodsdetail?item='+JSON.stringify(item)
				})
			},
			//收藏方法
			star(item,index) {
					item.star = !item.star	
			},
			//购物车弹出层方法
			open(item,index){
			    this.$refs.popup.open()
				this.popuplist = item
			},
			//数字输入框方法
			numchange(e) {
				this.badgenumchange = e
				console.log(e);
			},
			//添加到购物车方法
			addcart(popuplist) {
				const _this = this
				uni.showToast({
					title:'添加成功',
					duration:1500,
				})
				_this.badge = _this.badge*1+_this.badgenumchange*1
				_this.$refs.popup.close()	
				
			},
			close(){
				this.$refs.popup.close()
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
	.badge {
		position: absolute;
		right: -7px;
		top: 3px;
	}
	.goodlist {
		width: 100vw;
		margin: 4px 0;
		background-color: #FFFFFF;
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
	}
	.list-content {
		width: 97vw;
		padding: 5px 5px;
		display: flex;
	}
	.content-img {
		width: 30vw;
		margin-right: 10px;
		justify-content: center;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.content-img image {
		width: 100%;
		height: 100%;
	}
	.content-text {
		flex: 1;	
		font-size: 18px;
		color: #767676;
	}
	.text-item {
		margin: 3px 0;
	}
	.list-icon {
		width: 97vw;
		height: 35px;
		line-height: 35px;
		display: flex;
		flex-direction: row-reverse;
	}
	.staricon {	
		margin: 0 10px;
		width: 150px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 19px;
		border: 1px solid #EEEEEE;
		border-radius: 10px;
	}
	.staricon text {
		height: 30px;
		line-height: 30px;
		margin-left:  2px;
	}
	.popup {
		width: 100vw;
		height: 370px;
		background-color: #FFFFFF;
		border-radius: 10px 10px 0 0;
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
 -->