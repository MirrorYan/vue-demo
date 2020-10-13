<template>
  <div id="app">
    <SideMenu />
    <div class="layout">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in levelList"
          :key="item.path"
          :to="item.path"
        >{{ item.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view class="container" />
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu';

export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route.matched);
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
          matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  .layout {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  .container {
    padding: 1%;
  }
}
</style>