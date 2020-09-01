<template>
	<view>
			<index v-if="pagesindex =='/pages/index/index'" :name="tabcurrent"/>
			<order v-if="pagesindex =='/pages/order/order'"/>
			<cart v-if="pagesindex =='/pages/cart/cart'"/>
			<!-- <view class="index-view">
			</view> -->
			<mine v-if="pagesindex =='/pages/mine/mine'"/>
		<tui-tabbar :style="{visibility:visibility}"
		 :tabBar="tabBar" color="#1a1a1a" selectedColor="#1afa29" 
		 :isFixed="true" :current="current" @click="click"></tui-tabbar>
	</view>
</template>

<script>
	import tuiTabbar from "@/components/tui-tabbar/tui-tabbar.vue"
	import index from "@/components/index/index.vue"
	import order from "@/components/order/order.vue"
	import cart from "@/components/cart/cart.vue"
	import mine from "@/components/mine/mine.vue"
	export default {
		data() {
			return {
				current: 0,
				tabcurrent: 0,
				maps:'',
				pagesindex:'/pages/index/index',
				visibility:"visible",
				visibilitycurrent:1,
				tabBar:[
					{
						"pagePath":"/pages/index/index",
						"iconPath": "/static/image/home.png",
						"selectedIconPath":"/static/image/homefill.png",
						"text":"主页",
						"name_code":"index",
					},
					{
						"pagePath":"/pages/order/order",
						"iconPath": "/static/image/ERP.png",
						"selectedIconPath":"/static/image/ERPfill.png",
						"text":"ERP代客下单",
						"name_code":"order",
					},
					{
						"pagePath":"/pages/cart/cart",
						"iconPath": "/static/image/phone.png",
						"selectedIconPath":"/static/image/phonefill.png",
						"text":"通讯录",
						"name_code":"phone",
					},
					{
						"pagePath":"/pages/mine/mine",
						"iconPath": "/static/image/mine.png",
						"selectedIconPath":"/static/image/minefill.png",
						"text":"个人中心",
						"name_code":"mine",
					}]
			}
		},
		onLoad:function(option)  {
			console.log("第一启动页onload");
			console.log(option.current);
			this.tabcurrent = option.current*1;
			console.log(this.tabcurrent === 0);
			if(option.current == 0){
				this.tabBar = [
						{
							"pagePath":"/pages/index/index",
							"iconPath": "/static/image/home.png",
							"selectedIconPath":"/static/image/homefill.png",
							"text":"主页",
							"name_code":"index",
						},
						{
							"pagePath":"/pages/order/order",
							"iconPath": "/static/image/ERP.png",
							"selectedIconPath":"/static/image/ERPfill.png",
							"text":"ERP代客下单",
							"name_code":"order",
						},
						{
							"pagePath":"/pages/cart/cart",
							"iconPath": "/static/image/phone.png",
							"selectedIconPath":"/static/image/phonefill.png",
							"text":"通讯录",
							"name_code":"phone",
						},
						{
							"pagePath":"/pages/mine/mine",
							"iconPath": "/static/image/mine.png",
							"selectedIconPath":"/static/image/minefill.png",
							"text":"个人中心",
							"name_code":"mine",
						}]
			} else if(option.current == 1){
				this.tabBar = [
						{
							"pagePath":"/pages/index/index",
							"iconPath": "/static/image/home.png",
							"selectedIconPath":"/static/image/homefill.png",
							"text":"主页",
							"name_code":"index",
						},
						{
							"pagePath":"/pages/cart/cart",
							"iconPath": "/static/image/phone.png",
							"selectedIconPath":"/static/image/phonefill.png",
							"text":"通讯录",
							"name_code":"phone",
						},
						{
							"pagePath":"/pages/mine/mine",
							"iconPath": "/static/image/mine.png",
							"selectedIconPath":"/static/image/minefill.png",
							"text":"个人中心",
							"name_code":"mine",
						}]
			} else {
				this.tabBar = [
						{
							"pagePath":"/pages/index/index",
							"iconPath": "/static/image/home.png",
							"selectedIconPath":"/static/image/homefill.png",
							"text":"主页",
							"name_code":"index",
						},
						{
							"pagePath":"/pages/order/order",
							"iconPath": "/static/image/ERP.png",
							"selectedIconPath":"/static/image/ERPfill.png",
							"text":"ERP代客下单",
							"name_code":"order",
						},
						{
							"pagePath":"/pages/cart/cart",
							"iconPath": "/static/image/phone.png",
							"selectedIconPath":"/static/image/phonefill.png",
							"text":"通讯录",
							"name_code":"phone",
						},
						{
							"pagePath":"/pages/mine/mine",
							"iconPath": "/static/image/mine.png",
							"selectedIconPath":"/static/image/minefill.png",
							"text":"个人中心",
							"name_code":"mine",
						}]
			}
			
			// const maps = JSON.parse(option.map)
			// console.log(maps);	
			// console.log(mas.latitude);
			//监听聚焦失焦控制tabbar显隐
			// uni.$on('focusevent', ()=>{
			// 	this.visibility="hidden"
			// }),
			// uni.$on('blursevent', ()=>{
			// 	this.visibility="visible"
			// })
		},
		onResize() {
			if(this.visibilitycurrent == 1 &&this.pagesindex == '/pages/cart/cart'){
				this.visibility = "hidden"
				this.visibilitycurrent = 0
			}else{
				this.visibility = "visible"
				this.visibilitycurrent = 1
			}
			
		},
		methods: {
			button() {
				
			},
			click(e){
				// console.log(e);
				//自定义tabbar定义的高亮下标传值
				this.current = e.index
				//自定义tabbar定义的页面路径传值
				this.pagesindex = e.pagePath
			}
		}
	}
</script>

<style>
	page{
		border-color: #EEEEEE !important;
	}
	.index-view {
		height: calc(100vh - 100rpx);
		position: fixed;
	}
</style>
