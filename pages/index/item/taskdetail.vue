<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  @clickLeft="back" rightIcon="compose" @clickRight="qianshoushow = true"  title="任务详情" :background-color="!show?'rgba(255, 255, 255, 0.4)':'rgba(255, 255, 255, 1)'" :color="!show?'#ffffff':'#000000'"/>
		<view class="beijing">
			<!-- <image src="/static/image/beijing1.png" mode="aspectFit"></image> -->
			<view class="" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4);">
				
			</view>
		</view>
		<view class="updata" v-if="updata">
			<view class="content-box" >
				<view class="item-store">
					<text>{{kehuinfo.company_name}}</text>
				</view>
				<view class="item-person">
					<text >任务单号:&nbsp{{kehuinfo.rw_dh}}</text>
				</view>
				<view class="item-person">
					<text >{{kehuinfo.contact}}&nbsp&nbsp&nbsp{{kehuinfo.phone}}</text> <uni-icons type="phone" @click="makePhoneCall" size="25" color="#55aa00"></uni-icons>
				</view>
				<view class="item-address">
					<text style="max-width: 65%; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{kehuinfo.address}}</text>
					<uni-icons type="paperplane"  @click="mapnavigation"  size="25" color="#55aa00"/>
					<text @click="coordinates" style="flex: 1; text-align: right; padding-right: 20px; color: #55aa00;">纠正坐标</text>
				</view>
				<view class="item-table" >
					<view class="table-flex">
						<view class="" style="font-size: 18px; font-weight: 600;">
							{{kehuinfo.danju_num}}
						</view>
						<view class="table-title">
							单据
						</view>
					</view>
					<view class="table-flex" style="color: #ff0000;">
						<view class="" style="">
							¥{{kehuinfo.order_amount}}
						</view>
						<view class="table-title">
							订单金额
						</view>
					</view>
					<view class="table-flex">
						<view class="" style="color: #ff0000;">
							¥{{shyu_amount}}
						</view>
						<view class="table-title">
							剩余应收
						</view>
					</view>
				</view>
				<view class="item-jiesuan">
					<view class="" style="color: #5f5f5f;" @click="jilu">
						查看结算记录
						<uni-icons type="arrowright" size="15" v-if="!jiluicon"></uni-icons>
						<uni-icons type="arrowdown" size="15" v-else></uni-icons>
					</view>
					<view class="jiesuan" @click="jiesuan">
						<text>结算</text>
					</view>
				</view>
				<!-- <view class="item-jiesuan">
					<view class="">
						<text>结算记录</text>
					</view>
					<view class="" style="color: #5f5f5f;" @click="jilu">
						
						<view class="">
							{{taskdetailList.num}}条
						 	<uni-icons type="arrowright" size="15" v-if="taskdetailList.jiluicon"></uni-icons>
						 	<uni-icons type="arrowdown" size="15" v-else></uni-icons>
						</view>
					</view>
				</view> -->
				<template v-if="jiluicon">
					<view class="item-jilu" v-for="(jilu,index) in jiluList">
						<view class="" style="flex: 1;">
							{{jilu.js_date}}
						</view>
						<view class="" style="flex: 1;">
							¥{{jilu.js_amount}}
						</view>
						<view class="" style="flex: 1; text-align: left;">
							结算方式:&nbsp{{jilu.js_type}}
						</view>
					</view>
				</template>
			</view>
			<!-- <view class="content">
				<view class="content-header">
					<view class="header-item item-left">
						任务编号:
					</view>
					<view class="header-item">
						ZHCNDA001298537
					</view>
					<view class="header-item item-left">
						公司名称:
					</view>
					<view class="header-item">
						{{taskdetailList.name}}
						
					</view>
					<view class="header-item item-left">
						公司地址:
					</view>
					<view class="header-item  item-site">
						
							<view class="site">
								{{taskdetailList.address}}
							
							</view>
						
					</view>
					<view class="header-item item-left">
						联系人:
					</view>
					<view class="header-item item-site">
						<view class="">
							{{taskdetailList.person+' '+taskdetailList.phone}}
						</view>
						<uni-icons type="phone" size="25"  @click="makePhoneCall" color="#00aa00"></uni-icons>
					</view>
				</view>
				<view class="content-footer">
					<view class="footer-item" @click="coordinates">
						<uni-icons type="compose" size="25" color="#00aa00" ></uni-icons>
						<view class="item-title">
							纠正坐标
						</view>
					</view>
					<view class="footer-item" @click="mapnavigation">
						<uni-icons type="location-filled" size="25" color="#00aa00"></uni-icons>
						<view class="item-title">
							导航
						</view>
					</view>
				</view>
			</view> -->
			
		</view>
		<view class="zhanwei" style="width: 100vw; height: 260px; background-color: #EEEEEE;">
			
		</view>
		<!-- <view class="tabbar" style="font-size: 20px;">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view>
		<view class="zhanwei" style="width: 100vw; height: 54px; background-color: #EEEEEE;">
			
		</view> -->
		<view class="" style="width: 100%; height: 30px; line-height: 30px; padding-left: 15px;">
			出库单列表
		</view>
		<checkbox-group @change="buyChange" style="margin-bottom: 55px;">
			<label v-for="(item,index) in dataList" :key="index">
				<view class="order-list" :style="{backgroundColor:item.chk_bjstatus =='0'?'#eeeeee':''}">
					<view>
					    <checkbox  :value="item.chk_id" :checked="item.selected" :disabled="item.chk_bjstatus =='0'" color="#55aa00" />
					</view>
					<view class="list-content">
						<view class="list-flex">
							<view class="">
								{{item.date}}
							</view>
							<view :style="{color:item.chk_status=='未卸货'?'':item.chk_status=='已卸货'?'#55aa00':'#FF0800'}">
								{{item.chk_status}}
							</view>
						</view>
						<view class="list-order">
							出库单号:{{item.chk_id}}
						</view>
						<view class="list-flex">
							<view class="">
								整件:{{item.zhj_num}}
							</view>
							<view class="">
								散件:{{item.sanj_num}}
							</view>
							<view class="">
								品规数:{{item.pingui_num}}
							</view>
						</view>
					</view>
					<view class="list-icon">
						<uni-icons type="arrowright" size="30" @click="Tomingxi(item,index)"></uni-icons>
					</view>
				</view>
			</label>
		</checkbox-group>
		<view class="tui-tabbar" v-if="!show">
			<view class="tui-checkAll">
				<checkbox-group @change="checkAll">
					<label class="tui-checkbox">
						<checkbox :checked="isAll" :disabled="isAlldisabled" color="#55aa00"></checkbox>
						<text class="tui-checkbox-pl">全选</text>
					</label>
				</checkbox-group>
				<view class="tui-total-price">共<text class="tui-bold">{{totalPrice}}</text>单 </view>
			</view>
			<view style="margin-left: 20px;">
				<tui-button width="200rpx" height="70rpx" :size="30" :type="dataIds.length >0? 'danger':'gray'" 
				shape="circle"  @click="tuihuoshow = true" :disabled="dataIds.length  < 1">退货</tui-button>
			</view>
			<view >
				<tui-button width="200rpx" height="70rpx" :size="30" :type="dataIds.length >0? 'green':'gray'" 
				shape="circle"  @click="xiehuoshow = true" :disabled="dataIds.length  < 1">卸货</tui-button>
			</view>
		</view>
		<!-- 弹出层内容 -->
		<u-modal v-model="qianshoushow" @confirm="qianshou" content="是否上传签收凭证" :show-cancel-button="true" :content-style="{fontSize:'18px'}"></u-modal>
		<u-modal v-model="xiehuoshow" @confirm="xiehuo" content="确定卸货吗" :show-cancel-button="true" :content-style="{fontSize:'18px'}"></u-modal>
		<u-modal v-model="tuihuoshow" @confirm="tuihuo" content="确定退货吗" :show-cancel-button="true" :content-style="{fontSize:'18px'}"></u-modal>
		<u-popup v-model="show" mode="center"  border-radius="8" :closeable="true" close-icon-pos="top-left">
			<view class="popup">
				<view class="popup-top">
					结算金额
				</view>
				<view class="jine">
					¥<input class="input" type="number" value="" v-model="amount" :focus="true" placeholder="输入结算金额"/>
				</view>
				<template v-if="current == 0">
					<view class="popup-img">
						<image src="/static/image/login1.png" mode="aspectFit"></image>
					</view>
				</template>
				<view>
				   <radio-group @change="radioChange">
				       <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
				           
						   <view>{{item.name}}</view>
						   <view>
				               <radio :value="item.value" :checked="index === current" color="#55aa00" />
				           </view>
				       </label>           
				    </radio-group>
				</view>     
				<view class="confirm" @click="confirm">
					<text>确认</text>
				</view>
			</view>	
		</u-popup>
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		data() {
			return {
				index: 0,
				tabList: ['送货','取退货','收付款'], //普通数据赋值
				//上级页面传过来的任务详情数据
				kehuinfo:{},
				jiluicon:false,//历史结束记录控制显示字段
				shyu_amount:'',//剩余结算金额字段(单独通过接口获得)
				name:'',
				address:'',
				updata:true,
				chooselocation:{
					latitude:34.90183,
					longitude:113.904584
				},
				jiluList:[
					// {
					// 	js_amount:100,
					// 	js_type:'现金'
					// },
					// {
					// 	js_amount:88,
					// 	js_type:'微信支付'
					// }
				],
				dataList: [
					// {"zhj_num":"10","sanj_num":"8","pingui_num":"12","chk_id":"CHK1109Z124","chk_status":"未卸货",chk_bjstatus:'1',"kaipiaoyuan":"李白","kpy_phone":"13939393939","yewuyuan":"钟无艳","ywy_phone":"18946788889","date":"2020-10-10"},
					// {"zhj_num":"10","sanj_num":"8","pingui_num":"12","chk_id":"CHK1109Z123","chk_status":"已卸货",chk_bjstatus:'0',"kaipiaoyuan":"李白","kpy_phone":"13939393939","yewuyuan":"钟无艳","ywy_phone":"18946788889","date":"2020-10-10"},
					// {"zhj_num":"10","sanj_num":"8","pingui_num":"12","chk_id":"CHK1109Z125","chk_status":"未卸货",chk_bjstatus:'1',"kaipiaoyuan":"李白","kpy_phone":"13939393939","yewuyuan":"钟无艳","ywy_phone":"18946788889","date":"2020-10-10"},
					// {"zhj_num":"10","sanj_num":"8","pingui_num":"12","chk_id":"CHK1109Z127","chk_status":"未卸货",chk_bjstatus:'1',"kaipiaoyuan":"李白","kpy_phone":"13939393939","yewuyuan":"钟无艳","ywy_phone":"18946788889","date":"2020-10-10"},
				 ],
				dataIds:[],//选项数组
				current:0,
				totalPrice:0,
				isAll: false,//全选状态
				isAlldisabled:false,//全选按钮是否禁用
				show: false,//popup弹出层控制值
				qianshoushow:false,//navbar右侧图标上传签收凭证确定框弹出层控制值
				xiehuoshow:false,//退货卸货确定框弹出层控制值
				tuihuoshow:false,//退货卸货确定框弹出层控制值
				// modalcontent:'确定吗',//退货卸货确定框弹出层文本内容
				amount:null,
				items:[
					{
						value: '微信',
					    name: '微信支付',
					    checked: 'true'
					},
					{
						value: '线下',
						name: '线下支付',
						checked: 'false'
					},
					{
						value: '收钱吧',
						name: '收钱吧',
						checked: 'false'
					}				
				],
				 current: 0,
				 js_type:"微信",//结算类型
				 amount:'',//结算金额
			}
		},
		onLoad:function(option){
			const _this = this
			// console.log('打印出上个页面传递的参数'+ option.taskdetailList); //打印出上个页面传递的参数。
			this.kehuinfo = JSON.parse(option.taskdetailList)
			console.log(this.kehuinfo);
			this.shyuamountRequest()
			this.dataListRequest()
			
			uni.$on('tuihuo',this.shyuamountRequest)
			uni.$on('stockout',this.shyuamountRequest)
			// uni.$on('tuihuo',this.dataListRequest)//监听到明细（deliverylistdetails）页面单个退货事件刷新数据
		},
		onUnload() {
			uni.$off('tuihuo')
			uni.$off('stockout')
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:getCurrentPages().length - 2
				})
			},
			// navbar右侧图标方法
			qianshou(){
				if(this.dataList.some(item => item.chk_bjstatus == '1')){
					uni.showToast({
						title:'存在未完成条目',
						icon:'none'
					})
					return
				}
				uni.navigateTo({
					url:'qianshou?kehuinfo='+JSON.stringify(this.kehuinfo)
				})
			},
			//结算按钮方法
			jiesuan(item){
				if(+this.shyu_amount == 0){
					uni.showToast({
						title:'无剩余应收',
						icon:'none'
					})
					return
				}
				if(this.dataList.some(item => item.chk_bjstatus == '1')){
					uni.showToast({
						title:'存在未完成条目',
						icon:'none'
					})
					return
				}
				// this.show =  true
				uni.navigateTo({
					url:'commitjiesuan?kehuinfo='+JSON.stringify(this.kehuinfo)
				})
			},
			//拨号方法
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: this.kehuinfo.phone
				})
			},
			//详情任务列表接口，可反复调用刷新数据
			dataListRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'送货任务详情',
						userid:_this.$userinfo.userid,
						c_id:_this.kehuinfo.c_id,
						rw_id:_this.kehuinfo.rw_id,
						rw_dh:_this.kehuinfo.rw_dh
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						_this.dataList = []
					}else{
						_this.dataList = resdata.map(item => {
								item.selected = false	
							return item
						})
						_this.isAlldisabledchange()
					}
				})
			},
			isAlldisabledchange(){
				this.isAlldisabled = this.dataList.every(item => item.chk_bjstatus == '0')
				console.log(this.isAlldisabled);
			},
			//剩余结算金额接口方法,进行操作后调用此方法刷新
			shyuamountRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'剩余应收',
						userid:_this.$userinfo.userid,
						c_id:_this.kehuinfo.c_id,
						rw_dh:_this.kehuinfo.rw_dh
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					_this.shyu_amount = resdata[0].shyu_amount
					_this.kehuinfo.shyu_amount = resdata[0].shyu_amount
					_this.kehuinfo.js_record_num = resdata[0].js_record_num	
				})
			},
			//结算任务历史记录接口
			jiluListRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'结算历史',
						userid:_this.$userinfo.userid,
						rw_dh:_this.kehuinfo.rw_dh,
						c_id:_this.kehuinfo.c_id
					}
				}).then(res => {
					
					const resdata = res.Msg_info
					if(resdata[0].error){
						_this.jiluList = []
					}else{
						_this.jiluList = resdata
					}
					console.log(resdata);
				})
			},
			//地图导航方法
			mapnavigation() {
				let _this = this
				// console.log(_this.chooselocation);
				// console.log(_this.chooselocation.latitude);
				let chooselatitude = +_this.kehuinfo.c_wd
				let chooselongitude = +_this.kehuinfo.c_jd
				let name = _this.kehuinfo.company_name
				let address = _this.kehuinfo.address
				// const aaa = 34.76858
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					geocode: true,
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;		
					// 	const address = res.address;
					// console.log('详细地址123：' + address.name);
				        uni.openLocation({
				            latitude: chooselatitude,
				            longitude:chooselongitude,
							name:name,
							address:address,
							
				            success: function (res) {
				                console.log('success');
								 console.log('详细地址：' + res.address);
				            }
				        });
				    }
				});
			},
			Tomingxi(item,index){
				console.log(item);
				if(item.chk_bjstatus =='0'){
					
				}
				uni.navigateTo({
					url:'deliverylistdetails?headerList='+JSON.stringify(item)+'&&chkbjstatus='+JSON.stringify(item.chk_bjstatus)
				})
			},
			radioChange(evt){
				console.log(evt);
				 for (let i = 0; i < this.items.length; i++) {
				     if (this.items[i].value === evt.target.value) {
							this.js_type = evt.target.value
				            this.current = i;
				            break;
				         }
				  }           
			},
			confirm(){
				const _this = this
				if(_this.amount != '' && _this.amount > 0 && +_this.amount <= +_this.shyu_amount){
					console.log(_this.amount);
					_this.$request({
						data:{
							proc:'APP_PSY_PORT',
							type:'结算提交',
							userid:_this.$userinfo.userid,
							js_type:_this.js_type,
							rw_dh:_this.kehuinfo.rw_dh,
							c_id:_this.kehuinfo.c_id,
							amount:_this.amount
						}
					}).then(res => {
						const resdata = res.Msg_info
						if(res.Msg_code == '4002'){
							uni.showToast({
								title:resdata[0].error
							})
							this.jisuanList = []
						}else{
							uni.$emit('stockout')
							_this.shyuamountRequest()
							uni.showToast({
								title:resdata[0].note
							})
							// console.log(resdata);
						}
					})
					this.amount = ''
					this.show =  false
				}else{
					this.amount = ''
					this.show =  false
					uni.showToast({
						title:'结算失败,请确定金额',
						icon:'none'
					})
				}
				
			},
			jilu(){
				console.log(this.kehuinfo);
				if(+this.kehuinfo.js_record_num == 0){
					uni.showToast({
						title:'该条目暂无结算记录',
						icon:'none'
					})
					return
				}
				this.jiluicon = !this.jiluicon
				if(this.jiluicon){
					this.jiluListRequest()
				}
				
			},
			//纠正坐标方法
			coordinates() {
				uni.navigateTo({
					url:'chooseLocation?kehuinfo='+JSON.stringify(this.kehuinfo)
				})
			},
			//购买车列表选中按钮(checked)方法
			buyChange(e) {
				console.log(e);
				this.dataIds = e.detail.value;
				this.dataList.map(item => {
					//如果购物车id为数字统一转成字符串
					if (~this.dataIds.indexOf(item.chk_id)) {
						item.selected = true;
					} else {
						item.selected = false;
					}
				})
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			//每次进行操作之后的总合数据计算方法
			calcHandle() {
				console.log(this.dataList);
				let totalPrice = 0;
				let selectedNum = 0;
				let disnum = 0;
				this.dataList.map((item) => {
					if (item.selected) {
						totalPrice ++;
						selectedNum++
					}
					if(item.chk_bjstatus != "1"){
						disnum ++
					}
				})
				this.isAll = selectedNum === this.dataList.length - disnum
				this.totalPrice = totalPrice
				// console.log(selectedNum);
			},
			//全选按钮方法
			checkAll(e) {
				console.log(this.dataList.every(item => item.chk_bjstatus == '0'));
				if(this.dataList.every(item => item.chk_bjstatus == '0')){
					this.isAll = false
					return
				}
				
				this.isAll = !this.isAll;
				let totalPrice = 0;
				this.dataIds = []
				this.dataList.map((item) => {
					if(item.chk_bjstatus == "1"){
						item.selected = this.isAll;	
					}
					if (this.isAll&&item.chk_bjstatus == "1") {
						totalPrice ++;
						this.dataIds = this.dataList
					}		
				})
				
				this.totalPrice = totalPrice
			},
			//退货按钮
			tuihuo(){
				const _this = this
				let chk_id = ''
				_this.dataList.map(item => {
					if(item.chk_bjstatus == '1'&&item.selected){
						chk_id = chk_id + item.chk_id+'+'
					}
				})
				console.log(chk_id);
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'退货',
						userid:_this.$userinfo.userid,
						sub_type:'整单退',
						chk_id:chk_id,
						row_num:0,
						num:0
					}
				}).then(res => {
					if(res.Msg_code == '4002'){
						uni.showToast({
							title:res.Msg_info[0].error,
							icon:'none'
						})
					}else{
						const resdata = res.Msg_info
						console.log(resdata);
						_this.dataListRequest()
						_this.shyuamountRequest()
						uni.$emit('stockout')
						_this.isAll = false
						_this.totalPrice = 0
						_this.dataIds = []
						uni.showToast({
							title:res.Msg_info[0].note
						})
					}
					
				})
			},
			// //卸货弹出层
			// xiehuoshow(){
				
			// },
			// //退货弹出层
			// tuihuoshow(){
				
			// },
			//卸货按钮
			xiehuo(){
				const _this = this
				_this.modalshow = true
				let chk_id = ''
				_this.dataList.map(item => {
					if(item.chk_bjstatus == '1'&&item.selected){
						chk_id = chk_id + item.chk_id+'+'
					}
				})
				console.log(chk_id);
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'卸货',
						userid:_this.$userinfo.userid,
						chk_id:chk_id,

					}
				}).then(res => {
					if(res.Msg_code == '4002'){
						uni.showToast({
							title:res.Msg_info[0].error,
							icon:'none'
						})
					}else{
						const resdata = res.Msg_info
						console.log(resdata);
						_this.dataListRequest()
						uni.$emit('stockout')
						_this.isAll = false
						_this.totalPrice = 0
						_this.dataIds = []
						uni.showToast({
							title:res.Msg_info[0].note
						})
					}
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.beijing{
		position: fixed;
		top: 0;
		width: 100vw;
		height: 150px;
		background-color: rgba(0, 0, 0, 0.4);
		background-image: url(/static/image/beijing1.png) ;
		background-repeat: no-repeat;
		z-index: 999;
	}
	.beijing image{
		width: 100%;
		height: 100%;
	}
	.content {
		position: fixed;
		width: 100vw;
		height: 170px;
		border-top: 10px solid #EEEEEE;
		background-color: #FFFFFF;
	}
	.content-header {
		width: 100vw;
		height: 120px;
		display: flex;
		font-size: 17px;
		flex-wrap: wrap;
		padding-top: 10px;
		border-bottom: 2px solid #EEEEEE;
	}
	.header-item {
		width: 68vw;
		height: 25px;
		line-height: 25px;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.item-left {
		width: 25vw !important;
		padding-left: 10px;
	}
	.item-site {
		display: flex;
		justify-content: space-between;
		padding-right: 10px;
	}
	.site{
		width: 68vw;
		overflow: hidden;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.content-footer {
		width: 100vw;
		height: 40px;
		display: flex;
		justify-content: center;
		
		align-items: center;
	}
	.tabbar {
		width: 100vw;
		position: fixed;
		border-top: 10px solid #EEEEEE;
		z-index: 999;
	}
	.footer-item {
		width: 50vw;
		height: 30px;
		line-height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color:#00aa00 ;
	}
	.order-list {
		width: 92vw;
		margin: 0 auto;
		height: 90px;
		margin-top: 5px;
		background-color: #FFFFFF;
		font-size: 16px;
		display: flex;
		align-items: center;
		
	}
	
	/* #ifdef MP-WEIXIN */
	.order-list .wx-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}
	
	.order-list .wx-checkbox-input.wx-checkbox-input-checked {
	/* 	background: #eb0909; */
		width: 44rpx !important;
		height: 44rpx !important;
		border: none;
	}
	
	/* #endif */
	/* #ifndef MP-WEIXIN */
	
	>>>.order-list .uni-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}
	
	>>>.order-list .uni-checkbox-input.uni-checkbox-input-checked {
		/* background: #eb0909; */
		width: 45rpx !important;
		height: 45rpx !important;
		border: none;
	}
	/* #endif */
	.list-content {
		width: 88vw;
		height: 80px;
		line-height: 25px;
		padding-left: 10px;
	}
	.list-flex {
		display: flex;
		justify-content: space-between;
	}
	.list-icon {
		width: 12vw;
		height: 80px;
		line-height: 80px;
		text-align: center;
	}
	/* 新样式 */
	.content-box{
		/* margin-top: 2px;
		width: 100vw; */
		position: fixed;
		top: 100px;
		left: 4vw;
		margin: 0 auto;
		width: 92vw;
		border-radius: 10px;
		background-color: #FFFFFF;
		border-bottom: 2px solid #EEEEEE;
		z-index: 999;
	}
	.content-box:after{
		background-color: #FFFFFF;
	}
	.item-store,
	.item-address,
	.item-table,
	.item-person{
		/* background-color: #FFFFFF; */
		border: none;
	}
	.item-store{
		display: flex;
		align-items: center;
		padding-left: 5px;
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-store text{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		flex: 1;
	}
	.item-address,
	.item-person{
		padding-left: 5px;
		height: 25px;
		line-height: 15px;
		font-size: 14px;
		color: #AAAAAA;
		display: flex;
		align-items: center;
	}
	.item-table{
		display: flex;
		justify-content: center;
		height: 60px;
		line-height: 20px;
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
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		/* background-color: #FFFFFF; */
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
		width: 100%;
		padding: 0 15px;
		display: flex;
		justify-content: space-between;
		color: #5f5f5f;
		/* background-color: #FFFFFF; */
	}
	.item-jilu:last-child{
		border-radius: 10px;
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
		font-size: 24rpx !important;
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
		/* background: #eb0909; */
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
		/* background: #eb0909; */
		width: 45rpx !important;
		height: 45rpx !important;
		border: none;
	}
	
	/* #endif */
	
</style>
