<template>
  <MonacoEditor class="editor" :value="code" :language="language" />
</template>

<script>
import MonacoEditor from 'vue-monaco';

export default {
  components: {
    MonacoEditor
  },
  props: {
    language: String,
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
