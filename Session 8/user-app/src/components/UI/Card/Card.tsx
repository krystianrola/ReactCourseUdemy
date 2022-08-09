import React from "react";
import style from "./card.module.css"

interface CardProps {
    children : JSX.Element | JSX.Element[];
    className: string;
}

export const Card = ({children, className} :CardProps) : JSX.Element => {
    return (
        <section className={`${style.card} ${className}`}>
            {children}
        </section>
    )
}