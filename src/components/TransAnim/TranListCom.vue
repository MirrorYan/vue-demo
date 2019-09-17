<template>
  <div class="section-container">
    <fieldset>
      <legend>列表进入/离开过渡 & 排序过渡</legend>
      <button @click="add">进入过渡</button>
      <button @click="remove">离开过渡</button>
      <button @click="shuffle">排序过渡</button>
      <transition-group name="list" tag="p">
        <span
          v-for="item in items"
          :key="item"
          class="list-item"
        >{{item}}</span>
      </transition-group>
      <p>Vue 使用了 FLIP 简单的动画队列，使用<i>transforms</i>将元素从之前的位置平滑过渡新的位置。</p>
      <p class="notice-text">FLIP 过渡的元素不能设置为
        <i>display: none</i> ，可以用
        <i>display: inline-block</i> 或放在
        <i>flex</i>容器中替代。
      </p>
    </fieldset>
    <fieldset>
      <legend>列表交错过渡</legend>
      <input v-model="query">
      <transition-group
        name="staggered-fade"
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li v-for="(item, index) in computedList"
          :key="item"
          :data-index="index"
        >{{ item }}</li>
      </transition-group>
      <p>使用 data 属性与 JS 通信，就可以实现列表的交错过渡。</p>
    </fieldset>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

var _ = require('lodash');
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
      // lodash 的 shuffle 方法
      this.items = _.shuffle(this.items);
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay);
    }
  },
  computed: {
    computedList: function() {
      var vm = this;
      return this.list.filter(function(item) {
        console.log(item.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1)
        return item.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    }
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      query: '',
      list: ['Bruce Lee', 'Jackie Chan', 'Chuck Norris', 'Jet Li', 'Kung Fury']
    }
  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
  transition: all 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>