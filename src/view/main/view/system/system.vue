<template>
    <div class="system">
        <SystemTable
            :config="contentTableConfig"
            :data="tableData"
            :deleteTableEmit="deleteTableEmit"
        >
            <template #deleteBtn="scope">
                <button @click="deleteTableEmit(scope)" class="btn btn-ghost btn-sm">删除</button>
            </template>
        </SystemTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemTable from '@/components/system-table/system-table.vue';
import type { ITable } from '@/service/main/system/types';
import { contentTableConfig } from './config/content.config';

import { useStore } from '@/store';
import LocalCache from '@/utils/cache';

const store = useStore();

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        const { system } = store;

        const userid = LocalCache.getCache('userid');
        system.systemTableAction(userid as number);
        const tableData = computed((): ITable[] => system.tableList);

        const deleteTableEmit = (scope: any) => {
            const id = scope.row.id;
            system.systemDeleteTableAction(id);
        };

        return {
            tableData,
            deleteTableEmit,
            contentTableConfig,
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
