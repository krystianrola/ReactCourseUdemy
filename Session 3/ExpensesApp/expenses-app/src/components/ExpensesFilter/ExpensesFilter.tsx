import React, {ChangeEventHandler} from "react";
import "./ExpensesFilter.css";

interface ExpensesFilterProps {
    selected : string
    onChangeFilter: (selectedYear: string) => void;
}

export const ExpensesFilter = ({ selected, onChangeFilter } :ExpensesFilterProps) :JSX.Element => {

    const selectHandler :ChangeEventHandler<HTMLSelectElement> = (event) => {
        event.preventDefault();

        onChangeFilter(event.target.value);
    }

    return (
        <div className={"expenses-filter"}>
            <div className={"expenses-filter__control"}>
                <label>Filter by year</label>
                <select value={selected} onChange={selectHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}