<template>
	<view class="container">
		<uni-nav-bar left-icon="back" title="我的订单"  @clickLeft="back"></uni-nav-bar>
		<sun-tab :value.sync="index" :tabList="tabList" @change="change" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		<!-- <u-tabs :is-scroll="false" :list="tabList" :current="index" @change="change"
				active-color="#55aa00" inactive-color="#000000" :bold="false"  
		/> -->
		<!-- <block v-for="item in 3">
			<view class="content">
				<view class="content-item">
					<view class="item-title">
						<view class="title-num">
							订单编号:123546
						</view>
						<view class="title-time">
							下单时间:2018-12-13
						</view>
					</view>
					<view class="item-list">
						<view class="list">
							联系人:张三
						</view>
						<view class="list">
							订单状态：已完成
						</view>
						<view class="list">
							品规数:5
						</view>
						<view class="list">
							总数量：25
						</view>
						<view class="list">
							支付方式:现付
						</view>
						<view class="list">
							总价格:1000
						</view>
					</view>
				</view>
			</view>
		</block> -->
		
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		components: {
		            sunTab
		        },
		data() {
			return {
				index: 0,
				// tabList: [{"name":"代付款"},{"name":"待发货"},{"name":"待收货"},{"name":"已发货"},],
			
				//普通数据赋值
				tabList:['代付款','待发货','待收货','已发货']
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			change(e){
				// this.index = e;
				console.log(e);
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
	}
	.content-item {
		width: 100vw;
		/* height: 160px; */
		margin-top: 10px;
		
		background-color: #FFFFFF;
	}
	.item-title {
		width: 95vw;
		margin: 0 auto;
		height: 35px;
		line-height: 35px;
		display: flex;
		justify-content: space-between;
	}
	.item-list {
		width: 95vw;
		margin: 0 auto;
		/* height:129px; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list {
		width: 50%;
		height: 35px;
		line-height: 35px;
		text-align:justify;
	}
</style>
