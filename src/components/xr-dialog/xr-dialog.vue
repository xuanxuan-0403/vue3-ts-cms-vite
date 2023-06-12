<template>
    <div class="xr-dialog">
        <el-dialog v-model="dialogVisible" title="修改用户名密码" width="30%">
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
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
    setup(props) {
        const dialogVisible = ref(false);
        const userinfo = reactive({
            username: '',
            password: '',
        });

        return {
            userinfo,
            dialogVisible,
        };
    },
});
</script>

<style scoped></style>
