<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-29 15:27:25
 * @FilePath: /admin-website-vue2/src/views/blog/vue/newOpen.vue
-->
<template>
  <div class="">
    <h2>{{ activeName }}</h2>
    <hr />
    <component :is="getComponents()"></component>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import sourcePage from './index.vue';
export default {
  name: '', // Pascal命名
  mixins: [sourcePage],
  components: {},
  props: {},
  data() {
    return {};
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
    this.activeName = this.$route.query.name;
    document.title = this.activeName;
  },
  beforeMount() {},
  mounted() {
    this.setColor();
  },
  methods: {},
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