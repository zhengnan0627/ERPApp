<template>
	<view class="container">
		<uni-nav-bar  left-icon="back"  @clickLeft="back"  title="出库单任务" rightIcon="map" @clickRight="right" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<uni-search-bar placeholder="客户名/客户地址/联系人/联系人电话" @confirm="confirm" @cancel="confirm"/>
			<!-- <view class="tabbar" style="margin-bottom: 10px;">
				<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>			
			</view> -->
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item}}({{stockoutList[index].length}})</view>
				</view>
			</view>	
		</view>
		<view class="zhanwei" style="height: 192rpx;">
			
		</view>
		<block v-for="(item,index) in stockoutList[currentIndex]" >
			<view class="content" :key="index">
				<view class="content-header">
					<view class="header-item item-left" @click="taskdetail(index)">
						公司名称:
					</view>
					<view class="header-item" @click="taskdetail(index)">
						{{item.name}}
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						公司地址:
					</view>
					<view class="header-item  item-site" >
					
						<view class="site" @click="taskdetail(index)">
							{{item.address}}
						</view>
				
						
						<uni-icons type="paperplane" size="30" @click="paperplane"  color="#00aa00"></uni-icons>
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						联系人:
					</view>
					<view class="header-item item-site">
						<view class="" @click="taskdetail(index)">
						{{item.person+' '+item.phone}}
						</view>
						<uni-icons type="phone" size="30"  @click="makePhoneCall" color="#00aa00"></uni-icons>
					</view>
					<view class="header-item item-left" @click="taskdetail(index)">
						单据数:
					</view>
					<view class="header-item" @click="taskdetail(index)">
						{{item.num}}
					</view>
				</view>
				<view class="content-footer" @click="taskdetail(index)">
					<view class="footer-item" >
						<view class="footer-title">
							应收金额
						</view>
						<view class="footer-num" >
							{{item.yingshou}}
						</view>
					</view>
					<view class="footer-item" >
						<view class="footer-title" >
							实收金额
						</view>
						<view class="footer-num">
							{{item.shishou}}
						</view>
					</view>
					<view class="footer-item">
						<view class="footer-title">
							结余金额
						</view>
						<view class="footer-num">
							{{item.jieyu}}
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	 import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		data() {
			return {
				// index: 0,
				// tabList: ['进行中','已完成','已取消'], //普通数据赋值
				//tabbar数据
				titles:['未完成','已完成','已取消'],
				currentIndex:0,
				//出库单列表信息
					//未完成列表
				stockoutList:[
					[
						{"id":"0","name":"清镇市青春大药房","address":"清镇市新店镇街上","person":"周云清","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
						{"id":"1","name":"黄埔区人民药店","address":"黄埔街36号","person":"白琳","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
						{"id":"2","name":"石板社区卫生室","address":"金溪县石板社区七组","person":"柯小佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
						{"id":"3","name":"靖西县中山青松药店","address":"靖西县钟山镇新街","person":"王英德","phone":"112335654332","num":"6","yingshou":"789.75","shishou":"789.75","jieyu":"0"},
						{"id":"4","name":"乌当庆年诊所","address":"贵阳市乌当区东风镇","person":"赵雷","phone":"18339948571","num":"7","yingshou":"21219.75","shishou":"21219.75","jieyu":"0"},	
						{"id":"0","name":"郑东人民大药房","address":"渝北市白沙镇街上","person":"张磊","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
						{"id":"1","name":"五里堡药店","address":"人民路36号","person":"朱超越","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
						{"id":"2","name":"畅合卫生室","address":"梁溪区石板社区七组","person":"易佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
					],
					[
						{"id":"0","name":"郑东人民大药房","address":"渝北市白沙镇街上","person":"张磊","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
						{"id":"1","name":"五里堡药店","address":"人民路36号","person":"朱超越","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
						{"id":"2","name":"畅合卫生室","address":"梁溪区石板社区七组","person":"易佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
						{"id":"0","name":"郑东人民大药房","address":"渝北市白沙镇街上","person":"张磊","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
						{"id":"1","name":"五里堡药店","address":"人民路36号","person":"朱超越","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
						{"id":"2","name":"畅合卫生室","address":"梁溪区石板社区七组","person":"易佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
						{"id":"0","name":"郑东人民大药房","address":"渝北市白沙镇街上","person":"张磊","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
						{"id":"1","name":"五里堡药店","address":"人民路36号","person":"朱超越","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
						{"id":"2","name":"畅合卫生室","address":"梁溪区石板社区七组","person":"易佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
					],
					[
					// 	{"id":"0","name":"清镇市青春大药房","address":"清镇市新店镇街上","person":"周云清","phone":"18339948571","num":"2","yingshou":"229.75","shishou":"229.75","jieyu":"0"},
					// 	{"id":"1","name":"黄埔区人民药店","address":"黄埔街36号","person":"白琳","phone":"18332354371","num":"4","yingshou":"319.75","shishou":"319.75","jieyu":"0"},
					// 	{"id":"2","name":"石板社区卫生室","address":"金溪县石板社区七组","person":"柯小佳","phone":"18312343453","num":"3","yingshou":"349.75","shishou":"349.75","jieyu":"0"},
					// 	{"id":"3","name":"靖西县中山青松药店","address":"靖西县钟山镇新街","person":"王英德","phone":"112335654332","num":"6","yingshou":"789.75","shishou":"789.75","jieyu":"0"},
					// 	{"id":"4","name":"乌当庆年诊所","address":"贵阳市乌当区东风镇","person":"赵雷","phone":"18339948571","num":"7","yingshou":"21219.75","shishou":"21219.75","jieyu":"0"},	
					],
						],
				//公司地址
				address:"清镇市新店镇街上",
				//公司名称
				name:"清镇市青春大药房",
				//视图刷新
				updata:true
			}
		},
		onLoad() {
			let _this = this
			//监听地址更新方法
			uni.$on('addressupdate',function(address){
			        console.log('监听到事件来自 addressupdate ，携带参数 address 为：' + address);
					// this.address = '213213'
					_this.address = address;
					// _this.$data.address = address;
					// this.updata = false;//视图更新
					// this.updata = true;
					// console.log(_this.address);
					// this.$set('this.address','address')
			    })
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			//搜索栏点击确定方法
			confirm(e){
				console.log(e);
			},
			//tabbar切换方法
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
			//页面跳转到taskdetail方法
			taskdetail (index) {
				// this.address = 'asdasdas'
				const currentIndex = this.currentIndex
				const taskdetailList = JSON.stringify(this.stockoutList[currentIndex][index])
				// console.log(taskdetailList);
				// console.log(address2);
				uni.navigateTo({
					url:'taskdetail?taskdetailList='+taskdetailList
					
				})
				
			},		
			
			//关联地图方法
			right() {
				uni.navigateTo({
					url:'/pages/index/item/map'
				})
			},
			paperplane() {
				let _this = this
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					// geocode: true,
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;		
					// 	const address = res.address;
					// console.log('详细地址123：' + address.name);
				        uni.openLocation({
				            latitude: latitude+0.0094,
				            longitude: longitude+0.0084,
							name:"青春大药房",
							address:_this.address,
							
				            success: function (res) {
				                console.log('success');
								 console.log('详细地址：' + res.address);
				            }
				        });
				    }
				});
			},
			//拨号方法
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '1345576897'
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
		height: 100vh;
		background-color: #EEEEEE;
		
	}	
	.content {
		width: 100vw;
		margin-top: 10px;
		background-color: #FFFFFF;
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
	.content-header {
		width: 100vw;
		display: flex;
		font-size: 17px;
		flex-wrap: wrap;
		padding-top: 5px;
		border-bottom: 2px solid #EEEEEE;
	}
	.header-item {
		width: 68vw;
		height: 28px;
		line-height: 28px;
	}
	.item-left {
		width: 25vw !important;
		padding-left: 10px;
	}
	.item-site {
		display: flex;
		width: 68vw;
		justify-content: space-between;
		padding-right: 10px;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.site{
		width: 60vw;
		overflow: hidden;
		white-space: nowrap;
		word-break: keep-all;
		text-overflow:ellipsis;
	}
	.content-footer {
		width: 100vw;
		height: 55px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer-item {
		width: 33vw;
		height: 50px;
		line-height: 25px;
		text-align: center;
		font-size: 17px;
		border-right: 1px solid #EEEEEE;
	}
	.footer-item:last-child {
		border: none;
	}
	.footer-num {
		color: #ff0000;
	}
</style>
