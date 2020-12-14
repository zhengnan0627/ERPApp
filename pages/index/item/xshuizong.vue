<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="销售汇总查询"  @clickLeft="back"></uni-nav-bar>
		<view class="" style="position: fixed; top: 44px; left: 0; right: 0;">
			<view class="check">
				<view class="check-item">
					<view class="check-content" style="border-right: 2px solid #EEEEEE;">
						<view class="content-title">
							销售额汇总
						</view>
						<view class="content-num">
							¥{{total_je}}
						</view>
					</view>
				</view>
				<view class="check-item">
					<view class="check-content">
						<view class="content-title">
							记录汇总
						</view>
						<view class="content-num">
							{{total_jl}}单
						</view>					
					</view>
				</view>
			</view>
		</view>
		<view class="zhanwei" style="width: 100%; height: 61px;"/>
		<view class="jilu-container">
			<template v-for="(item,index) in jiluList">
				<view class="jilu-box":key="index">
					<view class="jilubox-left" @click="popup(item)">
						<view class="jilubox-left-flex">
							<view class="left-flex-item">
								含税金额:&nbsp&nbsp <text style="font-size: 16px; color: #000000;">{{item.hsh_amount}}</text>
							</view>
							<view class="left-flex-item" style="flex: 1.3;">
								单据编号:&nbsp&nbsp <text style="color: #000000;">{{item.dj_bh}}</text>
							</view>
						</view>
						<view class="jilubox-left-flex">
							<view class="left-flex-item">
								开票员:&nbsp&nbsp <text style="color: #000000;">{{item.kpy_name}}</text>
							</view>
							<view class="left-flex-item" style="flex: 1.3;">
								业务员:&nbsp&nbsp<text style="color: #000000;">{{item.ywy_name}}({{item.ywy_bm}})</text>
							</view>
						</view>
						<view class="jilubox-left-flex">
							<view class="left-flex-item">
								<text style="color: #000000;">{{item.dj_date}}</text>
							</view>
							<view class="left-flex-item" style="flex: 1.3;">
								<text style="color: #000000;">{{item.dw_name}}</text>
							</view>
							
						</view>
					</view>
					<view class="jilubox-right">
						<uni-icons type="arrowright" size="30" @click="Tomingxi(item,index)"></uni-icons>
					</view>
				</view>
			</template>
			<u-empty  text="暂无信息" mode="search"  :show="jiluList.length < 1"
					:marginTop="100"
			></u-empty>
			<u-back-top :scroll-top="scrollTop" :top="1200"></u-back-top>
			<u-loadmore :status="status" v-if="jiluList.length > 5"/>
			
		</view>
		<!-- 弹出层开始 -->
		<u-popup v-model="show" mode="center"  border-radius="14" :mask-close-able="false" width="90%" >
			<view style="padding: 10px 0 0 0;color: #737373;">
				<view class="popup-flex">
					<view class="popup-flex-item">
						含税金额:&nbsp&nbsp <text style="font-size: 19px; color: #000000;">{{popupinfo.hsh_amount}}</text>
					</view>
					<view class="popup-flex-item" style="flex: 1.2;">
						单据编号:&nbsp&nbsp <text style="color: #000000;">{{popupinfo.dw_bh}}</text>
					</view>
				</view>
				<view class="popup-flex">
					<view class="popup-flex-item">
						业务员:&nbsp&nbsp<text style="color: #000000;">{{popupinfo.ywy_name}}({{popupinfo.ywy_bm}})</text>
					</view>
					<view class="popup-flex-item">
						开票员:&nbsp&nbsp<text style="color: #000000;">{{popupinfo.kpy_name}}</text>
					</view>
				</view>
				<view class="popup-flex">
					<view class="popup-flex-item">
						是否药检:&nbsp&nbsp <text style="font-size: 19px; color: #000000;">{{popupinfo.is_yj}}</text>
					</view>
					<view class="popup-flex-item">
						已开发票:&nbsp&nbsp <text style="color: #000000;">{{popupinfo.is_kp}}</text>
					</view>
				</view>
				<view class="popup-flex">
					<view class="popup-flex-item">
						付款方式:&nbsp&nbsp <text style="color: #000000;">{{popupinfo.pay_type}}</text>
					</view>
					<view class="popup-flex-item">
						日期:&nbsp&nbsp <text style="color: #000000;">{{popupinfo.dj_date}}</text>
					</view>
				</view>
				<view class="popup-flex-noflex">
					单位名称:&nbsp&nbsp <text style="margin-left: 2px; color: #000000;">{{popupinfo.dw_name}}</text>
				</view>
				<view class="popup-flex-noflex">
					联系人:&nbsp&nbsp <text style="margin-left: 2px;color: #000000;">{{popupinfo.lxr_phone}}</text>
				</view>
				<view class="popup-flex-noflex">
					备注:&nbsp&nbsp <text style="margin-left: 2px;color: #000000;">{{popupinfo.beizhu}}</text>
				</view>
				<view class="close-box" >
					<text class="close" @click="show = false">关闭</text>
				</view>
			</view>
		</u-popup>
		<!-- 弹出层结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jiluList:[],
				total_je:'',//汇总金额
				total_jl:'',//汇总记录数
				data:{},
				status: 'loadmore',//加载更多组件：加载前值为loadmore，加载中为loading，没有数据为nomore
				pageindex:1,//当前数据分页数
				total_page:null,//总分页数
				key:'',//搜索key
				scrollTop: 0,//页面滚动高度
				show:false,//弹出层控制布尔值
				popupinfo:{},//弹出层信息对象
			}
		},
		onLoad(option) {
			this.data = JSON.parse(option.data)
			console.log(this.data);
			this.jiluList = []
			this.request()				
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
		},
		onReachBottom(){
			if(this.pageindex >= this.total_page){
				this.status = 'nomore'
			}else{
				// console.log('到底了');
				this.status = 'loading';
				this.pageindex += 1;
				this.request()
			}
			
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			request(){
				const _this = this
				this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'销售汇总查询',
						userid:_this.$userinfo.userid,
						role:_this.$userinfo.role,
						start_date:_this.data.start_date,
						end_date:_this.data.end_date,
						dw_name:_this.data.dw_name,
						sp_name:_this.data.sp_name,
						dw_bh:_this.data.dw_bh,
						changshang:_this.data.changshang,
						current_page:_this.pageindex
					}
				}).then(res => {
					const resdata = res.Msg_info
					if(resdata[0].error){
						_this.jiluList = []
					}else{
						_this.jiluList.push(...resdata)
						_this.pageindex = resdata[0].current_page * 1
						_this.total_page = resdata[0].total_page * 1
						_this.total_je = resdata[0].total_je * 1
						_this.total_jl = resdata[0].total_jl * 1
						_this.status = 'loadmore'
					}
				})
			},
			popup(item){
				this.popupinfo = item
				this.show = true
			},
			Tomingxi(item,index){
				uni.navigateTo({
					url:'xsdanjudetail?danjuinfo='+JSON.stringify(item)
				})
			},
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
	.check {
		width: 100vw;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
	}
	.check2 {
		width: 100vw;
		height: 80px;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.check-item {
		width: 49vw;
		height:60px;
		line-height: 34px;
		/* background-color: #0077AA; */
		text-align: center;
	}
	.check-item2{
		width: 33vw;
		height: 60px;
		line-height: 35px;
		text-align: center;
	}
	.check-content {
		height: 60px;
		line-height: 30px;
	}
	.content-num {
		font-size: 18px;
		color: #ff0000;
	}
	.content-title {
		font-size: 16px;
		color: #686868;
	}	
	.jilu-container{
		width: 100vw;
	}
	.jilu-box{
		width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #CCCCCC;
	}
	.jilubox-right{
		height: 100%;
		width: 35px;
		text-align: center;
	}
	.jilubox-left{
		flex: 1;
		box-sizing: border-box;
		padding: 0 0 0 10px;
		font-size: 14px;
		color: #737373;
	}
	.jilubox-left-flex{
		box-sizing: border-box;
		padding: 4px 0;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.left-flex-item{
		flex: 1;
	}
	.left-flex-item text{
		padding-left: 2px;
	}
	.popup-flex{
		box-sizing: border-box;
		padding: 5px 5px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
	}
	.popup-flex-noflex{
		box-sizing: border-box;
		padding: 5px 5px;
		width: 100%;
		font-size: 14px;
	}
	.popup-flex:first-child{
		padding-top: 0;
		
	}
	.popup-flex-item{
		flex: 1;
	}
	.popup-flex-item text{
		width: 100%;
		margin-left: 2px;
	}
	.close-box{
		margin: 0 auto;
		margin-top: 10px;
		padding-bottom: 10px;
		width: 100px;
		height: 20px;
		line-height: 20px;
		text-align: center;
	}
	.close{
		padding: 2px 15px;
		background-color: #00a200;
		border-radius: 5px;
		color: #FFFFFF;
	}
</style>
