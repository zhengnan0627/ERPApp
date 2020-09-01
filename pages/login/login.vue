 <template>
 	<view class="container">
 		<view class="icon-img">
 			<image src="../../static/image/carticon.png" mode=""></image>
 		</view>
 		<view class="item" @click="login">
 			<view class="item-title">
 				高级主管入口
 			</view>
 		</view>
 		<view class="item" @click="login">
 			<view class="item-title">
 				业务员入口
 			</view>
 		</view>
 		<view class="item" @click="login">
 			<view class="item-title">
 				司机入口
 			</view>
 		</view>
 		<view class="footer">
 			<view class="footer-title">
 				时空业务通 版权信息:1.0
 			</view>
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
 			login(){
				uni.navigateTo({
					url:'./loginpages'
				})
			}
 		}
 	}
 </script>
 
 <style>
		 
	 .container {
		 width: 100vw;
		 height: 100vh;
		 background-color: #FFFFFF;
		 text-align: center;
		 overflow: hidden;
	 }
	 .icon-img {
		 width: 28vw;
		 height: 15vh;
		 margin: 70px auto;
	 }
	 .icon-img image {
		 width: 100%;
		 height: 100%;
	 }
	 .item {
		 width: 80vw;
		 height: 50px;
		 line-height: 50px;
		 font-size: 24px;
		 margin: 30px auto;
		 background-color: #00a200;
		 color: #fff7f7;
		 border-radius: 7px;
	 }
	 .footer {
		 position: fixed;
		 bottom: 0;
		 left: 20vw;
		 color: #757575;
	 }
 
 </style>
 