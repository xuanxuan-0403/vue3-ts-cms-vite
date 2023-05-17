<template>
    <div class="system-table">
        <el-table ref="multipleTableRef" style="width: 100%" :data="data">
            <el-table-column type="selection" width="55" />
            <el-table-column property="id" label="id" width="80" />
            <el-table-column property="date" label="上传日期" width="300" />
            <el-table-column property="name" label="项目名称" width="300" />
            <el-table-column property="desc" label="项目描述" show-overflow-tooltip />
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
import { ITable } from '@/service/main/system/types';
import { useStore } from '@/store';
const store = useStore();
const { system } = store;

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<ITable[]>,
            required: true,
        },
    },
    emits: ['deleteTableEmit'],
    setup() {
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
