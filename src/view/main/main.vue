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
                        <router-view></router-view>
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
    padding: 0 !important;
}
</style>
