/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}

declare module 'presetDaisy' {}

declare const $filters: {
    foo(): void;
    formatTime(value: string): any;
};
