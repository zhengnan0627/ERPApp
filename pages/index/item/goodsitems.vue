<template>
	<view class="content">
		<uni-nav-bar  fixed="true" left-icon="back"  @clickLeft="back"  :title="title"/>
		<view class="template" v-for="item in json" :key="item.id">
			<view class="template-title">
				明目地黄丸
			</view>
			<view class="template-content">
				<view class="content-item">
					<view class="content-style">
						厂名	  {{item.name}}					
					</view>
				</view>
				<view class="content-item">
					<view class="content-style-right">
						规格	  {{item.specification}}片					
					</view>
				</view>
				<view class="content-item">
					<view class="content-style">
						批号	  {{item.index}}					
					</view>
				</view>
				<view class="content-item">
					<view class="content-style-right">
						单位	  {{item.style}}					
					</view>
				</view>
				<view class="content-item">
					<view class="content-style">
						销售额  {{item.price}}				
					</view>
				</view>
				<view class="content-item">
					<view class="content-style-right">
						销售量  {{item.volume}}					
					</view>
				</view>
			</view>
		</view>			
	</view>
</template>

<script>

	export default {
		components:{
	
		},
		data() {
			return {
				//标题根据上级页面传进来的id进行显示
				title:'',
				titlelist:['畅销排行','效期品种','新品速递','滞销查询','所有商品'],
				//json数据用了页面显示
				json: [{"id":"1","name":"上海医药有限公司","specification":"200","index":"12321523","style":"瓶","price":"193.5","volume":"43"},
				{"id":"2","name":"上海医药有限公司","index":"12321523","specification":"200","style":"瓶","price":"193.5","volume":"43"},
				{"id":"3","name":"上海医药有限公司","index":"12321523","specification":"200","style":"瓶","price":"193.5","volume":"43"},
				{"id":"2","name":"上海医药有限公司","index":"12321523","specification":"200","style":"瓶","price":"193.5","volume":"43"},
				{"id":"3","name":"上海医药有限公司","index":"12321523","specification":"200","style":"瓶","price":"193.5","volume":"43"},]
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
	.header {
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		height: 60rpx;
	}
	.icon{
		width: 40rpx !important;
		height: 40rpx !important;
		float: left;
		margin-left: 10rpx;
		
	}
	.icon-img {
		width: 40rpx !important;
		height: 40rpx !important;
		margin-top: 10rpx;
	}
	.header-title {
		font-size: 40rpx;
		text-align: center;
		align-items: center;
	}
	.template-title {
		height: 24px;
		font-size: 36rpx;
		color: #1a1a1b;
		margin-left: 16rpx;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
		
	}
	.template {
		border-top: 16rpx solid #EEEEEE;
	}
	.template .template-content{
	
	width:100% ;
	display: flex;
	flex-wrap:wrap;
	border-top: .5px solid #8F8F94;
	justify-content: space-between;
	font-size: 34rpx;
	}
	.content-item{
	margin-top: 18rpx;
	width: 45%;
	padding-left: 16rpx;
	font-size: 32rpx;
	}
	.content-style-right {
		float: right;
		margin-right: 14rpx;
	}
</style>
