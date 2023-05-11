<template>
    <div class="display">
        <template v-for="data in tableData">
            <XrCard class="xr-card" v-bind="data" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import XrCard from '@/components/xr-card/xr-card.vue';
import type { ITable } from '@/service/main/system/types';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        XrCard,
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

<style scoped lang="less">
.display {
    padding: 5vh 8vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all 0.5s;

    .xr-card {
        margin-bottom: 2vw;
    }
}
</style>
