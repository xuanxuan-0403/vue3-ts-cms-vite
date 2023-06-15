<template>
    <div class="xr-echarts">
        <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import type { EChartsOption } from 'echarts';

export default defineComponent({
    props: {
        options: {
            type: Object as PropType<EChartsOption>,
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '360px',
        },
    },
    setup() {
        const echartDivRef = ref<HTMLElement>();
        return {
            echartDivRef,
        };
    },
});
</script>

<style scoped></style>
