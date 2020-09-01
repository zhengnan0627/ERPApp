<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="购物车" fixed="true" style="z-index: 99999999;">
			<!-- <view class="" slot="right" >
				编辑
			</view> -->
		</uni-nav-bar>
		<view class="kehu_name">
			<view class="">
				当前客户:&nbsp{{kehuinfo.store}}
			</view>
			<!-- <view class="">
				编辑
			</view> -->
		</view>
		<view class="zhanwei" style="width: 100vw; height: 30px;">
		</view>	
		<checkbox-group @change="buyChange" style="padding-bottom: 44px;">
			<view class="tui-cart-cell" v-for="(item,index) in dataList" :key="index">
				<tui-swipe-action :actions="actions" @click="handlerButton" :params="item">
					<template v-slot:content>
						<view class="tui-goods-item">
							<label class="tui-checkbox" >
								<checkbox :value="item.g_pihao" :checked="item.selected" color="#fff"></checkbox>
							</label>
							<image :src="item.g_image" class="tui-goods-img" />
							<view class="tui-goods-info">
								<view class="tui-goods-model">
									{{item.g_name}}
								</view>
								<view class="tui-goods-title">
									<view >{{item.g_factory}}</view>
								</view>
								<view class="tui-goods-title">
									<view>批号:{{item.g_pihao}}</view>
								</view>
								
								<view class="tui-price-box">
									<view class="tui-goods-price">￥{{item.g_price}}</view>
									<tui-numberbox :value="item.buyNum" :height="36" :width="64" :min="1" :index="index" @change="changeNum"></tui-numberbox>									</view>
							</view>
						</view>
					</template>
				</tui-swipe-action>
			</view>
		</checkbox-group>
		
		<view class="tui-tabbar">
			<view class="tui-checkAll">
				<checkbox-group @change="checkAll">
					<label class="tui-checkbox">
						<checkbox :checked="isAll" color="#fff"></checkbox>
						<text class="tui-checkbox-pl">全选</text>
					</label>
				</checkbox-group>
				<view class="tui-total-price" v-if="!isEdit">合计:<text class="tui-bold">￥{{totalPrice | getPrice}}</text> </view>
			</view>
			<view>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" v-if="!isEdit" @click="btnPay">去结算({{buyNum}})</tui-button>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" :plain="true" v-else>删除</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上级页面传进来的客户信息
				kehuinfo:{},
				//左滑功能块
				actions: [
					{
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				//购物车列表信息
				dataList: [
					{"g_name":"A0_(麦克普瑞康)灵芝胶囊","selected":false,"buyNum":2,"g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					{"g_name":"A0_(麦克芬比得)布洛芬颗粒","selected":false,"buyNum":1,"g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
					{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","selected":false,"buyNum":2,"g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
					{"g_name":"A0_(麦克维体康)氯化钾注射液","selected":false,"buyNum":2,"g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
					{"g_name":"A0_(麦克独清)穿心莲片","selected":false,"buyNum":2,"g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
					
				],
				isAll: false,//全选状态
				totalPrice: 0,//总价格
				buyNum: 0,//总购买数量
				cartIds: [], //购物车id
				isEdit: false,//结算状态
			}
		},
		//添加过滤器用于计算总价格保留两位小数
		filters: {
			getPrice(price) {
				price = price || 0;
				return price.toFixed(2)
			}
		},
		onLoad(option) {
			//保存上级页面传进来的客户信息
			this.kehuinfo = JSON.parse(option.kehuinfo)
			// console.log(this.kehuinfo);
		},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//每次进行操作之后的总合数据计算方法
			calcHandle() {
				let buyNum = 0;
				let totalPrice = 0;
				let selectedNum = 0;
				this.dataList.map((item) => {
					if (item.selected) {
						buyNum += item.buyNum;
						totalPrice += item.g_price * item.buyNum;
						selectedNum++
					}
				})
				this.isAll = selectedNum === this.dataList.length
				this.buyNum = buyNum
				this.totalPrice = totalPrice
			},
			//商品数量加减按钮方法
			changeNum(e) {
				this.dataList[e.index].buyNum = e.value
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			//点击编辑按钮结算栏改变方法（未做，看后续要求）
			editGood() {
				// #ifdef H5 || MP
				this.isEdit = !this.isEdit;
				// #endif
			},
			//购买车列表选中按钮(checked)方法
			buyChange(e) {
				this.cartIds = e.detail.value;
				this.dataList.map(item => {
					//如果购物车id为数字统一转成字符串
					if (~this.cartIds.indexOf(item.g_pihao)) {
						item.selected = true;
					} else {
						item.selected = false;
					}
				})
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			//全选按钮方法
			checkAll(e) {
				this.isAll = !this.isAll;
				let buyNum = 0;
				let totalPrice = 0;
				this.dataList.map((item) => {
					item.selected = this.isAll;
					if (this.isAll) {
						buyNum += item.buyNum;
						totalPrice += item.g_price * item.buyNum;
					}
				})
				this.totalPrice = totalPrice;
				this.buyNum = buyNum;
			},
			//左滑删除方法
			handlerButton: function(e) {
				let index = e.index;
				let item = e.item;
				// console.log(e);
				uni.showToast({
					// title:`${item.g_name}删除成功`
					title:'删除成功'
				})
			},
			//结算跳转提交订单页面
			btnPay() {
				//过滤所有被选中的购物栏整合为新数组传递到结算页面
				let orderlist = this.dataList.filter(item =>{
					if(item.selected){
						return item
					}
				})
				// console.log(JSON.stringify(orderlist));
				// console.log(this.kehuinfo);
				uni.navigateTo({
					url: 'submitOrder?orderlist='+JSON.stringify(orderlist)+'&kehuinfo='+JSON.stringify(this.kehuinfo)
				})
			},
		}
	}
</script>

<style>
	page{
		background: #fafafa;
	}
	.container {
		width: 100vw;
		background-color: #fafafa;
		overflow: hidden;
	}
	.kehu_name {
		position: fixed;
		z-index: 9999999;
		padding-left: 3vw;
		width: 100vw;
		height: 35px;
		line-height: 35px;
		font-size: 15px;
		background-color: #fafafa;
	}
	.tui-cart-cell {
		margin-bottom: 24rpx;
		width: 100%;
		border-radius: 12rpx;
		background: #FFFFFF;
		padding: 40rpx 0;
		overflow: hidden;
	}

	.tui-cart-cell {
		width: 100%;
		border-radius: 12rpx;
		background: #FFFFFF;
		padding: 40rpx 0;
		overflow: hidden;
	}
	
	.tui-goods-item {
		display: flex;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	
	.tui-checkbox {
		min-width: 70rpx;
		display: flex;
		align-items: center;
	}
	
	/* #ifdef MP-WEIXIN */
	.tui-checkbox .wx-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}
	
	.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #eb0909;
		width: 44rpx !important;
		height: 44rpx !important;
		border: none;
	}
	
	/* #endif */
	/* #ifndef MP-WEIXIN */
	
	>>>.tui-checkbox .uni-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}
	
	>>>.tui-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #eb0909;
		width: 45rpx !important;
		height: 45rpx !important;
		border: none;
	}
	
	/* #endif */
	.tui-goods-img {
		width: 220rpx;
		height: 220rpx !important;
		border-radius: 12rpx;
		flex-shrink: 0;
		display: block;
	}
	
	.tui-goods-info {
		width: 100%;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.tui-goods-title {
		white-space: normal;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #333;
	}
	
	.tui-goods-model {
		max-width: 100%;
		color: #333;		
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
	
	.tui-model-text {
		max-width: 100%;
		transform: scale(0.9);
		transform-origin: 0 center;
		font-size: 24rpx;
		line-height: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.tui-price-box {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	
	.tui-goods-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}
	.tui-tabbar {
		width: 100%;
		height: 100rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		z-index: 99999;
	}
	
	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.tui-checkAll {
		display: flex;
		align-items: center;
	}
	
	.tui-checkbox-pl {
		padding-left: 12rpx;
	}
	
	.tui-total-price {
		padding-left: 30rpx;
		font-size: 30rpx !important;
	}
</style>
