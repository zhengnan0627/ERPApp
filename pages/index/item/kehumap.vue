<template>
	<view class="container">
		<uni-nav-bar left-icon="back" title="客户分布" @clickLeft="back"></uni-nav-bar>
		<map :latitude="latitude" :longitude="longitude"
			 :markers="markers"	:scale="scale"
			 :controls="controls"
			 @controltap="controltap"
			 v-if="mapview"
			 style="width: 750rpx; height: 1244rpx;"
			
		></map>
	</view>
</template>

<script>
	export default {
		 // :style="{height:windowHeight+'px'}" 
		data() {
			return {
				//地图组件相应数据
				mapview:true,
				title:"map",
				latitude: 39.909,
				longitude: 116.39742,
				scale:10,//缩放数据
				//控件数据
				controls:[
					{
						id:1,
						iconPath:'../../../static/image/controls1.png',
						position:{
							left:330,
							top:400,
							width:40,
							height:40,
						},
						clickable:true,
					},
					{
						id:2,
						iconPath:'../../../static/image/controls2.png',
						position:{
							left:330,
							top:441,
							width:40,
							height:40,
							
						},
						clickable:true,
					}
				],
				markers:[
					{
						id:1,
						latitude: 39.909,
						longitude: 116.39742,
					},
					{
						id:2,
						latitude: 39.922,
						longitude: 116.40015,
					},
					{
						id:3,
						latitude: 39.920,
						longitude: 116.39300,
					},
				]
			}
		},
		onLoad() {
			this.markerspush()
			// console.log(this.markers);
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			markerspush() {
				
				var _this = this
				// var markerspush = {}
				// console.log(_this.markers);
				// console.log("开始push");
				for (let i = 4; i < 100; i++) {
					var markerspush = {}
					markerspush.id = i;
					markerspush.latitude = 39.920 + i/200
					markerspush.longitude = 116.393 + i/200
					_this.markers.push(markerspush)	
				}
				// console.log(_this.markers);
				// _this.$forceUpdate();
				// _this.mapview = false;
				// _this.mapview = true;
			},
			markerspush2() {
				
				var _this = this
				// var markerspush = {}
				// console.log(_this.markers);
				// console.log("开始push");
				for (let i = 100; i < 200; i++) {
					var markerspush = {}
					markerspush.id = 33123;
					markerspush.latitude = 39.800 - i*0.001
					markerspush.longitude = 116.193 - i*0.0003
					_this.markers.splice(_this.markers.length,0,markerspush)
					_this.markers = [..._this.markers]
					// _this.markers.push(markerspush)	
					// console.log(this.markers[99]);
					// _this.mapview = false;
					// _this.mapview = true;
				}
			},
			//控件点击方法
			controltap(e) {
				// uni.request({
				// 	url:'/v2/music/search?q=欧美&count=15',
				// 	data:{
				// 		// key:'APPKEY',
				// 		// type:"top",
						
				// 	},
				// 	header: {
				// 	    'custom-header': 'hello' //自定义请求头信息
				// 	},
				// 	success: (res) => {
				// 		console.log(res);
				// 	}
				// })
				// this.$request(
				// 	'/v2/music/search?q=欧美&count=15',
				// 	{
				// 		// "q":'欧美',
				// 		// "count":15
				// 	},
				// 	function(res){
				// 		console.log(res)
						
				// 	}
				// )
				// this.markerspush2();
				// this.$forceUpdate();
				// console.log(this.markers.length);
				// console.log(e.detail.controlId);
				const controlId = e.detail.controlId
				if(controlId == 1){
					this.scale = (this.scale == 18)?this.scale:this.scale + 1;
					// console.log(this.scale);
				}else{
					this.scale = (this.scale == 5)?this.scale:this.scale - 1;
					// console.log(this.scale);
				}
			}
		}
	}
</script>

<style>

</style>
