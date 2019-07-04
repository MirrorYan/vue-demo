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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  display: inline-block;
  list-style-type: decimal;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
