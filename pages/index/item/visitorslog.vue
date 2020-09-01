<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="访客日志" @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="content-title">
				<view class="logitem">
					拜访时间:{{loglist.time}}
				</view>
				<view class="logitem">
					拜访人: {{loglist.name}}
				</view>
				<view class="logitem">
					拜访对象: {{loglist.store}}
				</view>
				<view class="logitem">
					拜访地址: {{loglist.address}}
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="input">
				<textarea type="text" placeholder="填写您的拜访日志" maxlength="-1" adjust-position="false" style="width: 99%; height: 95%;"/>
			</view>
		</view>
		<view class="commit" @click="open">
			提交日志
		</view>
		<uni-popup ref="popup" type="center">
		    <uni-popup-message type="success" message="提交成功" :duration="1500"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	export default {
		components: {
			uniPopup,
		    uniPopupMessage
		},
		data() {
			return {
				loglist:{},
			}
		},
		onLoad:function(option){
			const item = JSON.parse(option.item)
			console.log(item);
			this.loglist = item;
			console.log(this.loglist);
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			open(){
			         this.$refs.popup.open()
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		background-color: #FFFFFF;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.content {
		margin-top: 10px;
	}
	.content-title {
	
		width: 95vw;
		margin: 0 auto;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.logitem {
		width: 100%;
		flex: 1;
		justify-content: center;
		vertical-align: middle;
		/* border-bottom: 1px solid #EEEEEE; */
	}
	.footer {
		width: 100vw;
		border-top: 1px solid #EEEEEE;
	}
	.input {
		width: 95vw;
		height: 200px;
		margin: 0 auto;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.commit {
		position: fixed;
		bottom: 2vh;
		left: 30%;
		width: 40vw;
		height: 30px;
		line-height: 30px;
		border-radius: 30px;
		background-color: #00A200;
		text-align: center;
		color: #FFFFFF;
	}
</style>
