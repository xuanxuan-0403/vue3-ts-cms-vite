export interface ILoginState {
    token: string;
    name: string;
    showLoginReactivePage: boolean;
    userMenu: any[];
    username: string;
    role: string;
}

export interface IAccount {
    username: string;
    password: string;
}
