<template>
  <!--    el-menu--collapse类要判断  不然功能会缺失-->
  <div class="menutree">
    <!-- <pre font="12">{{ menuData }}</pre> -->
    <template v-for="menu in menuData">
      <el-submenu :key="menu.id" :index="menu.id" v-if="menu.children" :class="['pid' + menu.pid]">
        <template slot="title">
          <div :class="['dom' + menu.pid, 'mr-10', menu.pid == '0' ? 'pl-15' : '']" height="100%">
            <icon-class :icon-class="menu.icon == '' ? '' : menu.icon" font="28" color="var(--layoutSideMenuColor7E84A3)" />
            <span slot="title">{{ menu.name }}</span>
            <div class="line d-i"></div>
          </div>
        </template>
        <!--  递归-->
        <layout-side-item :menuData="menu.children"></layout-side-item>
      </el-submenu>
      <el-menu-item :key="menu.id" :index="menu.id" v-else :disabled="menu.disabled" :class="['item' + menu.pid]">
        <div :class="['itemDom' + menu.pid, 'mr-10', menu.pid == '0' ? 'pl-15' : '']" height="100%">
          <icon-class :icon-class="menu.icon || ''" font="28" color="var(--layoutSideMenuColor7E84A3)" />
          <span slot="title">{{ menu.name }}</span>
          <div class="line d-i"></div>
        </div>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  props: ['menuData', 'isCollapse'],
  name: 'LayoutSideItem',
  methods: {
    setIcon(getEl, setEl) {
      var downlist = document.querySelectorAll('.menutree .' + getEl);
      for (var i = 0; i < downlist.length; i++) {
        let down = downlist[i].getAttribute('class');
        let classVal = down.replace(getEl, setEl);
        downlist[i].setAttribute('class', classVal);
      }
    },
  },
  mounted() {
    this.setIcon('el-icon-arrow-down', 'el-icon-caret-bottom');
    this.setIcon('el-icon-arrow-right', 'el-icon-caret-right');
  },
};
</script>
<style lang="scss">
.el-menu--popup {
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0px !important;
}

.el-menu--vertical ul {
  margin-left: 1px;
}

.el-menu--vertical .el-menu {
  background: none !important;
}
</style>
<style lang="scss" scoped>
@mixin step() {
  ::v-deep .el-submenu__title {
    span,
    i {
      color: var(--layoutSideMenuColor7E84A3) !important;
    }

    &:focus span,
    &:focus i,
    &:hover span,
    &:hover i {
      color: var(--layoutSideMenuColor344563);
    }

    &:focus,
    &:hover {
      background-color: var(--layoutSideMenuColorFFF) !important;
    }
  }
}

@mixin com($step) {
  .pid#{$step} {
    @include step();
  }
  .itemDom#{$step} {
    padding-left: 3px;
  }
  .dom#{$step},
  .item#{$step},
  .itemDom#{$step} {
    &:focus {
      background: none;
    }

    &:hover {
      color: var(--layoutSideMenuColor344563);
      background: none !important;

      span {
        color: var(--layoutSideMenuColor344563) !important;
        font-weight: 600 !important;
      }

      .iconfont {
        color: var(--layoutSideMenuSelected) !important;
        background-color: var(--layoutSideMenuColorF9F8FD) !important;
        border-radius: 8px;
      }
    }
  }
}
/*多级选中展开时*/
@for $step from 1 through 5 {
  .pid#{$step} {
    .dom#{$step},
    .item#{$step} {
      padding-left: $step * 20+23px;
    }
  }
  @include com($step);
}

::v-deep .el-menu {
  background: none;
}

