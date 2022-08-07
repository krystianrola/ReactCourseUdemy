import React from "react";
import "./ExpensesList.css";
import {IExpense} from "../../../utils/types";
import {ExpenseItem} from "../ExpenseItem/ExpenseItem";

interface ExpensesListProps {
    expenses: IExpense[]
}

export const ExpensesList = ({expenses}: ExpensesListProps): JSX.Element => {

    if (expenses.length === 0) {
        return <h2 className={"expenses-list__fallback"}>No expenses found for this year ...</h2>
    }

    return (
        <ul className={"expenses-list"}>
            {expenses.map((expense: IExpense) =>
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    expense={expense.title}
                    amount={expense.amount}
                />
            )}
        </ul>
    )
}
