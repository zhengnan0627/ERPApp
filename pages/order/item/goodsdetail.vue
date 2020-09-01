<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品详情" fixed="true"/>
		<view class="swiper">
			<swiper autoplay="true" circular="true" interval="2000" duration="1000" class="swiper_warp" style="height: 100%;">
				<block v-for="(item,index) in 1" :key="index">
					<swiper-item >
						<view class="swiper-item">
							<image :src="goodsdetail.g_image" mode=""></image>
						</view>
					</swiper-item>
				</block>	
			</swiper>
		</view>
		<view class="goodstitle">
			<view class="" style="color: #ff0000;">
				¥{{goodsdetail.g_price}}
			</view>
			<view class="">
				{{goodsdetail.g_name}}
			</view>
			<view class="">
				规格:&nbsp{{goodsdetail.g_guige}}
			</view>
		</view>
		<view class="detaillist">
			<view class="detaillist-item">
				<view class="item-left">
					商品名称
				</view>
				<view class="item-right">
					{{goodsdetail.g_name}}
				</view>
			</view>
			<view class="detaillist-item">
				<view class="item-left">
					成分
				</view>
				<view class="item-right">
					成分
				</view>
			</view>
			<view class="detaillist-item">
				<view class="item-left">
					规格
				</view>
				<view class="item-right">
					{{goodsdetail.g_guige}}
				</view>
			</view>
			<view class="detaillist-item">
				<view class="item-left">
					用量方法
				</view>
				<view class="item-right">
					服用天数
				</view>
			</view>
		</view>
		<view class="detail-footer">
			<view class="" style="color: #ff0000;">
				注意事项
			</view>
			<view class="" style="margin-top: 5px;">
				无
			</view>
		</view>
		<view class="goodsNav">
			<view class="goodsNav-item"  @click="ToCart" style="border-right: 2px solid #EEEEEE;">
				<uni-icons type="cart" size="26"></uni-icons>
				<view class="">
					购物车
				</view>
			</view>
			<view class="goodsNav-item" @click="star">
				<uni-icons v-if="!goodsdetail.star" type="star" size="26"></uni-icons>
				<uni-icons v-else type="star-filled" size="26" color="#ffaa00" ></uni-icons>
				<view class="">
					收藏
				</view>
			</view>
			<view class="addcart" @click="open"> 
				加入购物车
			</view>
		</view>
		<!-- 购物车弹出层start -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup" v-if="goodsdetail">
				<view class="" style="display: flex; flex-direction: row-reverse;padding:5px 5px 0 0;">
					<uni-icons type="close" size="24" color="#b4b4b4" @click="close"></uni-icons>
				</view>
				<view class="popup-content">
					<view class="popup-img">
						<image :src="goodsdetail.g_image" mode="aspectFit"></image>
					</view>
					<view class="popup-text">
						<view class="popup-item">
							{{goodsdetail.g_name}}
						</view>
						<view class="popup-item" style="color: #ff0000;">
							¥&nbsp{{goodsdetail.g_price}}
						</view>
						<view class="popup-item">
							库存:&nbsp{{goodsdetail.g_kucun}}
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
						<view class="pihao-text" v-for="item in 1">
								<view class="pihao-item">
									批号:&nbsp{{goodsdetail.g_pihao+item*157}}
								</view>
								<view class="pihao-item">
									有效期至:&nbsp{{goodsdetail.g_youxiaoqi}}
								</view>
								<view class="pihao-item">
									库存:&nbsp{{goodsdetail.g_kucun1}}盒
								</view>
								<view class="pihao-item">
									<uni-number-box value="1" @change="numchange"></uni-number-box>
								</view>
						</view>
						
					</scroll-view>
				</view>
				<view class="popup-addcart" @click="addcart(goodsdetail)">
					<text>添加到购物车</text>
				</view>
			</view>
		</uni-popup>
		<!-- 购物车弹出层end -->
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
					//上级页面传进来的客户信息
					kehuinfo:{},
					goodsdetail:{}
			}
		},
		onLoad:function(option){
			// console.log(option);
			this.goodsdetail =JSON.parse(option.item)
			this.kehuinfo = JSON.parse(option.kehuinfo)
			// console.log(this.goodsdetail);
		},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//购物车跳转方法
			ToCart(){
				const kehuinfo = JSON.stringify(this.kehuinfo)
				uni.navigateTo({
					url:'cart?kehuinfo='+ kehuinfo
				})
			},
			//收藏方法
			star() {
					this.goodsdetail.star = !this.goodsdetail.star
					if(this.goodsdetail.star) {
						uni.showToast({
							title:'收藏成功',
							duration:800
						})
					}else {
						uni.showToast({
							title:'取消收藏',
							duration:800
						})
					}
					
			},
			//购物车弹出层方法
			open(item,index){
			    this.$refs.popup.open()
				this.popuplist = item
			},
			//数字输入框方法
			numchange(e) {
				this.badgenumchange = e
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
	.swiper {
		width: 100vw;
		height: 600rpx;
	}
	.swiper .swiper-item{
		width: 100vw;
		height: 100%;
	}
	.swiper .swiper-item image {
		width: 100%;
		height: 100%;
	}
	.goodstitle {
		width: 96vw;
		height: 80px;
		padding-left: 4vw;
		background-color: #FFFFFF;
	}
	.detaillist {
		margin-top: 10px;
		width: 100vw;

		background-color: #FFFFFF;
	}
	.detaillist-item {
		padding-left: 4vw;
		width: 96vw;
		height: 35px;
		overflow: hidden;
		line-height: 35px;
		display: flex;
		border-bottom: 1px solid #EEEEEE;
	}
	.item-left {
		width: 30vw;
		color: #595959;
	}
	.item-right {
		width: 65vw;
	}
	.detail-footer {
		width: 96vw;
		padding-left: 4vw;
		margin-top: 10px;
		height: 100px;
		background-color: #FFFFFF;
	}
	.goodsNav {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 50px;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
	}
	.goodsNav-item{
		flex: 1;
		height: 47px;
		padding-top: 3px;
		text-align: center;
		font-size: 12px;
		background-color: #fcfcfc;
	}
	.addcart {
		width:55vw;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		color: #FFFFFF;
		background-color: #ff0000;
		text-align: center;
	}
/* 购物车弹出层样式 */
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
