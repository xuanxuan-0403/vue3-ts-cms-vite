import xrRequest from '@/service';

import { BASE_URL } from '@/service/request/config';
import { ITableData } from './types';

enum MainAPI {
    SystemTable = '/system/tableData',
}

export function systemTableRequest(userId: number) {
    return xrRequest.post<ITableData>({
        url: BASE_URL + MainAPI.SystemTable,
        data: {
            userId,
        },
    });
}
