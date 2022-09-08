import React, {useContext} from "react";
import {ICartItem, IMeal} from "../../../utils/types";
import styles from "./MealItem.module.css";
import {MealItemForm} from "./MealItemForm/MealItemForm";
import CartContext from "../../../context/CartContext/CartContext";

interface MealItemProps {
    meal: IMeal
}

export const MealItem = ({meal} :MealItemProps) :JSX.Element=> {
    const cartCtx = useContext(CartContext);

    const price = `$${meal.price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        const item :ICartItem = {
            id: meal.id,
            name: meal.name,
            price: meal.price,
            amount: amount
        }
        cartCtx.addItem(item);
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <p className={styles.description}>{meal.description}</p>
                <p className={styles.price}>{price}</p>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
