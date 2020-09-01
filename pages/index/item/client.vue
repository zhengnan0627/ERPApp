<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="客户排行TOP10" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="content">
			<block v-for="item in 10">
				<view class="content-item">
					<view class="item-left">
						{{item}}
					</view>
					<view class="item-middle">
						<view class="mideele-title">
							四川九寨沟天然药业有限责任公司
						</view>
						<view class="mideele-name">
							刘涛
						</view>
					</view>
					<view class="item-right">
						<view class="right-title" style="color: #00AA00;">
							+1
						</view>
						<view class="right-money">
							¥998888
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	
	}
	.content {
		width: 100vw;
		height: 100vh;
	}
	.content-item{
		width: 100vw;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid #EEEEEE;
	}
	.item-left {
		width: 15vw;
		height: 80px;
		line-height: 80px;
		font-size: 22px;
		text-align: center;
	}
	.item-middle {
		width: 70vw;
		height: 80px;
		line-height: 40px;
		font-size: 14px;
	}
	.item-right {
		height: 80px;
		line-height: 40px;
		font-size: 17px;
		text-align: right;
		margin-right: 5px;
	}
</style>
