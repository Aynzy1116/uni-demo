import Vue from "vue"
import Vuex from "vuex"

import $config from '@/common/http/config.js'
import $http from '@/common/http/http.js'
import $api from '@/common/http/api.js'
import {$storage} from '@/utils/utils.js'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apiBaseUrl: $config.apiBaseUrl, //域名
		APP_TOKEN: JSON.stringify($storage.getStorage('APP_TOKEN'))==null?null:$storage.getStorage('APP_TOKEN'), //token 不存在将会返回{} 
		code: null, //小程序登录
		userInfo: $storage.getStorage('userInfo'), //用户数据 不存在将会返回null
		dictionary:{}, // 字典
		parkInfo:  $storage.getStorage('yqInfo') , //用户数据 不存在将会返回null
		customerInfo: JSON.stringify($storage.getStorage('customerInfo'))==null?null:$storage.getStorage('customerInfo')
	},
	getters: {

	},
	mutations: {
		// 设置登入用户信息
		setUserInfo(state,params){
			console.log('params',params);
			state.userInfo = params
			$storage.setStorage('userInfo',params)
		},
		// 设置token
		setToken(state,params){
			state.APP_TOKEN = params
			$storage.setStorage('APP_TOKEN',params)
		},
		// 退出登录
		logOut(state,params){
			state.APP_TOKEN = false
			state.userInfo = false
			$storage.setStorage('APP_TOKEN','')
			$storage.setStorage('userInfo','')
		},
	},
	actions: {
		//初始化登录
		initUser({
			state,
			commit
		}, params) {
			let userInfo = $storage.getStorage('userInfo');
			// console.log('userInfo',typeof userInfo)
			//判断是否有用户数据
			if (userInfo != false) {
				let userInfoObj = typeof userInfo=='object'? userInfo:JSON.parse(userInfo);
				// console.log('userInfoObj',userInfoObj);
				if(JSON.stringify(state.userInfo) == '{}'){
					commit('setUserInfo', userInfoObj);
					commit('setToken', userInfoObj['MINI_TOKEN']);
				}
			} else {
				uni.reLaunch({
					url: 'pages/mine/login/index'
				});
			}
			params.vm.$isResolve()
		},

		//用户登入 注册
		userLogin({state,commit},params){
			console.log('params',params)
			const promise = new Promise((resolve, reject) => {
				$http.post($api.login, {
					// iv: params.code2session.iv,
					// encryptedData: params.code2session.encryptedData,
					// code: params.code2session.code
					code: params.code
				}).then(res=>{
					if(res.success && res.code == 200){
						console.log('res',res)
						let userInfo = res.result[0]
						userInfo['openid'] = res.result[1]['openid']
						userInfo['APP_TOKEN'] = res.result[2]['APP_TOKEN']
						userInfo['userid'] = res.result[3]['id']
						userInfo['avatarUrl'] = res.result[3]['avatarUrl']
						userInfo['name'] = res.result[3]['name']
						userInfo['gender'] = res.result[3]['gender']
						commit('setUserInfo', userInfo)
						commit('setToken', res.result[2]['APP_TOKEN'])
						// setTimeout(()=>{
						// 	uni.switchTab({
						// 		url:'/pages/home/index'
						// 	})
						// },2000)
					}
				}).catch(err=>{
					// global.show_nativeUI_toast('授权失败','error')
					console.log('授权失败','error');
				})
			})
		},

	}
})
