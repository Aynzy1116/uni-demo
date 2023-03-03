import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['userInfo'])
	},
	data() {
		return{
			baseImgUrl: this.$imgUrl, // 图片的前缀地址
			staticBaseImgUrl: this.$staticImgUrl, // 静态图片的前缀地址
			vcodeBtnName: '获取验证码',
			tableList: [], // 页面数据存储
			pageNo: 1, // 当前页
			pageSize: 10,
			loadStatus: 'loadmore', // 上拉加载组件状态
			loadMoreTimer:null, // 防抖
			isLoadMore:false,  // 上拉是否加载中
			triggered:true, // 下拉刷新状态
		}
	},
	onShow(){
		
	},
	methods: {
		// 获取时间
		getTime(){
			const date = new Date()
			let year = date.getFullYear()
			let month = date.getMonth()+1
			let day = date.getDate()
			let hour = date.getHours()<10?"0"+date.getHours():date.getHours()
			let minute = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()
			let srcond = date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds() // 秒
			month >= 1 && month <= 9 ? (month = "0" + month) : ""
			day >= 1 && day <= 9 ? (day = "0" + day) : ""
			let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + srcond
			return time
		},

		// 跳转
		navigater(url,type=1){
			console.log('url',url);
			switch(type){
				case 1:
					uni.navigateTo({
						url:url
					})
					break;
				case 2:
					uni.switchTab({
						url:url
					})
					break;
			}
		},
		
		// 数组对象去重
		arrObjMap(arrObj){
			let map = new Map()
			for (let item of arrObj) {
				map.set(item.id,item)
			}
			arrObj = [...map.values()]
			return arrObj
		},

		// 表单判空验证
		formValidation(params,rules){
			const promise = new Promise((resolve,reject)=>{
				try{
					Object.keys(params).forEach((res,index)=>{
						if(params[res]==''||params[res]==null||params[res]==undefined){
							show_nativeUI_toast(rules[index],'none',1500)
							throw new Error('out')  // 跳出循环
						}
					})
				}catch(e){
					resolve(false)
					if(e.message!=='out') throw e
				}
				resolve(true)
			})
			return promise
		},

		// 下拉刷新
		upper(getList,currentIndex) {
			if(currentIndex==0) currentIndex=null
			console.log('refresh');
			setTimeout(()=> {
				this.triggered = false
				this.pageNo = 1
				this.tableList = []
				getList(currentIndex)
			}, 1000);
			this.triggered = true
		},
		// 触底触发函数
		scrolltolower(getList,currentIndex){
			if(currentIndex==0) currentIndex=null
			console.log('scrolltolower',this.isLoadMore)
			if(!this.isLoadMore){ // 加载中不加载
				this.isLoadMore = true
				this.loadStatus = 'loading'
				if(this.loadMoreTimer != null){clearTimeout(this.loadMoreTimer);}
				this.loadMoreTimer = setTimeout(()=>{
					this.pageNo++
					getList(currentIndex).then(res=>{
						console.log('ztttt',res)
						if(res.isLoadMore&&res.loadStatus){
							this.isLoadMore = res.isLoadMore
							this.loadStatus = res.loadStatus
						}
					})
				},200)
			}
		},

		// 上传文件
		upload(){
			const promise = new Promise((resolve,reject)=>{
				let that = this
				uni.chooseMessageFile({
					success(e) {
						console.log('e',e);
						let fileName = e.tempFiles[0].name
						let type = e.tempFiles[0].type
						let params  // 参数
						if(type=='image'){
							params = `?biz=temp&fileName=${fileName}`
						}else if(type=='file'){
							params = `?bic=file&fileName=${fileName}`
						}
						uni.uploadFile({
							url: that.$api.uploadImg+params, // 接口地址
							filePath: e.tempFiles[0].path,
							name: 'file',
							formData: {
								user: 'test'
							},
							success: (data) => {
								console.log('data',data);
								let res = JSON.parse(data.data)
								console.log('sss',res);
								resolve(res.message)
							},
							fail(err) {
								reject()
								console.log('res',err);
							}
						})
					},
					fail(err){
						console.log('err',err);
					}
				})
			})
			return promise
		},

		// 下载文件
		fileDownload(data){
			console.log('data',data);
			let that = this
			uni.downloadFile({
				url:this.baseImgUrl+data,
				success(res) {
					console.log('res',res);
					var filePath = res.tempFilePath;
					//打开文件有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
					uni.showModal({
						content:"下载完成，是否打开文件",
						success: function (res) {
							if(res.confirm){
								uni.openDocument({
									filePath: filePath,
									showMenu: true,
									// fileType:'doc',
									success: function(res) {
										console.log('打开成功');
									},
									fail(err) {
										uni.showToast({
											title: JSON.stringify(err),
											// title: '暂不支持打开此类型',
											icon:'none',
											duration: 2000
										});
									}
								});
							}
						},
					})
				},
				fail(e) {
					console.log('err',e);
				}
			})
		},

		// 图片上传
		photoUpload(){
			let that = this
			const promise = new Promise((resolve,reject)=>{
				uni.chooseMedia({
					count:12,
					success:async function (res) {
						console.log('aaa',res);
						let urlLists = res.tempFiles
						let result = []
						console.log('urlList',urlLists);
						result = await Promise.all(
							urlLists.map((url,index)=>{
								return new Promise((resolve,reject)=>{
									uni.uploadFile({
										url: that.$api.uploadImg+`?biz=temp`, // 接口地址
										filePath: url.tempFilePath,
										name: 'file',
										header:{
											'content-type':'multipart/form-data'
										},
										formData: {
											user: 'test'
										},
										success: (res) => {
											console.log('sss',res.data);
											resolve(JSON.parse(res.data).message)
										},
										fail:(err)=>{
											console.log('err',err);
											uni.showToast({
												title: JSON.stringify(err),
												duration: 3000,
												icon:'none'
											});
										}
									});
								})
							})
						)
						console.log('resultaaaaa',result);
						resolve(result)
					},
					fail() {

					}
				});
			})
			return promise
		},

		// 预览图片
		previewImg(arr,index){
			// var imgArr = arr.map(res=>this.baseImgUrl+res)
			let imgArr = arr
			console.log('imgArr',imgArr);
			wx.previewImage({
				urls:imgArr,
				current:imgArr[index],
				fail(e){
					console.log('fail',e)
					uni.showToast({
						title: '出错了，请稍后再试',
						icon:'none',
						duration: 1500
					})
				},
			})
		},

		//订阅消息
		subscriptionMsg(params) {
			let msgKey = params.msgKey || 'test';
			uni.requestSubscribeMessage({
				// tmplIds: [this.$config['msgId'][msgKey]],
				tmplIds: [params.msgKey],
				success(res) {
					console.log(msgKey + '消息订阅成功', res);
					// if (res[params.msgKey] == 'accept') {
					// 	// console.log(params.fn);
					// 	if (params.rFn) {
					// 		params.rFn()
					// 	}
					// } else {
					// 	show_nativeUI_toast('为了方便通知你审核结果，请允许订阅','none',1500)
					// 	//取消订阅时 并且有 取消函数  就触发
					// 	if (params.errFn) {
					// 		params.errFn()
					// 	}
					// }
				},
				fail(err) {
					console.log('err',err);
				}
			})
		},

		// 手机号规则验证
		regPhone(value){
			var myreg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; //11位手机号码正则
			// if(value){
			// 	show_nativeUI_toast('手机号不能为空','none',1500)
			// 	return false
			// }
			if (!myreg.test(value)) {
				show_nativeUI_toast('手机号格式错误','none',1500)
				return false;
			}
			return true
		},
		
		// 邮箱验证
		regEmail(value){
			var myreg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
			if (!myreg.test(value)) {
				show_nativeUI_toast('邮箱格式错误','none',1500)
				return false;
			}
			return true
		},

		// 生产随机字符串
		randomString(length, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
		    return result;
		},

	}
}
