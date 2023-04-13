// * 请求到的数据的类型
export interface IDataType<T = any> {
    code: number;
    data: T;
}
