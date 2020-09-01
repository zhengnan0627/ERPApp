<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="收藏客户" fixed="true"/>
		<view class="" style="position: fixed; width: 100%; z-index: 99; border-bottom: 1px solid #EEEEEE;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话"/>
		</view>
		<view class="zhanwei" style="height: 104rpx;"/>
		<block v-for="(item,index) in orderList" :key="index">
			<view class="ordercontent">
				<view class="ordercontent-title">
					<view class="" style="font-size: 18px;">
						{{item.store}}
					</view>
				</view>
				<view class="ordercontent-body">
					<view class="body-item">
						编号:{{item.bianhao}}
					</view>
					<view class="body-item">
						联系人:{{item.person}}&nbsp&nbsp&nbsp{{item.phone}}
					</view>
					<view class="body-item">
						地址:{{item.address}}
					</view>
					<view class="body-item" style="color: #ff0000;">
						{{item.state}}
					</view>
					<view class="staricon"  @click="star(item,index)">
						<uni-icons type="star" size="18"  v-if="item.star"></uni-icons>
						<uni-icons type="star-filled" size="18"  v-else color="#ffaa00"></uni-icons>
					</view>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//收藏列表信息
				orderList:[				
						{"id":"0","state":"","star":true, "bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","address":"贵安新区人民路23号","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880"},
						{"id":"1","state":"已过期","star":false,"bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","address":"郑东新区人民路23号","person":"王林","phone":"12343232534","num":"1","money":"204"},
						{"id":"2","state":"","star":false,"bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","address":"绵阳新区东泰康路23号","person":"张磊","phone":"1234654656","num":"5","money":"1234"},
						{"id":"0","state":"","star":false,"bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","address":"贵安新区人民路23号","person":"朱朝阳","phone":"13921486865","num":"2","money":"1880"},
						{"id":"1","state":"已过期","star":true,"bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","address":"贵安新区人民路23号","person":"陈东升","phone":"12343232534","num":"1","money":"204"},
						{"id":"2","state":"","star":false,"bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","address":"贵安新区人民路23号","person":"赵凯","phone":"1234654656","num":"5","money":"1234"},
				],
				//收藏星颜色
				starcolor:''
			}
		},
		methods: {
			//返回方法
			back(){
				uni.navigateBack({				
				})
			},
			//收藏方法
			star(item,index) {
					item.star = !item.star	
				
			}
		}
	}
</script>

<style>
	page{
			background: #EEEEEE;
	}
	.container {
		width: 100vw;
		background-color: #EEEEEE;
		overflow: hidden;
	}	
	.content {
		width: 100vw;
		height: 200px;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.ordercontent {
		margin: 5px 0;
		padding: 10px 10px;
		background-color: #FFFFFF;
		position: relative;
	}
	.body-item {
		margin: 4px 0;
		color: #3f3f3f;
		font-size: 15px;
	}
	.staricon {
		position: absolute;
		right: 13px;
		bottom: 13px;
		width: 21px;
		height: 21px;
		line-height: 17px;
		text-align: center;
		border: 1px solid #EEEEEE;
	}
</style>
