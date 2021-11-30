<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 11:44:48
 * @FilePath: /admin-website-vue2/src/views/blog/standard/javaScriptStandard.md
-->

## JavaScript 规范

## 缩进

```html
设置4个空格为一个 tab, 或者 2 个，具体视团队商议
```

## 换行
```html
当一行代码逻辑过长时应手动换行，可以拆分当前逻辑，也可以让别人更好理解逻辑
```
## 空行

```html
代码块与代码块之间添加一个空行来区分

function fun() {
}


function fun() {
}
```
## 命名
```html
● 名称应有意义
● 驼峰模式
● 内置变量(不想对外但必须暴露的变量) 使用下划线开头
● 常量大写开头

const Domain = 'http://www.quclouds.com' // 常量
let startTime = '2019-04-18'   // 变量
let _time = '2018-04-18' // 内置变量
```
## 注释
```html
● 遵循每一个函数上都应有适当的注释
● 对外的函数应对参数做出描述
● 对外的函数且有返回值时应做出描述
```
## 分号
```html
行尾禁止使用分号
提高代码可读性，建议不使用分号，多使用换行符来分割代码，尽可能的拆分代码
编译器会帮我们把行末的分号添加上，开发时不用担心代码在运行时会报错

let name = '张三',
    age = 20
console.log('name: %s, age: %s', name, age)

如果团队中多数人习惯行尾添加分号，该规则可以修改
```
## 两个对象比较
```html
除以下情况外，必须使用 !== 或 === 进行两个变量的比较

● 比较两个字面量的值
● 比较 typeof 的值
● 与 null 进行比较
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```
## 引号
```html
尽可能地使用单引号
养成使用同一种引号的习惯，使代码风格统一
```
## 箭头函数参数
```html
遵循 ES6 语法，不要求只有一个参数时强制使用小括号
```
## 箭头函数大括号
```html
遵循 ES6 语法，不要求只有一行语句时强制使用大花括号
```
## generator 函数

## 强制 generator 函数中 *号前有一个空格，*与函数名之间没有空格
```html
function *generator() {
	yield "44"
	yield "55"
}
```


## 解构
```html
取数组元素时视业务逻辑尽可能使用解构

const [fileDIr, ...param] = process.argv;
const [paramXXX, paramXXX] = param;

// 解构变量小于等于三个时建议放在一行
const { argv, config, env } = process;
// 大于三个时建议换行, 因为某些情况下需要进行默认值与重命名处理，换行下模式下结构情绪
const { 
  argv = [], 
  config = "", 
  env = "",
  version = ""
} = process;
```
## 文件开头
```html
应对当前文件做出描述
应写上署名

/*
\*  @file: 文件名称
\*  @author: 作者
\*  @description: 描述
\*/
```