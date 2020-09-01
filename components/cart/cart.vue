<template>
	<view class="container">
		<uni-nav-bar title="通讯录" fixed="true"></uni-nav-bar>
		<!-- <uni-search-bar  radius="90" cancelButton="none" placeholder="请输入名字" /> -->
		<view class="uni-searchbar">
			<view class="uni-searchbar__box" >
				<view class="uni-searchbar__box2" @click="searchClick">
					<uni-icons color="#999999" class="uni-searchbar__box-icon-search" size="18" type="search" />
					<input  v-if="show"  :focus="showSync" :placeholder="placeholder" 
							maxlength=100 :adjust-position="false" @confirm="confirm" 
							@focus="focus" @blur="blur"
							class="uni-searchbar__box-search-input"
							confirm-type="search" type="text" v-model="searchVal"/>
					 
					<text v-else class="uni-searchbar__text-placeholder">{{ placeholder }}</text>
				</view>
				<view v-if="show && searchVal!==''" class="uni-searchbar__box-icon-clear" @click="clear">
					<uni-icons color="#999999" class="" size="24" type="clear" />
				</view>	
			</view>
			<text @click="cancel" class="uni-searchbar__cancel" v-if="show">搜索</text>
		</view>
		<uni-collapse  style="font-size: 30px; border-top: 1px solid #c3c3c3;">
			<block v-for="(item,i) in addresslist">
				<uni-collapse-item :title="item.title+'('+item.list.length+')'" :key="item.id"  class="collapse">
					 <view style="padding: 30rpx;" class="collapse-item" v-for="(list,index) in item.list"> 
						 <view class="item-name">
							{{list.name}}
						 </view>
						 <view class="item-phone" >
							<text style="border-right: 1px solid #000000; padding-right: 5px;">{{list.phone}}&nbsp&nbsp&nbsp</text>
							<uni-icons style="margin-left: 4px;" type="phone" size="23" color="#4CD964"  @click="makePhoneCall"></uni-icons>
						 </view>
					 </view>
				</uni-collapse-item>
			</block>
		</uni-collapse>
		<view class="zhanwei" style="width: 100vw; width: 55px;">
			
		</view>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,uniCollapseItem
		},
		data() {
			return {
				show: false,
				showSync: false,
				searchVal: "",
				Resizecurrent:0,
				placeholder: "请输入名字",
				addresslist:[
					{"id":"1", "title":"G5","open":"true","list":[
						{"name":"廖胜","phone":"15948273975"},
						{"name":"万红见","phone":"15948273975"},
						{"name":"童晓波","phone":"15948273975"}
						]
					},
					{"id":"2","title":"G2Y5T","open":"true","list":[
						{"name":"廖胜","phone":"15948273975"},
						
						]
					},{"id":"3", "title":"G1YS5T","open":"true","list":[
						{"name":"廖胜","phone":"15948273975"},
						{"name":"万红见","phone":"15948273975"},
						{"name":"童晓波","phone":"15948273975"}
						]
					},
					{"id":"4", "title":"G7Y2","open":"true","list":[
						{"name":"廖胜","phone":"15948273975"},
						{"name":"万红见","phone":"15948273975"},
						{"name":"童晓波","phone":"15948273975"}
						]
					},
					{"id":"5", "title":"G1Y4TZ","open":"true","list":[
						{"name":"廖胜","phone":"15948273975"},
						{"name":"万红见","phone":"15948273975"},
						{"name":"童晓波","phone":"15948273975"}
						]
					},
					
				]
			} 
		},
		//监听尺寸显隐底部tabbar
		// onResize:function(){
			
		// 	const _this = this
		// 	if(_this.Resizecurrent==0){
		// 		uni.hideTabBar({
		// 			success: () => {
		// 					_this.Resizecurrent = 1
		// 			}
		// 		})
		// 	}else{
		// 		uni.showTabBar({
		// 			success: () => {
		// 					_this.Resizecurrent = 0
		// 			}
		// 		})
		// 	}
		// },
		methods:{
			//输入框区域点击方法
			searchClick() {
				if (this.show) {
					return
				}
				this.searchVal = ""
				this.show = true;
				this.$nextTick(() => {
					this.showSync = true;
				})
			},
			//x号清除方法
			clear() {
				this.searchVal = ""
				this.show = false
				this.showSync = false
			},
			//点击搜索方法
			cancel() {
				// this.$emit("cancel", {
				// 	value: this.searchVal
				// });
				this.searchVal = ""
				this.show = false
				this.showSync = false
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
			},
			//软键盘点击确定方法
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
			},
			// 聚焦失焦隐藏显示tabbar
			
			focus() {
				
			},
			blur(){
				
			},
			//#ifdef APP-PLUS
			//#endif
			//拨号方法
			makePhoneCall() {
				// console.log("makePhoneCall")
				uni.makePhoneCall({
					phoneNumber: '1345576897',
				
				})
			}
		}
	}
</script>

<style>
	page {
			background-color: #EEEEEE !important;
	}
	.container {
		width: 100vw;
	
		background-color: #FFFFFF;
	}
	
	.uni-searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		padding: 16rpx;
		background-color: #EEEEEE;
	}
	
	.uni-searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: 36px;
		padding: 5px 8px 5px 0px;
		border-width: 0.5px;
		border-style: solid;
		border-color: #c8c7cc;
		border-radius: 90px;
		background-color: #FFFFFF;
	}
	.uni-searchbar__box2 {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: $uni-searchbar-height;
		padding: 5px 8px 5px 0px;
	}
	
	.uni-searchbar__box-icon-search {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 32rpx;
		justify-content: center;
		align-items: center;
		margin-left: 10rpx;
		color: #808080;
	}
	
	.uni-searchbar__box-search-input {
		flex: 1;
		font-size: 28rpx;
		color: #333;
	
	}
	
	.uni-searchbar__box-icon-clear {
		align-items: center;
		line-height: 24px;
		padding-left: 5px;
	}
	
	.uni-searchbar__text-placeholder {
		font-size: 28rpx;
		color: #808080;
		margin-left: 5px;
	}
	
	.uni-searchbar__cancel {
		padding-left: 10px;
		line-height: 36px;
		font-size: 14px;
		color: #333;
	}
	.collapse {
		width: 100vw;
		font-size: 20px;
		background-color: #FFFFFF;
	}
	.collapse-item {
		height: 25px;
		line-height: 25px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}
</style>
