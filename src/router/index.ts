import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/display',
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('@/view/display/display.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/view/main/main.vue'),
        children: [
            {
                path: '',
                name: 'overview',
                component: () => import('@/view/main/view/overview/overview.vue'),
            },
        ],
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
router.beforeEach((to, from, next) => {
    if (to.path == '/login') next();
    if (!LocalCache.getCache('token')) {
        if (to.path == '/display') {
            next();
        } else {
            next({ path: '/display' });
        }
    } else {
        next();
    }
});

export default router;
