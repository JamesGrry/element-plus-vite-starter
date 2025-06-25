<template>
  <div class="iframe-container">
    <iframe
      :src="iframeUrl"
      class="iframe-content"
      @load="onIframeLoad"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const iframeUrl = ref<string>(window.location.search.replace('?url=', '')); // 假设URL作为查询参数传递

if (!iframeUrl.value) {
  // 如果没有URL，则使用默认值
  iframeUrl.value = 'https://baidu.com';
}

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