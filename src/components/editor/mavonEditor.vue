<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-25 13:51:41
 * @FilePath: /admin-website-vue2/src/components/editor/mavonEditor.vue
-->
<template>
  <mavon-editor ref="md" @imgAdd="$imgAdd" @change="sync" />
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  name: '',
  props: [],
  components: {
    mavonEditor,
  },
  data() {
    return {
      content: '',
      configs: {},
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      let formdata = new FormData();
      this.$upload
        .post('/上传接口地址', formdata)
        .then((res) => {
          console.log(res.data);
          this.$refs.md.$img2Url(pos, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 所有操作都会被解析重新渲染
    sync(value, render) {
      this.$emit('input', { value, render });
    },
    // 提交
    submit() {
      console.log(this.content);
      // this.$message.success('提交成功，已打印至控制台！');
    },
  },
  mounted() {},
};
</script>
