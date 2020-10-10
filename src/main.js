// 加载 Vue 构建版本
import Vue from 'vue';

// 加载 ElementUI 框架
import ElementUI from 'element-ui';
// ElementUI 框架的样式文件要单独引入
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router';

// 引入 ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

/* 全局注册组件 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
