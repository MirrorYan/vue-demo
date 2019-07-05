<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <button v-if="toggle" @click="show = !show">Toggle</button>
    <!-- type告诉Vue要监听的类型是animation还是transition，如果只用其中一种，Vue能自动识别类型并设置监听 -->
    <transition :name="name" :mode="mode" :type="type">
      <template v-if="toggle">
        <p v-if="show">
          When "show === true", I will show !
        </p>
      </template>
      <button
        v-else
        v-bind:key="status"
        @click="status = !status"
      >
        {{ status ? 'ON' : 'OFF' }}
      </button>
    </transition>
    <p v-html="describ"></p>
  </fieldset>
</template>

<script>
export default {
  name: 'TranUtil',
  props: ['title', 'type', 'name', 'describ', 'mode', 'toggle'],
  data () {
    return {
      status: true,
      show: true
    }
  }
}
</script>

<style scoped>
/* CSS 过渡 */
[class*="-enter-active"], [class*="-leave-active"] {
  transition: all 3s ease;
}
.first-enter, .second-enter,
.third-enter, .fourth-enter,
.fifth-enter, .fate-enter,
[class$="-leave-to"] {
  opacity: 0;
}
.fade-leave-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
.fade-enter, .fade-leave-to {
  transform: translateX(10px);
}
.second-enter, .second-leave-to,
.third-enter, .third-leave-to,
.fifth-enter, .fifth-leave-to {
  position: absolute;
}
.third-enter, .fifth-enter {
  transform: translateX(50px);
}
.third-leave-to, .fifth-leave-to {
  transform: translateX(-50px);
}

/* CSS 动画 */
.bounce-enter-active {
  animation: bounce-in 3s;
}
.bounce-leave-active {
  animation: bounce-in 3s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>
