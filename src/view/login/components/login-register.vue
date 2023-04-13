<template>
    <div class="login-register">
        <div class="inputBox">
            <input type="text" placeholder="Username" v-model="userInfo.username" />
        </div>
        <div class="inputBox">
            <input type="password" placeholder="Password" v-model="userInfo.password" />
        </div>
        <XrButton @btn-click-emit="registerBtnClick" title="Register"></XrButton>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '@/store';
import XrButton from '@/components/xr-button';

const store = useStore();

export default defineComponent({
    name: 'login-register',
    components: {
        XrButton,
    },
    setup() {
        const { login } = store;

        const userInfo = reactive({
            username: '',
            password: '',
        });
        const registerBtnClick = () => {
            login.accountRegisterAction(userInfo);
        };
        return {
            userInfo,
            registerBtnClick,
        };
    },
});
</script>

<style scoped lang="less">
@import '../css/login.less';
.login-register {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>
