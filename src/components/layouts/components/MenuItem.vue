<template>
    <el-sub-menu v-if="item.children && item.children.length" :index="item.id.toString()">
        <template #title>
            <el-icon v-if="item.icon">
                <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
        </template>
        <MenuItem v-for="child in item.children" :key="child.id" :item="child" />
    </el-sub-menu>

    <el-menu-item v-else :index="item.feature?.expression" :expression="item.feature?.expression"
        @click="handleClickMenuItem(item)">
        <el-icon v-if="item.icon">
            <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
    </el-menu-item>
</template>

<script lang="ts" setup>
import router from '@/router';
import type { MenuNode } from '@/utils/menu'; // 你的类型定义路径
import { ref } from 'vue';
defineProps<{ item: MenuNode }>();
const activeMenu = ref('');
const handleClickMenuItem = (item: MenuNode) => {
    const cleaned = item?.feature?.expression.replace('${webroot}', '') ?? '';
    if (cleaned.startsWith('/#/')) {
        const vuePath = cleaned.replace('/#', '');
        activeMenu.value = vuePath;
        router.push(vuePath);
    } else {
        activeMenu.value = '/iframe-page';
        router.push({
            path: '/iframe-page',
            query: { url: cleaned }
        });
    }
}

const someIframeCondition = (path: string) => {
    return path.startsWith('/${webroot}')
}
</script>
