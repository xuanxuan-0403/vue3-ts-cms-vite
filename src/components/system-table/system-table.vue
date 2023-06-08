<template>
    <div class="system-table">
        <el-table ref="multipleTableRef" style="width: 100%" :data="data">
            <el-table-column type="selection" width="55" />
            <template v-for="item in config.propList">
                <el-table-column :property="item.prop" :label="item.label" :width="item.minWidth" />
            </template>

            <el-table-column fixed="right" label="操作" class="btns">
                <template #default="scope">
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
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { contentTableType } from './types/index';
import type { ITable } from '@/service/main/system/types';
import { useStore } from '@/store';

const store = useStore();
const { system } = store;

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<ITable[]>,
            required: true,
        },
        config: {
            type: Object as PropType<contentTableType>,
            required: true,
        },
    },
    emits: ['deleteTableEmit'],
    setup() {
        const handleDeleteClick = (scope: any) => {
            const { id } = scope.row;
            system.systemDeleteTableAction(id);
        };
        const handleUpdateClick = (scope: any) => {
            console.log(scope);
        };
        return {
            handleDeleteClick,
            handleUpdateClick,
        };
    },
});
</script>

<style lang="less">
.system-table {
    width: 100%;
}

.cell {
    display: flex;
}
</style>
