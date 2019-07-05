<template>
  <div>
    <!-- 过渡 & 动画 -->
    <div class="content">
      <h2>2.1 单元素 / 组件过渡</h2>
      <TranSingle></TranSingle>
    </div>
    <div class="content">
      <h2>2.2 多元素过渡</h2>
      <TranMultiEle></TranMultiEle>
    </div>
    <div class="content">
      <h2>2.3 多组件的过渡</h2>
      <TranMultiCom></TranMultiCom>
    </div>
    <div class="content">
      <h2>2.4 列表过渡</h2>
      <TranMultiCom></TranMultiCom>
    </div>
  </div>
</template>

<script>
import TranSingle from './TranSingle'
import TranMultiEle from './TranMultiEle'
import TranMultiCom from './TranMultiCom'

export default {
  name: 'TransAnim',
  components: {
    TranSingle,
    TranMultiEle,
    TranMultiCom
  }
}
</script>

<style>
h2 { text-align: center; }
fieldset {
  display: inline-block;
  width: 46%;
  min-height: 100px;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  border-radius: 10px;
  box-sizing: border-box;
}
.content {
  margin-bottom: 40px;
}
.content fieldset {
  margin: 5px 2% 5px 2%;
}
</style>
