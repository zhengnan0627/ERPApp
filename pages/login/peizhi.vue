<template>
	<view>
		<uni-nav-bar fixed="true" left-icon="back"  title="服务器配置"  @clickLeft="back" backgroundColor="#EEEEEE"/>
		<view class="content">
			<view class="peizhi-title">
				输入服务器地址
			</view>
			<view class="peizhi-content">
				<view class="peizhi-input">
					<!-- <view class="peizhi-img">
						<image class="peizhi-image" src="" mode=""></image>
					</view> -->
					<input class="input" type="text" v-model="baseUrl"  :placeholder="placeholder" placeholder-class=""/>
				</view>
				<view class="confirm" @click="confirm">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl:'',//配置url
				placeholder:'',//输入框提示值
			}
		},
		onLoad() {
			this.placeholder = uni.getStorageSync('baseUrl')?uni.getStorageSync('baseUrl'):'请输入配置地址';
			//#ifdef APP-PLUS
			this.version = plus.runtime.version  ? plus.runtime.version  : '1.0.1'
			//#endif
		},
		methods: {
			//返回上级页面方法
			back(){
				if(uni.getStorageSync('baseUrl')){
					uni.navigateBack({
						
					})
				}else{
					uni.showToast({
						title:'请完成配置',
						icon:'none'
					})
				}
				
			},
			// 点击确认按钮触发
			confirm(){
			    // 输入框的值
				const _this = this
				const value = _this.baseUrl
				// console.log(this.baseUrl)
				const test = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
				const testurl = test.test(value)
				if (value){
					// this.$request({
					// 	data:{
					// 		proc:'APP_YWY_PORT',
					// 		type:'获取业务接口',
					// 		c_vcodc:value,
					// 	}
					// }).then(res => {
					// })
					uni.request({
					    url: 'http://152.136.28.147:9007/VXMail/PublicUrl.ashx',  
					    data: {
							proc:'APP_YWY_PORT',
							type:'获取业务接口',
							c_vcode:value,
						},  
					    success: (res) => {  
							// console.log(res.data);
							const resdata = res.data.Msg_info[0]
							console.log(resdata);
							if(resdata.note){
								_this.baseUrl = ''
								uni.showToast({
									icon:'none',
									title:resdata.note,
									duration:1000
								})
								return
							}
							uni.setStorageSync('baseUrl',resdata.apiurl);
							let seconds = parseInt(resdata.expired_date) / 1000;
							if (seconds > 0) {
								let timestamp = Date.parse(new Date());
								timestamp = timestamp / 1000 + seconds;
								uni.setStorageSync('StorageTime', timestamp + "")
							} else {
								uni.removeStorageSync('StorageTime')
							}
							console.log(value);
							uni.showToast({
								icon:'none',
								title:'配置成功,返回登录',
								duration:1000
							})
							setTimeout(() => {
								uni.navigateBack({
									
								})
							},1000)
					    }  
					})    
				}else {
					uni.showToast({
						icon:'none',
						title:'配置输入有误,请重新配置',
						duration:1000
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #EEEEEE;
	}
.content{
		margin-top:30vh;
		margin-left: auto;
		margin-right: auto;
		width: 80vw;
		height: 114.28rpx;
		text-align: center;
		.peizhi-title{
			padding: 3px 0;
			font-size: 16px;
			text-align: left;
			margin-bottom: 7.14rpx;
		}
		.peizhi-content{
			display: flex;
			align-items: center;
			font-size: 16px;
			// color: #FFFFFF;
			.confirm{
				margin-left: 7rpx;
				width:160rpx;
				height: 34px;
				line-height: 34px;
				background-color: #00b800;
				color: #FFFFFF;
				border-radius: 5px;
			}
			.peizhi-input{
				box-sizing: border-box;
				width: 100%;
				height: 40px;
				line-height: 40px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #000000;
				.input{
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size: 16px;
					// color: rgba($color: #FFFFFF, $alpha: .9);
				}
				.input-placeholder {
					color: rgba($color: #FFFFFF, $alpha: .7);
				}
				.peizhi-img{
					width: 28rpx;
					height: 28rpx;
					.peizhi-image{
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
			
		}
	}
</style>
