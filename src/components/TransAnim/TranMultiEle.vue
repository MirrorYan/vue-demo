<template>
  <div>
    <TranMultiEleUtil
      v-for="(msg, i) in msgs"
      :key="i"
      v-bind="msg"
    ></TranMultiEleUtil>
  </div>
</template>

<script>
import TranMultiEleUtil from './TranMultiEleUtil'

export default {
  name: 'TranMultiEle',
  data () {
    return {
      msgs: [{
        title: 'transition 的默认行为 - 进入和离开同时发生',
        name: 'first',
        describ: `
          由于 <i>transition</i> 多元素过渡的默认行为：进入和离开同时发生。
          因此在 <i>on</i> 和 <i>off</i> 按钮的过渡中，两个按钮都被重绘，一个离开过渡的时候另一个进入过渡。
        `
      }]
    }
  },
  components: {
    TranMultiEleUtil
  }
}
</script>

<style>
i { color: #00a0fa; }
</style>
