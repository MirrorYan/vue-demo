<template>
  <div>
    <InputFocus
      ref="userInput"
    ></InputFocus>
    <button @click="handleClick">I want to input</button>  
  </div>  
</template>

<script>
import InputFocus from './test/InputFocus'

export default {
  name: 'InputFather',
  methods: {
    handleClick () {
      this.$refs.userInput.focus();
    }
  },
  components: {
    InputFocus
  }
}
</script>

<style>
p {
  margin: 0 10px;
}
</style>
