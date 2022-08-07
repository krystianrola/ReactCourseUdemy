export interface IExpense {
    id: string;
    title: string;
    amount: number;
    date:  Date;
}

export enum EShowForm {
    HIDE,
    SHOW
}

export interface IDataPoint {
    label: string;
    value: number;
    maxValue: number;
}