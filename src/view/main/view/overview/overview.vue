<template>
    <div class="overview">
        <h2>overview</h2>
        <XrEcharts />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import XrEcharts from '@/components/xr-echarts';
import { lineEchartOption } from './config/line.echart';

export default defineComponent({
    components: {
        XrEcharts,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less"></style>
