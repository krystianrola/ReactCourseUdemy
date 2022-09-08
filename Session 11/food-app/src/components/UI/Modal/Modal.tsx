import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import {ModalOverlay} from "./ModalOverlay/ModalOverlay";

const Backdrop = () :JSX.Element => {
    return <div className={styles.backdrop}/>
}

interface ModalProps {
    children: JSX.Element | JSX.Element[]
}

export const Modal = ({ children } :ModalProps)  :JSX.Element => {

    const portelElement = document.getElementById("overlays")!;

    return (
        <Fragment>
            { ReactDOM.createPortal(
                <Backdrop />,
                portelElement
            ) }
            { ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portelElement
            ) }
        </Fragment>
    )
}