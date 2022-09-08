import React, {LegacyRef} from "react";
import styles from "./Input.module.css";

interface InputProps {
    reference: LegacyRef<HTMLInputElement>;
    label :string;
    input: {
        id: string,
        type: string,
        min: string,
        max: string,
        step: string,
        defaultValue: string
    }
}

export const Input = ({reference, label, input} :InputProps) => {

        return (
            <div className={styles.input}>
                <label htmlFor={input.id} >{label}</label>
                <input
                    ref={reference}
                    {...input}
                />
            </div>
        )
}