<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品列表" fixed="true">
			<!-- <view slot="right"  @click=""  style="position: relative;">
				<uni-icons type="cart" size="28"></uni-icons>
				<uni-badge :text="badge" type="error" size="small" class="badge"></uni-badge>
			</view> -->
		</uni-nav-bar>
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" :size="13" color="#999"></icon>
				<text class="tui-search-text">商品编号/助记码</text>
			</view>
		</view>
		<view class="XF-cart" @click="ToCart">
			<uni-icons type="cart" size="28" color="#ffffff"></uni-icons>
			<uni-badge v-if="badge != 0" :text="badge" type="error" size="small" class="badge"></uni-badge>
		</view>
		
		
		<scroll-view
			scroll-y
			:scroll-with-animation="isTap"
			scroll-anchoring
			class="tab-view"
			:scroll-into-view="scrollView_leftId"
			:style="{ height: height + 'px', top: top + 'px' }"
		>
			<view
				:id="index"
				v-for="(item, index) in goodList"
				:key="index"
				class="tab-bar-item"
				:class="[currentTab == index ? 'active' : '']"
				:data-current="index"
				@tap.stop="swichNav"
			>
				<text>{{ item.g_fenlei }}</text>
			</view>
		</scroll-view>
		<scroll-view
			@scroll="scroll"
			scroll-anchoring
			scroll-y
			scroll-with-animation
			:scroll-top="scrollTop"
			class="right-box"
			@scrolltolower="scrolltolower(g_fenleiId)"
			:style="{ height: height + 'px', top: top + 'px' }"
		>
		<!-- scroll-view中控制联动属性    :scroll-into-view="scrollView_rightId" -->
			<!--内容部分 start 自定义可删除-->
			<!-- <block v-for="(title, index) in goodList" :key="index">
				<t-linkage :distanceTop="distanceTop" :recalc="1" :scrollTop="scrollTop" :index="index" @linkage="linkage">
				</t-linkage>
			</block> -->
			<view class="page-view">
				<view class="class-box">
					<view class="class-item">
						<view class="class-name">{{rightgoodslist.g_fenlei}}</view>
						<block v-for="(item,index) in rightgoodslist.g_list">
							<view class="g-container">
									<view class="list-content">
										<view class="content-img"  @tap.stop="goodsdetail(item,index)">
											<image :src="item.g_image" mode="widthFix"></image>
										</view>
										<view class="content-text" >
											<view class="text-item text-name" style="font-size: 14px; color: #000000;"  @tap.stop="goodsdetail(item,index)">
												{{item.g_name}}
											</view>
											<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
											{{item.g_factory}}
											</view>
											<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
												助记码:&nbsp{{item.g_zhuji}}
											</view>
											<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
												产品规格:&nbsp{{item.g_guige}}
											</view>
											
											<view style="text-align: right; margin: 0 5px 4px 0; display: flex;justify-content: space-between;">
												<text style="text-align: left; color: #ff0000; font-size: 20px;"  @tap.stop="goodsdetail(item,index)">
													¥:&nbsp{{item.g_price}}
												</text>
												<uni-icons v-if="!item.star" type="star" size="24" style="margin-left: 25px;" @tap="star(item,index)"></uni-icons>
												<uni-icons v-else type="star-filled" size="24" style="margin-left: 25px;" color="#ffaa00" @tap="star(item,index)"></uni-icons>
												<uni-icons type="plus-filled" size="26" color="#ff0000"  @tap="open(item,index)" ></uni-icons>
											</view>
										</view>
									</view>
								</view>
							
						</block>		
						</view>
				</view>
			</view>
			<!--内容部分 end 自定义可删除-->
		</scroll-view>
		<!-- 购物车弹出层start -->
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
									批号:&nbsp{{popuplist.g_pihao+item*157}}
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
		<!-- 购物车弹出层end -->
	</view>
</template>

