// import type { UserModule } from './types'
// import { ViteSSG } from 'vite-ssg'

// import "@/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`
// import 'element-plus/dist/index.css'
import router from '@/router/index'
import { pinia } from '@/store/index'
import App from './App.vue'
import { createApp } from "vue";


const app = createApp(App);
import '@/assets/styles/index.scss'

import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 定义视口检测指令
app.directive('viewport', {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      binding.value(entries[0].isIntersecting)
    }, {
      threshold: typeof binding.arg === 'number' ? binding.arg : 0.1
    })
    el._observer = observer
    observer.observe(el)
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
})

app.use(pinia)
app.use(router)

app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   {
//     base: import.meta.env.BASE_URL,
//   },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )
