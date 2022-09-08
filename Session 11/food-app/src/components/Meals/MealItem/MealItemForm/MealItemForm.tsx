import React, {createRef, FormEventHandler, useRef, useState} from "react";
import styles from "./MealItemForm.module.css";
import {Input} from "../../../UI/Input/Input";

interface MealItemFormProps {
    onAddToCart: (enteredAmount: number) => void;
}

export const MealItemForm = ({ onAddToCart } :MealItemFormProps) :JSX.Element => {
    const amountInputRef = useRef<HTMLInputElement>(null);

    const [amountIsValid, setAmountIsValid] = useState<boolean>(true);

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const enteredAmount = Number(amountInputRef.current!.value);

        if (enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        onAddToCart(enteredAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                reference={amountInputRef}
                label={"Amount"}
                input={{
                    id: "amount_" + Math.random().toFixed(2),
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <button type={"submit"}>+ add</button>
            {
                !amountIsValid && <p>Please enter a valid amount (1-5).</p>
            }
        </form>
    )
}