/* --- 加载 Vue 构建版本 --- */
import Vue from 'vue';
/* --- 加载 ElementUI 框架 ---*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // ElementUI框架样式需要另外引入

import App from './App'; // App必须在UI框架之后引入，编译和加载时也会按此顺序
import router from './router';

/* --- 注册 ElementUI --- */
Vue.use(ElementUI);

/* --- 注册全局指令 --- */
Vue.directive('title', {
  inserted (el, binding) {
    console.log(el)
    document.title = el.dataset.title;
  }
});


Vue.config.productionTip = false

/* 全局注册组件 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
