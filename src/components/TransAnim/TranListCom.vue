<template>
  <div>
    <fieldset>
      <legend>列表进入/离开过渡</legend>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item">
          {{item}}
        </span>
      </transition-group>
    </fieldset>
    <fieldset>
      <legend>列表排序过渡</legend>
      <button @click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" :key="item">
          {{item}}
        </li>
      </transition-group>
    </fieldset>
  </div>
</template>

<script>
// 列表过渡
export default {
  name: 'TranListCom',
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>