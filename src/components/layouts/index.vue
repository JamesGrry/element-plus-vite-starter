<template>
  <el-config-provider namespace="yd">
    <BaseHeader />
    <div class="main-container flex">
      <BaseSide />
      <div w="full" py="4">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--yd-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--yd-menu-item-height) - 4px);
}
</style>
