<template>
  <div class="hello">
    <ul>
      <li><a href="#/input">通过父组件获取子组件元素焦点</a></li>
      <li>
        <a href="#/trans&anim">过渡 & 动画</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
h1, h2 { font-weight: normal; }
ul {
  display: inline-block;
  list-style-type: decimal;
  padding: 0;
}
li { margin: 0 10px; }
</style>
