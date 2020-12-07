<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="在线商品登记" fixed="true"/>
		<view style="width: 100%;" :style="{ height: height + 'px'}">
		
		<view class="top">
			<view class="top-image">
				<image src="/static/image/Pills-blue-icon.png" mode=""></image>
			</view>
			<view class="top-title">
				请输入要登记的商品信息
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image">
				<image src="/static/image/medicine.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="药品名称" v-model="ypname"/>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image">
				<image src="/static/image/shuxing.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="药品规格" v-model="ypguige"/>
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
				<image src="/static/image/changjia.png" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="生产厂家" v-model="ypfactory"/>
			</view>
		</view>
		<view class="input-box">
			<view class="inputbox-image" style="width: 50rpx; height: 50rpx;line-height: 50rpx;padding-left: 10rpx;">
				<image src="/static/image/spbeizhu.png" style="width: 50rpx; height: 50rpx;line-height: 50rpx;" mode=""></image>
			</view>
			<view class="inputbox-field">
				<input type="text" placeholder="备注" v-model="ypbeizhu"/>
			</view>
		</view>
		<view class="title">
			药品图片
		</view>
		<u-form-item style="display: flex;padding-left: 40px; background-color: #FFFFFF;">
			<u-upload ref="uUpload5" :action="action"  width="120" :show-progress="false" :max-count="4" :custom-btn="true" name="upload_file">
				<view class="" slot="addBtn">
					<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
						<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
					</view>
				</view>
			</u-upload>
		</u-form-item>
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
				height: 0, //height高度
				ypname:'',
				ypguige:'',
				ypprice:'',
				ypfactory:'',
				ypbeizhu:'',
				action: 'https://www.tsdjyy.com/wxpay/upload.php?from=APP',//图片上传配置地址
			}
		},
		onLoad() {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header =0;
						console.log(res);
						//#ifdef H5
						this.height = res.windowHeight - uni.upx2px(208);
						//#endif
						//#ifdef APP-PLUS
						this.height = res.windowHeight - uni.upx2px(230);
						//#endif
					}
				});
			}, 50);
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			commit(){
				const _this = this
				
				let files5 = _this.$refs.uUpload5.lists;
				let iamge_url = '+'
				files5.forEach(item => {
						// console.log(prev,cur);
							iamge_url += item.response.imageUrl + "+";
						});	
				iamge_url = iamge_url.substr(1, iamge_url.length - 2);
				console.log(iamge_url);
				if(_this.ypname == ''||_this.ypguige == ''||_this.ypprice == ''||_this.ypfactory == ''||iamge_url == ''){
					uni.showToast({
						title:'请完善商品信息',
						icon:'none'
					})
					return
				}
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'商品登记',
						userid:this.$userinfo.userid,
						g_name:this.ypname,
						g_property:this.ypguige,
						g_price:this.ypprice,
						g_factory:this.ypfactory,
						g_image:iamge_url,
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
		height: 280rpx;
		text-align: center;
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
		margin: 20rpx 15vw;
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