<script>
import tLinkage from '@/components/t-linkage/t-linkage';
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
	components: {
		tLinkage
	},
	data() {
		return {
			//上级页面传进来的客户信息
			kehuinfo:{},
			//购物车数字角标
			badge:2,
			//选择批号商品数
			badgenumchange:0,
			index:0,
			//分类id
			g_fenleiId:0,
			scrollTop:0,//右侧滚动高德
			popuplist:{},
			rightgoodslist:{
					"g_fenlei":"胶囊类",
					"g_list":[
						{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
						{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
						{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
						{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
						{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
						{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					],
				},
			goodList:[
				{
					"g_fenlei":"胶囊类",
					"g_list":[
						{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
						{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
						{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
						{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
						{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
						{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					],
				},
				{
					"g_fenlei":"感冒类",
					"g_list":[
						{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
						{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
						{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
						{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
						{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
						{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					],
				},
				{
					"g_fenlei":"肠胃道疾病药",
					"g_list":[
						{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
						{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
						{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
						{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
						{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
						{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					],
				},
				{
					"g_fenlei":"滋补营养类",
					"g_list":[
						{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
						{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
						{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
						{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
						{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
						{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					],
				},
				
			],
			height: 0, //scroll-view高度
			top: 0,
			currentTab: 0, //预设当前项的值
			scrollView_leftId: 'left_0',
			scrollView_rightId: 'right_0',
			scrollTop: 0,
			distanceTop: uni.upx2px(92),
			isScroll: true,
			isTap: true
		};
	},
	onLoad: function(options) {
		this.kehuinfo = JSON.parse(options.kehuinfo)
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					let header = 92;
					let top = 0;
					//#ifdef H5
					top = 44;
					//#endif
					//#ifdef APP-PLUS
					top = 44;
					//#endif
					this.height = res.windowHeight - uni.upx2px(180);
					this.top = top + uni.upx2px(header);
				}
			});
		}, 50);
	},
	methods: {
		//返回上级页面方法
		back(){
			uni.navigateBack({				
			})
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
				item.star = !item.star
				if(item.star) {
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
		//购物车悬浮按钮方法
		ToCart() {
			const kehuinfo = JSON.stringify(this.kehuinfo)
			uni.navigateTo({
				url:'cart?kehuinfo='+ kehuinfo
			})
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
		// 点击标题切换当前页时改变样式
		swichNav: function(e) {
			// console.log(e);
			// console.log(e.currentTarget.id);
			this.g_fenleiId = e.currentTarget.id
			let cur = e.currentTarget.dataset.current;
			this.rightgoodslist = this.goodList[e.currentTarget.id]
			this.scrollTop = 0
			if (this.currentTab == cur) {
				return false;
			} else {
				this.currentTab = cur;
				this.checkCor();
			}
		},
		//右侧滚动到底部方法
		scrolltolower(g_fenleiId) {
			// console.log(g_fenleiId);
			// console.log(this.goodList[0].g_list);
			//静态数据在rightgoodslist.g_list中push一组数据模拟效果（...为解构赋值）
			if (g_fenleiId == 1) {
				this.rightgoodslist.g_list.push(...this.goodList[1].g_list)
			}
			else{
				uni.showToast({
					title:'没有更多数据了',
					icon:'none'
				})
			}
			
		},
		//判断当前滚动超过一屏时，设置tab标题滚动条。
		checkCor: function(isScroll) {
			if (!isScroll) {
				this.isScroll = false;
				this.isTap = true;
				if (this.currentTab > 6) {
					this.scrollView_leftId = `left_${this.currentTab - 2}`;
				} else {
					this.scrollView_leftId = `left_0`;
				}
				this.scrollView_rightId = `right_${this.currentTab}`;
			} else {
				this.scrollView_leftId = `left_${this.currentTab}`;
			}
		},
		productList(e) {
			let key = e.currentTarget.dataset.key;
			uni.navigateTo({
				url: '/pages/template/mall/productList/productList?searchKey=' + key
			});
		},
		search: function() {
			uni.navigateTo({
				url: 'search'
			});
		},
		scroll(e) {
			//动画时长固定300ms
			if (!this.isScroll) {
				setTimeout(() => {
					this.isScroll = true;
				}, 150);
			} else {
				this.scrollTop = e.detail.scrollTop;
			}
		},
		linkage(e) {
			if (e.isLinkage && e.index != this.currentTab) {
				this.isTap = false;
				this.currentTab = e.index;
				this.checkCor(true);
			}
		}
	}
};
</script>

<style>
page {
	background-color: #fcfcfc;
}
/* 悬浮购物车按钮 */
.XF-cart {
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	position: fixed;
	bottom: 60px;
	right: 20px;
	z-index: 99;
	background-color:#ffaa00;
	border-radius: 50px;
}
.badge {
		position: absolute;
		right: -5px;
		top: 3px;
		width: auto !important;
		display: inline !important;
	
	}
/* 左侧导航布局 start*/

.tui-searchbox {
	width: 100%;
	height: 92rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 44px;
	z-index: 100;
}

.tui-searchbox::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #d2d2d2;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-search-input {
	width: 100%;
	height: 60rpx;
	background: #f1f1f1;
	border-radius: 30rpx;
	font-size: 26rpx;
	color: #999;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-search-text {
	padding-left: 16rpx;
}

.tab-view {
	/* height: 100%; */
	width: 200rpx;
	position: fixed;
	left: 0;
	z-index: 10;
}

.tab-bar-item {
	width: 200rpx;
	height: 110rpx;
	background: #f6f6f6;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
	color: #444;
	font-weight: 400;
}

.active {
	position: relative;
	color: #000;
	font-size: 30rpx;
	font-weight: 600;
	background: #fcfcfc;
}

.active::before {
	content: '';
	position: absolute;
	border-left: 8rpx solid #e41f19;
	height: 30rpx;
	left: 0;
}

/* 左侧导航布局 end*/

.right-box {
	width: 100%;
	position: fixed;
	padding-left: 220rpx;
	box-sizing: border-box;
	left: 0;
}

.page-view {
	width: 100%;
	overflow: hidden;
	padding-top: 20rpx;
	padding-right: 20rpx;
	box-sizing: border-box;
}

.class-item {
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	padding: 20rpx 20rpx 60rpx 20rpx;
	/* margin-bottom: 20rpx; */
	border-radius: 12rpx;
}

.class-name {
	font-size: 34rpx;
	font-weight: bold;
}

.g-container {
	padding-top: 20rpx;
	
}
.list-content {
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
		display: flex;
	}
	.content-img {
		width: 20vw;
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
		font-size: 12px;
		color: #767676;
	}
	.text-item {
		margin: 3px 0;
	}
.g-box {
	width: 33.3333%;
	text-align: center;
	padding-top: 40rpx;
}

.g-image {
	width: 120rpx;
	height: 120rpx;
}

.g-title {
	font-size: 22rpx;
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
