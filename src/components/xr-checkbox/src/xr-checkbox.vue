<template>
    <div class="xr-checkbox">
        <template v-for="tag in data">
            <el-checkbox :label="tag.tag" v-model="checkboxData"></el-checkbox>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ITagData } from '@/service/main/system/types';

import { useStore } from '@/store';
const system = useStore().system;

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<ITagData[]>,
            required: true,
        },
    },
    setup() {
        const checkboxData = ref<string[]>([]);
        system.userTag = checkboxData;
        return {
            checkboxData,
        };
    },
});
</script>

<style scoped lang="less"></style>
