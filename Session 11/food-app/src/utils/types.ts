export interface IMeal {
    id: string;
    name: string;
    description : string;
    price: number;
}

export interface ICartItem {
    id: string;
    name: string;
    amount: number;
    price: number;
}
export interface ICart {
    items: ICartItem[];
    totalAmount: number;
    addItem: (item: ICartItem) => void;
    removeItem: (item: ICartItem) => void;
}