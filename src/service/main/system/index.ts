import xrRequest from '@/service';

import { BASE_URL } from '@/service/request/config';
import type { ITableData } from './types';

enum MainAPI {
    SystemTable = '/system/tableData',
    DeleteSystemTable = '/system/delete',
    ChangeAudit = '/system/audit',
    GetAllUser = '/user/allUser',
    DeleteUser = '/user/delete',
    UpdateUser = '/user/update',
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

export function systemChangeAuditRequest(id: number, userid: number) {
    return xrRequest.post({
        url: BASE_URL + MainAPI.ChangeAudit,
        data: {
            id,
            userid,
        },
    });
}

// * user
export function getAllUserRequest() {
    return xrRequest.get({
        url: BASE_URL + MainAPI.GetAllUser,
    });
}

export function deleteUserRequest(id: number) {
    return xrRequest.post({
        url: BASE_URL + MainAPI.DeleteUser,
        data: {
            id,
        },
    });
}

export function updateUserReuqest(id: number, username?: string, password?: string) {
    return xrRequest.post({
        url: BASE_URL + MainAPI.UpdateUser,
        data: { id, username, password },
    });
}
