<script lang="ts" setup>
import { ref } from 'vue'

const menuList = [
  { path: '/', label: '首页', id: '1', index: 0, icon: "EditPen" },
  { path: '/hellow', label: '关于', id: '2', index: 1, icon: "EditPen" },
  { path: '/iframe-page', label: 'iframe', id: '3', index: 2, icon: "EditPen" },
  {
    path: '/admin', label: '设置', id: '3', index: 3, icon: "EditPen", children: [
      { path: '/admin/user', label: '用户管理', id: '3-1', index: 0, icon: "EditPen" },
      { path: '/admin/role', label: '角色管理', id: '3-2', index: 1, icon: "EditPen" },
      { path: '/admin/permission', label: '权限管理', id: '3-3', index: 2, icon: "EditPen" },
    ]
  },
]

const isCollapse = ref(false)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu router default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse">
    <template v-for="item in menuList" :key="item.id">
      <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          {{ item.label }}
        </template>
        <el-menu-item v-for="child in item.children" :key="child.id" :index="child.path">
          <template #title>
            <el-icon>
              <component :is="child.icon"></component>
            </el-icon>
            {{ child.label }}
          </template></el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path"><template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          {{ item.label }}
        </template></el-menu-item>
    </template>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  width: 200px;
}
</style>