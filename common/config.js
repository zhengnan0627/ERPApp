let apis = ""
//#ifndef H5
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    // apis = 'http://mpshopapi.mpyf.net'
	apis = "https://douban.uieee.com"
}else{
    // 生产环境
    apis = "https://douban.uieee.com"
}
//#endif 


export default apis