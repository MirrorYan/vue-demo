<template>
  <div>
    <TranSingleUtil
      v-bind="msg[0]"
    ></TranSingleUtil>
    <TranSingleUtil
      v-bind="msg[1]"
    ></TranSingleUtil>
  </div>
</template>

<script>
import TranSingleUtil from './TranSingleUtil'

export default {
  name: 'TranSingle',
  data () {
    return {
      msg: [
        { title: 'CSS 过渡', name: 'fade' },
        { title: 'CSS 动画', name: 'bounce' }
      ]
    }
  },
  components: {
    TranSingleUtil
  }
}
</script>

<style>
/* CSS 过渡 */
.fade-enter-active { transition: all .5s ease; }
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
/* CSS 动画 */
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>

