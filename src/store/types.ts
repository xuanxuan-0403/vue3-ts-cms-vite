import { Store } from 'pinia';

import type { ILoginState, IAccount } from './login/types';
import type { IMainState } from './main/types';
import type { ISystemState } from './main/system/types';
import { IDisplayState } from './display/types';
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
            uploadAction(uploadUserInfo: IUploadUserInfo): Promise<any>;
        }
    >;
    system: Store<
        'system',
        ISystemState,
        {},
        {
            systemTableAction(userId: number): Promise<any>;
        }
    >;
    display: Store<
        'display',
        IDisplayState,
        {},
        {
            AllDisplayDataAction(): Promise<any>;
        }
    >;
}
