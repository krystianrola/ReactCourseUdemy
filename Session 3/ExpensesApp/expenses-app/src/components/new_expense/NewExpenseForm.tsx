import React, {ChangeEvent, FormEvent, useState} from "react";
import "./ExpenseForm.css"
import {EShowForm, IExpense} from "../../utils/types";

interface NewExpenseFormProps {
    onSaveExpense: (enteredExpense : IExpense) => void;
    onCancel : () => void;
}

export const NewExpenseForm = ({onCancel, onSaveExpense} :NewExpenseFormProps): JSX.Element => {

    const [enteredTitle, setEnteredTitle] = useState<string>("");
    const [enteredAmount, setEnteredAmount] = useState<number>(0);
    const [enteredDate, setEnteredDate] = useState<string>("");

    const cancelHandler = () => { onCancel(); }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const newExpense :IExpense = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        }

        onSaveExpense(newExpense);

        setEnteredTitle("");
        setEnteredAmount(0);
        setEnteredDate("");

        onCancel();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className={"new-expense__controls"}>
                    <div className={"new-expense__control"}>
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEnteredTitle(event.target.value)}
                        />
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Amount</label>
                        <input
                            type="number"
                            min={0.01}
                            step={0.01}
                            value={enteredAmount}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEnteredAmount(Number(event.target.value))}
                        />
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Date</label>
                        <input
                            type="date"
                            min={"2019-01-01"}
                            max={"2022-12-31"}
                            value={enteredDate}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEnteredDate(event.target.value)}
                        />
                    </div>
                </div>
                <div className={"new-expense__actions"}>
                    <button onClick={cancelHandler}>Cancel</button>
                    <button type={"submit"}>Add new expense</button>
                </div>
            </form>
        </div>
    )
}
