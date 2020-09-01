<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="业务员排行TOP10" @clickLeft="back" fixed="true"></uni-nav-bar>
		<!-- <view :key='key' class="" style="width: 100vw; height: 400px; display: flex; flex-wrap: wrap;">
			<view v-for="item in message">{{item}}</view>
		</view>
		<button type="default" @click="button">+</button>
		<button type="default" @click="button2">+</button> -->
		<view class="content">
			<block v-for="item in clerkList">
				<view class="content-item">
					<view class="item-left">
						<text> {{item.c_id}}</text>
					</view>
					<view class="item-middle">
						<view class="mideele-title">
							 {{item.c_name}}
						</view>
						<view class="mideele-name">
							 {{item.c_person}}
						</view>
					</view>
					<view class="item-right">
						<view class="right-title" style="color: #00AA00;">
							 {{item.c_num}}
						</view>
						<view class="right-money">
							¥ {{item.c_money}}
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
				message:[],
				key:1,
				clerkList:[
					{"c_id":"1","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"2","c_name":"广东石岗村","c_person":"赵磊","c_num":"+1","c_money":"99999",},
					{"c_id":"3","c_name":"郑东人民药店","c_person":"王硕","c_num":"+1","c_money":"99999",},
					{"c_id":"4","c_name":"唐山三八大药房","c_person":"李毅","c_num":"+1","c_money":"99999",},
					{"c_id":"5","c_name":"东莞柳市医疗室","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"6","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"7","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"8","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"9","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",},
					{"c_id":"10","c_name":"四川九寨沟天然药业有限责任公司","c_person":"刘涛","c_num":"+1","c_money":"99999",}
				]
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			button(){
				for(let i = 0;i<50;i++){
					let item = i
					console.log(item);
					this.message.push(item)
				}
			},
			button2(){
				this.message[49] = 'ewqe'
				console.log(this.message[49]);
				// this.$set(this.message,[49],'ewqe')
				// this.$forceUpdate()
				this.key = 2
				console.log(this.message[49]);
				
			}
		}
	}
</script>

<!-- <style scoped lang="scss"></style> -->
<style>
	.container{
		width: 100vw;
		background-color: #FFFFFF;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.content {
		width: 100vw;
	}
	.content-item{
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid #EEEEEE;
	}
	.item-left {
		width: 15vw;
		height: 60px;
		line-height: 60px;
		font-size: 15px;
		text-align: center;
	}
	.item-left text {
		background-color: #00E700;
		padding: 3px 9px;
		border-radius: 50px;
		color: #FFFFFF;
	}
	.item-middle {
		width: 70vw;
		height: 60px;
		line-height: 30px;
		font-size: 14px;
	}

	.item-right {
		height: 60px;
		line-height: 30px;
		text-align: right;
		padding-right: 5px;
		font-size: 14px;
	}
</style>
