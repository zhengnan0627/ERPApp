// import api form './config.js'

// uni.request({
// 	url: api+url,
// 	method: 'POST',
// 	data: {},
// 	success: res => {},
// 	fail: () => {},
// 	complete: () => {}
// });

//网络请求 封装文件
const api = "https://myc.jbsage.com/VXMail/"

//请求分类
 function Request(options){
	const promise = new Promise(function(resolve,reject){
		uni.showLoading({
			title:'加载中'
		})
		uni.request({
			url:api+options.url,
			method:options.method ||"GET",
			data:options.data || {},
			dataType:options.dataType || "json",
			header:options.header || {},
			success:function(res){
				uni.hideLoading()
				console.log('接口返回'+ res);
				if(res.statusCode == 200){
					resolve(res.data)
				}else{
					resolve(res.data)
				}
			},
			fail:function(res){
				uni.hideLoading()
				console.log('接口失败'+ res);
				reject('网络出错')
			}
		})
	})
	return promise;
}
export default Request
// module.exports = Request