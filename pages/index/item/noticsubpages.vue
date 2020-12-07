<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="公告内容"  @clickLeft="back"/>
		
	
		<view class="notice">
			<view class="notice-title">
				{{N_title}}
			</view>
			<view class="notice-time">
				<text style="margin-right: 10px;">{{n_date}}</text>
				<text>{{n_author}}</text>
			</view>
		</view>
		<view class="notice-content">
			
				<!-- 富文本解析 -->
				<u-parse :html="content"></u-parse>	
			
		</view>
	</view>	
</template>

<script>
	// import uParse from '../../../components/u-parse/u-parse.vue'
	export default {
		data() {
			return {
				n_id:null,//公告id,上级页面传参数过来
				userid:null,//用户id(从缓存中取)
				N_title:null,//公告标题
				n_author:null,//公告发布人
				n_date:null,//公告发布时间
				content: null,//公告内容(html格式富文本)
			}
		},
		onLoad:function(option){
			// console.log(option);
			this.n_id = JSON.parse(option.n_id)
			this.userid = uni.getStorageSync('userid')
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'公告详情',
					userid:this.$userinfo.userid,
					n_id:this.n_id
				}
			}).then(res => {
				const resdata = res.Msg_info[0]
				// this.noticeList = resdata
				console.log(resdata);
				this.N_title = resdata.N_title
				this.n_author = resdata.n_author
				this.n_date = resdata.n_date
				this.content = resdata.htmlContent
			})
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	
		text-overflow:ellipsis;
		white-space:wrap;
	}
	.notice {
		width: 100vw;
		margin: 5px 0;
		padding-left: 2.5vw;
		background-color: #FFFFFF;
	}
	.notice-title {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}
	.notice-time {
		width: 100vw;
		height: 30px;
		/* line-height: 50px; */
		color: #a7a7a7;
		font-size: 16px;
	}
	.notice-content {
		width: 95vw;
		margin: 0 auto;
		font-size: 17px;
		color: #4b4b4b;
	}
	
</style>
