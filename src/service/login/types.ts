export interface IAccount {
    username: string;
    password: string;
}

export interface ILoginResult {
    message: string;
    status: number;
    token: string;
    userid: number;
}

export interface IRegisterResult {
    status: number;
    message: string;
}
