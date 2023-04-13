<template>
    <div class="login">
        <div class="login-container">
            <div class="drop" style="--clr: #01b4ff">
                <div class="content">
                    <h2 class="login-title title" @click="handleLoginTitle">Login</h2>
                    <h2 class="register-title title" @click="handleRegisterTitle">Register</h2>
                    <transition name="login" mode="out-in" appear>
                        <LoginRegister v-if="login.showLoginReactivePage" />
                        <LoginMain v-else />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginMain from './components/login-main.vue';
import LoginRegister from './components/login-register.vue';
import XrButton from '@/components/xr-button/src/xr-button.vue';

import { useStore } from '@/store';

const store = useStore();

export default defineComponent({
    name: 'login',
    components: {
        LoginMain,
        LoginRegister,
        XrButton,
    },
    setup() {
        const { login } = store;

        const handleLoginTitle = () => {
            login.showLoginReactivePage = false;
        };
        const handleRegisterTitle = () => {
            login.showLoginReactivePage = true;
        };

        return {
            login,
            handleLoginTitle,
            handleRegisterTitle,
        };
    },
});
</script>

<style scoped lang="less">
@import './css/login.less';

.login-enter-from,
.login-leave-to {
    opacity: 0;
}

.login-enter-to,
.login-leave-from {
    opacity: 1;
}

.login-enter-active,
.login-leave-active {
    transition: opacity 1s ease-in-out;
}
</style>
