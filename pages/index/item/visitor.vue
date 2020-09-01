<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="访客计划" size="30" rightIcon="personadd" @clickLeft="back" @clickRight="subpage"></uni-nav-bar>
		<view class="day">
			  <uni-calendar 
			    :insert="true"
			    :lunar="true" 
			    :start-date="'2019-3-2'"
			    :end-date="'2022-5-20'"
			    @change="change"
			    />
		</view>
		<view class="content">
			<view class="scroll-item">
				<view class="scroll-time">
					初次拜访 <text style="float: right;margin-right: 15px; 	color: #ff0000;">18:15</text>
				</view>
				<view class="scroll-title">
					张三<uni-icons type="phone" size="30" @click="makePhoneCall" color="#55aa00" style="float: right;margin-right: 15px;"></uni-icons>
				</view>
				<view class="scroll-store">
					东莞市寮步前方药店
				</view>
				<view class="scroll-person">
					广东省东莞市寮步镇向西村
				</view>
			</view>
			
		</view>
	</view>
	
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		 components: {
		        uniCalendar
		    },
		data() {
			return {
				
			} 
		},
		methods: {
			 change(e) {
			            // console.log(e);
			},
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//拨号方法
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '1345576897'
				})
			},
			//进入新增访客计划页面
			subpage () {
				uni.navigateTo({
					url:'visitorsubpage'
				})
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.day {
		width: 100vw;
		height: 70vh;
		background-color: #FFFFFF;
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
		width: 100vw;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
	
		border-bottom: 1px solid #EEEEEE;
	}
	.scroll-item .scroll-title {
		font-size: 34rpx;
		margin: 3px 0;
		color: #4CD964;
	}
	.scroll-item .scroll-store {
		font-size: 40rpx;
		font-weight: 500;
		margin: 3px ;
		color: #000000;
	}
	.scroll-item .scroll-person {
		font-size: 30rpx;
	}
</style>
