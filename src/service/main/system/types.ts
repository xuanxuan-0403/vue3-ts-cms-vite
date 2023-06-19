export interface ITableData {
    code: number;
    data: ITableDataArr[];
    message: string;
    status: number;
}

export interface ITable {
    id: number;
    date: any;
    name: string;
    desc: string;
    isAudit: number;
}

export interface ITableDataArr {
    createTime: string;
    desc: string;
    // filepath: string;
    // htmlpath: string;
    id: number;
    name: string;
    userid: number;
}

export interface IGetTag {
    code: number;
    message: string;
    data: IGetTag[];
}

export interface ITagData {
    id: number;
    tag: string;
}
