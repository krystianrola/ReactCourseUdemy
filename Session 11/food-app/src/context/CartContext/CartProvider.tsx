import React, {useReducer} from "react";
import CartContext from "./CartContext";
import {ICart, ICartItem} from "../../utils/types";
import {stat} from "fs";

interface IReducer {
    items: ICartItem[],
    totalAmount: number
}
interface IReducerState {
    items: ICartItem[];
    totalAmount: number
}
interface IReducerAction {
    type :string;
    item: ICartItem;
}

const defaultCartState: IReducer = {
    items: [],
    totalAmount: 0
};



const cartReducer = (state :IReducerState, action: IReducerAction) => {
    if (action.type === "ADD_ITEM"){
        // checking for existing item ... return the item-index if found
        const existingCartItemIndex = state.items.findIndex( (item:ICartItem) => item.id === action.item.id );
        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems : ICartItem[];

        if (existingCartItem) {
            let updatedItem :ICartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE_ITEM"){
        const existingCartItemIndex = state.items.findIndex( (item:ICartItem) => item.id === action.item.id );
        const existingItem = state.items[existingCartItemIndex];

        let updatedItems: ICartItem[];

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item: ICartItem) => item.id !== action.item.id )
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

interface CartProviderProps {
 children: JSX.Element | JSX.Element[]
}
export const CartProvider = ({ children } :CartProviderProps) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: ICartItem) => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item: item
        })
    }

    const removeItemFromCartHandler = (item: ICartItem) => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            item: item
        })
    }

    const cartCtx : ICart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {children}
        </CartContext.Provider>
    )
}