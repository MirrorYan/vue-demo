<template>
  <div class="page-side-menu">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <template v-for="(menu, index) in $router.options.routes">
        <el-submenu v-if="menu.children"
          :key="index"
          :index="menu.path">
          <template slot="title">
            <em v-if="menu.meta.icon" :class="menu.meta.icon"/>
            <span>{{menu.meta.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(submenu, subindex) in menu.children"
              :key="subindex"
              :index="menu.path + '/' + submenu.path"
            >{{ submenu.meta.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else
          :index="menu.path"
          :key="index">
          <em v-if="menu.meta.icon" :class="menu.meta.icon"/>
          <span>{{menu.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss">
.page-side-menu {
  width: 240px;
  .el-menu {
    height: 100%;
  }
}
</style>