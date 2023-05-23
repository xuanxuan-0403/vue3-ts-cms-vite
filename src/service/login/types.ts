export interface IAccount {
    username: string;
    password: string;
}

export interface ILoginResult {
    message: string;
    status: number;
    token: string;
    userid: number;
    router: any[];
}

export interface IRegisterResult {
    status: number;
    message: string;
}
