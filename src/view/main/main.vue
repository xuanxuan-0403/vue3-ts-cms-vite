<template>
    <div class="main">
        <h2>main</h2>
        <button class="btn">Hello daisyui</button>
        <button class="btn btn-info">Info</button>
        <!-- <shuidi></shuidi> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import shuidi from '@/demo/shuidi.vue';

export default defineComponent({
    name: 'main',
    components: {
        // shuidi,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less"></style>
