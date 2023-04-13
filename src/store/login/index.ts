import { defineStore } from 'pinia';
import type { ILoginState, IAccount } from './types';
import router from '@/router';

import { accountLoginRequest, accountRegisterRequest } from '@/service/login/index';
import LocalCache from '@/utils/cache';

export default defineStore('login', {
    state: (): ILoginState => {
        return {
            name: 'login',
            showLoginReactivePage: false,
        };
    },
    actions: {
        async accountLoginAction(account: IAccount) {
            const data = await accountLoginRequest({ ...account });
            if (!data) return;
            LocalCache.setCache('token', data.token);
            console.log(data.message);

            // 跳转到 main
            router.push('/main');
        },

        async accountRegisterAction(account: IAccount) {
            const data = await accountRegisterRequest({ ...account });
            if (!data) return;
            console.log(data.message);
            alert(data.message);
        },
    },
});
