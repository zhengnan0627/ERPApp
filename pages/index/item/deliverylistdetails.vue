<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  @clickLeft="back"  title="出库单明细" />
		<view class="content">
			<view class="header-item">
				出库单:&nbsp;&nbsp;{{detailtitle.stockout_serial}}
			</view>
			<view class="header-item">
				货箱数量:&nbsp;&nbsp;{{detailtitle.stockout_num}}
			</view>
			<view class="header-item">
				品规数:&nbsp;&nbsp;{{detailtitle.stockout_productnum}}
			</view>
			<view class="header-item header-flex">
				<view class="">
					开票员:&nbsp;{{detailtitle.stockout_drawer}}
				</view>
				<view class="" style="color:#55aa00 ;" @click="makePhoneCall">
					<uni-icons type="phone" size="25" color="#55aa00" ></uni-icons>
					联系开票员
				</view>
			</view>
			<view class="header-item header-flex">
				
				<view class="">
					业务员:&nbsp;{{detailtitle.stockout_person}}
				</view>
				<view class="" style="color:#55aa00 ;"  @click="makePhoneCall">
					<uni-icons type="phone" size="25" color="#55aa00"></uni-icons>
					联系业务员
				</view>
			</view>
		</view>
		<view class="tabbar" style="margin-top: 10px; font-size: 20px;">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00" @change="tabbar"></sun-tab>
		</view>
		<view class="deliverylist">
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
		</view>
		<!-- <button @click="open">打开弹窗</button> -->
		
		<block v-if="ificontap">
			<view class="swiper-action" v-for="(item,index) in detailList" :key="index">
				<tui-swipe-action :actions="actions" @click="openpopup(item,index)" 
								  :params="item" :forbid="!item">
					<template v-slot:content>
						<view class="deliverylist-item"  v-if="item.yp_num>0">
								<view class="item-text">
									{{item.yp_name}}
								</view>
								<view class="item-text">
									规格:{{item.yp_guige}}
								</view>
								<view class="item-text">
									厂家:{{item.yp_factory}}						
								</view>
								<view class="item-text">
									数量:&nbsp;{{item.yp_num}}
								</view>
						</view>						
					</template>
				</tui-swipe-action>	
			</view>
		</block>
		<uni-popup ref="popup" type="dialog">
			  <uni-popup-dialog @close="close" @confirm="confirm" type="input" mode="input" title="选择数量" :value="1" placeholder="请输入删除数量" :before-close="false" ></uni-popup-dialog>
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
				detailtitle:{
					'stockout_serial':'XSAZDA0011523',
					'stockout_num':'1',
					'stockout_productnum':'5',
					'stockout_drawer':'李伟',
					'stockout_person':'李成耀',
				},
				index: 0,
				tabList: ['已卸货','已取消',], //普通数据赋值
				ificontap:false,
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
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				//下拉展示明细列表
				detailList:[
					{"yp_name":"DO_(麦克阿莫先锋)阿莫西林胶囊","yp_guige":"12粒/板*2板/盒","yp_factory":"唐山麦克福特制药有限公司","yp_num":"5","":"",},
					{"yp_name":"DO_(麦克止咳)小儿止咳糖浆","yp_guige":"12粒/板*2板/盒","yp_factory":"唐山麦克福特制药有限公司","yp_num":"3","":"",},
					{"yp_name":"DO_(麦克普瑞康)灵芝胶囊","yp_guige":"12粒/板*1板/盒","yp_factory":"唐山麦克福特制药有限公司","yp_num":"5","":"",},
					{"yp_name":"DO_(麦克芬必得)布洛芬颗粒","yp_guige":"12粒/板*2板/盒","yp_factory":"唐山麦克福特制药有限公司","yp_num":"5","":"",},
					{"yp_name":"DO_(麦克止咳诺)川贝罗汉止咳颗粒","yp_guige":"12粒/板*1板/盒","yp_factory":"唐山麦克福特制药有限公司","yp_num":"5","":"",},
				]
				///////////////////
				// options:{
				// 	text:'删除',
				// 	style: {
				// 	    backgroundColor: '#dd524d'
				// 	}
				// }
			}
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
			//拨号方法
			makePhoneCall() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: '1345576897',
				
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
				this.detailList[this.actionsIndex].yp_num -= value
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
	.content {
		width: 100vw;
		height: 160px;
		padding-top: 5px;
		padding-left: 10px;
		display: flex;
		flex-wrap: wrap;
		background-color: #FFFFFF;
	}
	.header-item {
		width: 100%;
		font-size: 17px;
		height: 25px;
		line-height: 25px;
	}
	.header-flex {
		display: flex;
		justify-content: space-between;
		margin-right: 20px;
	}
	.deliverylist {
		width: 100vw;
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
	.deliverylist-item {
		width: 100vw;
		padding: 5px 0 5px 10px;
		font-size: 15px !important;
		border-bottom: 1px solid #acacac;
	}
	.item-text {
		width: 100vw;
		height: 22px;
		line-height: 22px;
	}
</style>
