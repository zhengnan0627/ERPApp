<template>
	<view class="container">
		<uni-nav-bar  fixed="true" left-icon="back" @clickLeft="back"  :title="title"></uni-nav-bar>
		<block v-for="item in 4">
			<view class="content-item">
				<view class="item item-time">
					<view class="time-left">
						2017-05-06
					</view>
					<view class="time-right" style="color: #ff0000;">
						20000
					</view>
				</view>
				<view class="item item-time">
					<view class="time-left">
						张三
					</view>
					<view class="time-right">
						15112391203
					</view>
				</view>
				<view class="item item-time">
					河南省郑州市
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//标题根据上级页面传进来的id进行显示
				title:'',
				titlelist:['到期应收','未到期应收','逾期应收'],
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		       console.log(option.id); //打印出上个页面传递的参数。
					var index = option.id;
					this.title = this.titlelist[index];
		},
		methods: {
			back(){
				uni.navigateBack({		   
				})
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #EEEEEE;
	}
	.content-item {
		width: 100vw;
		height: 100px;
		background-color: #FFFFFF;
	}
	.item-time {
		margin: 0 5px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	
</style>
