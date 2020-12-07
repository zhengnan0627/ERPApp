<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="客户开户"  @clickLeft="back">
			<view class="" slot="right">
				<text class="jindu" @click="openjindu">申请进度</text>
			</view>
		</uni-nav-bar>
		<view class="wrap">	
		
		
		
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item :label-position="labelPosition" label="企业类型" prop="qyType" label-width="200">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.qyType" placeholder="请选择企业类型" @click="selectShow = true"></u-input>
			</u-form-item>
			<u-select mode="single-column" :list="selectList" v-model="selectShow" title="请选择企业类型" @confirm="selectConfirm1"></u-select>
			<u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="200">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
			<u-form-item :label-position="labelPosition" label="企业名称" prop="name" :required="true" :leftIconStyle="{color: '#888', fontSize: '32rpx'}"  label-width="200" >
				<u-input :border="border" placeholder="请输入企业名称" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="客户类型" prop="goodsType" label-width="200">
				<u-input :border="border" type="select" :select-open="selectShow2" v-model="model.goodsType" placeholder="请选择客户类型" @click="selectShow2 = true"></u-input>
			</u-form-item>
			<u-select mode="single-column" :list="selectList2" v-model="selectShow2" title="请选择客户类型" @confirm="selectConfirm"></u-select>	
			<u-form-item :label-position="labelPosition" label="营业执照号" prop="yingyebianhao" label-width="200" placeholder="请输入营业执照号">
				<u-input :border="border" type="number" v-model="model.yingyebianhao" placeholder="请输入营业执照号"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="身份证号" prop="shenfenzheng" label-width="200" placeholder="请输入身份证号">
				<u-input :border="border" type="number" v-model="model.shenfenzheng" placeholder="请输入身份证号"></u-input>
			</u-form-item>
			<u-form-item label-width="200" :label-position="labelPosition" label="联系人" prop="person" :required="true">
				<u-input :border="border" placeholder="请输入联系人联系人姓名" v-model="model.person" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="联系人电话" prop="phone" label-width="200" :required="true">
				<u-input :border="border" placeholder="请输入联系人电话" v-model="model.phone" type="number"></u-input>
			</u-form-item>
			<view class="" style="width: 100vw; height: 30px; line-height: 30px;padding-left: 10px;  background-color: #EEEEEE; font-size: 16px;">
				常规证照
			</view>
			<u-form-item :label-position="labelPosition" label="营业执照" prop="photo" label-width="550">
				<u-upload ref="uUpload1" :action="action" :file-list="fileList" :auto-upload="true" name="upload_file" width="120" :max-count="1" :custom-btn="true">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="委托书" prop="photo" label-width="550">
				<u-upload ref="uUpload2" :action="action" name="upload_file" width="120" :max-count="1" :custom-btn="true" >
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="GSP证书" prop="photo" label-width="550">
				<u-upload ref="uUpload3" :action="action" width="120" :max-count="1" :custom-btn="true" name="upload_file">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="身份证" prop="photo" label-width="550">
				<u-upload ref="uUpload4" :action="action" width="120" :max-count="1" :custom-btn="true" name="upload_file">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<view class="" style="width: 100vw; height: 30px; line-height: 30px;padding-left: 10px;  background-color: #EEEEEE; font-size: 16px;">
				特殊证照<text style="color: #fa3534;">*</text>
			</view>
			<u-form-item :label-position="labelPosition"  prop="payType" >
				<u-radio-group v-model="radio" @change="radioGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
					<u-radio shape="circle" v-model="radioList[0].checked" :name="radioList[0].name">
						<view class="" style="width: 636rpx; display: flex;justify-content: space-between; align-items: center;" >
							<text> {{ radioList[0].name }}</text>
							<u-upload  ref="radio1" :action="action" width="120" :max-count="1" :custom-btn="true" :disabled="radioList[0].checked" name="upload_file">
								<view class="" slot="addBtn">
									<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
										<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
									</view>
								</view>
							</u-upload>
						</view>
					</u-radio>
					<u-radio shape="circle" v-model="radioList[1].checked" :name="radioList[1].name">
						<view class="" style="width: 636rpx; display: flex;justify-content: space-between; align-items: center;" >
							<text> {{ radioList[1].name }}</text>
							<u-upload  ref="radio2" :action="action" width="120" :max-count="1" :custom-btn="true" :disabled="radioList[1].checked" name="upload_file">
								<view class="" slot="addBtn">
									<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
										<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
									</view>
								</view>
							</u-upload>
						</view>
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<view class="" style="width: 100vw; height: 30px; line-height: 30px;padding-left: 10px;  background-color: #EEEEEE; font-size: 16px;">
				其他证照
			</view>
			<u-form-item style="display: flex;">
				<u-upload ref="uUpload5" :action="action" width="120" :show-progress="false" :max-count="4" :custom-btn="true" name="upload_file">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			
			<u-form-item :label-position="labelPosition" label="备注" prop="intro" >
				<u-input type="textarea" :border="border" placeholder="请填写备注信息" v-model="model.intro" />
			</u-form-item>
			
		</u-form>
		<u-button @click="submit" style="margin:10px;">提交</u-button>
		<uni-popup ref="popup" type="center">
		    <uni-popup-message type="success" message="提交成功" :duration="1500"></uni-popup-message>
		</uni-popup>
		
		
	</view>	
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
		let that = this;
		return {
			fileList:[],//(数组，元素为对象),显示预置的图片。其中元素的url属性为图片路径
			action: 'https://www.tsdjyy.com/wxpay/upload.php',//图片上传配置地址
			model: {
				qyType:'',//企业类型
				name: '',//企业名称
				region: '',//所在地区
				goodsType: '',//客户类型
				yingyebianhao:'',//营业执照号
				shenfenzheng:'',//身份证号
				person:'',//联系人
				phone: '',//联系人电话
				payType: '',//单选按钮
				intro: '',//备注信息
				photo: '',//上传图片
				// sex: '',
				// likeFruit: '',
			},
			//-----------------------选择企业类型数据项----------------
			selectList: [
				{
					value: '诊所',
					label: '诊所'
				},
				{
					value: '药店',
					label: '药店'
				},
				{
					value: '药业公司',
					label: '药业公司'
				},
				{
					value: '卫生室',
					label: '卫生室'
				},
				{
					value: '其他',
					label: '其他'
				}
			],
			//-----------------------选择客户类型数据项----------------
			selectList2: [
				{
					value: '诊所',
					label: '诊所'
				},
				{
					value: '药店',
					label: '药店'
				},
				{
					value: '药业公司',
					label: '药业公司'
				},
				{
					value: '卫生室',
					label: '卫生室'
				},
				{
					value: '其他',
					label: '其他'
				}
			],
			//-----------------------表单验证数据项----------------
			rules: {
				//企业类型
				qyType:[
					{
						required: false,
						message: '请选择企业类型',
						trigger: 'blur',
					}
				],	
				//企业名称
				name: [
					{
						required: true,
						message: '请输入企业名称',
						trigger: 'blur' ,
					},
					// {
					// 	min: 2,
					// 	max: 15,
					// 	message: '名称长度在3到5个字符',
					// 	trigger: ['change','blur'],
					// },
					// {
					// 	// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
					// 	validator: (rule, value, callback) => {
					// 		// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
					// 		return this.$u.test.chinese(value);
					// 	},
					// 	message: '名称必须为中文',
					// 	// 触发器可以同时用blur和change，二者之间用英文逗号隔开
					// 	trigger: ['change','blur'],
					// },
					// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
					// {
					// 	trigger: ['blur'],
					// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
					// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
					// 	asyncValidator: (rule, value, callback) => {
					// 		this.$u.post('/ebapi/public_api/index').then(res => {
					// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
					// 			if(res.error) {
					// 				callback(new Error('姓名重复'));
					// 			} else {
					// 				// 如果没有错误，也要执行callback()回调
					// 				callback();
					// 			}
					// 		})
					// 	},
					// }
				],
				//备注项
				intro: [
					{
						required: false,
						message: '请填写简介'
					},
					
					// // 正则校验示例，此处用正则校验是否中文，此处仅为示例，因为uView有this.$u.test.chinese可以判断是否中文
					// {
					// 	pattern: /^[\u4e00-\u9fa5]+$/gi,
					// 	message: '简介只能为中文',
					// 	trigger: 'change',
					// },
				],
				//单选按钮
				payType: [
					{
						required: true,
						message: '请选择任意一种证件',
						trigger: 'blur',
					}
				],
				//选择地区
				region: [
					{
						required: false,
						message: '请选择地区',
						trigger: 'change',
					}
				],
				//客户类型
				goodsType: [
					{
						required: false,
						message: '请选择客户类型',
						trigger: 'change',
					}
				],
				//营业执照号
				yingyebianhao: [
					{
						required: false,
						message: '请输入营业执照号',
						trigger: 'blur' ,
					},
				],
				//身份证号
				shenfenzheng: [
					{
						required: false,
						message: '请输入身份证号',
						trigger: 'blur' ,
					},
				],
				//联系人
				person:[
					{
						required: true,
						message: '请输入联系人',
						trigger: 'blur',
					},
					{
						pattern: /^[\u4e00-\u9fa5]+$/gi,
						message: '联系人必须为中文',
						trigger: ['change','blur'],
					},
				],
				//联系人电话
				phone: [
					{
						required: true,
						message: '请输入联系人电话',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: 'blur',
					}
				],				
			},
			border: false,
			check: false,
			selectStatus: 'close',
			radioList: [
				{
					name: '药品经营许可证',
					checked: false,
					disabled: false,
					ref:'radio1'
				},
				{
					name: '医疗机构经营许可证',
					checked: false,
					disabled: false,
					ref:'radio2'
				}
			],
			radio: '',
			// actionSheetList: [
				
			// ],
			actionSheetShow: false,
			pickerShow: false,
			selectShow: false,
			selectShow2: false,
			radioCheckWidth: 'auto',
			radioCheckWrap: true,
			labelPosition: 'left',
			errorType: ['message'],
		};
	},
	onLoad() {

	},
	computed: {
		borderCurrent() {
			return this.border ? 0 : 1;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		//返回上级页面方法
		back(){
			uni.navigateBack({
				
			})
		},
		//进入申请进度页面
		openjindu(){
			uni.navigateTo({
				url:"openaccountjindu"
			})
		},
		//点击提交按钮方法
		submit() {
			const _this = this
			// this.$refs.uUpload1.upload();
			let files1 = _this.$refs.uUpload1.lists;
			let files2 = _this.$refs.uUpload2.lists;
			let files3 = _this.$refs.uUpload3.lists;
			let files4 = _this.$refs.uUpload4.lists;
			let files5 = _this.$refs.uUpload5.lists;
			let files6 = _this.$refs.radio1.lists;
			let files7 = _this.$refs.radio2.lists;
			console.log(files1)
			console.log(files2)
			console.log(files3)
			console.log(files4)
			console.log(files5)
			console.log(files6)
			console.log(files7)
			_this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
					let iamge_url = '+'
					files5.map(item => {
							// console.log(prev,cur);
								iamge_url += item.response.imageUrl + "+";
							});		
					iamge_url = iamge_url.substr(1, iamge_url.length - 2);
					console.log(iamge_url);
					_this.$request({
						data:{
							proc:'APP_YWY_PORT',
							type:'客户开户',
							userid:_this.$userinfo.userid,
							c_address:_this.model.region || '',
							c_name:_this.model.name,
							contact:_this.model.person,
							phone:_this.model.phone,
							company_type:_this.model.goodsType ,
							yyzh_bianhao:_this.model.yingyebianhao,
							shfzh_bianhao:_this.model.shenfenzheng,
							yyzz_url:files1.length > 0 ? files1[0].response.imageUrl : '',
							weituoshu_url:files2.length > 0  ? files2[0].response.imageUrl : '',
							gsp_url:files3.length > 0 ? files3[0].response.imageUrl : '',
							shfzh_url:files4.length > 0 ? files4[0].response.imageUrl : '',
							jyxk_url:files6.length > 0 ? files6[0].response.imageUrl : '',
							yljgjyxk_url:files7.length > 0 ? files7[0].response.imageUrl : '',
							other_url:iamge_url,
							beizhu:_this.model.intro,
						}
					}).then(res => {
						console.log(res);
						const resdata = res.Msg_info
						console.log(resdata);
						if(resdata[0].note){
							_this.$refs.popup.open()
							setTimeout(() => {
								uni.navigateBack({
									
								})
							},1500)
						}else{
							uni.showToast({
								title:resdata[0].error,
								icon:'none'
							})
						}
						
					})				  
				} else {
					uni.showToast({
						title:'请完善开户信息',
						icon:'none'
					})
					console.log('验证失败');
				}
			});
		},
		// 点击actionSheet回调
		// actionSheetCallback(index) {
		// 	uni.hideKeyboard();
		// 	this.model.sex = this.actionSheetList[index].text;
		// },
		// radio选择发生变化
		radioGroupChange(e) {
			this.model.payType = e;
		},
		// 选择地区回调
		regionConfirm(e) {
			this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			console.log(e);
		},
		// 选择商品类型回调
		selectConfirm1(e) {
			this.model.qyType = '';
			e.map((val, index) => {
				this.model.qyType += this.model.qyType == '' ? val.label : '-' + val.label;
			})
			console.log(this.model.qyType);
		},
		selectConfirm(e) {
			this.model.goodsType = '';
			e.map((val, index) => {
				this.model.goodsType += this.model.goodsType == '' ? val.label : '-' + val.label;
			})
		},
	}
};
</script>

<style scoped lang="scss">
	@import "../../../uview-ui/index.scss";

	.container {
		width: 100vw;
		
		background-color: #FFFFFF;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.jindu {
		padding: 4px 8px;
		color: #00B800;
		font-size: 12px;
		border: 1px solid #000000;
		border-radius: 30rpx;
	}
	.wrap {
		// padding: 0 30rpx;
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
</style>
