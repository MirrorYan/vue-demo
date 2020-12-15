<template>
  <div v-title :data-title="$route.meta.title">
    <Computed />
    <Watch />
  </div>
</template>

<script>
import Computed from './Computed';
import Watch from './Watch';

export default {
  name: 'ComputedWatch-Page',
  components: {
    Computed,
    Watch
  },
  data () {
    return {
    }
  }
}
</script>
