<template>
    <div class="main">
        <article>
            <div class="common-layout">
                <el-container>
                    <el-aside width="150px">
                        <XrMenu></XrMenu>
                    </el-aside>
                    <el-main class="main-box">
                        <section>
                            <router-view v-slot="{ Component }" mode="out-in">
                                <!-- <transition name="router" appear> -->
                                <component :is="Component" />
                                <!-- </transition> -->
                            </router-view>
                        </section>
                    </el-main>
                </el-container>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from './components/nav-menu.vue';
import NavHeader from './components/nav-header.vue';
import XrMenu from '@/components/xr-menu';

export default defineComponent({
    name: 'main',
    components: {
        NavHeader,
        NavMenu,
        XrMenu,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less">
.main {
    width: 100vw;
    height: 100vh;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    article {
        width: 90%;
        height: 94%;
        background-color: #12143e;
        border-radius: 40px;
    }
}

.el-header {
    padding: 0 !important;
    margin-bottom: 2vw;
}

.el-main {
    width: 100%;
    height: 100%;
}

.main-box {
    position: relative;
    overflow: hidden;
    padding: 0.4rem;
    section {
        width: 100%;
        height: 100%;
        background-color: #f3f6fb;
        border-radius: 40px;
        overflow: hidden;
    }
}

.router-enter-active,
.router-leave-active {
    position: absolute;
    transition: all 0.85s ease;
    overflow: hidden;
}

.router-enter-from {
    // top: 3%;
    opacity: 0;
}

.router-enter-to {
    opacity: 1;
    top: 0;
}

.router-leave-from {
    opacity: 1;
    top: 0;
}

.router-leave-to {
    opacity: 0;
    // top: 3%;
}

.common-layout,
.el-container {
    height: 100% !important;
}

.el-aside {
    overflow: unset;
}
</style>
