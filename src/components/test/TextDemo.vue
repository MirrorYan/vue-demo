<template>
  <div>
    <slot name="first" v-bind:content="content"></slot>
    <slot name="second"></slot>
    <p>{{ title }}</p>
    <button @click="$emit('update:title', newTitle)">Update title</button>
  </div>
</template>

<script>
export default {
  name: 'TextDemo',
  props: ['title'],
  data () {
    return {
      newTitle: 'This is newTitle',
      content: 'This is content, and I was changed'
    }
  }
}
</script>