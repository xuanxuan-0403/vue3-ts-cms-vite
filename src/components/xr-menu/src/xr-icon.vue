<template>
    <div class="xr-icon">
        <div class="icon-box">
            <span>{{ title }}</span>
            <div class="icon-svg">
                <svg
                    t="1686186840561"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2051"
                    width="200"
                    height="200"
                >
                    <path
                        d="M832 928H192c-52.8 0-96-43.2-96-96V352c0-52.8 43.2-96 96-96h96v-64c0-52.8 43.2-96 96-96h448c52.8 0 96 43.2 96 96v640c0 52.8-43.2 96-96 96zM192 320c-17.6 0-32 14.4-32 32v480c0 17.6 14.4 32 32 32h640c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32H384c-17.6 0-32 14.4-32 32v544c0 17.6-14.4 32-32 32s-32-14.4-32-32V320h-96z"
                        fill="#ffffff"
                        p-id="2052"
                    ></path>
                    <path
                        d="M736 672H480c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32s-14.4 32-32 32zM736 416H480c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
                        fill="#ffffff"
                        p-id="2053"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less">
.xr-icon {
    position: relative;
    width: 100%;
    height: 3rem;
}
.icon-box {
    position: absolute;
    right: 0;
    width: 2.5rem;
    height: 3rem;
    // clip-path: inset(0% 100% 0% 0%);
    background-color: #12143e;
    border-radius: 10px;
    transition: all 0.5s;
    overflow: hidden;
    &:hover {
        // clip-path: inset(0 0 0 0);
        width: 9rem;
        background-color: #d96e65;
        overflow: initial;
        span {
            opacity: 1;
        }
    }
    span {
        position: absolute;
        transition: all 0.2s;
        bottom: 25%;
        right: -120%;
        color: #fff;
        width: 200%;
        opacity: 0;
    }
    .icon-svg {
        // position: absolute;
        direction: rtl;
        svg {
            margin: 0.2em;
            width: 2em;
            height: 2.5rem;
        }
    }
}
</style>
