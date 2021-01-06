<template>
  <Paragraph>
    <template #title>
      <h2>侦听器(Watch)</h2>
    </template>
    <p>当需要在数据变化时执行异步或开销较大的操作时，这个方法更有效。</p>
  </Paragraph>
</template>

<script>
import Paragraph from '@/components/Paragraph/Paragraph';

export default {
  components: {
    Paragraph
  }
}
</script>
