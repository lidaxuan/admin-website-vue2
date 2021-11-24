<!--
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2021-08-13 11:43:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-24 16:40:01
 * @FilePath: /admin-website-vue2/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background: #eff1f4;
  box-sizing: border-box;
  overflow: auto;
}
* {
  box-sizing: border-box;
}
</style>
