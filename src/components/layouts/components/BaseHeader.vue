<script lang="ts" setup>
import { toggleDark } from '@/composables'
import {
  ArrowDown,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <div class="flex items-center justify-center gap-2">
        <img src="@/assets/vue.svg" alt="logo" />
        <span>ADC数据服务系统</span>
        <!-- <div class="text-xl" i-yd-element-plus /> -->
        <!-- <span>Element Plus</span> -->
      </div>
    </el-menu-item>
    <!-- <el-sub-menu index="2">
      
    </el-sub-menu> -->
    <!-- <el-menu-item index="3" disabled>
      Info
    </el-menu-item>
    <el-menu-item index="4">
      Orders
    </el-menu-item> -->

    <el-menu-item h="full" @click="toggleDark()">
      <button class="w-full cursor-pointer border-none bg-transparent" style="height: var(--yd-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <el-menu-item h="full">
      <!-- <a class="size-full flex items-center justify-center" :href="repository.url" target="_blank">
        <div i-ri-github-fill />
      </a> -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ "未登录" }}
          <el-icon>
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss">
.el-menu-demo {
  &.yd-menu--horizontal>.yd-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
