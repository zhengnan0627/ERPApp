<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="商品查询"  @clickLeft="back"></uni-nav-bar>
	<!-- 	<view class="ser">
			<uni-search-bar  placeholder="快速查询商品数据" @confirm="search"/>
		</view> -->
		<view class="icon-container">
			<template v-for="(item,index) in zqList">
				<view class="icon-item" @click="navigator(item,index)">
					<view class="icon-img">
						<image :src="item.hd_image" mode="aspectFit"></image>
					</view>
					<view class="icon-title">
						{{item.hd_title}}
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zqList:[],
			}
		},
		onLoad() {
			this.$request({
				data:{
					proc:'APP_YWY_PORT',
					type:'推荐活动',
					userid:this.$userinfo.userid,
				}
			}).then(res => {
				const resdata = res.Msg_info
				console.log(resdata);
				if(resdata[0].error){
					this.zqList = []
				}else{
					this.zqList =resdata			
				}
				
			})
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			search() {
				
			},
			navigator(item,index) {
				uni.navigateTo({
					url:'goodsitems?id='+index
				})
			},

		}
	}
</script>
	
<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.ser {
		width: 100vw;
		margin-top: 20px;	
	}
	.icon-container {
		width: 100vw;
		/* height: 180px; */
		margin-top: 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: flex-start;
		align-content: flex-start;
		/* background-color: #0077AA; */

	}
	.icon-item {
		width: 25vw;
		/* height: 88px; */
		padding:10px 0;
		text-align: center;
		/* background-color: #FFFFFF; */
	}
	.icon-img {
		width: 40px;
		height: 40px;
		text-align: center;
		margin: 0 auto;
		
	}
	.icon-img image {
		width: 100%;
		height: 100%;
	}
	.icon-title {
		width:100%;
		/* height: 20px; */
		padding: 1px 0;
		font-size: 36rpx;
		color: #818181;
	}

</style>
