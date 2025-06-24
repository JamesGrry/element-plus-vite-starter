import path from 'node:path'
import Vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 是否监听所有地址
    host: true,
    // 端口号
    port: 3333,
    // 端口被占用时，是否直接退出
    strictPort: false,
    // 是否自动打开浏览器
    open: true,
    // 反向代理
    proxy: {
      "/api/v1": {
        target: "https://XXXX",
        // 是否为 WebSocket
        // ws: false,
        // 是否允许跨域
        changeOrigin: true,
      },
    },
    // 是否允许跨域
    cors: true,
    // 预热常用文件，提高初始页面加载速度
    warmup: {
      clientFiles: [
        "./src/layouts/**/*.*",
        "./src/pinia/**/*.*",
        "./src/router/**/*.*",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@@": path.resolve(__dirname, "src/common")
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Vue(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
  ],

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['element-plus'],
  },
})
