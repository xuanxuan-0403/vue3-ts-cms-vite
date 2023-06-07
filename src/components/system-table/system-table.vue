<template>
    <div class="system-table">
        <el-table ref="multipleTableRef" style="width: 100%" :data="data">
            <el-table-column type="selection" width="55" />
            <template v-for="item in config!.propList">
                <el-table-column :property="item.prop" :label="item.label" :width="item.minWidth" />
            </template>

            <el-table-column fixed="right" label="操作" width="100">
                <template #default="scope">
                    <button @click="handleDeleteClick(scope)" class="btn btn-ghost btn-sm">
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
            // required: true,
        },
    },
    emits: ['deleteTableEmit'],
    setup(props) {
        const handleDeleteClick = (scope: any) => {
            const { id } = scope.row;
            system.systemDeleteTableAction(id);
        };
        return {
            handleDeleteClick,
        };
    },
});
</script>

<style scoped lang="less">
.system-table {
    width: 100%;
}
</style>
