<template>
    <div class="app">
        <router-view></router-view>
        <img class="img" src="https://image.anosu.top/pixiv?r18=0" alt="" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        console.log(
            '       　  　▃▆█▇▄▖\n　 　 　 ▟◤▖　　　◥█▎\n   　 ◢◤　 ▐　　　 　▐▉\n　 ▗◤　　　▂　▗▖　　▕█▎\n　◤　▗▅▖◥▄　▀◣　　█▊\n▐　▕▎◥▖◣◤　　　　◢██\n█◣　◥▅█▀　　　　▐██◤\n▐█▙▂　　     　◢██◤\n◥██◣　　　　◢▄◤\n 　　▀██▅▇▀\n',
        );
        console.log('👆 正在修 BUG 的车干 👆');
        return {};
    },
});
</script>
<style scoped lang="less">
.img {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
    filter: blur(30px); /* 模糊半径 */
    &::before {
        content: '';
        position: absolute; /* 一定要用绝对定位 */
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(30px); /* 模糊半径 */
    }
}
</style>
