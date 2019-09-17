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
      <TranListCom></TranListCom>
    </div>
  </div>
</template>

<script>
import TranSingle from './TranSingle'
import TranMultiEle from './TranMultiEle'
import TranMultiCom from './TranMultiCom'
import TranListCom from './TranListCom'

export default {
  name: 'TransAnim',
  components: {
    TranSingle,
    TranMultiEle,
    TranMultiCom,
    TranListCom
  }
}
</script>

<style>
h2 { text-align: center; }
p { width: 100%; }
.section-container {
  display: flex;
  flex-wrap: wrap;
}
.section-container fieldset {
  width: calc(50% - 20px);
  margin: 5px 10px;
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
.notice-text {
  padding: 10px 15px;
  background-color: antiquewhite;
  border-left: 5px solid #ff8f80;
  border-radius: 0 5px 5px 0;
}
</style>
