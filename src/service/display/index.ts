import xrRequest from '@/service';

import { BASE_URL } from '@/service/request/config';
import { ITableData } from '../main/system/types';

enum MainAPI {
    AllSystemTable = '/system/all',
}

export function AllDisplayTableRequest() {
    return xrRequest.post<ITableData>({
        url: BASE_URL + MainAPI.AllSystemTable,
        data: {
            audit: 1,
        },
    });
}

export function AllAuditTableRequest() {
    return xrRequest.post<ITableData>({
        url: BASE_URL + MainAPI.AllSystemTable,
        data: {
            audit: 0,
        },
    });
}
