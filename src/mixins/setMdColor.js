/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 14:15:23
 * @FilePath: /admin-website-vue2/src/mixins/setMdColor.js
 */

export default {
  name: '', // Pascal命名
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
  mounted() {
    this.setColor();
  },
  methods: {
    setColor() {
      this.$nextTick(() => {
        this.$hljs.initHighlightingOnLoad();
      });
    },

  },
};