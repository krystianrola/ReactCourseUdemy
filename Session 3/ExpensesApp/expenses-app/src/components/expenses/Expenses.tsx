import React, {useState} from "react";
import {Card} from "../card/Card";
import "./expenses.css";
import {ExpenseItem} from "./ExpenseItem/ExpenseItem";
import {IExpense} from "../../utils/types";
import {ExpensesFilter} from "../ExpensesFilter/ExpensesFilter";
import exp from "constants";
import {ExpensesList} from "./ExpensesList/ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

interface ExpensesProps {
    expenses: IExpense[]
}

export const Expenses = ({expenses}: ExpensesProps): JSX.Element => {

    const [filteredYear, setFilteredYear] = useState<string>(new Date().getFullYear().toString());

    const filterHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense: IExpense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={"expenses"}>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}