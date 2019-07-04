<template>
  <div>
    <div class="content">
      <h2>2.1. 单元素 / 组件过渡</h2>
      <TranSingle></TranSingle>
    </div>
  </div>
</template>

<script>
import TranSingle from './TranSingle'

export default {
  name: 'TransAnim',
  components: {
    TranSingle
  }
}
</script>

<style>
h2 { text-align: center; }
</style>
