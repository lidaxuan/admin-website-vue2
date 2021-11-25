<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-24 16:00:57
 * @FilePath: /admin-website-vue2/src/views/blog/creatArticle/index.vue
-->
<template>
  <div class="hmax">
    <el-card class="" height="100%">
      <el-button type="primary" size="mini" @click="contentVisible = true">查看内容</el-button>
      <!-- <WangEditor v-model="content"></WangEditor> -->
      <!-- {{ content }} -->
      <MavonEditor v-model="content"></MavonEditor>
    </el-card>
    <Dra
      :visible.sync="contentVisible"
      title="内容"
      titleIconBg="var(--layoutMain-6359CA)"
      titleIcon="icon-D1-A6"
      footerBtnPosition="right"
      append-to-body
      size="396px"
    >
      <pre v-highlight>
        <code  class="language-html hljs">

        </code>
      </pre>
    </Dra>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import WangEditor from '@/components/editor/wangEditor.vue';
import MavonEditor from '@/components/editor/mavonEditor.vue';

export default {
  name: '', // Pascal命名
  mixins: [],
  components: {
    WangEditor,
    MavonEditor,
  },
  props: {},
  data() {
    return {
      content: '',
      contentVisible: false,
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