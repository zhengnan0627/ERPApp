<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back" title="选择查询条件"  @clickLeft="back"></uni-nav-bar>
		<view class="tabbar">
			<sun-tab :value.sync="index" :tabList="tabList" bgColor="#ffffff" activeColor="#55aa00"></sun-tab>
		</view>
		<block v-for="item in 4">
			<navigator url="#">
				<view class="select-item">	
					<view class="item-id">
						14123910
					</view>
					<view class="item-name">
						张三
					</view>
				</view>
			</navigator>
		</block>
	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		components: {
		            sunTab
		        },
		data() {
			return {
				index: 0,
				tabList: ['查询对象','业务对象'], //普通数据赋值
			}
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
	page {
		background-color: #EEEEEE;
	}
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	
	}
	.tabbar {
			/* border-bottom: 1px solid #EEEEEE; */
	}
	.select-item {
		height: 40px;
		line-height: 40px;
		margin: 0 10px;
		display: flex;
		border-bottom: 1px solid #EEEEEE;
		justify-content: space-between;
		align-items: center;
	}
</style>
