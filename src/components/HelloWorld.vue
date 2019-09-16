<template>
  <div class="hello">
    <ol>
      <li><a href="#/input">通过父组件获取子组件元素焦点</a></li>
      <li>
        <a href="#/trans&anim">过渡 & 动画</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
h1, h2 { font-weight: normal; }
ol {
  display: inline-block;
  list-style-type: decimal;
}
li { margin: 0 10px; }
</style>
<style scoped>
div {
  text-align: center;
}
ul {
  text-align: left;
}
</style>