<template>
    <div class="main">
        <article>
            <div class="common-layout">
                <el-container>
                    <el-aside width="150px">
                        <XrMenu :username="username" :userrole="role"></XrMenu>
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
        <Footer class="footer" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from './components/nav-menu.vue';
import NavHeader from './components/nav-header.vue';
import XrMenu from '@/components/xr-menu';
import Footer from './footer.vue';
import LocalCache from '@/utils/cache';

export default defineComponent({
    name: 'main',
    components: {
        NavHeader,
        NavMenu,
        XrMenu,
        Footer,
    },
    setup() {
        const username = LocalCache.getCache('username');
        const role = LocalCache.getCache('role');
        return {
            username,
            role,
        };
    },
});
</script>

<style lang="less">
.main {
    position: relative;
    width: 98.5vw;
    height: 125vh;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    z-index: 3;
    article {
        top: 4%;
        position: absolute;
        width: 90%;
        height: 70%;
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
        padding: 1em;
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

.footer {
    position: fixed;
    // position: absolute;
    bottom: 0;
    z-index: -1;
    // margin-top: 60vh;
}
</style>
