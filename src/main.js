import Vue from 'vue'
import App from './App.vue'

import '../public/UEditor/ueditor.config.js'
import '../public/UEditor/ueditor.all.js'
import '../public/UEditor/lang/zh-cn/zh-cn.js'
import '../public/UEditor/ueditor.parse.min.js'

import Editor from '../packages'


Vue.use(Editor)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
