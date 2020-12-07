<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="提交订单" fixed="true" style="z-index: 99999999;"/>
		<view class="tui-box">
			<tui-list-cell :arrow="true" unlined :radius="true" @click="chooseAddr">
				<view class="tui-address">
					<view v-if="true" :key="kehuinfokey">
						<view class="tui-userinfo" style="font-size: 38rpx;">
							{{kehuinfo.c_company_name}}
						</view>
						<view class="tui-userinfo">
							<text class="tui-name">{{kehuinfo.c_contact}}</text> {{kehuinfo.c_phone}}
						</view>
						<view class="tui-addr">
							<view class="tui-addr-tag">地址</view>
							<text>{{kehuinfo.c_shh_address}}</text>
						</view>
					</view>
					<view class="tui-none-addr" v-else>
						<image src="/static/images/index/map.png" class="tui-addr-img" mode="widthFix"></image>
						<text>选择收货地址</text>
					</view>
				</view>
				<view class="tui-bg-img"></view>
			</tui-list-cell>
			<view class="tui-top tui-goods-info">
				<tui-list-cell :hover="false">
					<view class="tui-padding tui-flex">
						<view>商品总额</view>
						<view>￥{{totalPrice | getPrice}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="true" >
					<view class="tui-padding tui-flex">
						<view>发票</view>
						<view class="">
							<uni-combox 
							style="font-size: 12px; height: 17px;" placeholder="请选择发票" 
							:candidates="candidates" @input="fapiao"></uni-combox>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :lineLeft="false" padding="0">
					<view class="tui-remark-box tui-padding tui-flex">
						<view>订单备注</view>
						<input v-model="remark" type="text" maxlength="20" class="tui-remark" placeholder="选填:20字以内" placeholder-class="tui-phcolor"></input>
					</view>
				</tui-list-cell>
				<template  v-if="zengpinlist.length > 0">
					<tui-list-cell :hover="false" :lineLeft="false">
						<view class="tui-goods-title">
							<!-- {{zengpinlist[0].ZP_LB}} -->
							赠品列表:(同类赠品只可选择一种)
						</view>
					</tui-list-cell>
					<view>
						<view class="tui-cart-cell" v-for="(item,index) in zengpinlist" :key="index">
							<view class="tui-goods-item">
								<label class="tui-checkbox">
									<view class="checkbox" :style="{background:item.is_select == '1'?'#eb0909':'transparent',
									'border-color':item.is_select == '1'?'#eb0909':'#c8c9cc'}"
									@click="checktap(item,index)" >
										<u-icon
										    name="checkbox-mark"
										    :size="20" 
											:color="item.is_select == '1'?'#ffffff':'transparent'"/>
									</view>
									
								</label>
								<image :src="item.g_image" class="tui-goods-img" />
								<view class="tui-goods-info">
									<view class="tui-goods-model">
										{{item.g_name}}
									</view>
									<view class="tui-goods-title">
										<view>赠品类别:{{item.ZP_LB}}</view>
									</view>
									<view class="tui-goods-title">
										<view>规格:{{item.g_property}}</view>
									</view>
									<view class="tui-price-box">
										<view class="tui-goods-price">
											<text style="font-size: 16px; color: #ff0000;margin-right: 10px;">优惠价:{{item.g_price1}}</text> 
											<text style="font-size: 14px;text-decoration-line: line-through;">原价:{{item.g_price2}}</text>
										</view>							
									</view>
									<view class="tui-goods-title">
										<view>数量:{{item.g_num}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- <u-radio-group @change="radioGroupChange" active-color="#eb0909" v-model="radiovalue" >
						<view class="tui-cart-cell" v-for="(item,index) in zengpinlist" :key="index">
							<view class="tui-goods-item">
								<label class="tui-checkbox">
									<u-radio @change="radioChange" :name="item.g_name"  color="#fff"></u-radio>
								</label>
								<image :src="item.g_image" class="tui-goods-img" />
								<view class="tui-goods-info">
									<view class="tui-goods-model">
										{{item.g_name}}
									</view>
									<view class="tui-goods-title">
										<view>规格:{{item.g_property}}</view>
									</view>
									<view class="tui-price-box">
										<view class="tui-goods-price">
											<text style="font-size: 16px; color: #ff0000;margin-right: 10px;">优惠价{{item.g_price1}}</text> 
											<text style="font-size: 14px;text-decoration-line: line-through;">原价{{item.g_price2}}</text>
										</view>							
									</view>
									<view class="tui-goods-title">
										<view>数量:{{item.g_num}}</view>
									</view>
								</view>
							</view>
						</view>
					</u-radio-group> -->
				</template>
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						商品信息
					</view>
				</tui-list-cell>
				<block v-for="(item,index) in orderlist" :key="index">
					<tui-list-cell :hover="false" padding="0">
						<view class="tui-goods-item">
							<image :src="item.g_image" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">{{item.g_name}}</view>
								<view class="tui-goods-attr">批号:{{item.g_pihao}}</view>
							</view>
							<view class="tui-price-right">
								<view>￥{{item.g_price}}</view>
								<view>x{{item.g_number}}</view>
							</view>
						</view>
					</tui-list-cell>
				</block>	
			</view>
		</view>
		<view class="tui-tabbar" v-if="heightChange">
			<view class="tui-flex-end tui-color-red tui-pr-20">
				<view class="tui-black" style="">共{{g_number}}个商品</view>
				<view class="" style="display: flex;">
					<view class="tui-black">实付金额: </view>
					<view class="tui-size-26">￥</view>
					<view class="tui-price-large">{{totalPriceNew | getPrice}}</view>
					<view class="tui-size-26"></view>
				</view>
				
			</view>
			<view class="tui-pr25">
				<tui-button width="200rpx" height="70rpx" :size="28" type="danger" shape="circle" @click="btnPay">确认提交</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				kehuinfo:{},//上级页面传递进来的客户信息
				pageindex:'',//从哪个页面进入的购物车页面
				kehuinfokey:0,
				orderlist:[],//上级页面传递进来的订单信息
				zengpinlist:[],//赠品列表，通过传进来的订单信息获取
				radiovalue:'',//选中的name值
				radiovalueChange:'',//用来取消选中的valueChange值
				totalPrice:0,//总价格
				totalPriceNew:0,//选中赠品后总价格
				g_number:0,//总购买数量
				candidates: ['无', '专用发票', '普通发票', '电子发票'],
				fapiao_type:null,//发票类型,参数使用
				remark:'',//备注信息,参数使用
				cartIds: [], //购物车id
				hasCoupon: false,
				insufficient: false,
				show: false,
				heightChange:true,
				windowHeight:0,
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
			const _this = this
			// console.log(getCurrentPages());
			// console.log(JSON.parse(option.orderlist));
			_this.orderlist = JSON.parse(option.orderlist)
			_this.kehuinfo = JSON.parse(option.kehuinfo)
			_this.pageindex = JSON.parse(option.pageindex)
			console.log(option);
			uni.getSystemInfo({
				success: res => {
					console.log(res);
					_this.windowHeight = res.windowHeight - res.statusBarHeight
				}
			});
			let g_number = 0;
			let totalPrice = 0;
			console.log(this.orderlist);
			_this.orderlist.map((item) => {		
				console.log(item.g_number,   item.g_price );
				g_number += item.g_number;
				totalPrice += item.g_price * item.g_number;	
			})
			_this.g_number = g_number;
			_this.totalPrice = totalPrice;
			_this.totalPriceNew = totalPrice
			// console.log(this.kehuinfo);
			let hqzengpinlist = []
			_this.orderlist.map(item => {
				let list = {}
				list.g_id = item.g_id
				list.g_num = item.g_number
				// list.g_pihao = item.g_pihao
				hqzengpinlist.push(list)
			})
			console.log(hqzengpinlist);
			_this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'结算获取赠品',
					userid:_this.$userinfo.userid,
					c_id:_this.kehuinfo.c_id,
					data:{
						good_list:hqzengpinlist
					}
				}
			}).then(res => {
				const resdata = res.Msg_info
				// console.log(resdata);
				if(resdata[0].error){
					// _this.zengpinlist = []
				}else{
					_this.zengpinlist = resdata
					let checkList = _this.zengpinlist.filter(item => item.is_select == '1')
					let newPrice = 0
					checkList.forEach(item =>{
						newPrice =  +item.g_num * +item.g_price1 + newPrice
					})
					_this.totalPriceNew = _this.totalPrice + newPrice
				}
			}),
			this.$bus.$on('selectaddress',item => {
				console.log(item);
				this.$nextTick(function(){
					// this.kehuinfo = {}
					_this.kehuinfo.c_company_name = item.a_name
					_this.kehuinfo.c_shh_address = item.a_address
					_this.kehuinfo.c_phone = item.a_phone
					_this.kehuinfo.c_phone = item.a_phone
					_this.kehuinfokey += 1
					console.log(_this.kehuinfo);
				})	
			})
		},
		onShow() {
			
		},
		onUnload(){
		  this.$bus.$off('selectaddress')
		},
		onResize(e){
			console.log(e);
			console.log(e.size.windowHeight+" " +this.windowHeight);
			this.heightChange = e.size.windowHeight > this.windowHeight/5*3
			
		},
		//添加过滤器用于计算总价格保留两位小数
		filters: {
			getPrice(price) {
				price = price || 0;
				return price.toFixed(2)
			}
		},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			chooseAddr() {
				uni.navigateTo({
					url: "address?kehuinfo="+JSON.stringify(this.kehuinfo)
				})
			},
			// 选中某个单选框时，由radio时触发(单选功能，暂时注释)
			// radioChange(e) {
			// 	console.log(e);
			// 	console.log(this.radiovalue);//绑定值
			// 	 if(this.radiovalue == this.radiovalueChange){
			// 		 this.radiovalue = '0'
			// 		 this.radiovalueChange = '1'
			// 		 console.log('取消'); 
			// 		 this.totalPriceNew = this.totalPrice
			// 	 }else{
			// 		 this.radiovalueChange = this.radiovalue 
			// 		 console.log('选中');
			// 		 this.totalPriceNew = this.totalPrice
			// 		 let zengpin = this.zengpinlist.filter(item => item.g_name == this.radiovalue)
			// 		 let newprice = 0
			// 		 newprice =  +zengpin[0].g_num * zengpin[0].g_price1
			// 		 this.totalPriceNew = this.totalPrice + newprice
			// 	 }
			// },
			checktap(item,index){
				const _this = this
				console.log(item);
				const zpLb = item.ZP_LB
				const zpId = item.g_id
				_this.zengpinlist.forEach((checks,index)=>{
					if(checks.g_id == zpId && checks.is_select == '1'){
						checks.is_select = '0'
					}else if(checks.g_id == zpId && checks.is_select == '0'){
						_this.zengpinlist.forEach((everyLb,index)=>{
							if(everyLb.ZP_LB == zpLb)everyLb.is_select = '0'
						})
						checks.is_select = '1'
					}
				})
				let checkList = _this.zengpinlist.filter(item => item.is_select == '1')
				let newPrice = 0
				checkList.forEach(item =>{
					newPrice =  +item.g_num * +item.g_price1 + newPrice
				})
				_this.totalPriceNew = _this.totalPrice + newPrice
			},
			btnPay() {
				this.show = true
				// console.log(this.remark);
				let good_list = []
				this.orderlist.map(item => {
					let list = {}
					list.g_id = item.g_id
					list.g_price = item.g_price
					list.g_num = item.g_number
					list.g_pihao = item.g_pihao
					good_list.push(list)
				})
				let zengpin = this.zengpinlist.filter(item => item.is_select == '1')
				zengpin.map(item => {
					let list = {}
					list.g_id = item.g_id
					list.g_price = item.g_price1
					list.g_num = item.g_num
					list.g_pihao = ''
					good_list.push(list)	
				})

				console.log(good_list);
				
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'提交订单',
						userid:this.$userinfo.userid,
						c_id:this.kehuinfo.c_id,
						c_name:this.kehuinfo.c_company_name,
						c_address:this.kehuinfo.c_shh_address,
						remark:this.remark,
						fapiao_type:this.fapiao_type,
						total_amount:this.totalPriceNew,
						data:{
							good_list:good_list
						}							
					}
				}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].note){
					uni.showToast({
						title:'订单提交成功'
					})
					setTimeout(() => {
						uni.$emit('cart')
						uni.navigateBack({
							delta:getCurrentPages().length - 2
						})	
					}, 1500)
					
					// if(this.pageindex != '2'){
					// 	setTimeout(() => {
					// 		uni.navigateBack({
					// 			delta:3
					// 		})
					// 	}, 1500)
					// }else{
					// 	setTimeout(() => {
					// 		uni.navigateBack({
					// 			delta:4
					// 		})
					// 	}, 1500)
					// }
					
				}
				})
			},
			fapiao(e){
				console.log(e);
				this.fapiao_type = e
			},
			popupClose() {
				this.show = false
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 98rpx;
		width: 100vw;
		height: 100%;
	}

	.tui-box {
		box-sizing: border-box;
		height: 100%;
		width: 100vw;
		padding: 20rpx 0 118rpx;
		box-sizing: border-box;
	}

	.tui-address {
		min-height: 80rpx;
		padding: 10rpx 0;
		box-sizing: border-box;
		position: relative;
	}

	.tui-userinfo {
		font-size: 30rpx;
		font-weight: 500;
		line-height: 30rpx;
		padding: 12rpx 0;
	}

	.tui-name {
		padding-right: 40rpx;
	}

	.tui-addr {
		font-size: 24rpx;
		word-break: break-all;
		padding-right: 25rpx;
	}

	.tui-addr-tag {
		padding: 5rpx 8rpx;
		flex-shrink: 0;
		background: #EB0909;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		line-height: 25rpx;
		transform: scale(0.8);
		transform-origin: 0 center;
		border-radius: 6rpx;
	}

	.tui-bg-img {
		position: absolute;
		width: 100%;
		height: 8rpx;
		left: 0;
		bottom: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAECAMAAADszM6/AAAAOVBMVEUAAAAVqfH/fp//vWH/vWEVqfH/fp8VqfH/fp//vWEVqfH/fp8VqfH/fp//vWH/vWEVqfH/fp//vWHpE7b6AAAAEHRSTlMA6urqqlVVFRUVq6upqVZUDT4vVAAAAEZJREFUKM/t0CcOACAQRFF6r3v/w6IQJGwyDsPT882IQzQE0E3chToByjG5LwMgLZN3TQATmdypCciBya0cgOT3/h//9PgF49kd+6lTSIIAAAAASUVORK5CYII=") repeat;
	}

	.tui-top {
		margin-top: 20rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}
	.tui-cart-cell {
		width: 100%;
		border-radius: 12rpx;
		background: #FFFFFF;
		overflow: hidden;
	}
	.tui-padding {
		box-sizing: border-box;
	}

	.tui-goods-item {
		width: 100%;
		padding: 10rpx 10rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.tui-checkbox {
		min-width: 70rpx;
		display: flex;
		align-items: center;
	}
	.checkbox{
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: 0.5px solid;
		display: flex;
		justify-content: space-around;
		text-align: center;
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
	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-flex {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
	}

	.tui-total-flex {
		justify-content: flex-end;
	}
	
	.select-fapiao {
		flex: 1;
		display: flex;
	}
	
	.fapiao-item{
		flex: 1;
		padding-right: 6px;
		text-align: center;
		vertical-align: middle;
	}
	.tui-color-red,
	.tui-invoice-text {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-balance {
		font-size: 28rpx;
		font-weight: 500;
	}

	.tui-black {
		color: #222;
		line-height: 30rpx;
	}

	.tui-gray {
		color: #888888;
		font-weight: 400;
	}

	.tui-light-dark {
		color: #666;
	}
	.tui-price-box {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.tui-goods-price {
		display: flex;
		align-items: center;
		/* padding-top: 20rpx; */
	}

	.tui-size-26 {
		font-size: 26rpx;
		line-height: 26rpx;
	}

	.tui-price-large {
		font-size: 34rpx;
		line-height: 32rpx;
		font-weight: 600;
	}

	.tui-flex-end {
		box-sizing: border-box;
		padding-left: 15px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-right: 0;
		justify-content: space-between;
	}

	.tui-phcolor {
		color: #B3B3B3;
		font-size: 26rpx;
	}

	/* #ifndef H5 */
	.tui-remark-box {
		padding: 22rpx 30rpx;
	}

	/* #endif */
	/* #ifdef H5 */
	.tui-remark-box {
		padding: 26rpx 30rpx;
	}

	/* #endif */

	.tui-remark {
		flex: 1;
		font-size: 26rpx;
		padding-left: 64rpx;
	}

	.tui-scale-small {
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.tui-scale-small .wx-switch-input {
		margin: 0 !important;
	}

	/* #ifdef H5 */
	>>>uni-switch .uni-switch-input {
		margin-right: 0 !important;
	}

	/* #endif */
	.tui-tabbar {
		width: 100%;
		height: 98rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 26rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3);
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 996;
	}

	.tui-pr-30 {
		padding-right: 30rpx;
	}

	.tui-pr-20 {
		padding-right: 20rpx;
	}

	.tui-none-addr {
		height: 80rpx;
		padding-left: 5rpx;
		display: flex;
		align-items: center;
	}

	.tui-addr-img {
		width: 36rpx;
		height: 46rpx;
		display: block;
		margin-right: 15rpx;
	}


	.tui-pr25 {
		padding-right: 25rpx;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
