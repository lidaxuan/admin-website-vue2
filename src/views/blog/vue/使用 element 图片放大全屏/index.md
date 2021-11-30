<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-29 14:56:42
 * @FilePath: /admin-website-vue2/src/views/blog/vue/使用 element 图片放大全屏/index.md
-->
## 你要藏好软弱，世界大雨滂沱。万物苟且而活，无人为你背负更多。
前端QQ群: 981668406
在此附上我的QQ: 2489757828 有问题的话可以一同探讨
我的github: [李大玄](https://github.com/lidaxuan)
我的私人博客: [李大玄](https://webldx.github.io)
我的npm开源库: [李大玄](https://www.npmjs.com/~lijixuan)  
我的简书: [李大玄](https://www.jianshu.com/u/a8edf13c0df4)
我的CSDN: [李大玄](https://blog.csdn.net/weixin_43553701)
我的掘金: [李大玄](https://juejin.im/user/3236571137979256)
哔哩哔哩: [李大玄](https://space.bilibili.com/441278759/video)
语雀文档: [李大玄](https://www.yuque.com/lijixuan/kb/cvtat5)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a984bac940e4d0a9bd54c6635e021b2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5p2O5aSn546E,size_20,color_FFFFFF,t_70,g_se,x_16)

饿了么源码里面有一个未开放的组件`ElImageViewer`

```html
<ElImageViewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
```
```javascript
// 导入的时候这样
import ElImageViewer from 'element-ui/packages/image/src/image-viewer';

components: {
   ElImageViewer,
 },
 data(){
 return {
	showViewer: false,
	url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
	srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      ],
   }
},
methods: {
    onPreview() {
      this.showViewer = true;
    },
    closeViewer() {
      this.showViewer = false;
    },
  },
```
