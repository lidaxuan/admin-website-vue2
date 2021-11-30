/* jshint esversion: 6 */
/*
 * @Description: 规范
 * @Author: 李大玄
 * @Date: 2021-11-29 15:41:31
 * @FilePath: /admin-website-vue2/src/router/modules/article/standard/standard.js
 */


export default [
    {
        path: '/standard/:pageName',
        name: 'standard',
        component: () => import(/* webpackChunkName: "componentA" */ '@/views/blog/standard/index.vue'),
        meta: {
            title: '规范',
            authCode: 'admin',
            keepAlive: false //缓存组件
        }
    }

]
