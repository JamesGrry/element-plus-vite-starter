<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const menuList = [
  { path: '/', label: '首页', id: '1', index: 0 },
  { path: '/hellow', label: '关于', id: '2', index: 1 },
  {
    path: '/admin', label: '设置', id: '3', index: 2, children: [
      { path: '/admin/user', label: '用户管理', id: '3-1', index: 0 },
      { path: '/admin/role', label: '角色管理', id: '3-2', index: 1 },
      { path: '/admin/permission', label: '权限管理', id: '3-3', index: 2 },
    ]
  },
]

const isCollapse = ref(true)
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
        <template #title>{{ item.label }}</template>
        <el-menu-item v-for="child in item.children" :key="child.id" :index="child.path">{{ child.label
          }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">{{ item.label }}</el-menu-item>
    </template>
  </el-menu>
</template>