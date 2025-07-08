<script lang="ts" setup>
import { geiSysMenus } from '@/services/users'
import { ref, onMounted, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { buildMenuTree, MenuNode } from '@/utils/menu';
import MenuItem from './MenuItem.vue'
const menuList = ref<MenuNode[]>([])
const currentPath = ref<string>('')

const isCollapse = ref(false)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
const route = useRoute()
onMounted(() => {
  geiSysMenus({
    verb: 'list',
    target: 'listMenusByUserId',
  }).then((res: any) => {
    if (res.success === true) {
      menuList.value = buildMenuTree(JSON.parse(res.params.list))
    }
  })
})
//  console.log('路由变化:',route)
watch(() => route.fullPath, (newVal) => {
  if (route.query?.path) {
    currentPath.value = route.query.path.toString().replace('/', '')
  }
}, { immediate: true })


</script>

<template>
  <el-menu v-if="menuList.length > 0" :default-active="currentPath" class="el-menu-vertical-demo" :collapse="isCollapse"
    @open="handleOpen" @close="handleClose">
    <MenuItem v-for="item in menuList" :key="item.id" :item="item" />
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  width: 200px;
  overflow-y: auto;
}
</style>