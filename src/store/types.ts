import { Store } from 'pinia';

import type { ILoginState, IAccount } from './login/types';
import { IMainState } from './main/types';
import { IUploadUserInfo } from '@/service/main/types';

export interface IRootState {
    name: string;
    login: Store<
        'login',
        ILoginState,
        {},
        {
            accountLoginAction(account: IAccount): Promise<any>;
            accountRegisterAction(account: IAccount): Promise<any>;
        }
    >;
    main: Store<
        'main',
        IMainState,
        {},
        {
            uploadAction(uploadUserInfo: IUploadUserInfo): any;
        }
    >;
}
