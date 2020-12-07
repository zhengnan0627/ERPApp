<template>
	<view class="container">
		<uni-nav-bar left-icon="back"  title="拜访记录详情" @clickLeft="back" fixed="true"></uni-nav-bar>
		<view class="jilubox-content">
			<view class="jilubox-item jilu-kehu">
				拜访时间:&nbsp{{kehuinfo.c_date}}
			</view>
			<view class="jilubox-item jilu-preson">
				<view class="">
					拜访人:&nbsp{{yg_name}}
				</view>
			</view>
			<view class="jilubox-item jilu-kehu">
				拜访对象:&nbsp{{kehuinfo.c_object}}
			</view>
			<view class="jilubox-item jilu-address">
				地址:&nbsp{{kehuinfo.c_address}}
			</view>
			<view class="jilubox-item jilu-address">
				访客内容:&nbsp{{kehuinfo.content}}
			</view>
		</view>
		<u-form-item style="display: flex; background-color: #FFFFFF;">
			<u-upload ref="uUpload5"  :deletable="false" :file-list="fileList" width="120" :show-progress="false" :max-count="fileList.length" :custom-btn="true" name="upload_file">
				<view class="" slot="addBtn">
					<view class="u-list-item u-add-wrap" style="width: 120prx;height: 120rpx;">
						<u-icon  name="plus" class="u-add-btn" size="60"></u-icon>
					</view>
				</view>
			</u-upload>
		</u-form-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kehuinfo:{},
				yg_name:'',
				fileList: [
					// {
					// 	url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					// 	beizhu:'123',
					// }
				]
			}
		},
		onLoad(option) {
			console.log(option.imagelist);
			this.yg_name = option.name
			this.kehuinfo = JSON.parse(option.kehuinfo) 
			console.log(this.kehuinfo);
			console.log(this.kehuinfo.image_urls);	
			let imagelist = this.kehuinfo.image_urls.split('^')
			imagelist.forEach(item => {
				let list = {}
				list.url = item
				this.fileList.push(list)
			})
			console.log(this.fileList);
		},
		methods: {
			//返回上级页面方法
			back(){
				uni.navigateBack({
					
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #fffffff;
	}
	.container{
		width: 100vw;
		height: 100%;
		background-color: #EEEEEE;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size: 16px;
		/* white-space:nowrap; */
	}
	.jilubox-content{
		box-sizing: border-box;
		width: 100vw;
		padding: 2px 10px;
		background-color: #FFFFFF;
	}
	.jilubox-item{
		width: 100%;
		padding: 6px 0px;
		/* border-bottom: 1px solid #EEEEEE; */
	}
	.jilu-preson{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.baifang-content{
		width: 100vw;
		background-color: #FFFFFF;
	}
</style>
