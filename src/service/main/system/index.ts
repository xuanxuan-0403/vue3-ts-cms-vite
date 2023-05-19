import xrRequest from '@/service';

import { BASE_URL } from '@/service/request/config';
import type { ITableData } from './types';

enum MainAPI {
    SystemTable = '/system/tableData',
    DeleteSystemTable = '/system/delete',
}

export function systemTableRequest(userId: number) {
    return xrRequest.post<ITableData>({
        url: BASE_URL + MainAPI.SystemTable,
        data: {
            userId,
        },
    });
}

export function systemDeleteTableRequest(id: number, userId?: number) {
    return xrRequest.post({
        url: BASE_URL + MainAPI.DeleteSystemTable,
        data: {
            id,
            userId,
        },
    });
}
