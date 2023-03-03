import App from './App'
import store from "./store"
import mixin from "@/common/mixin/index.js"

import uView from 'uview-ui/index.js'
Vue.mixin(mixin)
Vue.use(uView)
uni.$u.config.unit = 'rpx'

global.show_toast = function(msg, icontype = 'success',duration=2000) {
	uni.showToast({
		title: msg,
		icon: icontype,
		duration: duration
	})
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif




// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif