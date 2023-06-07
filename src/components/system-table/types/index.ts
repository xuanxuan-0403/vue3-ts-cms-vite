export interface propListType {
    prop: string;
    label: string;
    minWidth?: string;
    slotName?: string;
}

// * 专门针对展开菜单
export interface childrenPropsType {
    rowKey: string;
    treeProp: any;
}
export interface contentTableType {
    title: string;
    propList: propListType[];
    showIndexColumn?: boolean;
    showSelectColumn?: boolean;
    showFooter?: boolean;
    childrenProps?: childrenPropsType;
}
