<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="收藏商品" fixed="true">
		</uni-nav-bar>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="商品名/商品编号/助记码"/>
		</view>
		
		<view class="zhanwei" style="height: 104rpx;"/>
		<!-- <button id="debounce" @click="bun">函数防抖测试</button>
		<view class="">
			{{goodList}}
		</view> -->
		<block v-for="(item,index) in goodList">
			<view class="goodlist" :key="index">
				<view class="list-content" @click="goodsdetail(item,index)">
					<view class="content-img">
						<image :src="item.g_image" mode="widthFix"></image>
					</view>
					<view class="content-text">
						<view class="text-item text-name" style="font-size: 15px; color: #000000;">
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
							<view class="">
								规格:&nbsp{{item.g_guige}}
							</view>
							<view class="">
								<view class="staricon"  @click.stop="star(item,index)">
									<uni-icons type="star" size="18"  v-if="item.star"></uni-icons>
									<uni-icons type="star-filled" size="18"  v-else color="#ffaa00"></uni-icons>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="list-icon">
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
				</view> -->
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[1,2,3,4,5,6,7],
				clientid:'',
				//选择批号商品数
				badgenumchange:0,
				index:0,
				popuplist:{},
				goodList:[
					{"g_name":"A0_(麦克普瑞康)灵芝胶囊","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"14321","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
					{"g_name":"A0_(麦克芬比得)布洛芬颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"2312","g_youxiaoqi":"2022-12-11","g_kucun1":"543"},
					{"g_name":"A0_(麦克止咳诺)川贝罗汉止咳颗粒","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"86321","g_youxiaoqi":"2022-09-11","g_kucun1":"33"},
					{"g_name":"A0_(麦克维体康)氯化钾注射液","g_image":"../../../static/image/yaopin1.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"543242321","g_youxiaoqi":"2023-10-11","g_kucun1":"473"},
					{"g_name":"A0_(麦克独清)穿心莲片","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"64321","g_youxiaoqi":"2022-10-11","g_kucun1":"562"},
					{"g_name":"A0_(麦克尔小叮当)冷敷贴","g_image":"../../../static/image/yaopin2.JPG","g_bianhao":"灵芝胶囊","g_zhuji":"MKPRKLZJN","g_factory":"天圣制药集团股份有限公司","g_guige":"12粒/板*1板/盒","star":false,"g_price":"23","g_kucun":"1452","g_pihao":"325","g_youxiaoqi":"2022-10-11","g_kucun1":"873"},
				]
			}
		},
		methods: {
			
			/**
			 * 函数防抖
			 */
			handleClick(e) {
				 console.log(e);
			    console.log('事件处理函数')
				
			},
			debounce(callback, delay) {
			    return function () {
			        console.log('debounce')	
			        const that = this
			        const args = arguments
			        if (callback.timer) {
			            clearTimeout(callback.timer)
			        }
			        callback.timer = setTimeout(function () {
			            callback(that, args)
						console.log(callback.timer);
			            delete callback.timer
			        }, delay)
			    }
			},
			bun(){
				
				this.$request({
					url:"PublicUrl.ashx",
					data:{'proc':'Pro_Get_goodInfo','type':'轮播','userid':'18537130666'}
				}).then(res => {this.goodList = res.Msg_info
				console.log(res);})
				// console.log('bun');
				// this.handleClick()
				// this.debounce(this.handleClick, 1000)();
				// ECMAScript为数组定义了五个迭代方法，每个方法都接收两个参数：
				// 要在每一项上面运行的函数和运行该函数的作用域——影响this的值。
				// 传入这些方法的函数会接收三个参数（数组项的值，索引，数组本身）
				// arr:[1,2,3,4,5,6,7]
				// （1）forEach()  对数组的每一项运行给定函数，该方法没有返回值
				this.arr.forEach((item,index,thisarr)=>{
					console.log(index+'-'+item+'-'+thisarr);
				},this)
				// （2）some（）： 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
				// console.log( this.arr.some(item=>item>6));
				console.log( this.arr.some((item,index,thisarr)=>item>6&&index>5));
				// (3) every()  对数组中的每一项运行都给定函数，如果该函数对每一项都返回true，则返回true
				console.log( this.arr.every(item=>item>6));
				// （4）filter（） ：对数组的每一项运行给定函数，返回该函数会返回true的项组成的数组
				var a = this.arr.filter(item=>item>4)
				console.log(a);
				// （5）map（） ：对数组的每一项运行给定函数，返回每次函数调用结果所组成的数组(不改变原数组)
				var b =this.arr.map(item => item*3)
				// var b = this.arr.map(function(item){
				// 	item * 3
				// }) 没有return是错误的 undefiend
				console.log(b);
				// 给reduce和reduceRight这两个方法的函数都接收四个参数值：
				// 前一个值，当前值，索引，数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。
				// 第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数是数组的第二项
				var c = this.arr.reduce((pre,cur,index,thisarr)=>pre+cur)
				console.log(c);
			},
			
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
		font-size: 15px;
		color: #767676;
	}
	.text-item {
		margin: 3px 0;
		font-size: 14px;
	}
	.text-guige {
		display: flex;
		justify-content: space-between;
		padding-right: 5px;
	}
	.list-icon {
		width: 97vw;
		height: 35px;
		line-height: 35px;
		display: flex;
		flex-direction: row-reverse;
	}
	.staricon {	
		width: 21px;
		height: 21px;
		line-height: 21px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #EEEEEE;
		
	}
</style>

<!-- 原有app页面样式 -->
<!-- <template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="收藏商品"  fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="商品名/助记码/商品编号" cancelButton="none"/>
		</view>
		<view class="zhanwei" style="height: 104rpx;"/>
		<block v-for="(item,index) in orderList" :key="index">
			<view class="ordercontent" >
				<view class="ordercontent-title">
					<view class="title-item" style="font-size: 22px; width: 70vw;">
						{{item.name}}
					</view>
					<view class="title-item title-details" @click.stop="dpdetails">
						单品详情
					</view>
				</view>
				<view class="ordercontent-body">
					<view class="body-item">
						商品编号:{{item.bianhao}}
					</view>
					
					<view class="body-item">
						厂家:{{item.address}}
					</view>
					<view class="body-item">
						规格/单位:{{item.sp_guige}}
					</view>
					<view class="body-item">
						批准文号:{{item.sp_wenhao}}
					</view>
					<view class="body-item" style="color: #ff0000;">
						{{item.state}}
					</view>
					<view class="staricon"  @click.stop="star(item,index)">
						<uni-icons type="star" size="23"  v-if="item.star"></uni-icons>
						<uni-icons type="star-filled" size="23"  v-else color="#ffaa00"></uni-icons>
					</view>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//收藏列表信息
				orderList:[				
						{"id":"0","state":"","star":true, "bianhao":"阿莫24","name":"C0_(麦克阿莫先锋)阿莫西林胶囊","address":"重庆麦克福新制药有限公司","sp_guige":"12粒/板*2板/盒","sp_wenhao":"国药准字H20129384"},
						
				],
				//收藏星颜色
				starcolor:''
			}
		},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//收藏方法
			star(item,index) {
					item.star = !item.star	
				
			},
			dpdetails(){
				console.log('bb');
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
	.ordercontent-title {
		display: flex;
		justify-content: space-between;
	}
	.title-details {
		margin-top: 5px;
		width: 20vw;
		height: 20px;
		line-height: 20px;
		text-align: center;
		padding: 3px 5px;
		font-size: 16px;
		background-color: #00A200;
		color: #FFFFFF;
		border-radius: 6px;
	}
	.body-item {
		margin: 5px 0;
		color: #3f3f3f;
	}
	.staricon {
		position: absolute;
		right: 13px;
		bottom: 13px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid #EEEEEE;
	}
</style>
 -->