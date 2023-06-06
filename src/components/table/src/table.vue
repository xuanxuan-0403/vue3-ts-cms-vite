<template>
    <div class="xr-table">
        <header class="header">
            <slot name="header">
                <div class="title">{{ title }}</div>
                <div class="handler">
                    <slot name="headerHandler"></slot>
                </div>
            </slot>
        </header>
        <el-table
            :data="listData"
            border
            style="width: 100%"
            @selection-change="handleSelectChange"
            v-bind="childrenProps"
        >
            <el-table-column v-if="showSelectColumn" align="center" width="50" type="selection" />
            <el-table-column
                v-if="showIndexColumn"
                type="index"
                label="序号"
                align="center"
                width="80"
            />
            <template v-for="propItem in propList" :key="propItem.prop">
                <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
                    <!-- 这个default要写 -->
                    <!-- el-table-column 要展示的数据会通过作用域插槽传进来, 在这个scope里 -->
                    <template #default="scope">
                        <!-- 如果我们想自定义数据的标签, 这个时候需要由外界决定 -->
                        <!-- 动态的绑定插槽name, 并把数据返回出去 -->
                        <slot :name="propItem.slotName" :row="scope.row">
                            {{ scope.row[propItem.prop] }}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <footer class="footer" v-if="showFooter">
            <!-- 分页 -->
            <slot name="footer">
                <el-pagination
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange"
                    :current-page="page.currentPage"
                    :page-size="page.pageSize"
                    :page-sizes="[10, 20, 30]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="listCount"
                />
            </slot>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { propListType } from '../index';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '',
        },
        listData: {
            type: Array,
            required: true,
        },
        listCount: {
            type: Number,
            default: 0,
        },
        propList: {
            type: Array as PropType<propListType[]>,
            required: true,
        },
        showIndexColumn: {
            type: Boolean,
            default: false,
        },
        showSelectColumn: {
            type: Boolean,
            default: false,
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        // 有关翻页的偏移量
        page: {
            type: Object,
            default: () => ({ currentPage: 0, pageSize: 10 }),
        },
        childrenProps: {
            type: Object,
            default: () => ({}),
        },
    },
    emits: ['selectionChange', 'update:page'],
    setup(props, { emit }) {
        const handleSelectChange = (value: any) => {
            emit('selectionChange', value);
        };

        const handleSizeChange = (pageSize: number) => {
            emit('update:page', { ...props.page, pageSize });
        };

        const handleCurrentChange = (currentPage: number) => {
            emit('update:page', { ...props.page, currentPage });
        };

        return {
            handleSelectChange,
            handleSizeChange,
            handleCurrentChange,
        };
    },
});
</script>

<style scoped lang="less">
.header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
        font-size: 20px;
        font-weight: 700;
    }

    .handler {
        align-items: center;
    }
}

.footer {
    margin-top: 15px;

    .el-pagination {
        text-align: right;
    }
}
</style>
