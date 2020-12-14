<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="访客日志" @clickLeft="back"></uni-nav-bar>
		<view class="content">
			<view class="content-title">
				<view class="logitem">
					拜访时间: {{time}}
				</view>
				<view class="logitem">
					拜访人: {{name}}
				</view>
				<view class="logitem">
					拜访对象: {{loglist.c_contact}}
				</view>
				<view class="logitem">
					拜访地址: {{loglist.c_gs_address}}
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="input">
				<textarea type="text" placeholder="填写您的拜访日志" v-model="content" 
				:maxlength="-1" :adjust-position="false" 
				style="width: 99%; height: 95%;"/>
			</view>
		</view>
		<view class="upload">
			<view class="" style="width: 100%;">
				上传拜访照片
			</view>
			<u-upload ref="upload" :action="action" :auto-upload="true" name="upload_file" :max-count="2"></u-upload>
		</view>
		<view class="footer-btn">
			<view class="commit" @click="open">
				提交日志
			</view>
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
				userid:null,//用户id(从缓存中取)
				name:'',//登录用户名
				content:'',//日志内容
				time:'',//拜访日期
				loglist:{},//上级页面传参过来的item客户信息列表
				action: 'https://www.tsdjyy.com/wxpay/upload.php?from=APP&type=baifang',//图片上传配置地址
			}
		},
		onLoad:function(option){
			this.userid = uni.getStorageSync('userid')
			this.name = this.$userinfo.userName
			this.loglist = JSON.parse(option.item)
			let datetime = new Date();
			let year = datetime.getFullYear();
			let month = datetime.getMonth()+1;//js从0开始取 
			let date = datetime.getDate(); 
			if(month<10){
			month = "0" + month;
			}
			if(date<10){
			date = "0" + date;
			}
			this.time = year+"-"+month+"-"+date;
			// console.log(this.loglist);
		},
		methods: {
			back(){
				uni.navigateBack({
					 
				})
			},
			open(){
				// uni.chooseImage({
				//     success: (chooseImageRes) => {
				//         const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		console.log(tempFilePaths);
				//         uni.uploadFile({
				//             url: 'https://myc.jbsage.com/wxpay/upload.php', //仅为示例，非真实的接口地址
				//             filePath: tempFilePaths[0],
				//             name: 'upload_file',
				//             success: (uploadFileRes) => {
				//                 console.log(JSON.parse(uploadFileRes.data));
				//             }
				//         });
				//     }
				// });
				let files = this.$refs.upload.lists;
				console.log(files)  
				let iamge_url = '+'
				files.map(item => {
						// console.log(prev,cur);
							iamge_url += item.response.imageUrl + "+";
						});		
				iamge_url = iamge_url.substr(1, iamge_url.length - 2);
				console.log(iamge_url);
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'提交访客日志',
						userid:this.$userinfo.userid,
						content:this.content || '',
						c_id:this.loglist.c_id,
						image_url:iamge_url || ''
					}
				}).then(res => {
					console.log(res);
					const resdata = res.Msg_info
					console.log(resdata);
					this.$refs.popup.open()
					setTimeout(() => {
						uni.navigateBack({
							
						})
					},1000)
				})  
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		font-size: 18px;
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
		height: 30vh;
		margin: 0 auto;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.footer-btn{
		box-sizing: border-box;
		width: 100%;
		height: calc(100vh - 44px - 160px - 30vh - 144px);
		text-align: center;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 20px;
	}
	.commit {
		/* position: fixed;
		bottom: 2vh;
		left: 30%; */
		width: 40vw;
		height: 30px;
		line-height: 30px;
		border-radius: 30px;
		background-color: #00A200;
		text-align: center;
		color: #FFFFFF;
	}
	.upload{
		box-sizing: border-box;
		/* width: 95vw; */
		padding: 5px 2.5vw;
	}
</style>
