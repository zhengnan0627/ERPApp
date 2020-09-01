<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="访客任务" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="tabbar">
			<sun-tab :value.sync="index" :tabList="tabList" rangeKey="name"  @change="tabChange" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view>
		<view class="zhanwei" style="height: 44px;">
			
		</view>
		<block v-if="index==0">
			<view v-for="item in tasklist">
				<view class="scroll-item">
						<view class="scroll-time">
							{{item.time}}
							<view class="gotask" @click="gotask(item)">
								前往拜访
							</view>
						</view>
						<view class="scroll-name">
							{{item.name}}<uni-icons type="phone" size="25" color="#3cff06"  @click="makePhoneCall" ></uni-icons>
						</view>
						<view class="scroll-store">
							{{item.store}}
						</view>
						<view class="scroll-person">
							{{item.address}}<uni-icons type="paperplane-filled" @click="paperplane"  size="25" color="#3cff06"></uni-icons>
						</view>
					</view>
				
			</view>
		</block>
		<block v-if="index==1">
			<view v-for="item in 5">
				<view class="scroll-item">
						<view class="scroll-time">
							2019-10-{{item}} 18:15 
							
						</view>
						<view class="scroll-name">
							张三<uni-icons type="phone" size="25" color="#3cff06" ></uni-icons>
						</view>
						<view class="scroll-store">
							东莞市寮步前方药店
						</view>
						<view class="scroll-person">
							广东省东莞市寮步镇向西村<uni-icons type="paperplane-filled" size="25" color="#3cff06"></uni-icons>
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
				index: 0,
				tabList: [{
                        name: '未完成',
                        value: 0
                    },
                    {
                        name: '已完成',
                        value: 1
                    },
				], //普通数据赋值
				tasklist:[
					{'id':'1','time':'2019-08-16','name':'张三','store':'东莞市寮步前方药店','address':'广东省东莞市寮步镇向西村'},
					{'id':'2','time':'2019-09-11','name':'李四','store':'四川九寨沟药业有限公司','address':'四川兴华道振兴街'},
					{'id':'3','time':'2019-11-15','name':'王五','store':'东莞市寮步前方药店','address':'广东省东莞市寮步镇向西村'},
					{'id':'4','time':'2019-12-3','name':'赵六','store':'东莞市寮步前方药店','address':'广东省东莞市寮步镇向西村'},
					{'id':'4','time':'2019-12-16','name':'钱七','store':'东莞市寮步前方药店','address':'广东省东莞市寮步镇向西村'},
				]
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			tabChange(e) {
				console.log(e);
				if (this.index != e.tab.value){
					this.index = e.tab.value
				}
			},
			gotask(item) {
				console.log(item);
				
				const logitem = JSON.stringify(item)
				uni.navigateTo({
					url:'visitorslog?item='+logitem
				})
			},
			//导航方法
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
	.container{
		width: 100vw;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.tabbar {
		width: 100vw;
		position: fixed;
		z-index: 999;
	}
	.scroll-item {
		width: 100vw;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		margin-top: 10px;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #EEEEEE;
	}
	.scroll-time {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95vw;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		color: #ff0000;
		border-bottom: 1px solid #EEEEEE;
	}
	.scroll-item .gotask {
		width: 30vw;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color:#FFFFFF;
		background-color: #4CD964;
		border-radius: 30px;
	}
	.scroll-item .scroll-name {
		display: flex;
		justify-content: space-between;
		width: 95vw;
		height: 30px;
		line-height: 30px;
		font-size: 34rpx;
		margin: 3px 0;
		color: #4CD964;
	}
	.scroll-item .scroll-store {
		width: 95vw;
		height: 30px;
		line-height: 30px;
		font-size: 40rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		margin: 3px 0;
		color: #000000;
	}
	.scroll-item .scroll-person {
		width: 95vw;
		height: 30px;
		line-height: 30px;
		font-size: 34rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		margin: 3px 0;
		color: #000000;
	}
</style>
