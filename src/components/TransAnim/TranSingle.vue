<template>
  <div>
    <TranSingleUtil
      v-for="(msg, i) in msgs"
      v-bind:key="i"
      v-bind="msg"
    ></TranSingleUtil>
  </div>
</template>

<script>
import TranSingleUtil from './TranSingleUtil'

export default {
  name: 'TranSingle',
  data () {
    return {
      msgs: [
        { title: 'CSS 过渡', name: 'fade', type: 'transition' },
        { title: 'CSS 动画', name: 'bounce', type: 'animation' }
      ]
    }
  },
  components: {
    TranSingleUtil
  }
}
</script>
