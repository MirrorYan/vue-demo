<template>
  <div id="app">
    <SideMenu />
    <div class="layout">
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
  }
}
</script>

<style lang="scss">
@include font-face($font-primary, './assets/fonts/ZCOOLKuaiLe-Regular');

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
    padding: 1em;
  }
}
</style>