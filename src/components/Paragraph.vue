<template>
  <div class="paragraph">
    <slot name="title" />
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph'
}
</script>

<style lang="scss">
.paragraph {
  margin: 20px 0;

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px;
    color: $color-blue;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 1.4em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1.1em;
  }
  h6 {
    font-size: 1em;
  }
}
</style>