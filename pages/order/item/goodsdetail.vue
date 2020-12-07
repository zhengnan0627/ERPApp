<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品详情" fixed="true"/>
		<view class="swiper">
			<swiper 
				autoplay="true" circular="true" interval="2000" duration="1000"
				:indicator-dots="true" indicator-color="#ffffff" indicator-active-color="#ff0000"
				class="swiper_warp" style="height: 100%;">
				<block v-for="(item,index) in imgList" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<image :src="item.imageurl" mode=""></image>
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
				规格:&nbsp{{goodsdetail.g_property}}
			</view>
		</view>
		<view class="detaillist">
			<view class="detaillist-title">
				产品介绍
			</view>
			<view class="g_description">
				{{goodsdetail.g_description}}
			</view>
		</view>
		<view :class="[fromyemian != 'scshangpin' ? 'detail-footer' : 'detail-footer2']">
			<view class=""  style="font-size: 22px;">
				图文详情
			</view>
			<view class="" style="margin-top: 5px;">
				<u-parse :html="goodsdetail.g_detail"></u-parse>	
			</view>
		</view>
		<view class="goodsNav" v-if="fromyemian != 'scshangpin'">
			<view class="goodsNav-item"  @click="ToCart" style="border-right: 2px solid #EEEEEE;">
				<uni-icons type="cart" size="26"></uni-icons>
				<view class="">
					购物车
				</view>
			</view>
			<view class="goodsNav-item" @click="star(goodsdetail)">
				<uni-icons v-if="goodsdetail.is_liked == '0'" type="star" size="26"></uni-icons>
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
				<view class="" style="display: flex; padding:5px 5px 0 0;">
					<view class="popup-kehu">
						代下单客户:&nbsp{{kehuinfo.c_company_name}}
					</view>
					<uni-icons type="close" size="24" color="#b4b4b4" @click="close"></uni-icons>
				</view>
				<view class="popup-content">
					<view class="popup-img">
						<image :src="goodsdetail.imageurl" mode="aspectFit"></image>
					</view>
					<view class="popup-text">
						<view class="popup-item">
							{{goodsdetail.g_name}}
						</view>
						<view class="popup-item" style="color: #ff0000;">
							¥&nbsp{{goodsdetail.g_price}}
						</view>
						<view class="popup-item">
							库存:&nbsp{{goodsdetail.kx_count}}
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
									:step="item.g_buy_ratio" 
									:min="0" :max="item.ku_count"
									
									></u-number-box>
								</view>
						</view>
						
					</scroll-view>
				</view>
				<view class="popup-addcart" @click="addcart(goodsdetail,pihaoList)">
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
					kehuinfo:{},//上级页面传递过来的客户数据对象
					goodsdetail:{},//商品详情数据对象
					imgList:[],//药品图片轮播数据
					popuplist:{},//购物车弹出层数据
					pihaoList:[],//购物车页面批号数据列表
					fromyemian:'',//来自页面
			}
		},
		onLoad:function(option){
			console.log(option);
			this.goodsdetail =JSON.parse(option.item)
			if(option.from){
				this.fromyemian = option.from
			}
			if(option.kehuinfo){
				this.kehuinfo = JSON.parse(option.kehuinfo)
			}
			console.log(this.goodsdetail);
			console.log(this.kehuinfo);
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'药品详情',
					userid:this.$userinfo.userid,
					g_id:this.goodsdetail.g_id,
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					this.goodsdetail = {}
				}else{
					this.goodsdetail = resdata[0]
				}
			})
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'药品详情轮播',
					userid:this.$userinfo.userid,
					g_id:this.goodsdetail.g_id,
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					this.imgList = []
				}else{
					this.imgList = resdata
				}
			})
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
					url:'cart?kehuinfo='+ kehuinfo +'&pageindex=2'
				})
			},
			//收藏方法
			star(goodsdetail) {	
				if(goodsdetail.is_liked == '0') {
						this.$request({
							data:{
								proc:'APP_YWY_PORT',
								type:'商品收藏',
								userid:this.$userinfo.userid,
								g_id:goodsdetail.g_id,
								is_liked:1
							}
						}).then(res => {
							goodsdetail.is_liked = '1'
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
								type:'商品收藏',
								userid:this.$userinfo.userid,
								g_id:goodsdetail.g_id,
								is_liked:0
							}
						}).then(res => {
							goodsdetail.is_liked = '0'
							const resdata = res.Msg_info[0]
							console.log(resdata);
							uni.showToast({
								title:'取消收藏',
								duration:800
							})
						})
					}
			
			},
			//购物车弹出层方法
			open(item,index){
			    this.$refs.popup.open()
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'药品批号',
						userid:this.$userinfo.userid,
						g_id:this.goodsdetail.g_id,
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
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
			numchange(e) {
				this.badgenumchange = e
			},
			//添加到购物车方法
			addcart(goodsdetail,pihaoList) {
				console.log(pihaoList);
				console.log(goodsdetail);
				// console.log(this.kehuinfo);
				const _this = this
				// _this.badge = _this.badge*1+_this.badgenumchange*1
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
				}else{
					pihaoList.map(item =>{
						if(item.g_number != 0){
							_this.$request({
								data:{
									proc:'APP_YWY_PORT',
									type:'加入购物车',
									userid:_this.$userinfo.userid,
									c_id:_this.kehuinfo.c_id,
									g_id:goodsdetail.g_id,
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
		},
		// onUnload(){
		//   this.$bus.$off('CartUpdata')
		// }
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
		font-size: 18px;
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
		padding: 5px 0;
		background-color: #FFFFFF;
	}
	.detaillist-title{
		box-sizing: border-box;
		padding:0 2vw 0 4vw;
		width: 100vw;
		font-size: 22px;
	}
	.g_description{
		box-sizing: border-box;
		padding:0 2vw 0 4vw;
		width: 100vw;
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
		margin-bottom: 110rpx;
		background-color: #FFFFFF;
	}
	.detail-footer2 {
		width: 96vw;
		padding-left: 4vw;
		margin-top: 10px;
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
