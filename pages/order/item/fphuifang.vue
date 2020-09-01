<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  @clickLeft="back"  title="发票回访" fixed="true"/>
		<view class="" style="position: fixed; width: 100%;">
			<view class="tabcontrol">
				<view v-for="(item,index) in titles"
						 class="tabcontrolitem"
						 @click="itemclick(index)">
					<view class="tabcontrolitem2" :class="{active:index === currentIndex}">{{item}}</view>
				</view>
			</view>	
		</view>
		<view class="zhanwei" style="height: 84rpx;"/>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//tabbar数据
				titles:['待回访','已回访','已取消'],
				currentIndex:0,
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({				
				})
			},
			//tabbar切换地图标记点方法
			itemclick(index) {
				let _this = this
				//点击切换视图并回到顶部
				if (_this.currentIndex != index) {
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 100
					});
				}
				_this.currentIndex = index				
			},
		}
	}
</script>

<style>
page{
		background: #EEEEEE;
	}
	.container {
		width: 100vw;
		overflow: hidden;
	}	
	.content {
		width: 100vw;
		height: 200px;
		margin-top: 10px;
		background-color: #EEEEEE;
	}
	.tabcontrol{
		display: flex;
		height: 40px;	
		line-height: 40px;
		width: 750rpx;
	    text-align: center;
	    font-size: 13px;
	    background-color: #fff;
	    z-index: 9;
		border-bottom: 2px solid #EEEEEE;
	 }
	.tabcontrolitem{
		flex: 1;
		height: 40px;
		line-height: 40px;			
	}
	.tabcontrolitem2 {
		height: 40px;
		line-height: 40px;	
	}
	.active{
		color: #00aa00;
		height: 34px !important;
		margin-top: 3px;
		line-height: 34px;
		border-bottom-width: 3px ;
		border-bottom-style: solid;
		border-bottom-color: #00aa00;
	}
</style>
