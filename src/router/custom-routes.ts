// src/router/custom-routes.ts
export const customRoutes = [
  {
    path: '/admin',
    component: () => import('@/views/user/index.vue'),
    meta: { requiresAuth: true } // 自定义路由元信息
  },
//   {
//     path: '/legacy-page',
//     redirect: '/modern-page' // 重定向示例
//   }
]
