<template>
    <div class="app">
        <router-view></router-view>
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
<style scoped lang="less"></style>
