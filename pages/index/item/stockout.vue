<template>
	<view class="container">
		<uni-nav-bar  left-icon="back"  @clickLeft="back"  title="送货任务" rightIcon="map" @clickRight="right" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<view class="search-box" @click.stop="Tosearch">
				<view class="search">
					<uni-icons color="#999999" class="uni-searchbar__box-icon-search" size="18" type="search" />
					<text>客户名/客户地址/联系人/联系人电话</text>
				</view>
				<!-- <uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="confirm" @cancel="confirm"/> -->
			</view>
			
			<!-- <view class="tabbar" style="margin-bottom: 10px;">
				<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>			
			</view> -->
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(item,index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item.rw_name}}({{item.count}})</view>
				</view>
			</view>	
		</view>
		<view class="zhanwei" style="height: 192rpx;">
			
		</view>
		<template v-for="(item,index) in stockoutList">
			<view class="content-box" :key="index">
				<view class="contentbox-left">
					<view class="contentboxleft-text">
						{{index + 1}}
					</view>
					
				</view>
				<view class="contentbox-right">
					<view class="item-store">
						<text  @click="taskdetail(item,index)">{{item.company_name}}</text> 
						<text style="color:#55aa00;">{{item.contact}}</text>
						<uni-icons type="phone" @click="makePhoneCall(item)" size="25" color="#55aa00"></uni-icons>
					</view>
					<view class="item-address">
						<text  @click="taskdetail(item,index)">{{item.address}}</text>
						<uni-icons type="paperplane" @click="paperplane(item)"  size="25" color="#55aa00"></uni-icons>
						<text style="color:#55aa00;">{{item.lc}}km</text>
					</view>
					<view class="item-table"  @click="taskdetail(item,index)">
						<view class="table-flex">
							<view class="" style="font-size: 18px; font-weight: 600;">
								{{item.danju_num}}
							</view>
							<view class="table-title">
								单据
							</view>
						</view>
						<view class="table-flex" style="color: #ff0000;">
							<view class="" style="">
								¥{{item.order_amount}}
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
				</view>
				
				<!-- <view class="item-jiesuan">
					<view class="" style="color: #5f5f5f;" @click="jilu(item)">
						{{item.js_record_num}}条结算记录
						<uni-icons type="arrowright" size="15" v-if="item.jiluicon"></uni-icons>
						<uni-icons type="arrowdown" size="15" v-else></uni-icons>
					</view>
					<view class="jiesuan" @click="jiesuan(item)">
						<text>结算</text>
					</view>
				</view> -->
				<!-- <template v-if="!item.jiluicon">
					<view class="item-jilu" v-for="(jilu,index) in jiluList">
						<view class="" style="flex: 1.5;">
							¥{{jilu.num}}
						</view>
						<view class="" style="flex: 1; text-align: left;">
							结算方式:&nbsp{{jilu.type}}
						</view>
					</view>
				</template> -->
			</view>
		</template>
		<u-empty  text="没有搜索结果" mode="search"  :show="stockoutList.length < 1"
				:marginTop="-280"
		></u-empty>
		<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
		<u-loadmore :status="status" v-if="stockoutList.length > 5"/>
		<!-- 弹出层内容 -->
		<u-popup v-model="show" mode="center"  border-radius="8" :closeable="true" close-icon-pos="top-left">
			<view class="popup">
				<view class="popup-top">
					结算金额
				</view>
				<view class="jine">
					¥<input class="input" type="number" v-model="jine" value=""  placeholder="输入结算金额"/>
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
		<!-- <block v-for="(item,index) in stockoutList[currentIndex]" >
			<view class="content" :key="index">
				<view class="content-header">
					<view class="header-item item-left" @click="taskdetail(index)">
						公司名称:
					</view>
					<view class="header-item" @click="taskdetail(index)">
						{{item.name}}
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						公司地址:
					</view>
					<view class="header-item  item-site" >
					
						<view class="site" @click="taskdetail(index)">
							{{item.address}}
						</view>
				
						
						<uni-icons type="paperplane" size="30" @click="paperplane"  color="#00aa00"></uni-icons>
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						联系人:
					</view>
					<view class="header-item item-site">
						<view class="" @click="taskdetail(index)">
						{{item.person+' '+item.phone}}
						</view>
						<uni-icons type="phone" size="30"  @click="makePhoneCall" color="#00aa00"></uni-icons>
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						单据数:
					</view>
					<view class="header-item" @click="taskdetail(index)">
						{{item.num}}
					</view>
				</view>
				<view class="content-footer" @click="taskdetail(index)">
					<view class="footer-item" >
						<view class="footer-title">
							应收金额
						</view>
						<view class="footer-num" >
							{{item.yingshou}}
						</view>
					</view>
					<view class="footer-item" >
						<view class="footer-title" >
							实收金额
						</view>
						<view class="footer-num">
							{{item.shishou}}
						</view>
					</view>
					<view class="footer-item">
						<view class="footer-title">
							结余金额
						</view>
						<view class="footer-num">
							{{item.jieyu}}
						</view>
					</view>
				</view>
			</view>
		</block> -->
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		data() {
			return {
				// index: 0,
				// tabList: ['进行中','已完成','已取消'], //普通数据赋值
				//tabbar数据
				titles:[
					{rw_id:0, rw_name:"未完成",count:53},
					{rw_id:1, rw_name:"已完成",count:110},
					{rw_id:2, rw_name:"已取消",count:0}
				],
				currentIndex:0,
				//配送员坐标信息
				user_jd:'',
				user_wd:'',
				//出库单列表信息
					//未完成列表
				stockoutList:[
					// [
					// 	{"rw_id":"0","company_name":"清镇市青春大药房","jiluicon":true, "address":"清镇市新店镇街上","contact":"周云清","phone":"18339948571","danju_num":"2","order_amount":"229.75","shyu_amount":"229.75","jieyu":"0","js_record_num":"2",},
					// 	{"id":"1","company_name":"黄埔区人民药店","jiluicon":true,"address":"黄埔街36号","contact":"白琳","phone":"18332354371","danju_num":"4","order_amount":"319.75","shyu_amount":"319.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"2","company_name":"石板社区卫生室","jiluicon":true,"address":"金溪县石板社区七组","contact":"柯小佳","phone":"18312343453","danju_num":"3","order_amount":"349.75","shyu_amount":"349.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"3","company_name":"靖西县中山青松药店","jiluicon":true,"address":"靖西县钟山镇新街","contact":"王英德","phone":"112335654332","danju_num":"6","order_amount":"789.75","shyu_amount":"789.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"4","company_name":"乌当庆年诊所","jiluicon":true,"address":"贵阳市乌当区东风镇","contact":"赵雷","phone":"18339948571","danju_num":"7","order_amount":"21219.75","shyu_amount":"21219.75","jieyu":"0","js_record_num":"2"},	
					// 	{"id":"0","company_name":"郑东人民大药房","jiluicon":true,"address":"渝北市白沙镇街上","contact":"张磊","phone":"18339948571","danju_num":"2","order_amount":"229.75","shyu_amount":"229.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"1","company_name":"五里堡药店","jiluicon":true,"address":"人民路36号","contact":"朱超越","phone":"18332354371","danju_num":"4","order_amount":"319.75","shyu_amount":"319.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"2","company_name":"畅合卫生室","jiluicon":true,"address":"梁溪区石板社区七组","contact":"易佳","phone":"18312343453","danju_num":"3","order_amount":"349.75","shyu_amount":"349.75","jieyu":"0","js_record_num":"2"},
					// ],
					// [
					// 	{"id":"0","company_name":"郑东人民大药房","jiluicon":true,"address":"渝北市白沙镇街上","contact":"张磊","phone":"18339948571","danju_num":"2","order_amount":"229.75","shyu_amount":"229.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"1","company_name":"五里堡药店","jiluicon":true,"address":"人民路36号","contact":"朱超越","phone":"18332354371","danju_num":"4","order_amount":"319.75","shyu_amount":"319.75","jieyu":"0","js_record_num":"2","js_record_num":"2"},
					// 	{"id":"2","company_name":"畅合卫生室","jiluicon":true,"address":"梁溪区石板社区七组","contact":"易佳","phone":"18312343453","danju_num":"3","order_amount":"349.75","shyu_amount":"349.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"0","company_name":"郑东人民大药房","jiluicon":true,"address":"渝北市白沙镇街上","contact":"张磊","phone":"18339948571","danju_num":"2","order_amount":"229.75","shyu_amount":"229.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"1","company_name":"五里堡药店","jiluicon":true,"address":"人民路36号","contact":"朱超越","phone":"18332354371","danju_num":"4","order_amount":"319.75","shyu_amount":"319.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"2","company_name":"畅合卫生室","jiluicon":true,"address":"梁溪区石板社区七组","contact":"易佳","phone":"18312343453","num":"3","order_amount":"349.75","shyu_amount":"349.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"0","company_name":"郑东人民大药房","jiluicon":true,"address":"渝北市白沙镇街上","contact":"张磊","phone":"18339948571","danju_num":"2","order_amount":"229.75","shyu_amount":"229.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"1","company_name":"五里堡药店","jiluicon":true,"address":"人民路36号","contact":"朱超越","phone":"18332354371","danju_num":"4","order_amount":"319.75","shyu_amount":"319.75","jieyu":"0","js_record_num":"2"},
					// 	{"id":"2","company_name":"畅合卫生室","jiluicon":true,"address":"梁溪区石板社区七组","contact":"易佳","phone":"18312343453","danju_num":"3","order_amount":"349.75","shyu_amount":"349.75","jieyu":"0","js_record_num":"2"},
					// ],
					// [
					// // 	{"id":"0","name":"清镇市青春大药房","jiluicon":true,"address":"清镇市新店镇街上","person":"周云清","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
					// // 	{"id":"1","name":"黄埔区人民药店","jiluicon":true,"address":"黄埔街36号","person":"白琳","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
					// // 	{"id":"2","name":"石板社区卫生室","jiluicon":true,"address":"金溪县石板社区七组","person":"柯小佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
					// // 	{"id":"3","name":"靖西县中山青松药店","jiluicon":true,"address":"靖西县钟山镇新街","person":"王英德","phone":"112335654332","num":"6","yingshou":"789.75","shishou":"789.75","jieyu":"0"},
					// // 	{"id":"4","name":"乌当庆年诊所","jiluicon":true,"address":"贵阳市乌当区东风镇","person":"赵雷","phone":"18339948571","num":"7","yingshou":"21219.75","shishou":"21219.75","jieyu":"0"},	
					// ],
						],
				jiluList:[
					{
						num:100,
						type:'现金'
					},
					{
						num:88,
						type:'微信支付'
					}
				],
				show: false,
				jine:null,
				items:[
					{
						value: 'wx',
					    name: '微信支付',
					    checked: 'true'
					},
					{
						value: 'xx',
						name: '线下支付',
						checked: 'false'
					},
					{
						value: 'sq',
						name: '收钱吧',
						checked: 'false'
					}	
										
				],
				 current: 0,
				//公司地址
				address:"",
				//公司名称
				name:"",
				//视图刷新
				updata:true,
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
			//#ifdef APP-PLUS
			_this.getLocation()	
				
			//#endif
			//#ifdef H5
				_this.stockoutRequest()
			//#endif
			//监听下级页面结算退货方法执行成功刷新数据
			uni.$on('stockout',() => {
				_this.stockoutList = []
				_this.titleRequest()
				_this.stockoutRequest()
			})
			//监听下级页面纠正坐标页面功能实现时刷新本页面数据更新坐标
			uni.$on('add',() => {
				_this.stockoutList = []
				_this.stockoutRequest()
			})
		},
		onShow() {
				console.log('onshow');
		},
		onUnload() {
			uni.$off('add')
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
				this.stockoutRequest()
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			Tosearch(){
				uni.navigateTo({
					url:'search'
				})
			},
			//任务单类型tabbar接口,可反复调用刷新数据
			titleRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'送货任务单分类',
						userid:_this.$userinfo.userid,
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					_this.titles = resdata
				})
			},
			//出库单列表接口,可反复调用刷新数据
			stockoutRequest(){
				let _this = this
				console.log('当前位置的经度：' + _this.user_jd);
				console.log('当前位置的纬度：' + _this.user_wd);
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'送货任务单列表',
						userid:_this.$userinfo.userid,
						rw_id:_this.currentIndex,
						current_page:_this.pageindex,
						key:_this.key,
						user_jd:_this.user_jd || '132.312',
						user_wd:_this.user_wd || '60.213'
					}
				}).then(res => {
					console.log(res);
					const resdata = res.Msg_info
					if(resdata[0].error){
						this.stockoutList = []
					}else{
						this.stockoutList.push(...resdata)
						this.pageindex = resdata[0].current_page * 1
						this.total_page = resdata[0].total_page * 1
						this.status = 'loadmore'
						console.log(resdata);
					}
				})
			},
			//获取位置信息并进行数据请求
			getLocation(){
				const _this = this
				uni.getLocation({
				    type: 'gcj02',
				    success: function (res) {
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
						_this.user_jd = res.longitude
						_this.user_wd = res.latitude
						_this.stockoutRequest()
				    }
				});
			},
			//搜索栏点击确定方法
			confirm(e){
				console.log(e);
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
				this.pageindex = 1
				this.stockoutList = []
				this.stockoutRequest()
			},
			//页面跳转到taskdetail方法
			taskdetail (item,index) {
				// this.address = 'asdasdas'
				const currentIndex = this.currentIndex
				const taskdetailList = JSON.stringify(item)
				// console.log(taskdetailList);
				// console.log(address2);
				uni.navigateTo({
					url:'taskdetail?taskdetailList='+taskdetailList
					
				})
				
			},		
			
			//关联地图方法
			right() {
				uni.navigateTo({
					url:'/pages/index/item/map'
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
			//拨号方法
			makePhoneCall(item) {
				uni.makePhoneCall({
					phoneNumber: item.phone
				})
			},
			jilu(item){
				if(item.jiesuannum == 0){
					return
				}
				item.jiluicon = !item.jiluicon
			},
			jiesuan(item){
				this.show =  true
			},
			radioChange(evt){
				console.log(evt);
				 for (let i = 0; i < this.items.length; i++) {
				     if (this.items[i].value === evt.target.value) {
				             this.current = i;
				             break;
				         }
				  }           
			},
			confirm(){
				this.show =  false
				console.log(this.jine);
				// this.$request({
				// 	data:{
				// 		proc:'APP_YWY_PORT',
				// 		type:'结算提交',
				// 		userid:this.$userinfo.userid,
				// 	}
				// }).then(res => {
				// 	const resdata = res.Msg_info
				// 	console.log(resdata);
				// })
			}
		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		
	}	
	.search-box{
		box-sizing: border-box;
		padding: 13px 16px 8px 16px;
		background-color: #FFFFFF;
	}
	.search-box .search{
		box-sizing: border-box;
		justify-content: center;
		text-align: center;
		border: 0.5px solid #c8c7cc;
		padding: 5px 8px 5px 0px;
		border-radius: 5px;
		background-color: rgb(248, 248, 248);
		color: #808080;
	}
	.content {
		width: 100vw;
		margin-top: 10px;
		background-color: #FFFFFF;
	}
	.tabcontrol{
		display: flex;
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
		width: 250rpx;
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
	.content-header {
		width: 100vw;
		display: flex;
		font-size: 17px;
		flex-wrap: wrap;
		padding-top: 5px;
		border-bottom: 2px solid #EEEEEE;
	}
	.header-item {
		width: 68vw;
		height: 28px;
		line-height: 28px;
	}
	.item-left {
		width: 25vw !important;
		padding-left: 10px;
	}
	.item-site {
		display: flex;
		width: 68vw;
		justify-content: space-between;
		padding-right: 10px;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.site{
		width: 60vw;
		overflow: hidden;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.content-footer {
		width: 100vw;
		height: 55px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer-item {
		width: 33vw;
		height: 50px;
		line-height: 25px;
		text-align: center;
		font-size: 17px;
		border-right: 1px solid #EEEEEE;
	}
	.footer-item:last-child {
		border: none;
	}
	.footer-num {
		color: #ff0000;
	}
	
	/* 新样式 */
	.content-box{
		margin-bottom: 10px;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border: none;
	}
	.contentbox-left{
		width: 80rpx;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		background-color: #FFFFFF;

	}
	.contentboxleft-text{
		width: 80rpx;
		text-align: center;
		font-size: 52rpx;
		color: #000000;
	}
	.contentbox-right{
		flex: 1;
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
		width: 61vw;
		height: 40px;
		line-height: 40px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item-address text:first-child{
		display: inline-block;
		width: 61vw;
		height: 40px;
		line-height: 40px;
		justify-content: center;
		vertical-align: middle;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item-address{
		padding-left: 5px;
		height: 35px;
		line-height: 33px;
		font-size: 14px;
		color: #AAAAAA;
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
		color: #AAAAAA;
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
		padding: 0 15px;
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
