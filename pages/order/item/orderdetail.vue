<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back" title="订单详情" fixed="true"></uni-nav-bar>
		<view class="header">
			<view class="header-store">
				<view class="">
					{{orderdetail.store}}
				</view>
				<view class="header-state">
					{{orderdetail.state}}
				</view>
			</view>
			<view class="header-name">
				{{orderdetail.person}} {{orderdetail.phone}}
			</view>
			<view class="header-address">
				{{orderdetail.address}}
			</view>
			
		</view>
		<view class="header-title">
			<view class="">
				订单信息
			</view>
			<view class="">
				共6件商品
			</view>
		</view>
		<block v-for="(item,index) in detailList">
			<view class="detailList" :key="index">
				<view class="detailList-name">
					{{item.yp_name}}
				</view>
				<view class="detailList-item">
					厂家:&nbsp{{item.yp_factory}}
				</view>
				<view class="detailList-item">
					规格/单位:&nbsp{{item.yp_guige}}
				</view>
				<view class="detailList-item">
					批准文号:&nbsp{{item.yp_wenhao}}
				</view>
				<view class="detailList-pihao detailList-item">
					<view class="">
						药品批号:&nbsp{{item.yp_pihao}}x{{item.yp_num}}
					</view>
					<view class="" style="color: #ff0000;">
						¥{{item.yp_price}}
					</view>
				</view>
				<view class="detailList-heji">
					<view class="">
						共{{item.yp_hjnum}}盒
					</view>
					<view class="">
						合计:&nbsp&nbsp<text style="color: #ff0000; margin-left: 5px;">¥{{item.yp_hjprice}}</text>
					</view>
				</view>
			</view>
		</block>
		<view class="footer">
			<view class="">
				共6个商品
			</view>
			<view class="">
				合计:&nbsp&nbsp<text style="color: #ff0000; margin-left: 5px;">¥12400</text>
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
					{"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
					{"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
					{"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
					{"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
					{"yp_name":"TA_(麦克抗冲)抗感解毒颗粒","yp_factory":"广西麦克药业有限公司","yp_guige":"10克/袋*12袋","yp_wenhao":"国药准字Z200237194","yp_pihao":"20020803","yp_num":"5","yp_price":"24","yp_hjnum":"5","yp_hjprice":"120"},
				]
			}
		},
		onLoad:function(option){
			this.orderdetail = JSON.parse(option.orderdetail)
			// console.log(this.orderdetail);
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
		width: 100vw;
		padding: 5px 10px;
		background-color: #FFFFFF;
	}
	.header-store {
		width: 92vw;
		height: 40px;
		line-height: 40px;
		font-size: 17px;
		display: flex;
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
	.header-address{
		font-size: 14px;
		color: #5e5e5e;
		height: 20px;
		line-height: 20px;
	}
	.header-title {
		width: 94vw;
		margin: 0 auto;
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
