export interface ILoginState {
    token: string;
    name: string;
    showLoginReactivePage: boolean;
    userMenu: any[];
}

export interface IAccount {
    username: string;
    password: string;
}
