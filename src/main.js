/*  */

import Vue from 'vue' // 使用 import 命令加载 Vue 构建版本
import App from './App'
import router from './router'

Vue.config.productionTip = false



/*  */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
