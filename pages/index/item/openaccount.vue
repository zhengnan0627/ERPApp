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
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}"  label-width="200" :label-position="labelPosition" label="企业名称" prop="name" :required="true">
				<u-input :border="border" placeholder="请输入企业名称" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="客户类型" prop="goodsType" label-width="200">
				<u-input :border="border" type="select" :select-open="selectShow2" v-model="model.goodsType" placeholder="请选择客户类型" @click="selectShow2 = true"></u-input>
			</u-form-item>
			<u-select mode="single-column" :list="selectList2" v-model="selectShow2" title="请选择客户类型" @confirm="selectConfirm"></u-select>
			
			<u-form-item :label-position="labelPosition" label="营业执照号" prop="" label-width="200" placeholder="请输入营业执照号">
				<u-input :border="border" type="number" placeholder="请输入营业执照号"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="身份证号" prop="" label-width="200" placeholder="请输入身份证号">
				<u-input :border="border" type="number" placeholder="请输入身份证号"></u-input>
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
				<u-upload ref="uUpload1" :action="action" :file-list="fileList" :auto-upload="false" width="120" :max-count="1" :custom-btn="true"   >
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="委托书" prop="photo" label-width="550">
				<u-upload width="120" :max-count="1" :custom-btn="true">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="GSP证书" prop="photo" label-width="550">
				<u-upload width="120" :max-count="1" :custom-btn="true">
					<view class="" slot="addBtn">
						<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
							<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
						</view>
					</view>
				</u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="身份证" prop="photo" label-width="550">
				<u-upload width="120" :max-count="1" :custom-btn="true">
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
					<u-radio shape="circle" v-model="item.checked" v-for="(item, index) in radioList" :key="index" :name="item.name">
						<view class="" style="width: 636rpx; display: flex;justify-content: space-between; align-items: center;" >
							<text> {{ item.name }}</text>
							<u-upload :ref="item.ref" width="120" :max-count="1" :custom-btn="true">
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
				<u-upload width="120" :max-count="4" :custom-btn="true" >
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
		
		
		
	</view>	
	</view>
</template>

<script>
export default {
	data() {
		let that = this;
		return {
			fileList:[{},{}],//(数组，元素为对象),显示预置的图片。其中元素的url属性为图片路径
			action:'https://mpshopapi.timeschip.com/api/Upload/Uploadfile',//上传图片服务器地址
			model: {
				qyType:'',
				name: '',
				person:'',
				sex: '',
				likeFruit: '',
				intro: '',
				payType: '支付宝',
				region: '',
				goodsType: '',
				phone: '',
				code: '',
		
			
				
				photo: ''
			},
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
			rules: {
				qyType:[
					{
						required: false,
						message: '请选择企业类型',
						trigger: 'blur',
					}
				],	
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
				payType: [
					{
						required: true,
						message: '请选择任意一种证件',
						trigger: 'blur',
					}
				],
				region: [
					{
						required: false,
						message: '请选择地区',
						trigger: 'change',
					}
				],
				goodsType: [
					{
						required: false,
						message: '请选择企业类型',
						trigger: 'change',
					}
				],
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
			actionSheetList: [
				
			],
			actionSheetShow: false,
			pickerShow: false,
			selectShow: false,
			selectShow2: false,
			radioCheckWidth: 'auto',
			radioCheckWrap: true,
			labelPosition: 'left',
			codeTips: '',
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
			this.$refs.uUpload1.upload();
			let files = this.$refs.uUpload1.lists;
			console.log(files)
			this.$refs.uForm.validate(valid => {
				
				if (valid) {
					
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
		// 点击actionSheet回调
		actionSheetCallback(index) {
			uni.hideKeyboard();
			this.model.sex = this.actionSheetList[index].text;
		},
		// radio选择发生变化
		radioGroupChange(e) {
			this.model.payType = e;
		},
		// 选择地区回调
		regionConfirm(e) {
			this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
		},
		// 选择商品类型回调
		selectConfirm1(e) {
			this.model.qyType = '';
			e.map((val, index) => {
				this.model.qyType += this.model.qyType == '' ? val.label : '-' + val.label;
			})
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
