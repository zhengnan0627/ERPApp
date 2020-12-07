<template>
	<view>
		<uni-nav-bar fixed="true" left-icon="back"  title="申请进度"  @clickLeft="back"/>
		<sun-tab :value.sync="index" :tabList="tabList" rangeKey="name"  @change="tabChange" bgColor="#ffffff" activeColor="#55aa00" style="border-bottom: 1px solid #EEEEEE;"></sun-tab>	
		<block v-for="(item,ind) in jinduList">
			<view class="jinduList" :key="ind">
				<view class="list-name">
					{{item.company_name}}
				</view>
				<view class="list-time">
					申请时间:{{item.apply_date}}
				</view>
				<view class="list-state" :style="{color:index ==1 ? 'green' :  'red'  }">
					{{index == 0? '' :index == 1? '已通过':'已拒绝'}}
				</view>
			</view>
		</block>
		<u-empty  text="没有搜索结果" mode="search"  :show="jinduList.length < 1"
				:marginTop="400"
		></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				status:'待审核',
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
				jinduList:[]
			}
		},
		onLoad() {
			this.request()
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
			
					this.index = e.tab.value
					this.status = e.tab.name
					this.jinduList = []
					this.request()
			
				
			},
			//数据请求方法
			request(){
				const _this = this
				_this.$request({
					data:{
						proc:'APP_YWY_PORT',
						type:'开户审核进度',
						userid:_this.$userinfo.userid,
						status:_this.status
					}
				}).then(res => {
					const resdata = res.Msg_info
					console.log(resdata);
					if(resdata[0].error){
						_this.jinduList = []
					}else{
						_this.jinduList = resdata
					}
					
				})
			}
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
