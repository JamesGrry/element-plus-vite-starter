import { createRouter, createWebHistory } from 'vue-router'
import { routes as autoRoutes } from 'vue-router/auto-routes' // 自动生成的路由
import { customRoutes } from './routes/custom-routes' // 自定义路由
import registerNavigationGuard from "./guards"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: () => import('@/components/layouts/blankLayout.vue'),
            children: [
                {
                    path: '/login',
                    component: () => import('@/views/login/index.vue'),
                },
                {
                    path: '/404',
                    component: () => import('@/views/error/404.vue'),
                },
            ],
        },
        {
            path: '/',
            redirect: '/admin',
            component: () => import('@/components/layouts/index.vue'),
            children: [...autoRoutes, ...customRoutes],
        },
        {
            path: '/:catchAll(.*)',
            // redirect: '/404'
            name: 'NotFound',
            component: () => import('@/views/error/404.vue')
        }
    ]
})

// 注册路由导航守卫
registerNavigationGuard(router)

export default router