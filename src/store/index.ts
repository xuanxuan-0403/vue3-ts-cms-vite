import { defineStore } from 'pinia';

import useLoginState from './login/index';
import useMainState from './main/index';
import useMainSystemState from './main/system/index';
import useDisplayState from './display/index';

import { IRootState } from './types';

export const useStore = defineStore('root', {
    state: (): IRootState => {
        return {
            name: 'root',
            login: useLoginState(),
            main: useMainState(),
            system: useMainSystemState(),
            display: useDisplayState(),
        };
    },
});

// 初始化 store
export function setupStore() {
    const store = useStore();
    const { login } = store;
    login.loadLocalLogin();
}
