<template>
    <div class="nav-menu">
        <ul class="menu bg-base-100 w-56 p-2 rounded-box shadow-xl">
            <router-link to="/main/analysis">
                <li>
                    <a>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 12.3369 23.4855 12.6704 23.4571 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938V0.542876C11.3296 0.514488 11.6631 0.5 12 0.5ZM11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H11V4.06189ZM13 2.552V11H21.448C20.9827 6.55197 17.448 3.01732 13 2.552Z"
                            ></path>
                        </svg>
                        分析
                    </a>
                </li>
            </router-link>
            <router-link to="/main/upload">
                <li>
                    <a>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z"
                            ></path>
                        </svg>
                        上传
                    </a>
                </li>
            </router-link>
            <router-link to="/main/system">
                <li>
                    <a>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M10.4142 3L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142ZM18 18H14V15H16V13H14V11H16V9H14V7H11.5858L9.58579 5H4V19H20V7H16V9H18V11H16V13H18V18Z"
                            ></path>
                        </svg>
                        管理
                    </a>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less"></style>
