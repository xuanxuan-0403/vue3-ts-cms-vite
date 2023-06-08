import { contentTableType } from '@/components/system-table/types/index';

export const contentTableConfig: contentTableType = {
    title: '用户管理',
    propList: [
        {
            prop: 'id',
            label: 'id',
            minWidth: '',
        },
        {
            prop: 'username',
            label: '用户名',
            minWidth: '',
        },
        {
            prop: 'password',
            label: '密码',
            minWidth: '',
        },
        {
            prop: 'role',
            label: '权限',
            minWidth: '',
        },
    ],
    showIndexColumn: false,
    showSelectColumn: false,
    showUpdateColumn: true,
};
