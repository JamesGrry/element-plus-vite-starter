import features from '@/config/features'
// import router from "@/router/index"
import type { Router } from "vue-router"
import { isWhiteList } from "@/router/whitelist"

// 登录路由
const LOGIN_PATH = '/login'

export default function registerNavigationGuard(router: Router) {
    // 路由守卫（鉴权）
    if (features.enableAuth) {
        router.beforeEach((to, from, next) => {
            const userStore = { token: '123' }
            const isLogin = !!userStore.token
            if (to.path !== LOGIN_PATH && !isLogin && !isWhiteList(to)) {
                next(LOGIN_PATH)
            } else {
                next()
            }
        })
        // 全局后置钩子
        router.afterEach(() => {
            // reset route data
            // useRouteStore().reset()
        })
    }
}
