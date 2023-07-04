<template>
    <div class="display">
        <CardContainer :is-show="true" :table-data="tableData" />

        <transition name="copyrightTran" mode="out-in" appear>
            <Warning class="copyright">
                开发者: 谢亚轩 | 开发时间: 2023.04-至今 | github:
                https://github.com/xuanxuan-0403</Warning
            >
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import CardContainer from '../main/components/card-container/card-container.vue';
import type { ITable } from '@/service/main/system/types';
import Warning from '@/components/warning';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        CardContainer,
        Warning,
    },
    setup() {
        const { display } = store;
        display.AllDisplayDataAction();

        const tableData = computed((): ITable[] => display.allTableList);
        return {
            tableData,
        };
    },
});
</script>

<style lang="less">
.display {
    position: relative;
    transition: all 0.5s;
    width: 100vw;
    height: 100vh;
    padding: 5vh 8vw;
    overflow: hidden;
    background-color: #eff0f5;

    .copyright {
        width: 80vw;
        position: absolute;
        top: 2%;
        z-index: 99999999;
    }
}

.copyrightTran-enter-from,
.copyrightTran-leave-to {
    transform: translateY(-200%);
}

.copyrightTran-enter-to,
.copyrightTran-leave-from {
    transform: translateY(0);
}

.copyrightTran-enter-active,
.copyrightTran-leave-active {
    transition: all 1s ease;
}
</style>
