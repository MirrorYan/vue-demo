<template>
  <div id="app">
    <SideMenu />
    <router-view class="container" />
  </div>
</template>

<script>
import SideMenu from '@/components/public/SideMenu';

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  .container {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>