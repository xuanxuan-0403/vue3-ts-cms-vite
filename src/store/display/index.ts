import { defineStore } from 'pinia';
import type { IDisplayState } from './types';
import { AllDisplayTableRequest } from '@/service/display';

export default defineStore('display', {
    state: (): IDisplayState => {
        return {
            name: 'display',
            allTableList: [],
        };
    },
    actions: {
        async AllDisplayDataAction() {
            const data = await AllDisplayTableRequest();
            if (!data) return;
            this.allTableList = data.data;
        },
    },
});
