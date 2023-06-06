<template>
    <div class="user">
        <SystemTable :data="allUser"></SystemTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemTable from '../../components/system-table.vue';
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
        };
    },
});
</script>

<style scoped lang="less"></style>
