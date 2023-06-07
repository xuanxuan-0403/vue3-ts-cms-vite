<template>
    <div class="user">
        <SystemTable :data="allUser" :config="contentTableConfig"></SystemTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemTable from '@/components/system-table/system-table.vue';
import { contentTableConfig } from './config/content.config';
import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        SystemTable,
    },
    setup() {
        const { system } = store;
        system.getAllUserAction();
        const allUser = computed(() => system.allUser);
        return {
            allUser,
            contentTableConfig,
        };
    },
});
</script>

<style scoped lang="less">
.user {
    overflow: hidden;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 1em;
}
</style>
