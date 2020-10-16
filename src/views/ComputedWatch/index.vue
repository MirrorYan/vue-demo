<template>
  <div>
    <el-form label-width="70px">
      <el-form-item label="正常值">
        <el-input v-model="msg" width="100" />
      </el-form-item>
      <el-form-item label="翻转值">
        <span>{{ reverseMsg }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ComputedWatch-Page',
  data () {
    return {
      msg: 'Hello'
    }
  },
  computed: {
    reverseMsg () {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>