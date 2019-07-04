<template>
  <div>
    <input
      ref="input"
      placeholder="Do you want input something ?"
    >
    <p>
      通过父组件的按钮使子模板中的input获取焦点。
    </p>
  </div>  
</template>

<script>
export default {
  name: 'InputFocus',
  methods: {
    focus () {
      this.$refs.input.focus();
    }
  }
}
</script>

<style>
input {
  width: 200px;
}
</style>

