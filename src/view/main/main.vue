<template>
    <div class="main">
        <warning>请先输入描述, 再上传文件 !</warning>

        <div class="upload">
            <div class="mockup-window border bg-base-300">
                <div class="window flex justify-center px-4 py-16 bg-base-200">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="http://127.0.0.1:7001/upload"
                        :multiple="false"
                        accept="zip, rar, 7z"
                        :data="{ userId, desc }"
                        :disabled="isUploadDisabled"
                    >
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">把文件拖拽到这里, <em>或者点击上传</em></div>
                        <template #tip>
                            <div class="el-upload__tip">zip/rar/7z 限制为1000mb</div>
                        </template>
                    </el-upload>
                </div>
            </div>
            <div class="desc">
                <div class="mockup-window border bg-base-300">
                    <div class="flex justify-center px-4 py-16 bg-base-200">
                        <textarea
                            class="textarea"
                            placeholder="请输入描述: "
                            v-model="desc"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { useStore } from '@/store';
import warning from '@/components/warning';

const store = useStore();

export default defineComponent({
    name: 'main',
    components: {
        window,
        warning,
    },
    setup() {
        const { login } = store;
        const userId = login.userId;
        let isUploadDisabled = ref(true);
        const desc = ref<string>();
        watch(desc, (oldValue, newValue) => {
            newValue != '' ? (isUploadDisabled.value = false) : (isUploadDisabled.value = true);
        });

        return {
            userId,
            desc,
            isUploadDisabled,
        };
    },
});
</script>

<style scoped lang="less">
.main {
    padding: 10vw;
    width: 100vw;
    height: 100vh;
}

.window {
    padding: 0;

    div {
        flex: 1;
    }
}
.upload {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    textarea {
        width: 100%;
        height: 100%;
    }
    .mockup-window {
        height: 100%;
        .flex {
            height: 100%;
            padding: 0;
        }
    }
}
</style>
