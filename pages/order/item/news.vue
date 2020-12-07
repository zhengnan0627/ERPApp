<template>
	<view class="container">
		<uni-nav-bar  left-icon="back"  @clickLeft="back"  title="消息中心" fixed="true"></uni-nav-bar>
		<view class="news-container" v-for="(item,index) in newsList">
			<view class="" style="height: 20px; line-height: 20px; font-size: 20px;">
				{{item.state}}
			</view>
			<view class="" style="height: 30px;line-height: 30px; font-size: 15px; color: #8a8a8a;">
				{{item.time}}
			</view>
			<view class="news-text" style="">
				您提交了一张新订单{{item.num}},客户:{{item.store}},客户联系人:{{item.person}},联系方式:{{item.phone}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[
					{"state":"待支付","time":"2020-07-13 11:15","num":"159128371","store":"飞蛾村卫生室2","person":"张磊","phone":"13857261991",}
				]
			}
		},
		onLoad() {
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'消息中心',
					userid:this.$userinfo.userid,
				}
			}).then(res => {
				const resdata = res.Msg_info
				// this.noticeList = resdata
				console.log(resdata);
				this.newsList = resdata
			})
		},
		methods: {
			//返回方法
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
		padding-bottom: 50px;
		background-color: #EEEEEE;
		overflow: hidden;
	}
	.news-container {
		width: 91vw;
		padding: 10px 10px;
		margin: 10px auto;
		background-color: #FFFFFF;
		border-radius: 10px;
	}
	.news-text {
		height: 40px;
		line-height:20px; 
		 font-size: 15px; 
		 color: #8a8a8a;
		display: -webkit-box;
		text-overflow:ellipsis; 
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; 	
		overflow: hidden;
	}
</style>
