<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back" title="订单详情" fixed="true"></uni-nav-bar>
		<view class="header">
			<view class="header-store">
				<view class="">
					{{orderdetail.c_company_name}}
				</view>
				<view class="header-state">
					{{orderdetail.order_status}}
				</view>
			</view>
			<view class="header-name">
				{{orderdetail.c_contact}} {{orderdetail.c_phone}}
			</view>
			<view class="header-address">
				{{orderdetail.c_address}}
			</view>
			<view class="header-fapiao">
				发票:&nbsp{{orderdetail.fp_type?orderdetail.fp_type:'无'}}
			</view>
			<view class="header-fapiao">
				订单备注:&nbsp{{orderdetail.remark}}
			</view>
		</view>
		<view class="zhanwei" style="height: 130px;">
			
		</view>
		<view class="header-title">
			<view class="">
				订单信息
			</view>
			<view class="">
				共{{g_number | getPrice}}件商品
			</view>
		</view>
		<block v-for="(item,index) in detailList">
			<view class="detailList" :key="index">
				<view class="detailList-name">
					{{item.g_name}}
				</view>
				<view class="detailList-item">
					厂家:&nbsp{{item.g_factory}}
				</view>
				<view class="detailList-item">
					规格/单位:&nbsp{{item.g_property}}/{{item.g_unit}}
				</view>
				<view class="detailList-item">
					批准文号:&nbsp{{item.g_wenhao}}
				</view>
				<view class="detailList-pihao detailList-item">
					<view class="">
						药品批号:&nbsp{{item.g_pihao}}x{{item.g_number}}
					</view>
					<view class="" style="color: #ff0000;">
						¥{{item.g_price}}
					</view>
				</view>
				<view class="detailList-heji">
					<view class="">
						共{{item.g_number}}盒
					</view>
					<view class="">
						合计:&nbsp&nbsp<text style="color: #ff0000; margin-left: 5px;">¥{{+item.g_number * +item.g_price | getPrice}}</text>
					</view>
				</view>
			</view>
		</block>
		<view class="footer">
			<view class="">
				共{{g_number | getPrice}}件商品
			</view>
			<view class="">
				合计:&nbsp&nbsp<text style="color: #ff0000; margin-left: 5px;">¥{{totalPrice | getPrice}}</text>
			</view>
		</view>
		<view class="zhanwei" style="width: 100vw; height: 50px;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderdetail:{},
				detailList:[
					// {"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
				],
				totalPrice:0,//总价格
				g_number:0,//总购买数量
			}
		},
		onLoad:function(option){
			this.orderdetail = JSON.parse(option.orderdetail)
			console.log(this.orderdetail);
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'订单商品详情',
					order_id:this.orderdetail.order_id,
				}
			}).then(res => {
				const resdata = res.Msg_info
				// this.noticeList = resdata
				// console.log(resdata);
				if(resdata[0].error){
					this.detailList = []
				}else{
					this.detailList = resdata
					let g_number = 0;
					let totalPrice = 0;
					console.log(this.detailList);
					this.detailList.map((item) => {		
						console.log(item.g_number,   item.g_price );
						g_number += item.g_number * 1;
						totalPrice += +item.g_price * 1 * +item.g_number* 1;	
					})
					this.g_number = g_number;
					this.totalPrice = totalPrice;
				}
				
			})
		},
		onShow() {
			
		},
		//添加过滤器用于计算总价格保留两位小数
		filters: {
			getPrice(price) {
				price = price || 0;
				return price.toFixed(2)
			}
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
	page {
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		overflow: hidden;
	}
	.header {
		position: fixed;
		width: 100vw;
		padding: 5px 10px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
	}
	.header-store {
		width: 92vw;
		height: 40px;
		/* line-height: 40px; */
		font-size: 17px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header-state {
		margin: auto 0;
		padding: 3px 5px;
		font-size: 14px;
		height: 17px;
		line-height: 17px;
		border-radius: 4px;
		background-color: #00A200;
		color: #FFFFFF;
	}
	.header-name,
	.header-address,
	.header-fapiao{
		font-size: 14px;
		color: #5e5e5e;
		height: 20px;
		line-height: 20px;
	}
	.header-title {
		box-sizing: border-box;
		width: 100vw;
		padding: 0 3vw;
		height: 35px;
		line-height: 35px;
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		background-color: #EEEEEE;
	}
	.detailList {
		margin-bottom: 10px;
		width: 100vw;
		padding: 5px 10px;
		
		background-color: #FFFFFF;
	}
	.detailList-item {
		font-size: 15px;
		color: #5e5e5e;
	}
	.detailList-name {
		height: 30px;
		line-height: 30px;
		font-size: 16px;
	}
	.detailList-pihao {
		width: 94vw;
		display: flex;
		justify-content: space-between;
	}
	.detailList-heji {
		width: 94vw;
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		border-top: 1px solid #EEEEEE;
	}
	.footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 50px;
		line-height: 25px;
		padding: 0 10px;
		font-size: 15px;
		border-top: 1px solid #EEEEEE;
		background-color: #FFFFFF;
	}
</style>
