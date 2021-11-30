<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 16:04:16
 * @FilePath: /admin-website-vue2/src/views/blog/demo/index.vue
-->
<template>
  <div class="markdown">
    <el-card style="background: #f6f8fa" class="markdown-body">
      <component :is="getComp()"></component>
    </el-card>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
const files = require.context('./', true, /\.(md)$/);
const comMap = {};
files.keys().map((src) => {
  const match = src.match(/\/(.+)\./);
  if (match && match.length >= 1) {
    const moduleValue = files(src);
    if (moduleValue.default) {
      const name = match[1].split('/')[0];
      comMap[name] = moduleValue.default;
    }
  }
});
import SetMdColor from '@/mixins/setMdColor.js';

export default {
  name: '', // Pascal命名
  mixins: [SetMdColor],
  components: {
    ...comMap,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    // temObj: {
    //   handler(newVal, oldVal) {},
    //   deep: true, // 深度
    //   immediate: true, // 立即执行
    // },
  },
  beforeCreate() {},
  created() {
    this.setColor();
  },
  beforeMount() {},
  mounted() {
    this.setColor();
  },
  methods: {
    getComp() {
      const params = this.$route.params;
      return comMap[params.pageName];
    },
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
.markdown {
  .markdown-body {
    background: #f6f8fa;
  }
}
</style>