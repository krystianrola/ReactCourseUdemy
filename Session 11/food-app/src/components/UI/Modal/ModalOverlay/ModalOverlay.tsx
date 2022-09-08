import React from "react";
import styles from ".././Modal.module.css";

interface ModalOverlayProps {
    children: JSX.Element | JSX.Element[]
}

export const ModalOverlay = ({children}: ModalOverlayProps) :JSX.Element=> {
    return (
        <div className={styles.modal}>
            <div> {children} </div>
        </div>
    )
}