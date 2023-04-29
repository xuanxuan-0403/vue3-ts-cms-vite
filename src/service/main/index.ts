import xrRequest from '../index';
import { BASE_URL } from '../request/config';

import type { IUploadUserInfo } from './types';

enum UploadAPI {
    UploadZIP = '/upload',
}

// 上传的网络请求
export function uploadRequest(data: IUploadUserInfo) {
    return xrRequest.post<IUploadUserInfo>({
        url: BASE_URL + UploadAPI.UploadZIP,
        data,
    });
}
