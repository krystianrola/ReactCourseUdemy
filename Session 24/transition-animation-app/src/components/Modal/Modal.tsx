import React from "react";
import "./Modal.css";

interface ModalProps {
    show: boolean;
    closed: ()=>void;
}

export default function Modal ({closed, show}: ModalProps){

    const cssClasses = [
        "modal",
        show ? "modal_open" : "modal_closed"
    ];

    return(
        <div className={cssClasses.join(" ")}>
            <h1>Modal</h1>
            <button className="button" onClick={closed}>
                Dismiss
            </button>
        </div>
    )
}