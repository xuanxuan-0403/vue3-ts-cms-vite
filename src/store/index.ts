import { defineStore } from 'pinia';

import useLoginState from './login/index';
import useMainState from './main/index';
import useMainSystemState from './main/system/index';

import { IRootState } from './types';

export const useStore = defineStore('root', {
    state: (): IRootState => {
        return {
            name: 'root',
            login: useLoginState(),
            main: useMainState(),
            system: useMainSystemState(),
        };
    },
});
