<template>
    <el-config-provider namespace="yd">
        <div class="not-found-container">
            <el-empty description="未找到该页面">
                <p>将在 <span>{{ countdown }}</span> 秒后返回上一页，或者点击下面的按钮立即返回</p>
                <el-button @click="goBack">返回上一页</el-button>
            </el-empty>
        </div>
    </el-config-provider>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const countdown = ref(5);
const router = useRouter();
let interval: any;
const goBack = () => {
    router.back();
};

onMounted(() => {
    interval = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(interval);
            goBack();
        }
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.not-found-container {
    text-align: center;
}


.el-button {
    padding: 10px 20px;
    font-size: 16px;
}
</style>