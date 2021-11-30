<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 14:14:37
 * @FilePath: /admin-website-vue2/src/views/blog/vue/index.vue
-->
<template>
  <div class="">
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <template v-for="(val, key, index) in comMap">
          <el-tab-pane :label="key" :name="key" :key="index" />
        </template>
      </el-tabs>
      <div font="18" class="blob">
        <span> {{ activeName }} </span>
        <el-button @click="packUp" font="16" type="text">{{ packUpFlag ? '收起' : '展开' }}</el-button>
        <el-button @click="openWindow" font="16" type="text">新开窗口</el-button>
      </div>
      <CollapseTransition>
        <component v-show="packUpFlag" :is="getComponents()"></component>
      </CollapseTransition>
    </el-card>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import CollapseTransition from '@/components/collapse';
import SetMdColor from '@/mixins/setMdColor.js';

// 自动加载该目录下的所有文件
const files = require.context('./', true, /index\.(md)$/);
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
const name = Object.keys(comMap)[0];

export default {
  name: '', // Pascal命名
  mixins: [SetMdColor],
  components: {
    ...comMap,
    CollapseTransition,
  },
  props: {},
  data() {
    return {
      comMap,
      activeName: name,
      packUpFlag: false,
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
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    getComponents() {
      return comMap[this.activeName];
    },
    handleClick(tab, event) {
      this.setColor();
      this.packUpFlag = false;
    },
    //
    packUp() {
      this.packUpFlag = !this.packUpFlag;
      this.setColor();
    },
    // 窗口新开
    openWindow() {
      const { href } = this.$router.resolve({
        path: `/newOpenArticle`,
        query: {
          name: this.activeName,
        },
      });
      let winOpen = window.open('', '_blank');
      winOpen.location = href;
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
</style>