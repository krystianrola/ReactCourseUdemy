import React, {useEffect, useContext, useState} from "react";
import {CartIcon} from "../../../Cart/CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../../context/CartContext/CartContext";
import {ICartItem} from "../../../../utils/types";

interface HeaderCartButtonProps {
    onClick: () => void;
}

export const HeaderCartButton = ({ onClick }:HeaderCartButtonProps) :JSX.Element => {
    const cartCtx = useContext(CartContext);
    const [cartBtnHighlighted, setCartBtnHighlighted] = useState<boolean>(false);

    const {items} = cartCtx;

    useEffect(() => {
        if (items.length === 0) return ;
        setCartBtnHighlighted(true);

        const timer = setTimeout(() => {
            setCartBtnHighlighted(false);
        }, 300)

        // need it here because you can rapidly add items
        // this way you can clear the timer in case its still ongoing
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const numberOfCartItems = items.reduce((cartNumber :number, item :ICartItem) => {
        return cartNumber + item.amount
    }, 0);

    const btnClasses = `${styles.button} ${cartBtnHighlighted ? styles.bump : ''}`

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}