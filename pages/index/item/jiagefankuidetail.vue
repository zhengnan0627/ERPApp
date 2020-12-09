<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="商品价格反馈" fixed="true"/>
		<view style="width: 100%;" :style="{ height: height + 'px'}">
		
		<view class="top">
			<view class="list-content2" >
				<view class="content-img2" >
					<image :src="kehuinfo.g_image" mode="aspectFit"></image>
				</view>
				<view class="content-text2">
					<view class="text-item2 text-name2" style="font-size: 15px; color: #000000;" @click="goodsdetail(item,index)">
						{{kehuinfo.g_name}}
					</view>
					<view class="text-item2 text-bianhao2">
						商品编号:&nbsp{{kehuinfo.g_bianhao}}
					</view>
					<view class="text-item2 text-factory2">
						厂家:&nbsp{{kehuinfo.g_factory}}
					</view>
					<view class="text-item2 text-guige2">
						<view class="">
							规格:&nbsp{{kehuinfo.g_property}}
						</view>
					</view>
					<view style="text-align: right; margin: 0 5px 4px 0; display: flex;justify-content: space-between;">
						<text style="text-align: left; color: #ff0000; font-size: 18px; flex: 1;" @click="goodsdetail(item,index)">
							零售价:&nbsp¥{{kehuinfo.g_price}}
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image">
				<image src="/static/image/jiage.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="number" placeholder="药品价格" v-model="ypprice"/>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image">
				<image src="/static/image/shuxing.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="客户名称" v-model="ypguige"/>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image">
				<image src="/static/image/changjia.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="经销商" v-model="ypfactory"/>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image" style="width: 50rpx; height: 50rpx;line-height: 50rpx;padding-left: 10rpx;">
				<image src="/static/image/spbeizhu.png" style="width: 50rpx; height: 50rpx;line-height: 50rpx;" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="备注(选填)" v-model="ypbeizhu"/>
			</view>
		</view>
		</view>
		<view class="commit" @click="commit">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kehuinfo:{},
				height: 0, //height高度
				ypname:'',
				ypguige:'',
				ypprice:'',
				ypfactory:'',
				ypbeizhu:'',
				action: 'https://www.tsdjyy.com/wxpay/upload.php?from=APP',//图片上传配置地址
			}
		},
		onLoad(option) {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header =0;
						// console.log(res);
						//#ifdef H5
						this.height = res.windowHeight - uni.upx2px(278);
						//#endif
						//#ifdef APP-PLUS
						this.height = res.windowHeight - uni.upx2px(300);
						//#endif
					}
				});
			}, 50);
			this.kehuinfo = JSON.parse(option.kehuinfo) 
			console.log(this.kehuinfo);
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			commit(){
				const _this = this
				
				if(_this.ypguige == ''||_this.ypprice == ''||_this.ypfactory == ''){
					uni.showToast({
						title:'请完善商品信息',
						icon:'none'
					})
					return
				}
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'价格反馈',
						userid:_this.$userinfo.userid,
						g_id:_this.kehuinfo.g_id,
						g_guige:_this.ypguige,
						g_price:_this.ypprice,
						g_factory:_this.ypfactory,
						// dealer:_this.dealer,
						beizhu:_this.ypbeizhu
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						uni.showToast({
							title:resdata[0].error,
							icon:'none'
						})
					}else{
						uni.$emit('jiagefankui')
						uni.showToast({
							title:resdata[0].note
						})
						setTimeout(() => {
							uni.navigateBack({
							})
						},1500)
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		/* height: 100vh; */
		background-color: #FFFFFF;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.top{
		/* margin-top: 40rpx; */
		width: 100vw;
		border-bottom: 1px solid #EEEEEE;
	}
	.list-content2 {
		width: 97vw;
		padding: 5px 5px;
		display: flex;
	}
	.content-img2 {
		position: relative;
		width: 30vw;
		margin-right: 10px;
		justify-content: center;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.kucun2{
		position: absolute; 
		bottom:  0rpx; 
		width: 100%; 
		height: 20px; 
		text-align: center;
		font-size: 16px;
		color: #ff0000;
	}
	.content-img2 image {
		width: 100%;
		height: 100%;
	}
	.content-text2 {
		flex: 1;	
		font-size: 15px;
		color: #767676;
	}
	.text-item2 {
		margin: 3px 0;
		font-size: 14px;
	}
	.text-guige2 {
		display: flex;
		justify-content: space-between;
		padding-right: 5px;
	}
	.list-icon2 {
		width: 97vw;
		height: 35px;
		line-height: 35px;
		display: flex;
		flex-direction: row-reverse;
	}
	.staricon2 {	
		width: 21px;
		height: 21px;
		line-height: 21px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #EEEEEE;	
	}
	.top-image{
		width: 100vw;
		height: 200rpx;
		text-align: center;
	}
	.top-image image{
		width: 200rpx;
		height: 200rpx;
	}
	.top-title{
		width: 100vw;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 22px;
	}
	.input-box{
		margin: 30rpx 15vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 70vw;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #EEEEEE;
	}
	.inputbox-image{
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: right;
	}
	.inputbox-image image{
		width: 60rpx;
		height: 60rpx;
	}
	.input-box:first-child .inputbox-image{
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
	.input-box:first-child .inputbox-image image{
		width: 80rpx;
		height: 80rpx;
	}
	.inputbox-field{
		flex: 1;
	}
	.inputbox-field >>> .u-field{
		padding: 10rpx 4px;
	}
	.title{
		width: 100vw;
		height: 50rpx;
		line-height: 50rpx;
		padding-left:120rpx;
		font-size: 16px;
		color: #000000;
	}
	.u-list-item {
		width: 120rpx;
		height: 120rpx;
		overflow: hidden;
		margin: 10rpx;
		background: rgb(244, 245, 246);
		position: relative;
		border-radius: 10rpx;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	.u-add-wrap {
		flex-direction: column;
		color: $u-content-color;
		font-size: 28rpx;
	}
	.commit{
		margin: 0 auto;
		/* margin-top:70rpx; */
		width: 60vw;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #00a200;
		border-radius: 10px;
		color: #FFFFFF;
	}
</style>
