import React, {useContext} from "react";
import {ICartItem} from "../../utils/types";
import styles from "./Cart.module.css"
import {Modal} from "../UI/Modal/Modal";
import CartContext from "../../context/CartContext/CartContext";
import {CartItem} from "./CartItem/CartItem";

interface CartProps {
    onClose: () => void;
}

export const Cart = ({  onClose } :CartProps) :JSX.Element => {
    const cartCtx = useContext(CartContext);

    const addCartItemHandler = (item: ICartItem) => {
        cartCtx.addItem({...item, amount: 1});
    };
    const removeCartItemHandler = (item: ICartItem) => {
        cartCtx.removeItem(item);
    };

    const cartItems = cartCtx.items.map( (item: ICartItem) =>
        <CartItem
            key={item.id}
            cartItem={item}
            onRemove={removeCartItemHandler.bind(null, item)}
            onAdd={addCartItemHandler.bind(null, item)}
        />
    );
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0 ;

    return (
        <Modal>
            <ul className={styles["cart-items"]}>
                { cartItems }
            </ul>
            <div className={styles.total}>
                <p>Total Amount</p>
                <p>{totalAmount}</p>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}