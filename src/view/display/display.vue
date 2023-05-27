<template>
    <div class="display">
        <CardContainer :is-show="true" :table-data="tableData" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import CardContainer from '../main/components/card-container/card-container.vue';
import type { ITable } from '@/service/main/system/types';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        CardContainer,
    },
    setup() {
        const { display } = store;
        display.AllDisplayDataAction();

        const tableData = computed((): ITable[] => display.allTableList);
        return {
            tableData,
        };
    },
});
</script>

<style lang="less">
.display {
    transition: all 0.5s;
    width: 100vw;
    height: 100vh;
    padding: 5vh 8vw;
    overflow: hidden;
}
</style>
