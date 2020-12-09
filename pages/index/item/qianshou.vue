<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="签收凭证"  @clickLeft="back"></uni-nav-bar>
		<view class="height" :style="{ height: height + 'px'}">
			<view class="title">
				任务单信息
			</view>
			<view class="content-box" >
				<view class="item-store">
					<text>{{kehuinfo.company_name}}</text>
				</view>
				<view class="item-person">
					<text >任务单号:&nbsp{{kehuinfo.rw_dh}}</text>
				</view>
				<view class="item-person">
					<text >{{kehuinfo.contact}}&nbsp&nbsp&nbsp{{kehuinfo.phone}}</text>
					<!-- <uni-icons type="phone" @click="makePhoneCall" size="25" color="#55aa00"></uni-icons> -->
				</view>
				<view class="item-address">
					<text style="max-width: 65%; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{kehuinfo.address}}</text>
					<!-- <uni-icons type="paperplane"  @click="mapnavigation"  size="25" color="#55aa00"/> -->
					<!-- <text @click="coordinates" style="flex: 1; text-align: right; padding-right: 20px; color: #55aa00;">纠正坐标</text> -->
				</view>
				<view class="item-table" >
					<view class="table-flex">
						<view class="" style="font-size: 18px; font-weight: 600;">
							{{kehuinfo.danju_num}}
						</view>
						<view class="table-title">
							单据
						</view>
					</view>
					<view class="table-flex" style="color: #ff0000;">
						<view class="" style="">
							¥{{kehuinfo.order_amount}}
						</view>
						<view class="table-title">
							订单金额
						</view>
					</view>
					<view class="table-flex">
						<view class="" style="color: #ff0000;">
							¥{{kehuinfo.shyu_amount}}
						</view>
						<view class="table-title">
							剩余应收
						</view>
					</view>
				</view>			
			</view>
			<view class="title">
				凭证图片
			</view>
			<u-form-item style="display: flex; background-color: #FFFFFF;" v-if="shangchuanshow">
				<u-upload ref="uUpload5" :action="action" :file-list="fileList" width="120" :show-progress="false" :max-count="4" :custom-btn="true" name="upload_file">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item style="display: flex; background-color: #FFFFFF;" v-if="!shangchuanshow">
				<u-upload ref="uUpload5" :action="action" :deletable="false" :file-list="fileList" width="120" :show-progress="false" :max-count="fileList.length" :custom-btn="true" name="upload_file">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<view class="beizhu-box">
				<view class="beizhu-title">
					凭证备注
				</view>
				<view class="beizhu-text" v-if="shangchuanshow">
					<input class="beizhu-input" type="textarea" v-model="beizhu" />
				</view>
				<view class="beizhu-text" v-if="!shangchuanshow">
					<input class="beizhu-input" :disabled="true" type="textarea" :value="beizhu" />
				</view>
			</view>
		</view>
		
		<view class="commit" @click="commit" v-if="shangchuanshow" :class="{commitshow:!shangchuanshow}">
			提交
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
				is_wcqs:'',//签收凭证完成状态
				shangchuanshow:true,//是否显示提交按钮及上传图片按钮
				beizhu:'',//备注信息
				action: 'https://www.tsdjyy.com/wxpay/upload.php?from=APP&type=qianshou',//图片上传配置地址
				fileList: [
					// {
					// 	url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					// 	beizhu:'123',
					// },
					// {
					// 	url: 'https://myc.jbsage.com/wxpay/images/register/cuxiaofangan.png',
					// 	beizhu:'123',
					// },
					// {
					// 	url: 'https://myc.jbsage.com/wxpay/images/register/fangkejihua.png',
					// 	beizhu:'123',
					// }
				]
			}
		},
		onLoad(option) {
			const _this = this
			this.kehuinfo = JSON.parse(option.kehuinfo)
			this.is_wcqs = option.wcqs
			console.log(this.kehuinfo);
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header =0;
						console.log(res);
						//#ifdef H5
						this.height = res.windowHeight - uni.upx2px(230);
						//#endif
						//#ifdef APP-PLUS
						this.height = res.windowHeight - uni.upx2px(230);
						//#endif
					}
				});
			}, 50);
			if(this.is_wcqs == '0') {
				_this.shangchuanshow = true
				return
			}
			_this.shangchuanshow = false
			_this.$request({
				data:{
					proc:'APP_PSY_PORT',
					type:'获取签收凭证',
					userid:_this.$userinfo.userid,
					c_id:_this.kehuinfo.c_id,
					rw_dh:_this.kehuinfo.rw_dh
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					_this.fileList = []
				}else{
					_this.fileList = resdata.map(item => {
						item.url = item.pzh_url
						return item
					})
					// console.log(_this.fileList);
					_this.beizhu = resdata[0].beizhu
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
				if(!_this.shangchuanshow){
					return
				}
				let files5 = _this.$refs.uUpload5.lists;
				// console.log(files5);
				let iamge_url = '+'
				files5.map(item => {
						// console.log(prev,cur);
							iamge_url += item.response.imageUrl + "+";
						});		
				iamge_url = iamge_url.substr(1, iamge_url.length - 2);
				console.log(iamge_url);
				if(iamge_url){				
					_this.$request({
						data:{
							proc:'APP_PSY_PORT',
							type:'上传签收凭证',
							userid:_this.$userinfo.userid,
							c_id:_this.kehuinfo.c_id,
							rw_dh:_this.kehuinfo.rw_dh,
							pzh_url:iamge_url,
							beizhu:_this.beizhu
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
							uni.$emit('tuihuo')
							uni.showToast({
								title:resdata[0].note
							})
							setTimeout(() => {
								uni.navigateBack({
								})
							},1500)
						}
					})
				}else{
					uni.showToast({
						title:'请上传凭证图片',
						icon:'none'
					})
				}
				
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		overflow: hidden;
	}
	.height{
		width: 100%;
		/* height:1120rpx; */
	}
	.title{
		width: 100vw;
		height: 50rpx;
		line-height: 50rpx;
		padding-left: 20rpx;
		font-size: 16px;
		color: #000000;
	}
	.content-box{
		margin-top: 5px;
		width: 100vw;
		background-color: #FFFFFF;
		border-bottom: 2px solid #EEEEEE;
		z-index: 999;
	}
	.content-box:after{
		background-color: #FFFFFF;
	}
	.item-store,
	.item-address,
	.item-table,
	.item-person{
		/* background-color: #FFFFFF; */
		border: none;
	}
	.item-store{
		display: flex;
		align-items: center;
		padding-left: 5px;
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-store text{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		flex: 1;
	}
	.item-address,
	.item-person{
		padding-left: 5px;
		height: 25px;
		line-height: 15px;
		font-size: 14px;
		color: #AAAAAA;
		display: flex;
		align-items: center;
	}
	.item-table{
		display: flex;
		justify-content: center;
		height: 60px;
		line-height: 20px;
		align-items: center;
		border-bottom: 1px  solid #EEEEEE;
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
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		/* background-color: #FFFFFF; */
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
		width: 100%;
		padding: 0 15px;
		display: flex;
		justify-content: space-between;
		color: #5f5f5f;
		/* background-color: #FFFFFF; */
	}
	.item-jilu:last-child{
		border-radius: 10px;
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
	.beizhu-box{
		box-sizing: border-box;
		margin-top: 20rpx;
		padding: 4rpx 10rpx;
		width: 100vw;
		height: 160rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color:#FFFFFF;
	}
	.beizhu-title{
		width: 140rpx;
		height: 160rpx;
		line-height: 160rpx;
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
	.commitshow{
		background-color: #CCCCCC !important;
		color: #000000 !important;
	}
</style>
