/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 16:14:01
 * @FilePath: /admin-website-vue2/src/router/modules/article/demo/demo.js
 */

export default [
    {
        path: '/demo/:pageName',
        name: 'demo',
        component: () => import(/* webpackChunkName: "componentA" */ '@/views/blog/demo/index.vue'),
        meta: {
            title: '规范',
            authCode: 'admin',
            keepAlive: false //缓存组件
        }
    }

]
