<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="结算"  @clickLeft="back"></uni-nav-bar>
		<view class="height" :style="{ height: height + 'px'}">
			<view class="jine-box">
				<view class="jine-input-box">
					<input class="jine-input" type="number" v-model="amount" placeholder="输入结算金额" />
				</view>
				<view class="jine-title">
					实付金额(元)
				</view>
			</view>
			<u-form-item label-position="left" label="请选择结算方式" prop="region" label-width="240" style="background-color: #FFFFFF; border-bottom: 10px solid #EEEEEE;border-top: 10px solid #EEEEEE;">
				<u-input type="select" :select-open="pickerShow" v-model="js_type" :placeholder="js_type || '无'" input-align="right" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-select mode="single-column" :list="selectList" v-model="pickerShow" title="请选择结算方式" @confirm="selectConfirm1"></u-select>
			<view class="beizhu-box">
				<view class="beizhu-title">
					备注
				</view>
				<view class="beizhu-text">
					<input class="beizhu-input" type="textarea" placeholder="填写备注(选填)" v-model="beizhu" />
				</view>
			</view>
		</view>
		
		<view class="commit" @click="commit">
			确认
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0, //height高度
				//上级页面传过来的任务详情数据
				kehuinfo:{},
				pickerShow: false,
				amount:'',//结算金额
				js_type:"",//结算类型
				beizhu:'',//备注信息
				//-----------------------选择企业类型数据项----------------
				selectList: [
					// {
					// 	value: '微信支付',
					// 	label: '微信支付'
					// },
					// {
					// 	value: '支付宝',
					// 	label: '支付宝'
					// },
					// {
					// 	value: '白条',
					// 	label: '白条'
					// },
					// {
					// 	value: '收钱吧',
					// 	label: '收钱吧'
					// },
					// {
					// 	value: '线下支付',
					// 	label: '线下支付'
					// }
				],
			}
		},
		onLoad(option) {
			const _this = this
			this.kehuinfo = JSON.parse(option.kehuinfo)
			console.log(this.kehuinfo);
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header =0;
						console.log(res);
						//#ifdef H5
						this.height = res.windowHeight - uni.upx2px(290);
						//#endif
						//#ifdef APP-PLUS
						this.height = res.windowHeight - uni.upx2px(290);
						//#endif
					}
				});
			}, 50);
			_this.$request({
				data:{
					proc:'APP_PSY_PORT',
					type:'获取支付方式',
					userid:_this.$userinfo.userid,
					c_id:_this.kehuinfo.c_id,
					role:_this.$userinfo.role,
				}
			}).then(res => {
				const resdata = res.Msg_info
				if(resdata[0].error){
					_this.selectList = []
				}else{
					_this.selectList = resdata
				}
			})
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			commit(){
				const _this = this
				if(!_this.js_type){
					uni.showToast({
						title:'请选择结算方式',
						icon:'none'
					})
					return
				}
				if(_this.amount != '' && +_this.amount > 0 && +_this.amount <= +_this.kehuinfo.shyu_amount){
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
							uni.showToast({
								title:resdata[0].note
							})
							setTimeout(() => {
								uni.navigateBack({
								})
							},1500)
						}
					})
					this.amount = ''
				}else{
					this.amount = ''
					uni.showToast({
						title:'结算失败,请确定金额',
						icon:'none'
					})
				}
			},
			// 选择商品类型回调
			selectConfirm1(e) {
				console.log(e);
				this.js_type = e[0].value;
				
			},	
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	}
	.height{
		width: 100%;
		/* height: 82vh; */
	}
	.jine-box{
		margin: 0 auto;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		width: 690rpx;
		height: 320rpx;
		text-align: center;
		border-radius: 20rpx;
		border: 1px solid #CCCCCC;
	}
	.jine-input-box{
		margin: 0 auto;
		margin-top: 120rpx;
		margin-bottom: 3px;
		width: 60vw;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		border-bottom: 1px solid #EEEEEE;
	}
	.jine-input{
		width: 100%;
		height: 100%;
		font-size: 34px;
	}
	.beizhu-box{
		box-sizing: border-box;
		padding: 4rpx 30rpx;
		width: 100vw;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color:#FFFFFF;
		border-bottom: 1px solid #CCCCCC;
	}
	.beizhu-title{
		/* width: 140rpx; */
		margin-right: 10px;
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		font-size: 16px;
		color: #000000;
	}
	.beizhu-text{
		flex: 1;
		height: 160rpx;
	}
	.beizhu-input{
		width: 100%;
		height: 100%;
	}
	.commit{
		width: 50vw;
		margin: 0 auto;
		/* margin-top: 160rpx; */
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #00a200;
		color: #FFFFFF;
		border-radius: 10px;
	}
</style>
