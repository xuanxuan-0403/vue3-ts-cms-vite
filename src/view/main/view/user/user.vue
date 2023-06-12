<template>
    <div class="user">
        <SystemTable :data="allUser" :config="contentTableConfig">
            <template #deleteBtn="scope">
                <button @click="handleDeleteClick(scope)" class="btn btn-ghost btn-sm">删除</button>
            </template>
            <template #updateBtn="scope">
                <button
                    @click="(dialogVisible.show = true), (dialogVisible.id = scope.row.id)"
                    class="btn btn-ghost btn-sm"
                >
                    修改
                </button>
            </template>
        </SystemTable>
        <!-- 弹窗 -->
        <el-dialog v-model="dialogVisible.show" title="修改用户名密码" width="30%">
            <el-form :model="userinfo">
                <el-form-item label="username">
                    <el-input v-model="userinfo.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="password">
                    <el-input v-model="userinfo.password" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible.show = false">取消</el-button>
                    <el-button
                        type="primary"
                        @click="handleUpdateClick(), (dialogVisible.show = false)"
                        >确认</el-button
                    >
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue';
import SystemTable from '@/components/system-table/system-table.vue';
import XrDialog from '@/components/xr-dialog/xr-dialog.vue';
import { contentTableConfig } from './config/content.config';
import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        SystemTable,
        XrDialog,
    },
    emits: ['dialogVisibleClick'],
    setup() {
        const { system } = store;
        system.getAllUserAction();
        const dialogVisible = reactive({
            show: false,
            id: 0,
        });
        const userinfo = reactive({
            username: '',
            password: '',
        });
        const allUser = computed(() => system.allUser);

        // * 操作
        const handleDeleteClick = (scope: any) => {
            const { id } = scope.row;
            system.deleteUserAction(id);
        };
        const handleUpdateClick = () => {
            const id: number = dialogVisible.id;
            system.updateUserAction(id, userinfo.username, userinfo.password);
        };

        return {
            allUser,
            contentTableConfig,
            handleDeleteClick,
            handleUpdateClick,
            dialogVisible,
            userinfo,
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
