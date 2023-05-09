<template>
    <div class="system">
        <SystemTable :data="tableData" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SystemTable from '../../components/system-table.vue';
import LocalCache from '@/utils/cache';
import type { ITable, ITableDataArr } from '@/service/main/system/types';
import dayjs from 'dayjs';

import { useStore } from '@/store';

const store = useStore();

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        const { system } = store;
        const userid = LocalCache.getCache('userid');
        system.systemTableAction(userid as number);
        const data: ITableDataArr[] = LocalCache.getCache('systemTableData')[0];
        console.log(data);

        const tableData: ITable[] = data.map((item) => {
            return {
                name: item.name,
                desc: item.desc,
                date: dayjs(item.createTime),
            };
        });
        return {
            tableData,
        };
    },
});
</script>

<style scoped lang="less">
.system {
    overflow: hidden;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 1em;
}
</style>
