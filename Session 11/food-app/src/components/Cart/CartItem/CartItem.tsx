import React from "react";
import styles from "./CartItem.module.css";
import {ICartItem} from "../../../utils/types";

interface CartItemProps {
    cartItem: ICartItem;
    onRemove: () => void;
    onAdd: () => void;
}

export const CartItem = ({cartItem, onRemove, onAdd}: CartItemProps) => {
    const price = `$${cartItem.price.toFixed(2)}`;

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{cartItem.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {cartItem.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
}