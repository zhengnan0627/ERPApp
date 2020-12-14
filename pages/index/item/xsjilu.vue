<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="销售记录查询"  @clickLeft="back"></uni-nav-bar>
		<view class="wrap">
			<u-form-item label-position="left" label="开始时间" prop="region" label-width="200" style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;border-top: 1px solid #EEEEEE;">
				<u-input type="select" :select-open="starttimeShow" v-model="starttime" placeholder="开始时间"  @click="starttimeShow = true"></u-input>
			</u-form-item>
			<u-picker mode="time" v-model="starttimeShow" @confirm="starttimesure" style="z-index: 99;"title="请选择开始时间"></u-picker>
			<u-form-item label-position="left" label="结束时间" prop="region" label-width="200" style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;">
				<u-input type="select" :select-open="endtimeShow" v-model="endtime" placeholder="结束时间"  @click="endtimeShow = true"></u-input>
			</u-form-item>
			<u-picker mode="time" v-model="endtimeShow" @confirm="endtimesure" :end-year="endyear" style="z-index: 99;"title="请选择结束时间"></u-picker>	
			<u-form-item label-position="left" label="单位名称"  label-width="200" placeholder="请输入单位名称" style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;">
				<u-input  type="text" v-model="dw_name" placeholder="请输入单位名称(选填)"></u-input>
			</u-form-item>
			<u-form-item label-position="left" label="商品名称"  label-width="200" placeholder="请输入商品名称"style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;">
				<u-input  type="text" v-model="sp_name" placeholder="请输入商品名称(选填)"></u-input>
			</u-form-item>
			<u-form-item label-position="left" label="单位编号"  label-width="200" placeholder="请输入单位编号"style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;">
				<u-input  type="text" v-model="dw_bianhao" placeholder="请输入单位编号(选填)"></u-input>
			</u-form-item>
			<u-form-item label-position="left" label="生成厂商" label-width="200" placeholder="请输入生成厂商"style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;">
				<u-input  type="text" v-model="factory" placeholder="请输入生成厂商(选填)"></u-input>
			</u-form-item>
			<u-form-item label-position="left" label="查询方式" label-width="200" >
				<u-radio-group v-model="radio" @change="radioGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
					<u-radio shape="circle" v-model="radioList[0].checked" :name="radioList[0].name"style="margin-top: 4px;margin-right: 5px;">
						<text> {{ radioList[0].name }}</text>
					</u-radio>
					<u-radio shape="circle" v-model="radioList[1].checked" :name="radioList[1].name"style="margin-top: 4px;">
						<text> {{ radioList[1].name }}</text>
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<view class="commit" @click="commit">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starttime:'',
				starttimeShow:false,
				endtime:'',
				endtimeShow:false,
				endyear:'',
				dw_name:'',
				sp_name:'',
				dw_bianhao:'',
				factory:'',
				radio: '',
				radioCheckWidth: 'auto',
				radioCheckWrap: false,
				radioList: [
					{
						name: '汇总查询',
						checked: false,
						disabled: false,
						ref:'radio1'
					},
					{
						name: '明细查询',
						checked: false,
						disabled: false,
						ref:'radio2'
					}
				],
				
			}
		},
		onLoad() {
			let datetime = new Date();
			let year = datetime.getFullYear();
			let month = datetime.getMonth()+1;//js从0开始取 
			let day = datetime.getDate();
			if(month<10){
			month = "0" + month;
			}
			if(day<10){
			day = "0" + day;
			}
			this.starttime = year + '-' + month + '-01';
			this.endtime = year + '-' + month + '-'+day;
			this.endyear = datetime.getFullYear()
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			starttimesure(e) {
				console.log(e);
				this.starttime = e.year + '-' + e.month + '-' + e.day;
			},
			endtimesure(e) {
				console.log(e);
				this.endtime = e.year + '-' + e.month + '-' + e.day;
				// this.pageindex = 1
				// this.zqList = []
				// this.request()
			},
			// radio选择发生变化
			radioGroupChange(e) {
				this.radio = e;
				console.log(e);
			},
			commit(){
				if(this.starttime == ''||this.endtime == ''){
					uni.showToast({
						title:'请完善时间信息',
						icon:'none'
					})
					return
				}
				let data = {}
				data.start_date = this.starttime
				data.end_date = this.endtime
				data.dw_name = this.dw_name||''
				data.sp_name = this.sp_name||''
				data.dw_bh = this.dw_bianhao||''
				data.changshang = this.factory||''
				data.sub_type = this.radio||''
				if(this.radio =='汇总查询'){
					uni.navigateTo({
						url:'xshuizong?data='+JSON.stringify(data)
					})
				}else if(this.radio =='明细查询'){
					uni.navigateTo({
						url:'xsmingxi?data='+JSON.stringify(data)
					})
				}else{
					uni.showToast({
						title:'请选择查询方式',
						icon:'none'
					})
					return
				}
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		background-color: #FFFFFF;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.commit{
		margin: 0 auto;
		margin-top:70rpx;
		width: 60vw;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #00a200;
		border-radius: 10px;
		color: #FFFFFF;
	}
</style>
