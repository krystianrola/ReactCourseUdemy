import React from "react";
import "./Chart.css"
import {ChartBar} from "./ChartBar/ChartBar";
import {IDataPoint} from "../../utils/types";

interface ChartProps {
    dataPoints: IDataPoint[]
}

export const Chart = ({dataPoints} :ChartProps) :JSX.Element => {

    const dataPointValues :number[] = dataPoints.map((dataPoint :IDataPoint) => dataPoint.value);
    const totalMaximum :number = Math.max(...dataPointValues);

    return (
        <div className={"chart"}>
            {
                dataPoints.map((datapoint: IDataPoint) =>
                    <ChartBar
                        key={datapoint.label}
                        label={datapoint.label}
                        value={datapoint.value}
                        maxValue={totalMaximum}
                    />
                )
            }
        </div>
    )
}