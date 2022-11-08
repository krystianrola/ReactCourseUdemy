import classes from "./Card.module.css";

interface CardProps{
    children: JSX.Element | JSX.Element[]
}

export default function Card ({children}: CardProps){
    return <div className={classes.card}>{children}</div>;
}