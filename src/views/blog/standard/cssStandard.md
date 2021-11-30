<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 11:44:48
 * @FilePath: /admin-website-vue2/src/views/blog/standard/cssStandard.md
-->
## 清除浮动
```html
只允许使用伪元素来清除浮动， 不允许在末尾加一个 div 来做浮动的清除
```
## 命名
```html
● css 中只能出现小写字符和破折号(-)
● 避免过度的简写 .btn 表示 button  .bt 就没有意义
● class 名称应当尽可能的短且有意义
● 使用有意义的名称, 使用破折号+就近的父class （命名空间）方式命名
● 使用 js-** 单独标识一个 dom，不要将该名称写入 css 文件

.header {
    font-size: 18px;
}
.header-logo {
   width:  100px;
   height: 40px;
}
```
## 换行
```html
每一个属性的声明都应单独占一行, 如上效果
```
## 空格
```html
属性后紧跟冒号且不能有空格，冒号后空一格写属性值
```
## 分号
```html
 每一个属性结尾都应有分号 ";"
```
## 属性值的简写
```html
padding, margin, background, border, border-radius...

 大部分情况下，我们对于上面的属性书写样式时都是简写模式 `border: 1px solid red;`  
 但是当需要对某个标签做特殊处理的时候简写的模式会有混乱的情况产生, 引起副作用

#### 错误方式

div {
  background: red;
  background: url("image.jpg");
}

#### 正确方式

div {
  background-color: red;
  background-image: url("image.jpg");
}
```
## 媒体查询
```html
将媒体查询的代码放到相关样式附近
```
## 透明度
```html
使用 rgba 代替 opacity 透明值
```
## 属性
```html
对属性值使用双引号

input[type="text"] {

}
```
## 0 值
```html
在使用 0 的场景下不需要使用单位 margin: 0; 非 margin: 0px
```
## 颜色值简写
```html
使用 #fff 代替 #ffffff
使用 #abc 代替 #aabbcc
```
## 空行
```html
选择器与选择器之间添加空行

a {
    font-size: 14px;
}

p {
    color: #999;
}
```
## 文件开头

```html
应对当前文件做出描述
应写上署名

/*
\*   描述
\*   author: xxxx
*/
```