import { defineStore } from 'pinia';

import useLoginState from './login/index';
import { IRootState } from './types';

export const useStore = defineStore('root', {
    state: (): IRootState => {
        return {
            name: 'root',
            login: useLoginState(),
        };
    },
});
