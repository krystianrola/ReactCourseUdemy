import React from "react";
import "./expenseDate.css";

interface ExpenseDateProps {
    date : Date;
}

export const ExpenseDate = ({date}:ExpenseDateProps): JSX.Element => {
    return (
        <section className={"expense-date"}>
            <p className={"expense-date__month"}>
                {date.toLocaleString("en-US", {month: "long"})}
            </p>
            <p className={"expense-date__day"}>
                {date.toLocaleString("en-US", {day: "numeric"})}
            </p>
            <p className={"expense-date__year"}>
                {date.getFullYear()}
            </p>
        </section>
    )
}