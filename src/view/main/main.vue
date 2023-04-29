<template>
    <div class="main">
        <div class="mockup-window border bg-base-300">
            <div class="window flex justify-center px-4 py-16 bg-base-200">
                <el-upload
                    class="upload-demo"
                    drag
                    action="http://127.0.0.1:7001/upload"
                    :multiple="false"
                    accept="zip, rar, 7z"
                    :data="userId"
                >
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                    <template #tip>
                        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                    </template>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { useStore } from '@/store';

const store = useStore();

export default defineComponent({
    name: 'main',
    components: {
        window,
    },
    setup() {
        const { login } = store;
        const userId = login.userId;

        return {
            userId,
        };
    },
});
</script>

<style scoped lang="less">
.main {
    padding: 10vw;
    width: 100vw;
    height: 100vh;
    .window {
        padding: 0;

        div {
            flex: 1;
        }
    }
}
</style>
