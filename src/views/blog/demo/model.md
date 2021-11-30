<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 17:09:22
 * @FilePath: /admin-website-vue2/src/views/blog/demo/model.md
-->
如何开发一个组件，支持 v-model 功能

平时使用 element-ui 的 el-input 组件时有没有考虑过人家是如何实现 v-model 功能的?
```js
<template>
	<div>
 		<el-input v-model="text"></el-input>
	</div>
</template>

<script>

	export default {
    data() {
    	return {
      	text: "hello world"
      }
    }
  }
</script>
```
思考一下 v-model 是如何实现的？。。。。

Vuejs Docs

Vue 在 2.2 以后开始支持组件上自定义的 v-model ，利用名为 value 的 prop 和名为 input 的事件来实现 v-model 功能。

example
自定义 input
```html
<template>
	<div>
 		<input :value="value" @input="sync"/>
	</div>
</template>

<script>
	/*
   * 自定义 input 组件
   */
	export default {
		props: {
    	value: {
      	type: String,
        default: ''
      }
    },
    methods: {
    	sync(value) {
        this.$emit('input', value);
      }
    }
  }
</script>
```


```js
<template>
	<div>
    <!-- 自定义的 input 组件 -->
  	<comp-input v-model="text"></comp-input>
  </div>
</template>


<script>
	import compsInput from 'xxx'; // 上面的代码
	export default {
    components: { compsInput },
    data() {
    	return {
      	text: "hello world"
      }
    }
  }
</script>
```