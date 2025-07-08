<template>
  <div class="iframe-container">
    <iframe v-if="iframeUrl.length > 0" :src="iframeUrl" class="iframe-content" @load="onIframeLoad"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

let iframeUrl = ref<string>(''); // 强制类型转换并设置默认值



// onMounted(() => {
//   loadIframe();
// })

const loadIframe = () => {
  iframeUrl = ref<string>(route.query.url as string || ''); // 强制类型转换并设置默认值
  // if (iframeUrl.value.indexOf('/${webroot}') !== -1) {
  iframeUrl.value = import.meta.env.VITE_BASE_URL + iframeUrl.value;
  // }
}
watch(
  () => route.query.url as string,
  (newId: string) => {
    loadIframe();
  }, { immediate: true })

// 当iframe加载完成时触发
function onIframeLoad() {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    // 向iframe发送消息
    iframe.contentWindow?.postMessage({
      type: 'init',
      data: 'Hello from parent page'
    }, '*');
  }
}

// 监听来自iframe的消息
window.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
  // 在这里处理来自iframe的消息
});
</script>

<style lang="scss" scoped>
.iframe-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f5f7fa;
}

.iframe-content {
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>