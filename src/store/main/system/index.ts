import { defineStore } from 'pinia';
import type { ISystemState } from './types';
import { systemTableRequest, systemDeleteTableRequest } from '@/service/main/system';
import dayjs from 'dayjs';

import LocalCache from '@/utils/cache';

export default defineStore('system', {
    state: (): ISystemState => {
        return {
            name: 'system',
            tableData: [],
            tableList: [],
        };
    },
    actions: {
        async systemTableAction(userId: number) {
            const data = await systemTableRequest(userId);
            if (!data) return;
            LocalCache.setCache('systemTableData', data.data);
            this.tableData = data.data;
            const tableList = this.tableData.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    desc: item.desc,
                    date: dayjs(item.createTime),
                };
            });
            this.tableList = tableList;
        },
        async systemDeleteTableAction(id: number) {
            const result = await systemDeleteTableRequest(id);
            const userid = LocalCache.getCache('userid');
            this.systemTableAction(userid);
        },
    },
});
