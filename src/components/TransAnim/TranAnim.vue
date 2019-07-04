<template>
  <div>
    <div class="content">
      <h2>2.1 单元素 / 组件过渡</h2>
      <TranSingle></TranSingle>
    </div>
    <div class="content">
      <h2>2.2 多元素过渡</h2>
      <TranMultiEle></TranMultiEle>
    </div>
  </div>
</template>

<script>
import TranSingle from './TranSingle'
import TranMultiEle from './TranMultiEle'

export default {
  name: 'TransAnim',
  components: {
    TranSingle,
    TranMultiEle
  }
}
</script>

<style>
h2 { text-align: center; }
fieldset {
  display: inline-block;
  width: 45%;
  min-height: 100px;
  margin: 10px 2px;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  border-radius: 10px;
}
.content {
  margin-bottom: 40px;
}
</style>
