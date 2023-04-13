import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/login.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../view/main/main.vue'),
    },
];

const router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
});

// 导航守卫
/*
 * 1. 判断路径是否为 /login
 * 2. 读取 token ,如果没有, 则跳转到 /login
 */
router.beforeEach((to) => {
    if (to.path !== '/login') {
        const token = LocalCache.getCache('token');
        if (!token) {
            return '/login';
        }
    }

    if (to.path === '/main') {
        // /main的重定向
        // return firstMenu.url;
    }
});

export default router;
