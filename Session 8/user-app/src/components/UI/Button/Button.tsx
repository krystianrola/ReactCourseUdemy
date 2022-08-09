import React, { MouseEventHandler} from "react";
import style from "./button.module.css";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>
    children : string
}

export const Button =({ type, onClick, children} :ButtonProps) :JSX.Element =>{
    return (
        <button
            className={style.button}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    )
}