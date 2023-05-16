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
                    <button class="btn btn-primary" @click="handleGoClick">Go~ !</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { random } from '@/utils/random';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        img: {
            type: String,
            default: `public/img${random(1, 3)}.jpg`,
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
        const handleGoClick = () => {
            console.log(props.htmlpath);
            const url = props.htmlpath.slice(11, props.htmlpath.length);
            const htmlUrl = 'http://10.87.1.106:10000' + url;
            // /home/local/egg-server-ts/app/public/webgl/6c7a5f68-5006-4697-bb75-5d23ab847af4/data-visualization/index.html
            // http://10.87.1.106:10000/egg-server-ts/app/public/webgl/
            window.location.href = htmlUrl;
        };
        return {
            handleGoClick,
        };
    },
});
</script>

<style scoped lang="less"></style>
