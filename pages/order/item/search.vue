<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品搜索" fixed="true"/>
		<view class="tui-searchbox">
			<view class="tui-search-input">
				<icon type="search" :size='13' color='#333'></icon>
				<input confirm-type="search" placeholder="大家都在搜：小儿感冒灵" :focus="true" auto-focus placeholder-class="tui-input-plholder"
				 class="tui-input" v-model.trim="key" @input="inputKey"/>
				<icon type="clear" :size='13' color='#bcbcbc' @tap="cleanKey" v-show="key"></icon>
			</view>
			<view class="tui-cancle" @tap="back">取消</view>
		</view>

		<view class="tui-search-history" v-show="history.length>0 && !key">
			<view class="tui-history-header">
				<view class="tui-search-title">搜索历史</view>
				<!-- <uni-icons type="trash"></uni-icons> -->
				<uni-icons type="trash" :size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></uni-icons>
			</view>
			<view class="tui-history-content">
				<block v-for="(item,index) in history" :key="index">
					<tui-tag margin="0 24rpx 24rpx 0" type="gray" shape="circle">{{item}}</tui-tag>
				</block>
			</view>
		</view>
		<view v-show="key">
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
		</view>

		<view class="tui-search-hot">
			<view class="tui-hot-header">
				<view class="tui-search-title">热销商品</view>
			</view>
			<view class="tui-hot-content">
				<block v-for="(item,index) in hot" :key="index">
					<tui-tag  margin="0 12rpx 24rpx 0" type="gray" shape="circle">{{item}}</tui-tag>
				</block>
			</view>
		</view>
		<tui-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
	</view>

</template>

<script>
	// const util = require("@/utils/util.js")
	const util = require("@/util/util.js")
	export default {
		data() {
			return {
				history: [
					"灵芝胶囊",
					"布洛伪麻颗粒",
					"川贝止咳",
					"妇科调经",
					"穿心莲片",
				],
				hot: [
					"冷敷贴",
					"小儿腹泻贴",
					"灵芝胶囊",
					"阿莫西林",
					"川贝止咳",
					
				],
				key: "",
				showActionSheet: false,
				tips: "确认清空搜索历史吗？",
				searchResult:["按照展示的列表输入关键词看效果","新药尝鲜","阿莫西林胶囊",],
				searchList:[]
			}
		},
		methods: {
			back: function() {
				uni.navigateBack();
			},
			cleanKey: function() {
				this.key = ''
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
				}
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
			}
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