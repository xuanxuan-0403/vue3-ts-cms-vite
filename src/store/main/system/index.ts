import { defineStore } from 'pinia';
import type { ISystemState } from './types';
import { systemTableRequest } from '@/service/main/system';

import LocalCache from '@/utils/cache';

export default defineStore('system', {
    state: (): ISystemState => {
        return {
            name: 'system',
            tableData: [],
        };
    },
    actions: {
        async systemTableAction(userId: number) {
            const data = await systemTableRequest(userId);
            if (!data) return;
            LocalCache.setCache('systemTableData', data.data);
            this.tableData = data.data;
        },
    },
});
