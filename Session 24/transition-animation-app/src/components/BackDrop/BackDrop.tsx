import React from "react";
import "./BackDrop.css"

interface BackDropProps{
    show: boolean
}

export default function BackDrop({show} :BackDropProps) {

    const cssClasses = [
        "backdrop",
        show ? "backdrop_open" : "backdrop_closed"
    ];

    return (
        <div className={cssClasses.join(" ")}></div>
    )
}