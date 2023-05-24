<template>
    <div class="allsystem">
        <SystemTable :data="tableData" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemTable from '../../components/system-table.vue';
import type { ITable } from '@/service/main/system/types';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        const { display } = store;
        const tableData = computed((): ITable[] => display.allTableList);

        return {
            tableData,
        };
    },
});
</script>

<style scoped lang="less">
.allsystem {
    overflow: hidden;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 1em;
}
</style>
