<template>
  <div v-title :data-title="$route.meta.title">
    <Paragraph>
      <template #title>
        <h2>计算属性</h2>
      </template>
      <p>模板内嵌表达式的初衷是用于简单运算，模板嵌入过多逻辑会让模板过重且难以维护。</p>
      <p>计算属性用于处理一些复杂逻辑的变量，让代码语义更鲜明。</p>
      <input type="text" v-model="msg">
    </Paragraph>
    <el-form class="form" label-width="70px">
      <el-form-item label="正常值">
        <el-input v-model="msg" />
      </el-form-item>
      <el-form-item label="翻转值">
        <span>{{ reverseMsg }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph';

export default {
  name: 'ComputedWatch-Page',
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
}
</style>
