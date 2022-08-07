import React from "react";
import "./ChartBar.css"

interface ChartBarProps {
    label: string;
    value: number;
    maxValue: number;
}

export const ChartBar = ({label, value, maxValue}:ChartBarProps) :JSX.Element => {

    let barheight = '0%';

    if (maxValue > 0) {
        barheight = Math.round((value / maxValue) * 100) + "%";
    }

    return (
        <section className={"chart-bar"}>
            <div className={"chart-bar__inner"}>
                <div className={"chart-bar__fill"} style={{height: barheight}} />
            </div>
            <div className={"chart-bar__label"}>
                {label}
            </div>
        </section>
    )
}