<template>
    <div class="upload">
        <warning>请先输入描述, 再上传文件 !</warning>

        <div class="upload-box">
            <div class="mockup-window border bg-base-300">
                <div class="window flex justify-center px-4 py-16 bg-base-200">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="http://10.87.1.106:7001/upload"
                        :multiple="false"
                        accept=".zip, .rar, .7z"
                        :data="{ userId, desc, projectName }"
                        :disabled="isUploadDisabled"
                    >
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            把项目压缩包拖拽到这里, <em>或者点击上传</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">　.zip / .rar / .7z 限制为1000mb</div>
                        </template>
                    </el-upload>

                    <el-upload
                        class="upload-demo"
                        drag
                        action="http://10.87.1.106:7001/upload/img"
                        :multiple="false"
                        accept=".png, .jpg, .jpeg"
                        :data="{ userId }"
                        :disabled="isUploadDisabled"
                    >
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            把项目预览图片拖拽到这里, <em>或者点击上传</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">　.png / .jpg / .jpeg 限制为20mb</div>
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
                    <div class="flex justify-center px-4 py-16 bg-base-200">
                        <textarea
                            class="textarea"
                            placeholder="请项目名称: "
                            v-model="projectName"
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
import LocalCache from '@/utils/cache';

const store = useStore();

export default defineComponent({
    name: 'upload',
    components: {
        warning,
    },
    setup() {
        const { login } = store;
        const userId = LocalCache.getCache('userid');
        let isUploadDisabled = ref(true);
        const desc = ref<string>();
        const projectName = ref<string>();
        watch(desc, (oldValue, newValue) => {
            newValue != '' ? (isUploadDisabled.value = false) : (isUploadDisabled.value = true);
        });

        return {
            userId,
            desc,
            projectName,
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
    display: flex;

    div {
        flex: 1;
    }
}

.upload {
    width: 100%;
}
.upload-box {
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