.menutree {
  background-color: var(--layoutSideMenuBg);

  ::v-deep .el-submenu__title,
  ::v-deep .el-menu-item {
    text-align: left;
    height: 44px;
    line-height: 44px;
  }

  /*收起时 隐藏二级菜单中第一个*/
  .el-menu--inline .is-disabled {
    display: none;
  }

  .el-submenu span,
  .el-menu-item span {
    padding-left: 10px;
    color: var(--layoutSideMenuColor7E84A3);
    font-weight: 500;
  }

  ::v-deep .el-menu-item {
    padding: 0;
    transition: none;

    &.is-active span {
      color: var(--layoutSideMenuColor344563);
      font-weight: 600;
    }

    &.is-disabled {
      border-radius: 1px;
      border-bottom: 1px solid #cecece;
      font-weight: 500;
      color: #1d212f;
      opacity: 1;
      text-align: left;
      margin-right: 0;
    }
  }

  ::v-deep .el-submenu__title {
    padding: 0 !important;

    &:hover {
      background-color: var(--layoutSideMenuColorFFF);

      span,
      i {
        color: var(--layoutSideMenuColor344563);
      }
      span {
        font-weight: 600;
      }

      .iconfont {
        color: var(--layoutSideMenuSelected) !important;
        background: none;
        border-radius: 8px;
      }
    }
  }

  /*初始边距*/
  .pid0 {
    margin-bottom: 10px;

    ::v-deep .el-submenu__title i {
      color: var(--layoutSideMenuColorArrow);
    }

    .dom0 {
      border-radius: 0 14px 14px 0;

      &:hover {
        background-color: var(--layoutSideMenuColorF9F8FD-rgba);

        .line {
          width: 2px;
          height: 20px;
          position: absolute;
          right: 0px;
          top: 12px;
          background-color: var(--layoutSideMenuColorF9F8FD-rgba);
        }
      }
    }

    /*选中展开时*/
    &.is-active,
    &.is-active.is-opened {
      .dom0 {
        border-radius: 0 14px 14px 0;
        background-color: var(--layoutSideMenuSelected);

        &:hover {
          color: $-color-ffffff;
          background-color: var(--layoutSideMenuSelected);
        }

        .line {
          width: 2px;
          height: 20px;
          position: absolute;
          right: 0px;
          top: 12px;
          background-color: var(--layoutSideMenuSelected);
        }
      }

      .el-submenu__title {
        &:hover {
          background-color: var(--layoutSideMenuColorFFF);
        }

        &:focus span,
        &:hover span,
        &:focus i,
        &:hover i {
          color: $-color-344563;
        }
      }

      ::v-deep .el-submenu__title .iconfont {
        color: var(--layoutSideMenuColorFFF) !important;
        background: var(--layoutSideMenuSelected);
        border-radius: 8px;
      }

      ::v-deep .el-submenu__title {
        span,
        i,
        &:hover span,
        &:focus span,
        &:hover i,
        &:focus i {
          color: var(--layoutSideMenuColorFFF);
        }
      }
    }
  }

  /*没有子级的第一级*/
  .item0 {
    padding-left: 0px !important;
    margin-bottom: 10px;

    &:focus {
      background: none;
    }

    &:hover {
      background-color: var(--layoutSideMenuColorF9F8FD-rgba);
      border-radius: 0 14px 14px 0;
      margin-right: 10px !important;

      span,
      i {
        color: var(--layoutSideMenuColor344563);
      }
      span {
        font-weight: 600;
      }
      .iconfont {
        color: var(--layoutSideMenuSelected) !important;
        border-radius: 8px;
      }
    }

    &.is-active {
      &:hover {
        margin-right: 0px !important;
      }

      .itemDom0 {
        margin-right: 10px;

        border-radius: 0 14px 14px 0;
        background-color: var(--layoutSideMenuSelected);

        span,
        i {
          color: var(--layoutSideMenuColorFFF) !important;
        }

        &:hover {
          color: var(--layoutSideMenuColorFFF);
          background-color: var(--layoutSideMenuSelected);
        }

        .line {
          width: 2px;
          height: 20px;
          position: absolute;
          right: 0px;
          top: 12px;
          background-color: var(--layoutSideMenuSelected);
        }
      }
    }
  }
}

/*收起*/
/*顺序不能乱*/
.el-menu--collapse {
  .pid0 {
    .dom0 {
      border-radius: 0;
      background: none !important;

      &:hover {
        .iconfont,
        i {
          color: var(--layoutSideMenuSelected) !important;
          background: var(--layoutSideMenuColorF9F8FD-rgba) !important;
          border-radius: 8px;
        }
      }
    }

    &.is-active,
    &.is-active.is-opened {
      .el-submenu__title {
        span,
        i {
          color: var(--layoutSideMenuSelected) !important;
        }

        .dom0 {
          background: none !important;

          &:hover {
            .iconfont {
              background: var(--layoutSideMenuSelected) !important;
              border-radius: 8px;
            }
          }
        }
      }

      ::v-deep .el-submenu__title .iconfont {
        background: var(--layoutSideMenuSelected);
        border-radius: 8px;
      }
    }
  }

  @for $step from 1 through 5 {
    .item#{$step} {
      padding-left: 0px !important;
    }
  }
  /*没有子集*/
  .item0 {
    background: var(--layoutSideMenuColorFFF) !important;

    &:hover {
      .iconfont,
      i {
        color: var(--layoutSideMenuSelected) !important;
        background: var(--layoutSideMenuColorF9F8FD-rgba) !important;
        border-radius: 8px;
      }
    }

    &.is-active {
      .itemDom0 {
        background: var(--layoutSideMenuColorFFF) !important;

        span,
        i {
          color: var(--layoutSideMenuSelected) !important;
        }

        .iconfont {
          color: var(--layoutSideMenuColorFFF) !important;
          background: var(--layoutSideMenuSelected) !important;
          border-radius: 8px;
        }
      }
    }
  }
}

.el-menu--vertical {
  @for $step from 1 through 4 {
    .dom#{$step} {
      padding-left: 20px !important;
    }
    .itemDom#{$step} {
      padding-left: 0px !important;

      &:hover {
        background-color: $-color-F9F8FD;
        border-radius: 0 14px 14px 0;
        margin-right: 10px;
      }
    }
  }
}
</style>
