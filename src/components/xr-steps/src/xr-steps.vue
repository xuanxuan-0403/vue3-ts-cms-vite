<template>
    <div class="xr-steps">
        <ul class="steps steps-vertical">
            <template v-for="(list, index) in config" :key="index">
                <li class="step" :class="{ 'step-primary': index <= stepPrimary }">
                    {{ list.title }}
                </li>
            </template>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { IStepsListConfig } from '../types';
import { useStore } from '@/store';
const system = useStore().system;

export default defineComponent({
    props: {
        config: {
            type: Array as PropType<IStepsListConfig[]>,
            required: true,
        },
    },
    setup() {
        const stepPrimary = computed(() => system.stepNumber);
        return {
            stepPrimary,
        };
    },
});
</script>

<style lang="less">
.xr-step {
    transition: all 0.5s;
}

.step-primary {
    &::before {
        transition: all 0.5s;
    }
}
</style>
