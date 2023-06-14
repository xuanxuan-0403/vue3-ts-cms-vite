<template>
    <div class="upload">
        <warning>请先输入项目名称, 描述, 再上传文件 !</warning>
        <div class="container">
            <XrSteps class="steps" :config="stepConfig" />
            <div class="upload-box">
                <div class="mockup-window border bg-base-300">
                    <div class="window flex justify-center px-4 py-16 bg-base-200">
                        <div class="uploadZip">
                            <el-upload
                                class="upload-demo"
                                drag
                                :action="zipAPI"
                                :multiple="false"
                                accept=".zip"
                                :data="{ userId, desc, projectName }"
                                :disabled="isUploadDisabled"
                                :on-success="onUploadSuccess"
                                :on-progress="onUploadProgress"
                            >
                                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                                <div class="el-upload__text">
                                    把项目压缩包拖拽到这里, <em>或者点击上传</em>
                                </div>
                                <template #tip>
                                    <div class="el-upload__tip">
                                        　.zip / .png / .jpg 限制为1000mb
                                    </div>
                                </template>
                            </el-upload>
                        </div>
                        <div class="uploadImg">
                            <el-upload
                                :action="imgAPI"
                                list-type="picture-card"
                                :auto-upload="true"
                                :disabled="isUploadImgDisabled"
                                accept=".png, .jpg"
                                :data="{ userId, desc, projectName }"
                            >
                                <el-icon><Plus /></el-icon>
                                <template #file="{ file }">
                                    <div>
                                        <img
                                            class="el-upload-list__item-thumbnail"
                                            :src="file.url"
                                            alt=""
                                        />
                                    </div>
                                </template>
                            </el-upload>
                        </div>
                    </div>
                </div>
                <div class="desc">
                    <div class="mockup-window border bg-base-300">
                        <div>
                            <div class="flex flex-1 justify-center px-4 py-16 bg-base-200">
                                <textarea
                                    class="textarea"
                                    placeholder="请项目名称: "
                                    v-model="projectName"
                                ></textarea>
                            </div>
                            <div class="flex flex-1 justify-center px-4 py-16 bg-base-200">
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { useStore } from '@/store';
const system = useStore().system;
import warning from '@/components/warning';
import LocalCache from '@/utils/cache';
import { BASE_HOST } from '@/service/request/config';
import XrSteps from '@/components/xr-steps';
import { stepConfig } from './config/step.config';

export default defineComponent({
    name: 'upload',
    components: {
        warning,
        XrSteps,
    },
    setup() {
        const zipAPI = `${BASE_HOST}/upload/`;
        const imgAPI = `${BASE_HOST}/uploadImage/`;

        const userId = LocalCache.getCache('userid');
        let isUploadDisabled = ref(true);
        let isUploadImgDisabled = ref(true);
        const desc = ref<string>();
        const projectName = ref<string>();

        // 监听项目名称的输入
        watch(projectName, (oldValue, newValue) => {
            newValue !== ''
                ? ((isUploadDisabled.value = false), (system.stepNumber = 1))
                : (isUploadDisabled.value = true);
        });

        // 监听项目描述的输入
        watch(desc, (oldValue, newValue) => {
            newValue !== '' ? (system.stepNumber = 2) : '';
        });

        // 文件上传完成时的钩子
        const onUploadSuccess = () => {
            isUploadImgDisabled.value = false;
            system.stepNumber = 4;
        };
        // 文件上传时的钩子
        const onUploadProgress = () => {
            system.stepNumber = 3;
        };

        return {
            zipAPI,
            imgAPI,
            userId,
            desc,
            projectName,
            isUploadDisabled,
            isUploadImgDisabled,
            onUploadSuccess,
            onUploadProgress,
            stepConfig,
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
    justify-content: space-between;

    .uploadZip {
        width: 70%;
    }
    .uploadImg {
        width: 30%;
    }
}

.upload {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .container {
        width: 100%;
        height: 50%;
        justify-content: space-between;
        display: flex;
    }
    .steps {
        flex: 1;
    }
}
.upload-box {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 4;

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
    .desc {
        .mockup-window {
            & > div {
                display: flex;
            }
        }
    }
}
</style>
<style lang="less">
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.uploadImg {
    .el-upload {
        background-color: #fff;
        width: 178px;
        height: 178px;
    }
    .el-upload-list__item {
        width: 178px;
        height: 178px;
    }
}

.el-upload-dragger {
    height: 178px;
}
</style>
