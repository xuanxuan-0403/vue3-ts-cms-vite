import { defineStore } from 'pinia';
import type { IDisplayState } from './types';
import { AllDisplayTableRequest, AllAuditTableRequest } from '@/service/display';

export default defineStore('display', {
    state: (): IDisplayState => {
        return {
            name: 'display',
            allTableList: [],
            allAuditTableList: [],
        };
    },
    actions: {
        async AllDisplayDataAction() {
            const data = await AllDisplayTableRequest();
            if (!data) return;
            this.allTableList = data.data;
        },
        async AllAuditDataAction() {
            const data = await AllAuditTableRequest();
            if (!data) return;
            this.allAuditTableList = data.data;
        },
    },
});
