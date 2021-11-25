<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-25 09:56:49
 * @FilePath: /admin-website-vue2/src/components/wangEditor.vue
-->

<template>
  <div ref="editor" class="e-editor-n" />
</template>

<script>
import E from 'wangeditor';
export default {
  name: 'EEditorN',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: void 0,
    },
    // 图片上传 参数名
    uploadImgName: {
      type: String,
      default: 'file',
    },
    //
    vueProp: {
      type: String,
      default: '$defaultApi',
    },
    // 图片上传 函数
    uploadImgMethod: {
      type: String,
      default: void 0,
    },
    // 自定义 图片上传 函数
    // param1: resultFiles 是 input 中选中的文件列表
    // param2: insertImgFn 是获取图片 url 后，插入到编辑器的方法
    // demo: customUploadImg(resultFiles, insertImgFn)
    customUploadImg: {
      type: Function,
      default: void 0,
    },
  },
  watch: {
    value(nv) {
      if (this.editor) {
        if (this.editor.txt.html() === nv) {
          return;
        }
        this.editor.txt.html(nv ? nv : '');
      }
    },
    overValue(nv) {
      if (nv === this.value) {
        return;
      }
      this.$emit('change', nv);
    },
  },
  data() {
    return {
      overValue: void 0,
    };
  },
  mounted() {
    // 初始化富文本
    this.editor = new E(this.$refs.editor);

    // 图片上传
    // this.editor.config.uploadImgServer = '/upload-img'
    this.editor.config.customUploadImg = this.customUploadImg || this.defaultUploadImg;

    // 监控变化，同步更新到 textarea
    this.editor.config.onchange = (html) => (this.overValue = html);

    // 创建富文本
    this.editor.create();

    // 初始化 值
    this.editor.txt.html(this.value);

    // 初始化 组件高度
    let childNodes = this.$refs.editor.childNodes;
    let height = `calc(100% - ${childNodes[0].offsetHeight}px)`;
    this.$refs.editor.childNodes[1].style.height = height;
  },
  methods: {
    async defaultUploadImg(resultFiles, insertImgFn) {
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中
      // insertImgFn(imgUrl)

      let params = new FormData();
      params.append(this.uploadImgName, resultFiles[0]);
      let res;
      try {
        res = await this[this.vueProp][this.uploadImgMethod](params);
      } catch (error) {
        this.$message.error('请求异常');
        console.error(error);
        return;
      }

      if (!res || res.status !== 1) {
        this.$message.error(res && res.reason ? res.reason : '响应错误');
        return;
      }

      if (res.data) {
        insertImgFn(res.data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.e-editor-n {
  & ::v-deep div {
    // z-index: auto!important;
    border-color: #dcdfe6 !important;
  }
  & ::v-deep div:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  & ::v-deep div:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>