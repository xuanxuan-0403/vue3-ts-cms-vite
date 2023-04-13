<template>
    <div class="login-main">
        <div class="inputBox">
            <input type="text" placeholder="Username" v-model="userInfo.username" />
        </div>
        <div class="inputBox">
            <input type="password" placeholder="Password" v-model="userInfo.password" />
        </div>

        <XrButton @btn-click-emit="loginBtnClick" title="Login"></XrButton>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '@/store';
import XrButton from '@/components/xr-button';

const store = useStore();

export default defineComponent({
    name: 'login-main',
    components: {
        XrButton,
    },
    setup() {
        const { login } = store;
        const name = 'xyx';

        const userInfo = reactive({
            username: '',
            password: '',
        });

        const loginBtnClick = () => {
            login.accountLoginAction(userInfo);
        };

        return {
            userInfo,
            name,
            loginBtnClick,
        };
    },
});
</script>

<style scoped lang="less">
@import '../css/login.less';

.login-main {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>
