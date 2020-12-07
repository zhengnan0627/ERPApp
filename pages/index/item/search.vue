<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="任务搜索" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="未完成任务编号/客户名/联系人" @confirm="search" @cancel="cancle"/>
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
	<!-- 	<template v-if="false">
			<view class="tui-search-history" v-show="history.length>0">
				<view class="tui-history-header">
					<view class="tui-search-title">搜索历史</view>
				
					<uni-icons type="trash" :size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></uni-icons>
				</view>
				<view class="tui-history-content">
					<block v-for="(item,index) in history" :key="index">
						<tui-tag  @click="tagclick(item,index)" margin="0 24rpx 24rpx 0" type="gray" shape="circle">{{item}}</tui-tag>
					</block>
				</view>
			</view>
			
			
		</template> -->
		<template v-for="(item,index) in stockoutList">
			<view class="content-box" :key="index">
				<view class="contentbox-left">
					<view class="contentboxleft-text">
						{{index + 1}}
					</view>
					
				</view>
				<view class="contentbox-right">
					<view class="item-store">
						<text  @click="taskdetail(item,index)">{{item.company_name}}</text> 
						<text style="color:#55aa00;">{{item.contact}}</text>
						<uni-icons type="phone" @click="makePhoneCall(item)" size="25" color="#55aa00"></uni-icons>
					</view>
					<view class="item-address">
						<text  @click="taskdetail(item,index)">{{item.address}}</text>
						<uni-icons type="paperplane" @click="paperplane(item)"  size="25" color="#55aa00"></uni-icons>
						<text style="color:#55aa00;">{{item.lc}}km</text>
					</view>
					<view class="item-table"  @click="taskdetail(item,index)">
						<view class="table-flex">
							<view class="" style="font-size: 18px; font-weight: 600;">
								{{item.danju_num}}
							</view>
							<view class="table-title">
								单据
							</view>
						</view>
						<view class="table-flex" style="color: #ff0000;">
							<view class="" style="">
								¥{{item.order_amount}}
							</view>
							<view class="table-title">
								订单金额
							</view>
						</view>
						<view class="table-flex">
							<view class="" style="color: #ff0000;">
								¥{{item.shyu_amount}}
							</view>
							<view class="table-title">
								剩余应收
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="item-jiesuan">
					<view class="" style="color: #5f5f5f;" @click="jilu(item)">
						{{item.js_record_num}}条结算记录
						<uni-icons type="arrowright" size="15" v-if="item.jiluicon"></uni-icons>
						<uni-icons type="arrowdown" size="15" v-else></uni-icons>
					</view>
					<view class="jiesuan" @click="jiesuan(item)">
						<text>结算</text>
					</view>
				</view> -->
				<!-- <template v-if="!item.jiluicon">
					<view class="item-jilu" v-for="(jilu,index) in jiluList">
						<view class="" style="flex: 1.5;">
							¥{{jilu.num}}
						</view>
						<view class="" style="flex: 1; text-align: left;">
							结算方式:&nbsp{{jilu.type}}
						</view>
					</view>
				</template> -->
			</view>
		</template>
		<u-empty  text="没有搜索结果" mode="search"  :show="stockoutList.length < 1"
				:margin-top="-192"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="stockoutList.length > 1"/>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				//出库单列表信息
				//配送员坐标信息
				user_jd:'',
				user_wd:'',
					//未完成列表
				stockoutList:[
					
			
				],
				jiluList:[

				],
				 current: 0,
				//公司地址
				address:"清镇市新店镇街上",
				//公司名称
				name:"清镇市青春大药房",
				//视图刷新
				updata:true,
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad: function(options) {
			const _this = this
			this.history = uni.getStorageSync('history') || []
			uni.getLocation({
			    type: 'gcj02',
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
					_this.user_jd = res.longitude
					_this.user_wd = res.latitude
			    }
			});

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
				this.stockoutRequest()
			}
			
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			stockoutRequest(){
				let _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'送货任务单列表',
						userid:_this.$userinfo.userid,
						rw_id:0,
						current_page:_this.pageindex,
						key:_this.key,
						user_jd:_this.user_jd || '132.312',
						user_wd:_this.user_wd || '61.312'
					}
				}).then(res => {
					const resdata = res.Msg_info
					if(resdata[0].error){
						this.stockoutList = []
					}else{
						this.stockoutList.push(...resdata)
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
						// console.log(resdata);
					}
				})
			},
			
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.stockoutList = []
				if(!this.key){
					return
				}
				this.stockoutRequest()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.stockoutList = []
				if(!this.key){
					return
				}
				this.stockoutRequest()
			},
			//页面跳转到taskdetail方法
			taskdetail (item) {
				// this.address = 'asdasdas'
				
				const taskdetailList = JSON.stringify(item)
				// console.log(taskdetailList);
				// console.log(address2);
				uni.navigateTo({
					url:'taskdetail?taskdetailList='+taskdetailList
					
				})
				
			},		
			jilu(item){
				if(item.jiesuannum == 0){
					return
				}
				item.jiluicon = !item.jiluicon
			},
			jiesuan(item){
				this.show =  true
			},
			radioChange(evt){
				console.log(evt);
				 for (let i = 0; i < this.items.length; i++) {
				     if (this.items[i].value === evt.target.value) {
				             this.current = i;
				             break;
				         }
				  }           
			},
			confirm(){
				this.show =  false
				console.log(this.jine);
				// this.$request({
				// 	data:{
				// 		proc:'APP_YWY_PORT',
				// 		type:'结算提交',
				// 		userid:this.$userinfo.userid,
				// 	}
				// }).then(res => {
				// 	const resdata = res.Msg_info
				// 	console.log(resdata);
				// })
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
			
			//跳转到商品详情页面方法
			goodsdetail(item,index){
				const kehuinfo = JSON.stringify(this.kehuinfo)
				uni.navigateTo({
					url:'goodsdetail?item='+JSON.stringify(item)+'&kehuinfo='+ kehuinfo
				})
			},

			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true
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
		height: 100vh;
		background-color: #EEEEEE;
		box-sizing: border-box;
	}	


	/* 新样式 */
	.content-box{
		margin-bottom: 10px;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border: none;
	}
	.contentbox-left{
		width: 80rpx;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		background-color: #FFFFFF;
	
	}
	.contentboxleft-text{
		width: 80rpx;
		text-align: center;
		font-size: 52rpx;
		color: #000000;
	}
	.contentbox-right{
		flex: 1;
	}
	.item-store,
	.item-address,
	.item-table{
		background-color: #FFFFFF;
		border: none;
	}
	.item-store{
		display: flex;
		align-items: center;
		padding-left: 5px;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
	}
	.item-address{
		padding-left: 5px;
		height: 35px;
		line-height: 30px;
		font-size: 14px;
		color: #AAAAAA;
		display: flex;
		align-items: center;
	}
	.item-store text:first-child{
			display: inline-block;
			width: 61vw;
			height: 40px;
			line-height: 40px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.item-address text:first-child{
			display: inline-block;
			width: 61vw;
			height: 40px;
			line-height: 40px;
			justify-content: center;
			vertical-align: middle;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	.item-table{
		display: flex;
		justify-content: center;
		height: 70px;
		line-height: 25px;
		align-items: center;
	}
	.table-flex{
		flex: 1;
		text-align: center;
		font-size: 18px;
	}
	.table-title{
		font-size: 14px;
		color: #AAAAAA;
	}
	.item-jiesuan{
		box-sizing: border-box;
		padding: 0 15px;
		width: 100vw;
		height: 30px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		background-color: #dddddd;
		align-items: center;
	}
	.jiesuan{
		height: 22px;
		line-height: 22px;
		padding: 0 30px;
		border: 1px solid #55aa00;
		border-radius: 5px;
		color: #55aa00;
	}
	.item-jilu{
		box-sizing: border-box;
		width: 100vw;
		padding: 0 15px;
		display: flex;
		justify-content: space-between;
		color: #5f5f5f;
		background-color: #dddddd;
	}
	.popup{
		width: 600rpx;
		/* height: 400px; */
	}
	 .popup-top{
		width: 100%;
		height: 39px;
		line-height: 39px;
		text-align: center;
	}
	.jine{
		box-sizing: border-box;
		padding-left: 20%;
		width: 100%;
		height: 50px;
		line-height: 50px;
		display: flex;
		/* justify-content: center; */
		/* text-align: center; */
	}
	.popup-img{
		margin: 0 auto;
		width: 50%;
		height: 150px;
	}
	.popup-img image{
		width: 100%;
		height: 100%;
	}
	.input{
		width: 100%;
		height: 100%;
		padding-left: 20px;
	}
	.uni-list-cell{
		box-sizing: border-box;
		padding:0 15px;
		width: 100%;
		height: 40px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
	}
	.confirm{
		margin: 10px auto;
		width: 60%;
		height: 30px;
		line-height: 30px;
		border: 1px solid #55aa00;
		border-radius: 5px;
		text-align: center;
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