import xrRequest from '../index';

import type { IAccount, ILoginResult, IRegisterResult } from './types';
import { BASE_URL } from '../request/config';

enum LoginAPI {
    AccountLogin = '/login/getUser',
    AccountRegister = '/login/addUser',
}

export function accountLoginRequest(account: IAccount) {
    return xrRequest.post<ILoginResult>({
        url: BASE_URL + LoginAPI.AccountLogin,
        data: account,
    });
}

export function accountRegisterRequest(account: IAccount) {
    return xrRequest.post<IRegisterResult>({
        url: BASE_URL + LoginAPI.AccountRegister,
        data: account,
    });
}
