<template>
	<view>
		<uni-nav-bar fixed="true" left-icon="back"  title="申请进度"  @clickLeft="back"/>
		<sun-tab :value.sync="index" :tabList="tabList" rangeKey="name"  @change="tabChange" bgColor="#ffffff" activeColor="#55aa00" style="border-bottom: 1px solid #EEEEEE;"></sun-tab>	
		<block v-for="(item,ind) in jinduList[index]">
			<view class="jinduList" :key="ind">
				<view class="list-name">
					{{item.name}}
				</view>
				<view class="list-time">
					申请时间:{{item.time}}
				</view>
				<view class="list-state" :style="{color:index ==1 ? 'green' :  'red'  }">
					{{item.state}}
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				tabList: [{
				        name: '待审核',
				        value: 0
				    },
				    {
				        name: '已通过',
				        value: 1
				    },
					{
					    name: '已拒绝',
					    value: 2
					}
				],
				jinduList:[
					[
						{'name':'白云区王英德诊所','time':'2020-08-01 13:21:33','state':''},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':''},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':''},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':''}
					],
					[
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':'已通过'},
						{'name':'白云区王英德诊所','time':'2020-08-01 13:21:33','state':'已通过'},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':'已通过'},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':'已通过'},
						{'name':'乌当柯小佳诊所','time':'2020-08-01 13:21:33','state':'已通过'}
					],
					[
						{'name':'七星关燕子口镇卫生室','time':'2020-08-01 13:21:33','state':'已拒绝'},
						{'name':'七星关燕子口镇卫生室','time':'2020-08-01 13:21:33','state':'已拒绝'},
						{'name':'七星关燕子口镇卫生室','time':'2020-08-01 13:21:33','state':'已拒绝'},
						{'name':'七星关燕子口镇卫生室','time':'2020-08-01 13:21:33','state':'已拒绝'},
						
					]
				]
			}
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
			//tabbar切换方法
			tabChange(e) {
				// console.log(e);
				if (this.index != e.tab.value){
					this.index = e.tab.value
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container {
		width: 100vw;
		
		background-color: #FFFFFF;
		text-overflow:ellipsis;
		white-space:wrap;
		overflow: hidden;
	}
	.jinduList{
		width: 100vw;
		padding-left: 10px;
		background-color: #FFFFFF;
		margin: 1px 0 5px 0;
		overflow: hidden;
	}
	.list-name {
		font-size: 18px;
		padding: 2px 0;
	}
	.list-time {
		font-size: 14px;
		padding: 2px 0;
	}
	.list-state {
		font-size: 14px;
		padding: 2px 0;
	}
</style>
