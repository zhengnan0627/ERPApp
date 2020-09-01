<template>
	<view class="container">
		<uni-nav-bar fixed="true" left-icon="back"  title="公告内容"  @clickLeft="back"/>
		<!-- 富文本解析 -->
		<!-- <u-parse :html="content"></u-parse>	 -->
	
		<view class="notice">
			<view class="notice-title">
				医药销售技巧
			</view>
			<view class="notice-time">
				<text style="margin-right: 10px;">2019-12-14</text>
				<text>系统管理员</text>
			</view>
		</view>
		<view class="notice-content">
			<text class="notice-text">
				1.首先要保持自己的专业性，作bai为医药代表，虽然du不是专业的医生，但zhi是也要对医药行业十分了解dao，对有些药品也要熟悉，这样才能更好的做好自己的营销工作，这个技巧需要自己的用心和努力。
				2.保持良好的销售心态。其实对于任何行业的销售人员而言，都是不容易的，想要获得好的业绩，就需要不断的努力，而心态在整个的营销过程中起到非常重要的作用。		
				3.懂得如何与人沟通，也就是沟通技巧要掌握，其实对于现代的医药代表而言，打交道最多的就是药店和医院的工作人员，这个时候就需要掌握沟通的技巧，能够让人接受并且信任自己。				
				4.真诚无欺骗进行营销工作。其实很多时候营销是需要讲究策略的，但这种策略上面的技巧不包括欺骗行为，作为医药代表要做到真诚，童叟无欺，这样的营销才能给自己带来长远的利益。				
				5.学会召开会议，通过会议来获得更多的经销商，让自己的影响力扩大也算是一种很好的营销技巧了。其实召开会议也不需要规模太大，但绝对可以一对多去进行营销工作。
				6.任何时候都应该保持耐心，尤其是营销遇到困难的时候，更要有耐心一点，不要着急，不要发火，要懂得平和心态去解决和处理营销中遇到的问题和困难，这样的技巧才能让自己获得更多的客户。
				7.学会变通，能够合理利用互联网来进行营销。其实现在的互联网发展很快，传播和推广的速度及影响也很大，所以要学会创新，学会利用新的平台和方式来营销。
			</text>
		</view>
	</view>	
</template>

<script>
	// import uParse from '../../../components/u-parse/u-parse.vue'
	export default {
		data() {
			return {
				content: `
									<p>露从今夜白，月是故乡明</p>
									<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
						`
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
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	
		text-overflow:ellipsis;
		white-space:wrap;
	}
	.notice {
		width: 100vw;
		margin: 5px 0;
		padding-left: 2.5vw;
		background-color: #FFFFFF;
	}
	.notice-title {
		width: 100vw;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}
	.notice-time {
		width: 100vw;
		height: 30px;
		/* line-height: 50px; */
		color: #a7a7a7;
		font-size: 16px;
	}
	.notice-content {
		width: 95vw;
		margin: 0 auto;
		
	}
	.notice-text {
		color: #4b4b4b;
		font-size: 17px;
	}
	
</style>
