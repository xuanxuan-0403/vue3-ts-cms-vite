<template>
    <div class="allsystem">
        <CardContainer :is-show="false" :table-data="tableData" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { ITable } from '@/service/main/system/types';
import CardContainer from '../../components/card-container/card-container.vue';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        CardContainer,
    },
    setup() {
        const { display } = store;
        display.AllAuditDataAction();

        const tableData = computed((): ITable[] => display.allAuditTableList);

        return {
            tableData,
        };
    },
});
</script>

<style scoped lang="less">
.allsystem {
    // overflow: hidden;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 1em;
}
</style>
