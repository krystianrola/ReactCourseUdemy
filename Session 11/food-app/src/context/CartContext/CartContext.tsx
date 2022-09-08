import React from "react";
import {ICart, ICartItem} from "../../utils/types";

const CartContext = React.createContext<ICart>({
    items: [],
    totalAmount: 0,
    addItem: (item: ICartItem) => {},
    removeItem: (item: ICartItem) => {}
});

export default CartContext;