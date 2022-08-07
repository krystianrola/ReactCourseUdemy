import React, {ReactNode} from "react";
import "./card.css";

interface CardProps {
    className: string
    children : ReactNode
}

export const Card = ({children, className} :CardProps) : JSX.Element => {
    const classes = "card " + className ;

    return (
        <section className={className}>
            { children }
        </section>
    )
}