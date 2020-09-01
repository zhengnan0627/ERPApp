<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="APP订单列表" rightIcon="more-filled" @clickRight="right" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话"/>
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item}}({{orderList[index].length}})</view>
				</view>
			</view>	
		</view>
		<view class="zhanwei" style="height: 192rpx;"/>
		<block v-for="(item,index) in orderList[currentIndex]" >
			<view class="ordercontent" :key="index" @click="Todetail(item,index)">
				<view class="ordercontent-title">
					<view class="">
						{{item.bianhao}}
					</view>
					<view class="">
						{{item.time}}
					</view>
					<view class="" style="padding:0 4px; text-align: center; border-radius: 4px; background-color: #00A200; color: #FFFFFF;">
						<view class="">
							{{item.state}}
						</view>
					</view>
				</view>
				<view class="ordercontent-body">
					<view class="body-item">
						{{item.store}}
					</view>
					<view class="body-item">
						联系人:{{item.person}}&nbsp&nbsp&nbsp{{item.phone}}
					</view>
				</view>
				<view class="ordercontent-footer">
					<view class="">
						共{{item.num}}个商品
					</view>
					<view class="">
						实付:<text style="margin-left: 3px; color: #ff0000;">¥{{item.money}}</text>
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
				//tabbar数据
				titles:['待审核','已审核','拒绝审核','撤销'],
				currentIndex:0,
				orderList:[
					[
						{"id":"0","state":"待审核","bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880","address":"镇西县大元村"},
						{"id":"1","state":"待审核","bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","person":"陈玉萍","phone":"12343232534","num":"1","money":"204","address":"郑东新区人民路23号"},
						{"id":"2","state":"待审核","bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","person":"陈玉萍","phone":"1234654656","num":"5","money":"1234","address":"东莞市步行街"},
					],
					[
						{"id":"0","state":"已审核","bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880","address":"医学院东100米"},
						{"id":"1","state":"已审核","bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","person":"陈玉萍","phone":"12343232534","num":"1","money":"204","address":"中心街59号"},
						{"id":"2","state":"已审核","bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","person":"陈玉萍","phone":"1234654656","num":"5","money":"1234","address":"唐山市保乐区正光街"},
						{"id":"0","state":"已审核","bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880","address":"镇西县大元村"},
						{"id":"1","state":"已审核","bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","person":"陈玉萍","phone":"12343232534","num":"1","money":"204","address":"镇西县大元村"},
						{"id":"2","state":"已审核","bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","person":"陈玉萍","phone":"1234654656","num":"5","money":"1234","address":"镇西县大元村"},
					],
					[
						{"id":"0","state":"拒绝审核","bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880","address":"镇西县大元村"},
						{"id":"1","state":"拒绝审核","bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","person":"陈玉萍","phone":"12343232534","num":"1","money":"204","address":"镇西县大元村"},
						{"id":"2","state":"拒绝审核","bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","person":"陈玉萍","phone":"1234654656","num":"5","money":"1234","address":"镇西县大元村"},
					],
					[
						{"id":"0","state":"撤销","bianhao":"1594837261","time":"2020-04-16","store":"贵安新区安康药店","person":"陈玉萍","phone":"13921486865","num":"2","money":"1880","address":"镇西县大元村"},
						{"id":"1","state":"撤销","bianhao":"1553466322","time":"2020-07-11","store":"郑东新区人民药店","person":"陈玉萍","phone":"12343232534","num":"1","money":"204","address":"镇西县大元村"},
						{"id":"2","state":"撤销","bianhao":"1356878565","time":"2020-01-07","store":"绵阳新区东泰康路人民大药店","person":"陈玉萍","phone":"1234654656","num":"5","money":"1234","address":"镇西县大元村"},
					],
				]
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({				
				})
			},
			//navbar右侧按钮方法
			right(){
				
			},
			//tabbar切换地图标记点方法
			itemclick(index) {
				let _this = this
				//点击切换视图并回到顶部
				if (_this.currentIndex != index) {
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 100
					});
				}
				_this.currentIndex = index				
			},
			//点击列表跳转订单详情方法
			Todetail(item,index){
				uni.navigateTo({
					url:'orderdetail?orderdetail='+JSON.stringify(item)
				})
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
		overflow: hidden;
	}	
	.content {
		width: 100vw;
		height: 200px;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.tabcontrol{
		display: flex;
		height: 40px;	
		line-height: 40px;
		width: 750rpx;
	    text-align: center;
	    font-size: 13px;
	    background-color: #fff;
	    z-index: 9;
		border-bottom: 2px solid #EEEEEE;
	 }
	.tabcontrolitem{
		width: 250rpx;
		height: 40px;
		line-height: 40px;			
	}
	.tabcontrolitem2 {
		height: 40px;
		line-height: 40px;	
	}
	.active{
		color: #00aa00;
		height: 34px !important;
		margin-top: 3px;
		line-height: 34px;
		border-bottom-width: 3px ;
		border-bottom-style: solid;
		border-bottom-color: #00aa00;
	}
	.ordercontent {
		margin: 5px 0;
		padding: 10px 10px;
		background-color: #FFFFFF;
	}
	.ordercontent-title {
		width: 100%;
		height: 24px;
		line-height: 24px;
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		color: #9e9e9e;
	}
	.ordercontent-body {
		width: 100%;
	
		padding: 5px 0;
		display: flex;
		flex-direction: column;
		/* background-color: #c6c6c6; */
	}
	.ordercontent-body .body-item {
		flex: 1;
		margin: 3px 0;
		font-size: 17px;
	}
	.ordercontent-footer {
		width: 100%;
		height: 20px;
		line-height: 20px;
		display: flex;
		justify-content: space-between;
		font-size: 17px;
	}
</style>
