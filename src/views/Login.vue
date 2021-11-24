<!--
 * @Descripttion:
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-06-25 12:09:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-24 15:30:39
-->
<template>
  <div id="login" class="position-r" width="100%" height="100%" v-loading="loading" />
</template>
<script>
import auth from '@/utils/auth';
import jwt from 'jwt-js';
import { mapGetters } from 'vuex';
import nomalMenu from '@/mock/nomalMenu.json';
import findData from '@/utils/findData';

export default {
  name: 'Login',
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(['breadcrumb', 'token', 'authCodeArr', 'userMsg', 'layoutSetting']),
  },
  created() {
    this.setting = this.layoutSetting;
  },
  methods: {
    fifterMenuAuthCode(treeData = [], map = []) {
      for (var i = treeData.length; i > 0; i--) {
        if (map.indexOf(treeData[i - 1].authCode) == -1) {
          treeData.splice(i - 1, 1);
        } else {
          if (treeData[i - 1].children) {
            this.fifterMenuAuthCode(treeData[i - 1].children, map);
          }
        }
      }
      return treeData;
    },
    getChildrenId(treeData) {
      for (let i = 0; i < treeData.length; i++) {
        const item = treeData[i];
        if (item.disabled) {
          continue;
        }
        if (item.children) {
          return this.getChildrenId(item.children);
        } else {
          return item.id;
        }
      }
    },
    async getMenu(nomalMenu) {
      let children = nomalMenu;
      this.$store.dispatch('setNomalMenu', children); //先获取所有菜单

      this.$store.dispatch('setDefaultActiveHorizontalMenu', this.getChildrenId([children[0]])); //横向菜单选中
      let arr = findData.findParentArr(this.getChildrenId([children[0]]), findData.treeLevel(children), children);
      if (children && children[0].children) {
        this.$store.dispatch('setSideMenu', children[0].children);
      } else {
        this.$store.dispatch('setSideMenu', [children[0]]);
      }
      this.$store.dispatch('setBreadcrumb', arr); //面包屑
      this.$store.dispatch('setDefaultActiveMenu', this.getChildrenId([children[0]])); //侧边选中

      this.$router.push({
        path: './index',
        redirect: {
          path: this.breadcrumb[this.breadcrumb.length - 1].path,
        },
      });
    },
    initLayout() {
      this.setting.layout.value = '0';
      this.$store.commit('token', null);
      this.$store.commit('layoutSetting', this.setting); //布局初始化
      this.$store.commit('layoutTag', ''); //tag标签页
      this.$store.commit('nomalMenu', []); //先获取所有菜单
      auth.getToken('access_token').then((res) => {
        this.$store.commit('token', res);
        if (!this.token) {
          auth.jumpLogin();
        } else {
          auth.jumpOriginUrl();
          var tokenData = jwt.decodeToken(res);
          this.$store.commit('userMsg', tokenData.payload);
          this.getMenu(nomalMenu);
        }
      });
    },
  },
  mounted() {
    this.initLayout();
  },
};
</script>