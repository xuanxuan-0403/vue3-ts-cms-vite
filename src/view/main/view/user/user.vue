<template>
    <div class="user">
        <SystemTable :data="allUser" :config="contentTableConfig">
            <!-- <template #default="scope">
                    <button
                        v-if="config.showUpdateColumn"
                        @click="handleDeleteClick(scope)"
                        class="btn btn-ghost btn-sm"
                    >
                        修改
                    </button>
                    <button @click="handleUpdateClick(scope)" class="btn btn-ghost btn-sm">
                        删除
                    </button>
                </template> -->
            <template #deleteBtn="scope">
                <button @click="handleDeleteClick(scope)" class="btn btn-ghost btn-sm">删除</button>
            </template>
            <template #updateBtn="scope">
                <button @click="handleDeleteClick(scope)" class="btn btn-ghost btn-sm">修改</button>
            </template>
        </SystemTable>
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

        // * 操作
        const handleDeleteClick = (scope: any) => {
            const { id } = scope.row;
            system.deleteUserAction(id);
        };
        const handleUpdateClick = (scope: any) => {};
        return {
            allUser,
            contentTableConfig,
            handleDeleteClick,
            handleUpdateClick,
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
