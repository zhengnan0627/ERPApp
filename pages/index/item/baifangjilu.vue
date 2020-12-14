<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="拜访记录" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="yuangong-box">
			<view class="xuanze">
				<u-form-item label-position="left" label="请选择业务员" prop="region" label-width="240" style="background-color: #FFFFFF;">
					<u-input type="select" :select-open="pickerShow" v-model="yg_name" :placeholder="yg_name || '无'" input-align="right" @click="pickerShow = true"></u-input>
				</u-form-item>
				<u-select mode="single-column" :list="selectList" v-model="pickerShow" value-name="yg_id" label-name="yg_name" title="请选择业务员" @confirm="selectConfirm1"></u-select>
			</view>
			<view class="search">
				<text @click="search">搜索</text>
			</view>
		</view>
		<view class="time-box">
			<view class="timebox-item">
				<u-form-item label-position="left" label="开始时间" prop="region" label-width="140" style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;border-top: 1px solid #EEEEEE;">
					<u-input type="select" :select-open="starttimeShow" v-model="starttime" placeholder="开始时间" input-align="right" @click="starttimeShow = true"></u-input>
				</u-form-item>
				<u-picker mode="time" v-model="starttimeShow" @confirm="starttimesure" style="z-index: 99;"title="请选择开始时间"></u-picker>
			</view>
			<view class="timebox-item">
				<u-form-item label-position="left" label="结束时间" prop="region" label-width="140" style="background-color: #FFFFFF; border-bottom: 1px solid #EEEEEE;border-top: 1px solid #EEEEEE;">
					<u-input type="select" :select-open="endtimeShow" v-model="endtime" placeholder="结束时间" input-align="right" @click="endtimeShow = true"></u-input>
				</u-form-item>
				<u-picker mode="time" v-model="endtimeShow" @confirm="endtimesure" :end-year="endyear" style="z-index: 99;"title="请选择结束时间"></u-picker>
			</view>
		</view>
		<view class="jilu-title" v-if="jilulist.length > 0">
			总拜访次数:{{jilulist.length}},拜访记录如下
		</view>
		<view class="jilu-container">
			<template v-for="(item,index) in jilulist">
				<view class="jilu-box":key="index" @click="Todetail(item)">
					<view class="jilubox-content">
						<view class="jilubox-item jilu-kehu">
							客户:&nbsp{{item.c_name}}
						</view>
						<view class="jilubox-item jilu-address">
							地址:&nbsp{{item.c_address}}
						</view>
						<view class="jilubox-item jilu-preson">
							<view class="">
								拜访对象:&nbsp{{item.c_object}}
							</view>
							<view class="">
								{{item.c_date}}
							</view>
						</view>
					</view>
					<view class="jilubox-arrowright">
						<u-icon name="arrow-right" color="#ff0000" size="42"></u-icon>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickerShow: false,
				selectList: [
					// {
					// 	value: '张三',
					// 	label: '张三'
					// },
				],
				yg_name:'',
				yg_id:'',
				starttime:'',
				starttimeShow:false,
				endtime:'',
				endtimeShow:false,
				endyear:'',
				jilulist:[
					
				],
			}
		},
		onLoad() {
			const _this = this
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
			console.log(this.endyear);
			_this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'业务员列表',
					// userid:_this.$userinfo.userid,
					// c_id:_this.kehuinfo.c_id,
					// role:_this.$userinfo.role,
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
			// 选择员工回调
			selectConfirm1(e) {
				console.log(e);
				this.yg_name = e[0].label;
				this.yg_id = e[0].value;
			},
			starttimesure(e) {
				console.log(e);
				this.starttime = e.year + '-' + e.month + '-' + e.day;
				// this.pageindex = 1
				// this.zqList = []
				// this.request()
			},
			endtimesure(e) {
				console.log(e);
				this.endtime = e.year + '-' + e.month + '-' + e.day;
				// this.pageindex = 1
				// this.zqList = []
				// this.request()
			},
			search(){
				const _this = this
				if(_this.yg_id == ''||_this.starttime == ''||_this.endtime == ''){
					uni.showToast({
						title:'请完善搜索信息',
						icon:'none'
					})
					return
				}
				_this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'拜访历史',
						yg_id:_this.yg_id,
						start_date:_this.starttime,
						end_date:_this.endtime,
						// userid:_this.$userinfo.userid,
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
						_this.jilulist = resdata
					}
				})
			},
			Todetail(item){
				uni.navigateTo({
					url:'baifangjiludetail?kehuinfo='+JSON.stringify(item)+'&name='+this.yg_name+'&imagelist='+item.image_urls
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container{
		width: 100vw;
		height: 100%;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size: 15px;
		/* white-space:nowrap; */
	}
	.yuangong-box{
		box-sizing: border-box;
		width: 100vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
	}
	.xuanze{
		flex: 1;
	}
	.xuanze >>>.u-form-item{
		padding: 10px 10px;
	}
	.search{
		width: 60px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-left: 1px solid #CCCCCC;
	}
	.search text{
		padding: 2px 7px;
		color: #00B800;
		border: 1px solid #CCCCCC;
		border-radius:5px;
	}
	.time-box{
		box-sizing: border-box;
		width: 100vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
	}
	.timebox-item{
		flex: 1;
	}
	.timebox-item:first-child >>>.u-form-item{
		border-right: 1px solid #CCCCCC;
	}
	.timebox-item >>>.u-form-item{
		padding: 10px 10px;
	}
	.jilu-title{
		box-sizing: border-box;
		padding: 4px 10px;
	}
	.jilu-container{
		box-sizing: border-box;
		width: 100vw;
	}
	.jilu-box{
		margin: 4px 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}
	.jilubox-content{
		box-sizing: border-box;
		width: 92vw;
		padding: 2px 10px;
	}
	.jilubox-item{
		width: 100%;
		padding: 6px 0px;
	}
	.jilu-preson{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.jilubox-arrowright{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
		text-align: center;
	}
</style>
