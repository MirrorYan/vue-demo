<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <transition name="name">
      <button v-bind:key="status" @click="status = !status">
        {{ status ? 'ON' : 'OFF' }}
      </button>
    </transition>
    <p v-html="describ"></p>
  </fieldset>
</template>

<script>
export default {
  name: 'TranMultiEleUtil',
  props: ['title', 'name', 'describ'],
  data () {
    return {
      status: true
    }
  }
}
</script>

<style scoped>
.first-enter-active, .first-leave-active {
  transition: all .3s ease;
}
.first-enter, .first-leave-to {
  opacity: 0;
}
</style>
