import { contentTableType } from '@/components/system-table/types/index';

export const contentTableConfig: contentTableType = {
    title: '项目管理',
    propList: [
        {
            prop: 'id',
            label: 'id',
            minWidth: '',
        },
        {
            prop: 'name',
            label: '项目名称',
            minWidth: '',
        },
        {
            prop: 'desc',
            label: '项目描述',
            minWidth: '',
        },
        {
            prop: 'date',
            label: '上传日期',
            minWidth: '',
        },
    ],
    showIndexColumn: false,
    showSelectColumn: false,
    showUpdateColumn: false,
};
