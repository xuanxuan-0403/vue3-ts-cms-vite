<template>
    <div class="xr-card">
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img class="img" :src="imgUrl" alt="Shoes" />
            </figure>
            <div class="card-body">
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
        const API = 'http://10.87.1.106:11451';
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
