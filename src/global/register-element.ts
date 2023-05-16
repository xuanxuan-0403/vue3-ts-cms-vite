import type { App } from 'vue';

// import 'element-plus/lib/theme-chalk/base.css';
import 'element-plus/dist/index.css';

import {
    ElButton,
    ElAffix,
    ElUpload,
    ElIcon,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElLoading,
    ElTable,
    ElTableColumn,
    ElRow,
    ElCol,
} from 'element-plus';

const components = [
    ElButton,
    ElAffix,
    ElUpload,
    ElIcon,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElTable,
    ElTableColumn,
    ElRow,
    ElCol,
];

// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export function registerElement(app: App): void {
    for (const component of components) {
        // * 局部全局注册
        app.component(component.name, component);
    }
}

export function registerElementIcon(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
}
