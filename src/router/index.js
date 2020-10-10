import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/components/PageHome';
import InputFather from '@/components/InputFather';
import TransAnim from '@/components/TransAnim/TranAnim';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      title: '首页',
      component: PageHome,
      icon: 'el-icon-s-home'
    }, {
      path: '/computed&watch',
      title: '计算属性&侦听器',
      icon: 'el-icon-set-up'
    }, {
      path: '/input',
      title: 'InputFather',
      component: InputFather
    }, {
      path: '/trans&anim',
      title: 'TransAnim',
      component: TransAnim
    }
  ]
});
