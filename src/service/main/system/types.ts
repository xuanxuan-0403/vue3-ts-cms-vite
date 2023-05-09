export interface ITableData {
    code: number;
    data: ITableDataArr[];
    message: string;
    status: number;
}

export interface ITable {
    date: any;
    name: string;
    desc: string;
}

export interface ITableDataArr {
    createTime: string;
    desc: string;
    filepath: string;
    htmlpath: string;
    id: number;
    name: string;
    userid: number;
}
