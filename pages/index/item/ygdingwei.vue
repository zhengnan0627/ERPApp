<template>
	<view class="container">
		<uni-nav-bar  left-icon="back"  @clickLeft="back"  title="员工定位" rightIcon="map" @clickRight="right" fixed="true"/>
		<view class="yuangong-box">
			<view class="" style="width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
				<uni-search-bar placeholder="输入要查询的员工信息" @confirm="search" @cancel="cancle"/>
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
		<view class="jilu-container">
			<template v-for="(item,index) in dingweilist">
				<view class="jilu-box":key="index" @click="Todetail(item)">
					<view class="jilubox-content">
						<view class="jilubox-item jilu-kehu">
							<view class="" style="font-size: 18px;">
								{{item.yg_name}}
							</view>
							<view class="" style="color: #b1b1b1;">
								{{item.yg_bm }}
							</view>
						</view>
						<!-- <view class="jilubox-item jilu-kehu">
							
						</view> -->
						<view class="jilubox-item jilu-kehu" style="text-align: right;">
							{{item.phone}}
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
				yg_name:'',
				key:'',
				starttime:'',
				starttimeShow:false,
				endtime:'',
				endtimeShow:false,
				endyear:'',
				dingweilist:[
					// {name:'广东药房',address:'广东省',person:'张三',time:"2020-09-02"}
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
			console.log(this.endyear);
			
			// this.$request({
			// 	data:{
			// 		proc:'APP_YWY_PORT',
			// 		type:'历史定位',
			// 		subtype:'全部',
			// 		yg_id:'',
			// 		// yg_id:'ZIY00000417',
			// 		start_date:this.starttime,
			// 		end_date:this.endtime,
			// 	}
			// }).then(res => {
			// 	const resdata = res.Msg_info
			// 	console.log(resdata);
			// })
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//关联地图方法
			right() {
				if(this.starttime == ''||this.endtime == ''){
					uni.showToast({
						title:'请完善时间信息',
						icon:'none'
					})
					return
				}
				uni.navigateTo({
					url:'ygdingweimap?subtype=全部&starttime='+this.starttime+'&endtime='+this.endtime+"&yginfo={}"
				})
			},
			Todetail(item){
				uni.navigateTo({
					url:'ygdingweimap?subtype=单个&starttime='+this.starttime+'&endtime='+this.endtime+"&yginfo="+JSON.stringify(item)
				})
			},
			//搜索方法
			search(e){ //点击键盘确定
				// console.log(e.value);
				if(this.starttime == ''||this.endtime == ''){
					uni.showToast({
						title:'请完善时间信息',
						icon:'none'
					})
					return
				}
				this.key = e.value
				this.dingweilist = []
				// if(!this.key){
				// 	return
				// }
				this.ygweizhisearch()
			},
			cancle(e){	//点击搜索二字
				// console.log(e.value);
				if(this.starttime == ''||this.endtime == ''){
					uni.showToast({
						title:'请完善时间信息',
						icon:'none'
					})
					return
				}
				this.key = e.value
				this.dingweilist = []
				// if(!this.key){
				// 	return
				// }
				this.ygweizhisearch()
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
			ygweizhisearch(){
				const _this = this
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'员工定位列表',
						key:_this.key,
						start_date:_this.starttime,
						end_date:_this.endtime,
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						uni.showToast({
							title:resdata[0].error,
							icon:'none'
						})
						_this.dingweilist = []
					}else{
						_this.dingweilist = resdata
					}
				})
			},
			
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
		margin-bottom: 2px;
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
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
	}
	.jilubox-content{
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 92vw;
		padding: 5px 10px;
	}
	.jilubox-item{
		flex: 1;
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
