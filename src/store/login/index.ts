import { defineStore } from 'pinia';
import type { ILoginState, IAccount } from './types';
import router from '@/router';

import { accountLoginRequest, accountRegisterRequest } from '@/service/login/index';
import LocalCache from '@/utils/cache';
import { mapMenusToRoutes } from '@/utils/map-menus';

export default defineStore('login', {
    state: (): ILoginState => {
        return {
            name: 'login',
            token: '',
            showLoginReactivePage: false,
            userMenu: [],
        };
    },
    actions: {
        async accountLoginAction(account: IAccount) {
            const data = await accountLoginRequest({ ...account });
            if (!data) return;

            LocalCache.setCache('token', data.token);
            LocalCache.setCache('userid', data.userid);
            this.userMenu = data.router;
            console.log(data.userid);
            console.log(data.message);

            // 注册动态路由
            const routes = mapMenusToRoutes(data.router);
            console.log('--------------', routes);
            routes.then((res) => {
                res.forEach((route) => {
                    router.addRoute('main', route);
                });
                LocalCache.setCache('userMenu', res);
            });

            // 跳转到 main
            router.push('/main');
        },

        async accountRegisterAction(account: IAccount) {
            const data = await accountRegisterRequest({ ...account });
            if (!data) return;
            console.log(data.message);
            alert(data.message);
        },
        loadLocalLogin() {
            console.log('--------------------');
            const token = LocalCache.getCache('token');
            if (token) this.token = token;

            const userMenu = LocalCache.getCache('userMenu');
            if (userMenu) this.userMenu = userMenu;
        },
    },
});
