<template>
    <div class="xr-button">
        <button @click="btnClick">{{ title }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'HOVER ME',
        },
    },
    emits: ['btnClickEmit'],
    setup(props, { emit }) {
        const btnClick = () => {
            emit('btnClickEmit');
        };

        return {
            btnClick,
        };
    },
});
</script>

<style scoped lang="less">
@import './css/index.less';
</style>
