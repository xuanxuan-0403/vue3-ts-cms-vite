<template>
    <div class="display">
        <div class="list">
            <el-row :gutter="20">
                <template v-for="data in tableData">
                    <el-col :span="6"
                        ><div class="grid-content ep-bg-purple" />
                        <XrCard class="xr-card" v-bind="data" :title="data.name" />
                    </el-col>
                </template>
            </el-row>
        </div>
        <router-link to="/login">
            <div class="login">
                <button>
                    <p>Login</p>
                    <svg
                        stroke-width="4"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import XrCard from '@/components/xr-card/xr-card.vue';
import type { ITable } from '@/service/main/system/types';

import { useStore } from '@/store';
const store = useStore();

export default defineComponent({
    components: {
        XrCard,
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
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 5vh 8vw;
    transition: all 0.5s;

    .xr-card {
        margin-bottom: 2vw;
    }

    .login {
        position: fixed;
        right: 3vw;
        top: 3vw;

        button {
            padding: 0;
            margin: 0;
            border: none;
            background: none;
        }

        button {
            --primary-color: #111;
            --hovered-color: #c84747;
            position: relative;
            display: flex;
            font-weight: 600;
            font-size: 20px;
            gap: 0.5rem;
            align-items: center;
        }

        button p {
            margin: 0;
            position: relative;
            font-size: 20px;
            color: var(--primary-color);
        }

        button::after {
            position: absolute;
            content: '';
            width: 0;
            left: 0;
            bottom: -7px;
            background: var(--hovered-color);
            height: 2px;
            transition: 0.3s ease-out;
        }

        button p::before {
            position: absolute;
            /*   box-sizing: border-box; */
            content: 'Login';
            width: 0%;
            inset: 0;
            color: var(--hovered-color);
            overflow: hidden;
            transition: 0.3s ease-out;
        }

        button:hover::after {
            width: 100%;
        }

        button:hover p::before {
            width: 100%;
        }

        button:hover svg {
            transform: translateX(4px);
            color: var(--hovered-color);
        }

        button svg {
            color: var(--primary-color);
            transition: 0.2s;
            position: relative;
            width: 15px;
            transition-delay: 0.2s;
        }
    }
}
</style>
