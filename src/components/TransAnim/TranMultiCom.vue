<template>
  <div>
    <p>多个组件的过渡不需要使用<i>key</i>特性，需要使用<b>动态组件</b></p>
    <fieldset>
      <legend>使用动态组件</legend>
      <button @click="handleChange">Toggle</button>
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component> 
      </transition>
      Vue 的<i>component</i>元素通过<i>is</i>属性载入组件。
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'TranMultiCom',
  data () {
    return {
      view: 'v-a'
    }
  },
  methods: {
    handleChange () {
      this.view === 'v-a'
        ? (this.view = 'v-b')
        : (this.view = 'v-a')
    }
  },
  components: {
    'v-a': {
      template:'<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
}
</script>

<style scoped>
p { text-align: center; }
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 1s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
