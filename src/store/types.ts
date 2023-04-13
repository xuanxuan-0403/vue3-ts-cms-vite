import { Store } from 'pinia';
import type { ILoginState, IAccount } from './login/types';

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
}
