<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" @clickLeft="back" title="新增访客计划"></uni-nav-bar>
		<view class="content-container">
			<view class="content">
				<view class="list content-title" style="display: flex;">
					<view class="title"style="width: 20vw;flex: 1;">
						拜访主题
					</view>
					<view class="" style="width: 70vw;">		
						<uni-combox style="font-size: 20px;" placeholder="请选择拜访主题" :candidates="candidates"></uni-combox>
					</view>
				</view>
				<view class="list content-title" style="display: flex;">
					<view class="title"style="width: 20vw;flex: 1;">
						添加访客
					</view>
					<view class="" style="width: 70vw;">		
						<uni-combox @input.once="selectman" placeholder="选择访客" :candidates="candidates2"></uni-combox>
					</view>
				</view>
				<view class="list content-title" style="display: flex;">
					<view class="title"style="width: 20vw;flex: 1;">
						联系电话
					</view>
					<view class="" style="width: 70vw;">		
						<view v-if="phone" class="">
							暂无联系电话
						</view>
						<view v-else="phone" class="">
							1357734413
						</view>
						<!-- <uni-combox style="font-size: 20px;" placeholder="选择访客" :candidates="candidates2"></uni-combox> -->
					</view>
				</view>
				<view class="text">
					<view class="text-title">
						备注
					</view>
					<view class="">
						<textarea style="width: 90%; margin-top: 5px;" placeholder="" maxlength="-1" />
					</view>
				</view>
				
			</view>
			<view class="time">
				<view class="">
					访客时间
				</view>
				<view class="" style="color:#55aa00 ;" @click="addtime">
					添加时间
				</view>
			</view>
			<view class="footer"  @click="open">
				提交
			</view>
			<w-picker
			                :visible.sync="visible"
			                mode="date" 
			                startYear="2017" 
			                endYear="2029"
			                value="2020-04-07"
			                :current="true"
			                fields="day"
			                @confirm="onConfirm($event,'date')"
			                @cancel="onCancel"
			                :disabled-after="false"
			                ref="picker" 	
			></w-picker>
			<uni-popup ref="popup" type="center">
			    <uni-popup-message type="success" message="提交成功" :duration="1500"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniCombox from "@/components/uni-combox/uni-combox"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		 components: {uniCombox,
		  uniPopup,
		         uniPopupMessage,
		         uniPopupDialog},
		data() {
			return {
				visible:false,
				candidates: ['初次拜访', '催款收款', '老客户回访', '推荐新品', '采购', '签订协议'],
				candidates2: ['张三', '李四', '王五', '赵六'],
				city: '',
				//电话号码显示隐藏变量
				phone:true
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			selectman(e) {
				// console.dir(e);
				this.phone = ! this.phone
			},
			addtime() {
				this.visible = true
	
			},
			open(){
			         this.$refs.popup.open()
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		overflow: hidden;
	}
	.content-container {
		width: 100vw;
		
	}
	.content {
		width: 100vw;
		height: 400px;
		background-color: #FFFFFF;
	}
	.list {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		display: flex;
		margin: 0 10px;
		border-bottom: 1px solid #EEEEEE;
		font-size: 20px !important;
	}
	.text {
		width: 100vw;
		height: 220px;
		margin-top: 10px;
		margin-left: 10px;
	}
	.time {
		height: 50px;	
		margin-top: 10px;
		line-height: 50px;
		padding:0 10px;	
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.footer {
		margin-top: 25px;
		width: 100vw;
		height: 44px;
		line-height: 44px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 20px;
		color:#489000;
		font-weight: bold;
	}
</style>
