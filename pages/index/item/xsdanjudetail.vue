<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="单据明细"  @clickLeft="back"></uni-nav-bar>
		<view class="" style="position: fixed; top: 44px; left: 0; right: 0;">
			<view class="danjuinfo-box">
				<view class="danjuinfo-item">
					单据编号:<text style="margin-left: 2px; color: #000000;">{{danjuinfo.dj_bh}}</text>
				</view>
				<view class="danjuinfo-item">
					客户名称:<text style="margin-left: 2px; color: #000000;">{{danjuinfo.dw_name}}</text>
				</view>
				<view class="danjuinfo-item danjuinfo-item-flex">
					<view class="danjuinfo-item-flex-item">
						总品种数:<text style="margin-left: 2px; color: #ff0000;">{{total_type_num}}</text>
					</view>
					<view class="danjuinfo-item-flex-item">
						含税总金额:<text style="margin-left: 2px; color: #ff0000;">¥{{tax_total_amount}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="zhanwei" style="width: 100%;background-color: #EEEEEE;" :style="{'height':height+'px'}"/>
		<template v-for="(item,index) in detailList">
			<view class="detail-box" :key="index">
				<view class="detail-box-item">
					商品名称:<text style="margin-left: 2px; color: #000000;">{{item.sp_name}}</text>
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						含税价:<text style="margin-left: 2px; color: #000000;">{{item.price}}</text>
					</view>
					<view class="detailbox-flex-item" style="flex: 1.3;">
						数量:<text style="margin-left: 2px; color: #000000;">{{item.num}}</text>
					</view>	
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						商品编号:<text style="margin-left: 2px; color: #000000;">{{item.sp_bh}}</text>
					</view>
					<view class="detailbox-flex-item"style="flex: 1.3;">
						商品规格:<text style="margin-left: 2px; color: #000000;">{{item.sp_guige}}</text>
					</view>
					
				</view>
				<view class="detail-box-item detail-box-flex">
					<view class="detailbox-flex-item">
						商品批号:<text style="margin-left: 2px; color: #000000;">{{item.sp_ph}}</text>
					</view>
					<view class="detailbox-flex-item"style="flex: 1.3;">
						有效期:<text style="margin-left: 2px; color: #000000;">{{item.sp_expired}}</text>
					</view>
				</view>
				<view class="detail-box-item">
					<view class="detailbox-flex-item">
						生产厂商:<text style="margin-left: 2px; color: #000000;">{{item.sp_factory}}</text>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danjuinfo:{},//单据信息上级页面传进
				height:null,
				total_type_num:'',
				tax_total_amount:'',
				detailList:[],
			}
		},
		onLoad(option) {
			const _this = this
			this.danjuinfo = JSON.parse(option.danjuinfo)
			console.log(this.danjuinfo);
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'单据明细',
					userid:_this.$userinfo.userid,
					role:_this.$userinfo.role,
					dj_bh:_this.danjuinfo.dj_bh,
				}
			}).then(res => {
				const resdata = res.Msg_info
				if(resdata[0].error){
					_this.detailList = []
				}else{
					_this.detailList = resdata
					_this.total_type_num = resdata[0].total_type_num * 1
					_this.tax_total_amount = resdata[0].tax_total_amount * 1
				}
			})
		},
		onReady() {
			let obj = uni.createSelectorQuery().select('.danjuinfo-box')
			obj.boundingClientRect(data => {
					// console.log(data);
					
						this.height = data.height
					
					
			}).exec()
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		background-color: #FFFFFF;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.danjuinfo-box{
		box-sizing: border-box;
		padding: 2px 5px 2px 10px;
		border-bottom: 4px solid #EEEEEE;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	.danjuinfo-item{
		width: 100%;
		padding: 2px 0;
		flex: 1;
	}
	.danjuinfo-item-flex{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.danjuinfo-item-flex-item{
		flex: 1;
	}
	.detail-box{
		box-sizing: border-box;
		width: 100vw;
		padding: 2px 5px 2px 10px;
		border-bottom: 1px solid #EEEEEE;
		font-size: 14px;
		color: #737373;
	}
	.detail-box-item{
		width: 100%;
		padding: 2px 0;
	}
	.detail-box-flex{
		display: flex;
		justify-content: space-between;
	}
	.detailbox-flex-item{
		flex: 1;
	}
</style>
