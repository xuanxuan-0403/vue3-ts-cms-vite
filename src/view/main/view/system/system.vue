<template>
    <div class="system">
        <SystemTable :data="tableData" :deleteTableEmit="deleteTableEmit" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemTable from '../../components/system-table.vue';
import type { ITable } from '@/service/main/system/types';

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

        const deleteTableEmit = (id: number) => {
            console.log(id);
        };

        return {
            tableData,
            deleteTableEmit,
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
