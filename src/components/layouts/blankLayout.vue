<template>
    <el-config-provider namespace="yd">
        <div class="main-container flex justify-center">
            <RouterView />
        </div>
    </el-config-provider>
</template>

<style lang="scss" scoped>
#app {
    text-align: center;
    color: var(--yd-text-color-primary);
}

.main-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* height: calc(100vh - var(--yd-menu-item-height) - 4px); */
}
</style>
