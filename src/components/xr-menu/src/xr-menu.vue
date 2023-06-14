<template>
    <div class="xr-menu">
        <div class="user-info avatar">
            <div class="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="@/assets/images/me-logo.jpg" />
            </div>
            <span class="user-name">{{ username }}</span>
            <p class="user-role">{{ userrole }}</p>
        </div>
        <div class="icons">
            <template v-for="item in router" :key="router.id">
                <router-link :to="item.url">
                    <XrIcon :title="item.name" />
                </router-link>
            </template>
        </div>
        <div class="exit" @click="handleLogoutClick">
            <svg
                t="1686186815647"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3986"
                width="200"
                height="200"
            >
                <path
                    d="M224 704c-8 0-16-3.2-22.4-9.6l-160-160c-12.8-12.8-12.8-32 0-44.8l160-160c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L108.8 512l137.6 137.6c12.8 12.8 12.8 32 0 44.8-6.4 6.4-14.4 9.6-22.4 9.6z"
                    fill="#ffffff"
                    p-id="3987"
                ></path>
                <path
                    d="M640 544H80c-17.6 0-32-14.4-32-32s14.4-32 32-32h560c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
                    fill="#ffffff"
                    p-id="3988"
                ></path>
                <path
                    d="M832 928H480c-52.8 0-96-43.2-96-96v-128c0-17.6 14.4-32 32-32s32 14.4 32 32v128c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32H480c-17.6 0-32 14.4-32 32v128c0 17.6-14.4 32-32 32s-32-14.4-32-32v-128c0-52.8 43.2-96 96-96h352c52.8 0 96 43.2 96 96v640c0 52.8-43.2 96-96 96z"
                    fill="#ffffff"
                    p-id="3989"
                ></path>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import LocalCache from '@/utils/cache';
import XrIcon from './xr-icon.vue';
import { useStore } from '@/store';
const login = useStore().login;

export default defineComponent({
    components: {
        XrIcon,
    },
    props: {
        username: {
            type: String,
            default: 'user',
        },
        userrole: {
            type: String,
            default: '普通用户',
        },
    },
    setup() {
        const router = computed(() => login.userMenu);

        const handleLogoutClick = () => {
            LocalCache.deleteCache('token');
            LocalCache.deleteCache('userid');
            LocalCache.deleteCache('systemTableData');
            LocalCache.deleteCache('username');
            LocalCache.deleteCache('role');
            window.location.reload();
        };
        return {
            router,
            handleLogoutClick,
        };
    },
});
</script>

<style scoped lang="less">
.xr-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;

    .user-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .user-name {
            color: #fff;
            padding: 0.3em;
            font-size: 0.8em;
        }
        .user-role {
            color: #9395b8;
            font-size: 0.3em;
        }
    }

    .icons {
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 3;
        width: 2em;

        .xr-icon {
            margin-bottom: 1rem;
        }
    }
    .exit {
        flex: 1;
        svg {
            margin: 0.2em;
            width: 2em;
            height: 2.5rem;
            path {
                transition: all 0.5s;
            }
        }
        &:hover {
            svg path {
                fill: #d96e65;
            }
        }
    }
}
</style>
