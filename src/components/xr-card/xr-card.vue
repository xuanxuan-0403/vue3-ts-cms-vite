<template>
    <div class="xr-card">
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img :src="img" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ desc }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Go~ !</button>
                </div>
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
            default: 'Title',
        },
        img: {
            type: String,
            default: 'public/img2.jpg',
        },
        desc: {
            type: String,
            default: '描述呢 ? ',
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="less"></style>
