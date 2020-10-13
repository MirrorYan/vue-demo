<template>
  <div>
    
    <p>正常值：{{ msg }}</p>
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

    }
  }
}
</script>