/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 14:13:54
 * @FilePath: /admin-website-vue2/src/router/modules/article/index.js
 */
export default [
  {
      path: '/creatArticle',
      name: 'creatArticle',
      component: () => import(/* webpackChunkName: "componentA" */ '@/views/blog/creatArticle/index.vue'),
      meta: {
          title: '访客标签',
          authCode: 'admin',
          keepAlive: false //缓存组件
      }
  }

]
