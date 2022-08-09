import React from "react";
import {Card} from "../Card/Card";
import {Button} from "../Button/Button";
import style from "./errormodal.module.css";

interface ErrorModalProps {
    title: string;
    message: string;
    onConfirm: () => void;
}

export const ErrorModal = ({title, message, onConfirm} :ErrorModalProps) :JSX.Element    => {
    return (
        <section>
            <div className={style.backdrop} onClick={onConfirm}/>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>{title}</h2>
                </header>
                <div className={style.content}>
                    {message}
                </div>
                <footer className={style.actions}>
                    <Button onClick={onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </section>
    )
}