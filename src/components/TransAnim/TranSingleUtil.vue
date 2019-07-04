<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <button @click="show = !show">Toggle</button>
    <transition :name="name">
      <p v-if="show">
        When "show === true", I will show !
      </p>
    </transition>
  </fieldset>
</template>

<script>
export default {
  name: 'TranSingleUtil',
  props: ['title', 'name'],
  data () {
    return { show: true }
  }
}
</script>

<style>
fieldset {
  display: inline-block;
  width: 45%;
  height: 100px;
  margin: 10px 0;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  border-radius: 10px;
}
</style>
