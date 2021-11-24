<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 15:36:18
 * @FilePath: /admin-website-vue2/src/views/blog/vue/input内容部分文本不可删除.vue
-->
<template>
  <div class="">
    <pre>
      <code>
      </code>
    </pre>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '', // Pascal命名
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      content: ``
    };
  },
  computed: {},
  watch: {
  // temObj: {
  //   handler(newVal, oldVal) {
  //   },
  //   deep: true, // 深度
  //   immediate: true, // 立即执行
  // },
  },
  beforeCreate() {}, 
  created() {
    
  },
  beforeMount() {}, 
  mounted() {},
  methods: {
    
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>