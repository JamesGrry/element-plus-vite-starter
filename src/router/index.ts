import { createRouter, createWebHistory } from 'vue-router'
import { routes as autoRoutes } from 'vue-router/auto-routes' // 自动生成的路由
import { customRoutes } from './custom-routes' // 自定义路由

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/admin',
            component: () => import('@/components/layouts/index.vue'),
            children: [...autoRoutes, ...customRoutes],
        },
        // {
        //     path: '/login',
        //     component: () => import('@/views/login/index.vue') // 登录页面
        // },
        {
            path: '/:catchAll(.*)',
            component: () => import('@/views/error/404.vue') // 404页面
        }
    ]
})

export default router
