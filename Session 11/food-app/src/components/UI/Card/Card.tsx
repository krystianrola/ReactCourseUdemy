import React from "react";
import styles from "./Card.module.css";

interface CardProps{
 children : JSX.Element | JSX.Element[]
}

export const Card = ({children}:CardProps) :JSX.Element => {
    return (
        <div className={styles.card}>{ children }</div>
    )
}