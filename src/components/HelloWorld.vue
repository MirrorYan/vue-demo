<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <TextDemo
      :title="doc.title"
      @update:title="doc.title = $event"
    >
      <template #[sort]="{ content }">
        <div>This is first slot</div>
        <p>{{ content }}</p>
      </template>
      <template v-slot:second>
        <div>This is second slot</div>
      </template>
    </TextDemo>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import TextDemo from './test/TextDemo'
import LittleOne from './test/LittleOne'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      doc: {
        title: 'This is title'
      },
      newTitle: 'This is new title',
      sort: 'first',
      currentTabComponent: LittleOne
    }
  },
  computed: {

  },
  components: {
    TextDemo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
