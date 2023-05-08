<template>
    <div class="system">
        <SystemTable :data="data" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SystemTable from '../../components/system-table.vue';

// TODO
import { data } from './data';

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        return {
            data,
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
