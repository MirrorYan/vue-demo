<template>
  <div class="section-container">
    <TranUtil
      v-for="(msg, i) in msgs"
      v-bind:key="i"
      :toggle="true"
      v-bind="msg"
    ></TranUtil>
  </div>
</template>

<script>
import TranUtil from './TranUtil'

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
    TranUtil
  }
}
</script>
