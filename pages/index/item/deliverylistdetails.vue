<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  @clickLeft="back"  title="出库单明细"  background-color="rgba(255, 255, 255, 0.4)" color="#ffffff"/>
		<view class="beijing">
			<!-- <image src="/static/image/beijing1.png" mode="aspectFit"></image> -->
			<view class="" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4);">
				
			</view>
		</view>
		<view class="content">
			<view class="header-item">
				出库单号:&nbsp;&nbsp;{{headerList.chk_id}}
			</view>
			<view class="header-flex">
				<view class="header-item">
					整件数:{{headerList.zhj_num}}
				</view>
				<view class="header-item">
					散件数:{{headerList.sanj_num}}
				</view>
				<view class="header-item">
					品规数:{{headerList.pingui_num}}
				</view>
			</view>
			
			<view class="header-item header-flex">
				<view class="" style="flex: 1;">
					开票员:&nbsp;{{headerList.kaipiaoyuan}}
					<uni-icons type="phone" size="25" color="#55aa00" @click="makePhoneCall1"></uni-icons>
				</view>
				<view class="" style="flex: 1;">
					业务员:&nbsp;{{headerList.yewuyuan}}
					<uni-icons type="phone" size="25" color="#55aa00"  @click="makePhoneCall2"></uni-icons>
				</view>
			</view>

		</view>
		<!-- <view class="tabbar" style="position: fixed; top: 185px;left: 4vw; font-size: 20px; width: 92vw; margin: 0 auto; z-index: 999;">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00" @change="tabbar"></sun-tab>
		</view> -->
		<view class="zhanwei" style="width: 100vw; height: 185px; background-color: #EEEEEE;">
				
		</view>
		
		<!-- <view class="deliverylist">
			<view class="deliverylist-title" style="width: 85vw;">
				<view class="">
					货箱号:&nbsp;SDAX12543
				</view>
				<view class="">
					品规数:&nbsp;5					
				</view>
			</view>
			<view class="deliverylist-icon">
				<block v-if="!ificontap">	<uni-icons type="arrowdown"  size="25" @click="icontap"></uni-icons></block>
				<block v-else> <uni-icons type="arrowup"  size="25" @click="icontap"></uni-icons></block>
			</view>
		</view> -->
		<!-- <button @click="open">打开弹窗</button> -->
		
		<block v-if="true">
			<view class="swiper-action" v-for="(item,index) in detailList" :key="index">
				<tui-swipe-action :actions="actions" @click="openpopup(item,index)" 
								  :params="item" :forbid="chkbjstatus == '0'">
					<template v-slot:content>
						<view class="deliverylist-item" >
								<view class="item-text">
									{{item.item_name}}
								</view>
								<view class="item-text">
									厂家:&nbsp{{item.item_factory}}						
								</view>
								<view class="item-text">
									<view class="" style="flex: 1;">
										规格:&nbsp{{item.item_guige}}
									</view>
									<view class="" style="flex: 1;">
										单位:&nbsp{{item.item_unit}}
									</view>
								</view>
								
								<view class="item-text">
									<view class="" style="flex: 1;">
										数量:&nbsp;{{item.item_num}}
									</view>
									<view class="" style="flex: 1;color: #FF0800;"  v-if="+item.tiem_th_num > 0" >
										已退数量:&nbsp{{item.tiem_th_num}}
									</view>
								</view>
						</view>						
					</template>
				</tui-swipe-action>	
			</view>
		</block>
		<uni-popup ref="popup" type="dialog">
			  <uni-popup-dialog @close="close" @confirm="confirm" type="input" mode="input" title="选择退货数量" :value="1" placeholder="请输入删除数量" :before-close="false" :max="+popuplist.item_num"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
		        uniSwipeAction,
		        uniSwipeActionItem,
				uniPopup,
				uniPopupMessage,
				uniPopupDialog
			},
		data() {
			return {
				//头部展示数据,从上级页面传递过来
				headerList:{
					
				},
				index: 0,
				tabList: ['已卸货','已取消',], //普通数据赋值(已注释,暂时无用)
				ificontap:false,//(已注释,暂时无用)
				chkbjstatus:'1',//上级页面传递进来的当前出库单状态是否可操作
				//滑动列表下标
				actionsIndex:0,
				//滑动效果数据
				options:[
				         {
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				],
				actions: [
					{
						name: '退货',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				//下拉展示明细列表
				detailList:[			
					// {"item_name":"DO_(麦克止咳诺)川贝罗汉止咳颗粒","item_guige":"12粒/板*1板/盒","item_factory":"唐山麦克福特制药有限公司","item_num":"5","":"",},
				],
				//删除弹出所有item内容
				popuplist:{},
			}
		},
		onLoad(option) {
			this.headerList = JSON.parse(option.headerList)
			this.chkbjstatus = JSON.parse(option.chkbjstatus)
			console.log(option);
			this.detailListRequest()
		},
		methods: {
			back(){
				uni.navigateBack({		   
				})
			},
			//箭头点击方法
			icontap() {
				this.ificontap = !this.ificontap
			},
			//开票员拨号方法
			makePhoneCall1() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: this.headerList.kpy_phone,
				
				})
			},
			//明细数据接口方法,可反复调用刷新数据
			detailListRequest(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'出库单列表',
						userid:_this.$userinfo.userid,
						chk_id:_this.headerList.chk_id
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						_this.detailList = []
					}else{
						_this.detailList = resdata
					}
				})
			},
			//开票员拨号方法
			makePhoneCall1() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: this.headerList.kpy_phone,
				
				})
			},
			//业务员拨号方法
			makePhoneCall2() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: this.headerList.ywy_phone,
				
				})
			},
			//tabbar点击方法
			tabbar(e){
				console.log(e);
			},
			//删除方法：一中间弹出层方法
			openpopup(item,index) {
				// console.log("123");
				console.log(item,index);
				this.actionsIndex = index;
				this.popuplist = item
				this.$refs.popup.open(item,index)
			},
			//关闭对话框
			close(done){
			            // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
			            // ...
			  this.$refs.popup.done()
			},
			//删除数量点击确定方法
			confirm(done,value){		    
				console.log(value);
				const _this = this
				_this.$request({
					data:{
						proc:'APP_PSY_PORT',
						type:'退货',
						userid:_this.$userinfo.userid,
						sub_type:'单个退',
						chk_id:_this.popuplist.chk_id,
						row_num:_this.popuplist.row_num,
						num:value
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
						_this.detailListRequest()
						uni.$emit('tuihuo')
						uni.showToast({
							title:res.Msg_info[0].note
						})
					}
				})
				// this.detailList[this.actionsIndex].yp_num -= value
			    // TODO 做一些其他的事情，手动执行 done 才会关闭对话框
			     // ...
				done()
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
		background-image: url(/static/image/beijing2.png) ;
		background-repeat: no-repeat;
		z-index: 999;
	}
	.content {
		/* width: 100vw;
		height: 160px;
		padding-top: 5px;
		padding-left: 10px;
		display: flex;
		flex-wrap: wrap;
		background-color: #FFFFFF; */
		box-sizing: border-box;
		position: fixed;
		top: 100px;
		left: 4vw;
		margin: 0 auto;
		width: 92vw;
		/* height: 100px; */
		padding-left: 10px;
		padding-bottom: 5px;
		border-radius: 10px;
		background-color: #FFFFFF;
		/* border-bottom: 10px solid #EEEEEE; */
		z-index: 999;
	}
	.content::after{
		content: '';
		position: fixed;
		top: 211px;
		left: 0;
		width: 100vw;
		/* height: 10px; */
		z-index: 99;
		background-color: #EEEEEE;
		/* border: 10px solid #EEEEEE; */
	}
	.header-flex {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 4px 0;
		display: flex;
		align-items: center;
		margin-right: 20px;
	}
	.header-item {
		width: 100%;
		font-size: 17px;
		height: 25px;
		line-height: 25px;
		padding: 4px 0;
	}
	
	.deliverylist {
		box-sizing: border-box;
		margin: 0 auto ;
		width: 92vw;
		height: 70px;
		padding-left: 10px;
		line-height: 30px;
		font-size: 17px;
		border-top: 3px solid #EEEEEE;
		border-bottom: 3px solid #EEEEEE;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
	}
	.swiper-action{
		box-sizing: border-box;
		margin: 0 auto ;
		width: 92vw;
	}
	.swiper-action:last-child{
		margin-bottom: 15px;
	}
	.deliverylist-item {
		box-sizing: border-box;
		margin: 0 auto ;
		width: 92vw;
		padding: 5px 0 5px 10px;
		font-size: 15px !important;
		border-bottom: 1px solid #acacac;
	}
	.item-text {
		display: flex;
		align-items: center;
		width: 100vw;
		height: 22px;
		line-height: 22px;
	}
</style>
