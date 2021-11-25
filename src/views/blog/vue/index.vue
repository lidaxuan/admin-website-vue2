<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 14:14:37
 * @FilePath: /admin-website-vue2/src/views/blog/vue/index.vue
-->
<template>
  <div class="">
    <pre v-highlight>
      <code  class="language-javascript">
        <xmp>
          {{asdasd}}
        </xmp>
      </code>
    </pre>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
let comMap = {};

// 自动加载该目录下的所有文件
const files = require.context('./', true, /\.(vue|js)$/);

// 根据文件名组织模块对象
files.keys().map(src => {
  const match = src.match(/\/(.+)\./);
  if (match && match.length >= 1) {
    const name = match[1];
    const key = _.upperFirst(name);
    const moduleValue = files(src);
    if (moduleValue.default) {
      comMap[key] = moduleValue.default;
    }
  }
});
console.log(comMap);

export default {
  name: '', // Pascal命名
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      asdasd: ``
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