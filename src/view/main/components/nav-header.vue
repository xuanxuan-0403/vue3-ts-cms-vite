<template>
    <div class="nav-header">
        <div class="navbar bg-base-100 shadow-xl">
            <div class="flex-1">
                <router-link to="/display">
                    <a class="btn btn-ghost normal-case text-xl">WebGL管理系统</a>
                </router-link>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="../../../../public/vite.svg" />
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li><a>设置</a></li>
                        <li @click="handleLogoutClick"><a>登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LocalCache from '@/utils/cache';

export default defineComponent({
    setup() {
        const handleLogoutClick = () => {
            LocalCache.deleteCache('token');
            LocalCache.deleteCache('userid');
            LocalCache.deleteCache('systemTableData');
            window.location.reload();
        };

        return {
            handleLogoutClick,
        };
    },
});
</script>

<style scoped lang="less">
.navbar {
    border-radius: 1em;
}
</style>
