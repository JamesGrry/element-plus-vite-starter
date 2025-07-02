<template>
  <el-config-provider namespace="yd">
    <BaseHeader />
    <div class="main-container flex">
      <BaseSide />
      <div class="main-content">
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

.main-content {
  flex: 1;
  height: calc(100vh - var(--yd-menu-horizontal-height));
  overflow: auto;
}

.main-container {
  height: calc(100vh - var(--yd-menu-item-height) - 4px);
}
</style>
