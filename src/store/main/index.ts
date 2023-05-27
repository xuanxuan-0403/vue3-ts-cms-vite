import { defineStore } from 'pinia';
import type { IMainState } from './types';
import { IUploadUserInfo } from '@/service/main/types';

import { uploadRequest } from '@/service/main/index';

export default defineStore('main', {
    state: (): IMainState => {
        return {
            name: 'main',
        };
    },
    actions: {
        async uploadAction(uploadUserInfo: IUploadUserInfo) {
            const data = await uploadRequest({ ...uploadUserInfo });
            if (!data) return;
            console.log(data);
        },
    },
});
