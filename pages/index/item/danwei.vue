<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="单位查询"  @clickLeft="back"></uni-nav-bar>
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
				zqList:[
					{hd_image:'/static/image/xinkai.png',hd_title:'新开客户',sub_type:'新开'},
					{hd_image:'/static/image/xiumian.png',hd_title:'休眠客户',sub_type:'休眠'},					
					{hd_image:'/static/image/xiufu.png',hd_title:'修复客户',sub_type:'修复'},
					{hd_image:'/static/image/jijiangxiumian.png',hd_title:'即将休眠',sub_type:'即将休眠'},
					{hd_image:'/static/image/quanbu.png',hd_title:'全部客户',sub_type:'全部'},	
				],
			}
		},
		onLoad() {
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
					url:'danweiitem?danweiinfo='+JSON.stringify(item)
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
		width: 50px;
		height: 50px;
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
