<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="企业公告"  @clickLeft="back"/>
		<block v-for="(item,i) in noticeList">	
				<view class="item-container"  @click="noticsubpages(item)"  :key="i">
					<view class="item-title">
						{{item.N_title}}
					</view>
					<view class="item-content">
						<view class="">
							{{item.n_date}}
						</view> 
						<view class="list-item">
							{{item.n_author}}
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
				userid:null,//用户id(从缓存中取)
				noticeList:[
					
				]
			}
		},
		onLoad() {
			this.userid = uni.getStorageSync('userid')
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'公告',
					userid:this.$userinfo.userid 
				}
			}).then(res => {
				const resdata = res.Msg_info
				this.noticeList = resdata
				// console.log(resdata);
			})
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			noticsubpages(item) {
				// console.log(item);
				const n_id = JSON.stringify(item.N_ID)
				uni.navigateTo({
					url:'noticsubpages?n_id='+ n_id
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
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.item-container {
		width: 100vw;
		margin-top: 8px;
		padding-left: 8px;
		background-color: #FFFFFF;
	}
	.item-title {
		width: 100vw;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		font-weight: 500;
	}
	.item-content {
		width: 100vw;
		height: 35px;
		line-height: 35px;
		position: relative;
		display: flex;
		font-size: 16px;
		color: #888888;
	}
	.list-item {
		margin-left: 9px;
	}
</style>
