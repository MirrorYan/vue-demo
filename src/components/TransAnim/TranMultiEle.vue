<template>
  <div class="section-container">
    <p>
      多个相同标签名的元素切换时需要通过
      <i>key</i>
      特性设置唯一的值来标记，让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。</p>
    <TranUtil
      v-for="(msg, i) in msgs"
      :key="i"
      v-bind="msg"
    ></TranUtil>
  </div>
</template>

<script>
import TranUtil from './TranUtil'

export default {
  name: 'TranMultiEle',
  components: {
    TranUtil
  },
  data () {
    return {
      msgs: [{
        title: '1-transition 的默认行为 - 进入和离开同时发生',
        name: 'first',
        describ: `
          由于<i>transition</i>多元素过渡的默认行为：进入和离开同时发生。
          因此在<i>on</i>和<i>off</i>按钮的过渡中，两个按钮都被重绘，一个离开过渡的时候另一个进入过渡。
          <p>这里设置了<i>opacity: 0</i>。</p>
        `
      }, {
        title: '2-将元素定位在彼此之上',
        name: 'second',
        describ: `
          将元素绝对定位在彼此之上的时候运行正常
          <p>在前一个的基础上，加上了<i>position: absolute</i>。</p>
        `
      }, {
        title: '3-滑动过渡',
        name: 'third',
        describ: `
          在前面的基础上，加上<i>transform: translateX()</i>实现滑动过渡。
        `
      }, {
        title: '4-过渡模式-淡入淡出',
        name: 'fourth',
        describ: `
          Vue 提供了<b>过渡模式</b>
          <ul>
            <li><i>in-out</i>：新元素先进行过渡，完成之后当前元素过渡离开；</li>
            <li><i>out-in</i>：当前元素先进行过渡，完成之后新元素过渡离开；</li>
          </ul>
          这里用了<i>out-in</i>，再加上<i>opacity: 0</i>就能做成这样。
        `,
        mode: 'out-in'
      }, {
        title: '5-过渡模式-滑动出入',
        name: 'fifth',
        describ: `
          这里用了<i>in-out</i>，加上 3 的样式。
        `,
        mode: 'in-out'
      }]
    }
  }
}
</script>

<style>
i {
  padding: 0 5px;
  color: #00a0fa;
  background-color: #f0e7f1;
  border-radius: 5px; }
</style>

<style scoped>
p {
  text-align: center;
}
</style>