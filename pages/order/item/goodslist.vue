<template>
<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  fixed="true">
			<view slot="default" style="width: 100%;">
				<sun-tab :value.sync="tabindex" :tabList="tabList" @change="tabChange" rangeKey="name"   bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
			</view>
			<view slot="right"  @click="search"  style="position: relative;">
				<uni-icons type="search" size="25"></uni-icons>
			</view>
		</uni-nav-bar>
		<view class="XF-cart" @click="ToCart">
			<uni-icons type="cart" size="28" color="#ffffff"></uni-icons>
			<uni-badge v-if="badge != 0" :text="badge" type="error" size="small" class="badge"></uni-badge>
		</view>
		<view class="goods-box" style="width: 100%; height: 100%;">
			<template v-if="tabindex == 0">
				<template v-if="goodList">
					<scroll-view
							scroll-y
							:scroll-with-animation="false"
							scroll-anchoring
							class="tab-view"
							:scroll-into-view="scrollView_leftId"
							:style="{ height: height + 'px', top: top + 'px' }">
							<view
								v-if="goodList != []"
								:id="index"
								v-for="(item,index) in goodList"
								:key="index"
								class="tab-bar-item"
								:class="[currentTab == index ? 'active' : '']"
								:data-current="index"
								@tap.stop="swichNav(item,$event)">
								<text>{{item.fl_name}}</text>
							</view>
						</scroll-view>
						<scroll-view
							@scroll="scroll"
							scroll-anchoring
							scroll-y
							:scroll-top="scrollTop"
							class="right-box"
							@scrolltolower="scrolltolower(g_fenleiId)"
							:style="{ height: height + 'px', top: top + 'px' }">
							<view class="page-view">
								<view class="class-box">
									<view class="class-item">
										<!-- <view class="class-name">{{goodList[currentTab].fl_name}}</view> -->
										<template v-for="(item,index) in rightgoodslist">
											<view class="g-container">
												<view class="list-content">
													<view class="content-img"  @tap.stop="goodsdetail(item,index)">
														<image :src="item.g_image" mode="aspectFit" lazy-load></image>
														<view class="kucun" >
															{{item.kx_count * 1 < item.warning_count * 1? '库存紧张' : ''}}
														</view>
													</view>
													<view class="content-text" >
														<view class="text-item text-name" style="font-size: 14px; color: #000000;"  @tap.stop="goodsdetail(item,index)">
															{{item.g_name}}
														</view>
														<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
														{{item.g_factory}}
														</view>
														<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
															编号:&nbsp{{item.g_bianhao}}
														</view>
														<view class="text-item text-zhuji"  @tap.stop="goodsdetail(item,index)">
															产品规格:&nbsp{{item.g_property}}
														</view>
														
														<view style="text-align: right; margin: 0 5px 4px 0; display: flex;justify-content: space-between;">
															<text style="text-align: left; color: #ff0000; font-size: 20px;"  @tap.stop="goodsdetail(item,index)">
																¥:&nbsp{{item.g_price}}
															</text>
															<uni-icons v-if="item.is_liked == '0'" type="star" size="24" style="margin-left: 25px;" @tap="star(item,index)"></uni-icons>
															<uni-icons v-else type="star-filled" size="24" style="margin-left: 25px;" color="#ffaa00" @tap="star(item,index)"></uni-icons>
															<uni-icons type="plus-filled" size="26" color="#ff0000"  @tap="open(item,index)" ></uni-icons>
														</view>
													</view>
												</view>	
											</view>
										</template>
										<u-empty  text="没有搜索结果" mode="search"  :show="rightgoodslist.length < 1"
												:marginTop="500"
										></u-empty>
										<u-back-top :scroll-top="old.scrollTop" @scrollTop2="backscrollTop" :top="1200" :bottom="300"></u-back-top>
										<u-loadmore :status="status" v-if="rightgoodslist.length >= 5"/>		
									</view>
								</view>
							</view>
							<!--内容部分 end 自定义可删除-->
						</scroll-view>
					
				</template>
			</template>
			
			<!-- 商品收藏显示内容开始 -->
			<template v-if="tabindex == 1">
				<scroll-view
					@scroll="scroll2"
					scroll-y
					:scroll-top="scrollTop2"
					class="SCscroll-box"
					@scrolltolower="scrolltolower2"
					:style="{ height: height + 'px', top: top + 'px' }"
					>
					<view class="SCbox">
						<template v-for="(item,index) in goodList2">
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
						
						<u-back-top :scroll-top="old.scrollTop2" @scrollTop2="backscrollTop2" :top="1200" :bottom="300"></u-back-top>						
						<u-loadmore :status="status2" v-if="goodList2.length >= 5"/>
					</view>
				</scroll-view>
				<u-empty  text="没有搜索结果" mode="search"  :show="goodList2.length < 1"
						:marginTop="-88"
				></u-empty>	
			</template>
			
			<!-- 商品收藏显示内容结束 -->
		</view>
	
		
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
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import tLinkage from '@/components/t-linkage/t-linkage';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
	components: {
		tLinkage,
		uniIcons,
		sunTab,
		uniPopup
	},
	data() {
		return {
			//上级页面传进来的客户信息
			kehuinfo:{},
			//顶部tabbar切换数据
			tabindex: 0,
			tabList: [{
			        name: '商品列表',
			        value: 0
			    },
			    {
			        name: '我的收藏',
			        value: 1
			    },
			], //普通数据赋值
			//购物车数字角标
			badge:0,
			//选择批号商品数
			badgenumchange:0,
			index:0,
			//分类id
			g_fenleiId:0,
			scrollTop:0,//商品列表右侧滚动高度
			scrollTop2:0,//我的收藏滚动高度
			old: { //官方解决抖动办法,记录就高度 二次传值
			   scrollTop:0,//商品列表右侧滚动高度
			   scrollTop2:0,//我的收藏滚动高度
			},
			rightgoodslist:[],//右侧分类下列表数据
			goodList:[],//左侧分类数据
			fl_id:'',//分类id，用于右侧请求数据参数
			pageindex:1,//商品列表当前数据分页数
			pageindex2:1,//我的收藏当前数据分页数
			total_page:null,//商品列表总分页数
			total_page2:null,//我的收藏页面总分页数
			status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
			status2: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
			popuplist:{},//购物车弹出层数据
			pihaoList:[],//购物车页面批号数据列表
			height: 0, //scroll-view高度
			top: 0,
			currentTab: 0, //左侧分类列表预设当前项的值
			scrollView_leftId: 'left_0',
			scrollView_rightId: 'right_0',
			distanceTop: uni.upx2px(92),
			isScroll: true,
			isTap: true,
			//商品收藏页面列表数据
			goodList2:[
				// {"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":true,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
			],
			backScrollTop:0
		};
	},
	onLoad: function(options) {
		this.kehuinfo = JSON.parse(options.kehuinfo)
		// console.log(this.kehuinfo);
		this.$bus.$on('CartUpdata', this.kehuCart)
		this.$request({
			data:{
				proc:'APP_YWY_PORT',
				type:'药品分类',
				userid:this.$userinfo.userid,
			}
		}).then(res => {
			const resdata = res.Msg_info
			if(resdata[0].error){
				this.goodList = []
			}else{
				const resdata = res.Msg_info
				// console.log(resdata);
				this.goodList = resdata
				this.fl_id = resdata[0].fl_id
				//右侧展示数据请求方法
				this.rightRequest()
				this.kehuCart()
			}
		})
		this.SCrequest()
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					let header =0;
					let top = 0;
					console.log(res);
					//#ifdef H5
					this.height = res.windowHeight - uni.upx2px(88);
					top = 44;
					//#endif
					//#ifdef APP-PLUS
					top = 44;
					this.height = res.windowHeight - uni.upx2px(140);
					//#endif
					this.top = top + uni.upx2px(header); 
				}
			});
		}, 50);
	},
	onUnload(){
	  this.$bus.$off('CartUpdata')
	},
	// onPageScroll(e) {
	// 	this.backScrollTop = e.scrollTop;
	// 	console.log(this.backScrollTop);
	// },
	methods: {
		//返回上级页面方法
		back(){
			uni.navigateBack({				
			})
		},
		//顶部右侧搜索按钮方法
		search(){
			const kehuinfo = JSON.stringify(this.kehuinfo)
			uni.navigateTo({
				url:'search?kehuinfo='+ kehuinfo
			})
		},
		//顶部tabbar切换方法
		tabChange(e) {
			console.log(e);
			console.log(this.tabindex);
			if(this.tabindex == 1){
				this.goodList2 = []
				this.SCrequest()
			}
			// if (e.tab.value == 0){
			// 	this.index = e.tab.value
			// }else{
			// 	console.log(this.backScrollTop);
			// 	uni.pageScrollTo({
			// 		scrollTop:this.backScrollTop,
			// 		duration:0
			// 	})
			// }
		},
		//商品列表右侧展示数据请求方法,可重复调用,调用前注意this.fl_id和this.pageindex的赋值
		rightRequest(){
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'药品列表',
					userid:this.$userinfo.userid,
					fl_id:this.fl_id,
					current_page:this.pageindex,
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					this.rightgoodslist = []
				}else{
					this.rightgoodslist.push(...resdata)
					this.pageindex = resdata[0].current_page * 1
					this.total_page = resdata[0].total_page * 1
					this.status = 'loadmore'
				}
			})
		},
		//我的收藏页面数据接口,可反复调用,注意
		SCrequest(){
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'我的商品收藏',
					userid:this.$userinfo.userid,
					current_page:this.pageindex2,
					key:''
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					this.goodList2 = []
				}else{
					this.goodList2.push(...resdata)
					this.pageindex2 = resdata[0].current_page * 1
					this.total_page2 = resdata[0].total_page * 1
					this.status = 'loadmore'
				}
			})
		},	
		//客户购物车商品信息列表接口
		kehuCart(){
			console.log('购物车数据更新');
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'客户已购商品列表',
					userid:this.$userinfo.userid,
					c_id:this.kehuinfo.c_id,
				}
			}).then(res => {
				const resdata = res.Msg_info
				// console.log(resdata);
				if(resdata[0].error){
					this.badge = 0
				}else{
					this.badge = resdata.length
				}
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
		//购物车悬浮按钮方法
		ToCart() {
			console.log(this.kehuinfo);
			const kehuinfo = JSON.stringify(this.kehuinfo)
			uni.navigateTo({
				url:'cart?kehuinfo='+ kehuinfo
			})
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
			_this.badge = _this.badge*1+_this.badgenumchange*1
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
								_this.kehuCart()//购物车数据更新(角标)
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
		// 点击标题切换当前页时改变样式
		swichNav(item,e) {
			console.log(item);
			// console.log(e.currentTarget.id);
			this.g_fenleiId = e.currentTarget.id
			let cur = e.currentTarget.dataset.current;
			this.fl_id = item.fl_id
			this.rightgoodslist = []
			this.pageindex = 1
			this.rightRequest()
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
			console.log(this.pageindex, this.pageindex);
			if(this.pageindex >= this.total_page){
				this.status = 'nomore'
			}else{
				// console.log('到底了');
				this.status = 'loading';
				this.pageindex += 1;
				this.rightRequest()
			}	
		},
		//右侧滚动到底部方法
		scrolltolower2() {
			if(this.pageindex2 >= this.total_page2){
				this.status2 = 'nomore'
			}else{
				// console.log('到底了');
				this.status2 = 'loading';
				this.pageindex2 += 1;
				this.SCrequest()
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
			console.log(e);
			let key = e.currentTarget.dataset.key;
			uni.navigateTo({
				url: '/pages/template/mall/productList/productList?searchKey=' + key
			});
		},
		
		scroll(e) {
			//动画时长固定300ms
			
			if (!this.isScroll) {
				setTimeout(() => {
					this.isScroll = true;
				}, 150);
			} else {
				this.old.scrollTop = e.detail.scrollTop;//官方解决办法
				// this.scrollTop = e.detail.scrollTop;
				// console.log(   this.scrollTop ,   e.detail.scrollTop);
			}
		},
		scroll2(e) {
			//动画时长固定300ms
			if (!this.isScroll) {
				setTimeout(() => {
					this.isScroll = true;
				}, 150);
			} else {
				// this.scrollTop2 = e.detail.scrollTop;
				this.old.scrollTop2 = e.detail.scrollTop;//官方解决办法
			}
		},
		backscrollTop(){
			this.scrollTop = this.old.scrollTop
		    this.$nextTick(function() {
		         this.scrollTop = 0
		    });
		},
		backscrollTop2(){
			this.scrollTop2 = this.old.scrollTop2
		    this.$nextTick(function() {
		         this.scrollTop2 = 0
		    });
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
	.container{
		width: 100vw;
		height: 100vh;
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
	font-size: 26rpx;
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
	background: #fff;
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

.pageview-item {
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	padding: 20rpx 20rpx 20rpx 20rpx;
	/* margin-bottom: 20rpx; */
	border-radius: 12rpx;
}

.pageview-name {
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
		position: relative;
		width: 20vw;
		margin-right: 10px;
		justify-content: center;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.kucun{
		position: absolute; 
		bottom:  20rpx; 
		width: 100%; 
		height: 20px; 
		text-align: center;
		font-size: 16px;
		color: #ff0000;
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
	.popup-kehu{
		flex: 1;
		max-width: 90vw;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		padding-left: 10px;
		font-size: 16px;
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
	/* 商品收藏页面样式 -----------------------------------*/
	.SCscroll-box{
		position: fixed;
		left: 0;
		width: 100%;
		box-sizing: border-box;
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
		bottom:  10rpx; 
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
</style>
