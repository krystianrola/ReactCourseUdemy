import React from "react";
import "./expenseItem.css";
import {ExpenseDate} from "./ExpenseDate/ExpenseDate";
import {Card} from "../../card/Card";

// I am making this course in TS instead of JS

interface ExpenseItemProps {
    date: Date;
    expense: string;
    amount: number;
}

export const ExpenseItem = ({date, expense, amount}: ExpenseItemProps): JSX.Element => {
    return (
        <li>
            <Card className={"expense-item"}>
                <ExpenseDate date={date} />
                <div className={"expense-item__description"}>
                    <h2>{expense}</h2>
                    <p className={"expense-item__price"}> ${amount} </p>
                </div>
            </Card>
        </li>
    )
}