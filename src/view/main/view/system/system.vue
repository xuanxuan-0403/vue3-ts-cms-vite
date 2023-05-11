<template>
    <div class="system">
        <SystemTable :data="tableData" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
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
        // const data = computed((): ITableDataArr[] => LocalCache.getCache('systemTableData'));
        const data = computed((): ITableDataArr[] => system.tableData);
        const tableData = computed(() => {
            const tableData: ITable[] = data.value.map((item) => {
                return {
                    name: item.name,
                    desc: item.desc,
                    date: dayjs(item.createTime),
                };
            });
            return tableData;
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
