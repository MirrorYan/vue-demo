import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/Home'),
      meta: {
        title: '目录',
        icon: 'el-icon-tickets',
      }
    }, {
      path: '/computed&watch',
      name: 'ComputedWatchPage',
      component: () => import('@/views/ComputedWatch'),
      meta: {
        title: '计算属性&侦听器',
        icon: 'el-icon-set-up'
      }
    }
  ]
});
