<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="结算任务列表" fixed="true"/>
		<view class="fixed" style="position: fixed;top: 44px; left: 0;">
			<view class="jiesuan-top">
				<view class="item-box" v-for="(item,index) in topList" >
					<view class="top-item" :key="index">
						<view class="jiesuan-num">
							¥{{item.num}}
						</view>
						<view class="jiesuan-title">
							{{item.title}}
						</view>
					</view>
				</view>	
			</view>
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="search" @cancel="cancle"/>
			<view class="tabcontrol">
				<view v-for="(item,index) in tabList"
						 class="tabcontrolitem" :key="index"
						 @click="itemclick(item,index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item.rw_name}}({{item.count}})</view>
				</view>
			</view>		
		<!-- 	<view class="jiesuan-tab">	
				<sun-tab  rangeKey="name":value.sync="index" :tabList="tabList" @change="objectChange"
						 bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
			</view> -->
		</view>
		<view class="zhanwei" style="width: 100vw; height: 414rpx;"></view>
		<view class="content">
			<template v-for="(item,index) in jiesuanList">
				<view class="content-box" :key="index">
					<view class="item-store">
						<text >{{item.company}}</text>
						<text style="color:#55aa00;padding-left: 10px;">{{item.contact}}</text>
						<uni-icons type="phone" @click="makePhoneCall(item)" size="25" color="#55aa00"></uni-icons>
					</view>
					<view class="item-address">
						{{item.address}}<uni-icons type="paperplane" @click="paperplane(item)" size="25" color="#55aa00"></uni-icons>
					</view>
					<view class="item-table">
						<view class="table-flex">
							<view class="" style="font-size: 18px; font-weight: 600;">
								{{item.dj_amount}}
							</view>
							<view class="table-title">
								单据
							</view>
						</view>
						<view class="table-flex" style="color: #ff0000;">
							<view class="" style="">
								¥{{item.dd_amount}}
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
					<view class="item-jiesuan">
						<view class="" style="color: #5f5f5f;" @click="jilu(item,index)">
							查看结算记录
							<uni-icons type="arrowright" size="15" v-if="item.jiluicon"></uni-icons>
							<uni-icons type="arrowdown" size="15" v-else></uni-icons>
						</view>
						<view class="jiesuan" @click="jiesuan(item)" v-if="currentIndex == 0">
							<text>结算</text>
						</view>
					</view>
					<template v-if="!item.jiluicon">
						<view class="item-jilu" v-for="(jilu,index) in jiluList">
							<view class="" style="flex: 0.8;">
								{{jilu.js_date}}
							</view>
							<view class="" style="flex: 0.7;">
								¥{{jilu.js_amount}}
							</view>
							<view class="" style="flex: 1; text-align: left;">
								结算方式:&nbsp{{jilu.js_type}}
							</view>
							
						</view>
						<view class="item-jilu" style="padding-right: 15px;" v-if="jiluList.length == 0">
							<view class="" style="flex: 1; text-align: center;">
								暂无结算历史
							</view>
						</view>
					</template>
				</view>
			</template>
		</view>
		<u-empty  text="没有搜索结果" mode="search"  :show="jiesuanList.length < 1"
				:marginTop="200"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="jiesuanList.length > 5"/>
		<!-- 弹出层内容 -->
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
	export default {
		data() {
			return {
				topList:[
					{num:null,title:'订单总金额'},
					{num:null,title:'已收金额'},
					{num:null,title:'剩余金额'},
				],
				index: 0,
				tabList: [
					 {rw_id:0, rw_name:"未完成",count:0},
					 {rw_id:1, rw_name:"已完成",count:0},
					 {rw_id:2, rw_name:"已取消",count:0}                 
				], //普通数据赋值
				currentIndex:0,
				//配送员坐标信息
				user_jd:'',
				user_wd:'',
				rw_name:'进行中',
				jiesuanList:[
					// { total_amount:12306, 
					// status:"进行中",
					// yishou_amount:2000,
					// shyu_amount:10306,
					// rw_dh:110,
					// c_id:101,
					// company:"广州最强医药批发公司",
					// contact:"周广森",
					// phone:"15512345678",
					// address:"广州珠江新城001号",
					// dj_amount:3,
					// dd_amount:1000,
					// shyu_amount:300,
					// jiluicon:true,
					// js_record_num:3,
					// current_page:1,
					// total_page:5},
					// { total_amount:12306,
					// status:"进行中",
					// yishou_amount:2000,
					// shyu_amount:10306,
					// rw_dh:113,
					// c_id:103,
					// company:"广州最强医药批发公司",
					// contact:"周广森",
					// phone:"15512345678",
					// address:"广州珠江新城001号",
					// dj_amount:3,
					// dd_amount:1000,
					// shyu_amount:300,
					// jiluicon:true,
					// js_record_num:3,
					// current_page:1,
					// total_page:5},
				],
				jiluiconindex:999,//控制查看记录数下标值,用来关闭上次点击打开的记录状态
				jiluList:[
					// {js_type:"微信", js_amount:"30", js_date:"2020-9-26","js_userid":"10010","js_username":"钱萨妮" },
					// {js_type:"线下", js_amount:"90.0", js_date:" 2020-9-25","js_userid":"10010","js_username":"华普萨"},
					// {js_type:"收钱吧",js_amount:"50.0", js_date:" 2020-9-13","js_userid":"10010","js_username":"李步通"}
				],
				show: false,
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
				js_info:{},//结算弹出层对象
				js_type:"微信",//结算类型
				rw_dh:'',//结算任务单号
				c_id:'',//客户单位内码
				amount:'',//结算金额
				current: 0,
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
			}
		},
		onLoad() {
			const _this = this
			//调用任务单类型接口方法
			_this.titleRequest()
			_this.jiesuanRequest()
			uni.$on('stockout',() => {
				_this.jiesuanList = []
				_this.jiluiconindex = 999
				_this.titleRequest()
				_this.jiesuanRequest()
			})
			// _this.titleRequest2222()
		},
		onUnload() {
			uni.$off('stockout')
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
				this.jiesuanRequest()
			}
		},	
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.jiesuanList = []
				this.jiesuanRequest()
			},
			cancle(e){	//点击搜索二字
				console.log(e.value);
				this.pageindex = 1
				this.key = e.value
				this.jiesuanList = []
				this.jiesuanRequest()
			},
			//任务单类型tabbar接口,可反复调用刷新数据
			titleRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'结算任务分类',
						userid:_this.$userinfo.userid,
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					_this.tabList = resdata
					_this.rw_name = resdata[0].rw_name
				})
			},
			//出库单列表接口,可反复调用刷新数据
			jiesuanRequest(){
				let _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'结算任务列表',
						userid:_this.$userinfo.userid,
						current_page:_this.pageindex,
						status:_this.rw_name,
						key:_this.key
					}
				}).then(res => {
					const resdata = res.Msg_info
					if(resdata[0].error){
						_this.jiesuanList = []
					}else{
						let mapresdata = resdata.map(item => {
							item.jiluicon = true
							return item
						})
						_this.jiesuanList.push(...mapresdata)
						_this.topList[0].num = resdata[0].total_amount_hz
						_this.topList[1].num = resdata[0].yishou_amount_hz
						_this.topList[2].num = resdata[0].shy_amount_hz
						_this.pageindex = resdata[0].current_page * 1
						_this.total_page = resdata[0].total_page * 1
						_this.status = 'loadmore'
						console.log(mapresdata);
					}
				})
			},
			//tabbar切换方法
			itemclick(item,index) {
				console.log(item);
				let _this = this
				//点击切换视图并回到顶部
				if (_this.currentIndex != index) {
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 100
					});
				}
				_this.currentIndex = index
				_this.pageindex = 1
				_this.rw_name = item.rw_name
				_this.jiesuanList = []
				_this.jiesuanRequest()
			},
			//拨号方法
			makePhoneCall(item) {
				uni.makePhoneCall({
					phoneNumber: item.phone
				})
			},
			paperplane(item) {
				let _this = this
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					// geocode: true,
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;		
					// 	const address = res.address;
					// console.log('详细地址123：' + address.name);
				        uni.openLocation({
				            latitude: +item.c_wd,
				            longitude: +item.c_jd,
							name:item.company_name,
							address:item.address,
							
				            success: function (res) {
				                console.log('success');
								 console.log('详细地址：' + res.address);
				            }
				        });
				    }
				});
			},
			objectChange(){
				
			},
			jilu(item,index){
				console.log(this.jiesuanList);
				if(+item.js_record_num == 0){
					uni.showToast({
						title:'该条目暂无结算记录',
						icon:'none'
					})
					return
				}
				if(this.jiluiconindex == index){
					item.jiluicon = !item.jiluicon
					return
				}
				this.jiesuanList.forEach(item => item.jiluicon = true)
				this.jiluiconindex = index
				item.jiluicon = !item.jiluicon
				this.jiluList = []
				this.jiluListRequest(item)
				console.log(item);
			},
			//结算任务历史记录接口
			jiluListRequest(item){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'结算历史',
						userid:_this.$userinfo.userid,
						rw_dh:item.rw_dh,
						c_id:item.c_id
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						_this.jiluList = []
					}else{
						_this.jiluList = resdata
					}
					
				})
			},
			jiesuan(item){
				console.log(item);
				this.rw_dh = item.rw_dh
				this.c_id = item.c_id
				this.js_info = item
				if(+item.shyu_amount == 0){
					uni.showToast({
						title:'无剩余应收',
						icon:'none'
					})
					return
				}
				// this.show =  true
				uni.navigateTo({
					url:'commitjiesuan?kehuinfo='+JSON.stringify(item)
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
				console.log(+_this.amount);
				if(_this.amount != '' && +_this.amount > 0 && +_this.amount <= +_this.js_info.shyu_amount){				
					_this.$request({
						data:{
							proc:'APP_PSY_PORT',
							type:'结算提交',
							userid:_this.$userinfo.userid,
							js_type:_this.js_type,
							rw_dh:_this.rw_dh,
							c_id:_this.c_id,
							amount:_this.amount
						}
					}).then(res => {
						const resdata = res.Msg_info
						if(res.Msg_code == '4002'){
							uni.showToast({
								title:resdata[0].error
							})
							_this.jiesuanList = []
						}else{
							
							_this.jiesuanList = []
							_this.titleRequest()
							_this.jiesuanRequest()
							console.log(resdata);
							uni.showToast({
								title:resdata[0].note
							})
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
		}
	}
</script>

<style >
	page{
			background: #EEEEEE;
	}
	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow: hidden;
	}	
	.jiesuan-top{
		width: 100vw;
		height: 200rpx;
		line-height: 200rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		border-bottom:10rpx solid #EEEEEE;
	}
	.item-box{
		flex: 1;
		height: 140rpx;
		border-right: 1px solid #EEEEEE;
		display: flex;
		flex-direction: column;
	}
	.item-box:last-child{
		border: none;
	}
	.item-box .top-item{
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.top-item .jiesuan-num{
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		color: #ff0000;
	}
	.top-item .jiesuan-title{
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
	}
	.tabcontrol{
			display: flex;
			border-top: 10rpx solid #EEEEEE;
			height: 40px;	
			line-height: 40px;
			width: 750rpx;
		    text-align: center;
		    font-size: 13px;
		    background-color: #fff;
		    z-index: 9;
			border-bottom: 2px solid #EEEEEE;
		 }
		.tabcontrolitem{
			flex: 1;
			height: 40px;
			line-height: 40px;			
		}
		.tabcontrolitem2 {
			height: 40px;
			line-height: 40px;	
		}
		.active{
			color: #00aa00;
			height: 34px !important;
			margin-top: 3px;
			line-height: 34px;
			border-bottom-width: 3px ;
			border-bottom-style: solid;
			border-bottom-color: #00aa00;
		}
	.jiesuan-tab{
		border-top: 20rpx solid #EEEEEE;
	}
	.content-box{
		margin-top: 2px;
		width: 100vw;
		
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
	.item-store text:first-child{
		display: inline-block;
		max-width: 70vw;
		height: 40px;
		line-height: 40px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item-address{
		padding-left: 5px;
		height: 35px;
		line-height: 30px;
		font-size: 14px;
		color: #CCCCCC;
		display: flex;
		align-items: center;
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
		color: #CCCCCC;
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
		padding: 0 5px 0 15px;
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
