<template>
    <div class="window mockup-window border bg-base-300">
        <div class="window-box flex justify-center px-4 py-16 bg-base-200">
            <div class="card">
                <button class="btn btn-outline btn-info">+ 点击或拖拽文件到此处</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less">
.window {
    height: 100%;
    .window-box {
        height: 100%;

        .card {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70%;
            height: 70%;
            border-radius: 50px;
            background: #e0e0e0;
            box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
            border: 2px solid #c3c6ce;
            transition: 0.5s ease-out;
            &:hover {
                border-color: #008bf8;
                // box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
            }

            .divider {
                padding: 0 20%;
            }
            .text {
            }
        }
    }
}
</style>
