<template>
    <div class="main">
        <div class="common-layout">
            <el-container>
                <el-header>
                    <NavHeader />
                </el-header>
                <el-container>
                    <el-aside width="240px">
                        <NavMenu />
                    </el-aside>
                    <el-main class="main-box">
                        <router-view v-slot="{ Component }" mode="out-in">
                            <transition name="router">
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from './components/nav-menu.vue';
import NavHeader from './components/nav-header.vue';

export default defineComponent({
    name: 'main',
    components: {
        NavHeader,
        NavMenu,
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
    padding: 3vh 3vw;
}

.el-header {
    padding: 0 !important;
    margin-bottom: 2vw;
}

.el-main {
    width: 100%;
    padding: 0 !important;
    height: 80vh;
}

.main-box {
    position: relative;
    overflow: hidden;
}

.router-enter-active,
.router-leave-active {
    position: absolute;
    transition: all 0.85s ease;
}

.router-enter-from {
    top: 3%;
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
    top: 3%;
}
</style>
