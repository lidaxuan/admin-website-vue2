/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 14:13:54
 * @FilePath: /admin-website-vue2/src/router/modules/article/vueBlog/index.js
 */
export default [
  {
      path: '/vueBlog',
      name: 'vueBlog',
      component: () => import(/* webpackChunkName: "componentA" */ '@/views/blog/vue/index.vue'),
      meta: {
          title: 'vue相关',
          authCode: 'admin',
          keepAlive: false //缓存组件
      }
  }

]
