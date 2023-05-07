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
                    <el-main>
                        <div class="mockup-window border bg-base-300">
                            <div class="flex justify-center px-4 py-16 bg-base-200">
                                <router-view></router-view>
                            </div>
                        </div>
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
    padding: 2vw;
}

.el-header {
    padding: 0 !important;
    margin-bottom: 2vw;
}

.el-main {
    padding: 0 !important;
}
</style>
