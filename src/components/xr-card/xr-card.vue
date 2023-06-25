<template>
    <div class="xr-card">
        <div class="card w-80 h-96 bg-base-100 shadow-xl">
            <div class="p-3">
                <figure>
                    <img class="img" :src="imgUrl" alt="Shoes" />
                </figure>
            </div>
            <div class="card-body px-7 py-4">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ desc }}</p>
                <div class="card-actions justify-end">
                    <slot></slot>
                    <button class="btn btn-primary" @click="handleGoClick">Go~ !</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BASE_IP } from '@/service/request/config';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        imgpath: {
            type: String,
            default: `public/img2.jpg`,
        },
        desc: {
            type: String,
            default: '描述呢 ? ',
        },
        htmlpath: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const API = `${BASE_IP}:11451`;
        const imgUrl = ref<string>();
        if (props.imgpath) {
            const img = props.imgpath.substring(36);
            imgUrl.value = API + img;
        } else {
            imgUrl.value = 'public/img2.jpg';
        }
        const handleGoClick = () => {
            const url = props.htmlpath.substring(36);
            const htmlUrl = API + url;
            window.location.href = htmlUrl;
        };
        return {
            handleGoClick,
            imgUrl,
        };
    },
});
</script>

<style lang="less">
.img {
    height: 10vw;
}
.card-actions {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
</style>
