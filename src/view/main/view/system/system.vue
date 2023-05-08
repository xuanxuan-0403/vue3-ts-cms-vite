<template>
    <div class="system">
        <SystemTable />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SystemTable from '../../components/system-table.vue';

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less">
.system {
    padding: 0.5rem rem;
    background-color: #fff;
    border-radius: 1em;
}
</style>
