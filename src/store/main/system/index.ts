import { defineStore } from 'pinia';
import type { ISystemState } from './types';
import {
    systemTableRequest,
    systemDeleteTableRequest,
    getAllUserRequest,
    deleteUserRequest,
    updateUserReuqest,
} from '@/service/main/system';
import { formatUtcString } from '@/utils/date-format';

import LocalCache from '@/utils/cache';

export default defineStore('system', {
    state: (): ISystemState => {
        return {
            name: 'system',
            tableData: [],
            tableList: [],
            allUser: [],
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
                    date: formatUtcString(item.createTime),
                };
            });
            this.tableList = tableList;
        },
        async systemDeleteTableAction(id: number) {
            const result = await systemDeleteTableRequest(id);
            const userid = LocalCache.getCache('userid');
            this.systemTableAction(userid);
        },
        async getAllUserAction() {
            const data = await getAllUserRequest();
            if (!data) return;
            this.allUser = data.data;
        },
        async deleteUserAction(id: number) {
            console.log(id);
            const result = await deleteUserRequest(id);
            console.log(result);
        },
        async updateUserAction(id: number, username?: string, password?: string) {
            const result = await updateUserReuqest(id, username, password);
            console.log(result);
        },
    },
});
