import { defineStore } from 'pinia';
import type { ISystemState } from './types';
import { systemTableRequest } from '@/service/main/system';

export default defineStore('system', {
    state: (): ISystemState => {
        return {
            name: 'system',
        };
    },
    actions: {
        async systemTableAction(userId: number) {
            const data = await systemTableRequest(userId);
            if (!data) return;
            console.log(data);
        },
    },
});
