<template>
  <Paragraph>
    <template #title>
      <h2>计算属性(computed)</h2>
    </template>
    <p>模板内嵌表达式的初衷是用于简单运算，模板嵌入过多逻辑会让模板过重且难以维护。
        计算属性用于处理一些复杂逻辑的变量，让代码语义更鲜明。</p>
    <p>用计算属性实现的文字翻转：</p>
    <el-form class="form" label-width="70px">
      <el-form-item label="正常值">
        <el-input v-model="msg" />
      </el-form-item>
      <el-form-item label="翻转值">
        <span>{{ reverseMsg }}</span>
      </el-form-item>
    </el-form>
  </Paragraph>
</template>

<script>
import Paragraph from '@/components/Paragraph';

export default {
  components: {
    Paragraph
  },
  data () {
    return {
      msg: 'Hello',
      pageTxt: {
        ques1: {
          title: '什么是计算属性'
        }
      }
    }
  },
  computed: {
    reverseMsg () {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style lang="scss">
.form {
  max-width: 500px;
  margin-top: 10px;
  .el-form-item {
    margin-bottom: 5px;
  }
}
</style>
