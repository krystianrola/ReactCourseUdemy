import React, {useState} from 'react';
import './App.css';
import {ExpenseItem} from "../components/expenses/ExpenseItem/ExpenseItem";
import {Card} from "../components/card/Card";
import {IExpense} from "../utils/types";
import {Expenses} from "../components/expenses/Expenses";
import {NewExpense} from "../components/new_expense/NewExpense";

const dummy_expenses : IExpense[] = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {

    const [expenses, setExpenses] = useState<IExpense[]>(dummy_expenses);

    const addExpenseHandler = ( expense: IExpense) => {
        setExpenses((previousExpenses: IExpense[]) => {
            return [expense, ...previousExpenses]
        })
    }

    return (
        <div className="app">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
