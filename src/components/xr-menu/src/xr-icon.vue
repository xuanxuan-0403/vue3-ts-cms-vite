<template>
    <div class="xr-icon">
        <div class="icon-box">
            <span>{{ title }}</span>
            <div class="icon-svg">
                <svg v-html="svgString"></svg>
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
        svgString: {
            type: String,
            required: true,
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
