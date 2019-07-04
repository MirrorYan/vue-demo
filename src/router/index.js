import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InputFather from '@/components/InputFather'
import TransAnim from '@/components/TransAnim/TranAnim'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/input',
      name: 'InputFather',
      component: InputFather
    }, {
      path: '/trans&anim',
      name: 'TransAnim',
      component: TransAnim
    }
  ]
})
