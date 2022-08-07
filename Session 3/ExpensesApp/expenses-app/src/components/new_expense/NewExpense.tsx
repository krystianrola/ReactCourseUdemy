import React, {useState} from "react";
import "./newExpense.css";
import {EShowForm, IExpense} from "../../utils/types";
import {NewExpenseForm} from "./NewExpenseForm";

interface NewExpenseProps {
    onAddExpense: (expense: IExpense) => void;
}

export const NewExpense = ({ onAddExpense } :NewExpenseProps ) : JSX.Element => {

    const [showForm, setShowForm] = useState<EShowForm>(EShowForm.HIDE);

    const onCancelHandler = () => {
        setShowForm(EShowForm.HIDE);
    }

    const saveExpenseHandler = (enteredExpense : IExpense) => {
        onAddExpense(enteredExpense)
    }

    return (
        <div className={"new-expense"}>
            {
                showForm === EShowForm.SHOW
                    ? <NewExpenseForm onSaveExpense={saveExpenseHandler} onCancel={onCancelHandler} />
                    : <button onClick={() => {setShowForm(EShowForm.SHOW)}}>Add New Expense</button>

            }
        </div>
    )
}