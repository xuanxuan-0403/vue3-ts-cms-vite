import { RouteRecordRaw } from 'vue-router';

// * 动态添加路由
export async function mapMenusToRoutes(userMenus: any[]): Promise<RouteRecordRaw[]> {
    const routes: RouteRecordRaw[] = [];

    // 1. 先加载默认所有的 routes
    const allRoutes: RouteRecordRaw[] = []; // 所有的路由路径
    const routeFiles = import.meta.glob('../router/main/**/*.ts');

    const importPromises = Object.keys(routeFiles).map(async (key) => {
        const route = await routeFiles[key]();
        allRoutes.push((route as any).default);
    });

    await Promise.all(importPromises);

    for (const menu of userMenus) {
        if (menu.type === 1) {
            const route = allRoutes.find((route) => route.path === menu.url);
            if (route) {
                routes.push(route);
            }
        }
    }

    return routes;
}
