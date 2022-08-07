import React from "react";
import {Chart} from "../chart/Chart";
import {IDataPoint, IExpense} from "../../utils/types";

interface ExpensesChartProps {
    expenses : IExpense[]
}

export const ExpensesChart = ({expenses} :ExpensesChartProps) : JSX.Element => {

    let chartDataPoints : IDataPoint[] = [
        { label : "Jan", value : 0, maxValue: 0 },
        { label : "Feb", value : 0, maxValue: 0 },
        { label : "Mar", value : 0, maxValue: 0 },
        { label : "Apr", value : 0, maxValue: 0 },
        { label : "May", value : 0, maxValue: 0 },
        { label : "Jun", value : 0, maxValue: 0 },
        { label : "Jul", value : 0, maxValue: 0 },
        { label : "Aug", value : 0, maxValue: 0 },
        { label : "Sep", value : 0, maxValue: 0 },
        { label : "Oct", value : 0, maxValue: 0 },
        { label : "Nov", value : 0, maxValue: 0 },
        { label : "Dec", value : 0, maxValue: 0 },

    ];

    for(let expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}