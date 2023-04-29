export interface ILoginState {
    name: string;
    userId: number | null;
    showLoginReactivePage: boolean;
}

export interface IAccount {
    username: string;
    password: string;
}
