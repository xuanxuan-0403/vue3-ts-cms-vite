<template>
    <div class="footer">
        <footer class="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { r18_0 } from '@/config/API';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less">
.footer {
    width: 100vw !important;
    footer {
        // background: url('https://image.anosu.top/pixiv?r18=0') no-repeat center center / 100%;
        backdrop-filter: blur(30px);
    }
}
</style>
