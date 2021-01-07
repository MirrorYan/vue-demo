<template>
  <MonacoEditor
    class="editor"
    theme="vs-dark"
    :value="value"
    :language="language"
    :readOnly="readOnly"
    :automaticLayout="true"
  />
</template>

<script>
import MonacoEditor from 'vue-monaco';

export default {
  components: {
    MonacoEditor
  },
  props: {
    language: String,
    value: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
