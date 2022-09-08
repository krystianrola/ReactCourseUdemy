import React, {Fragment} from "react";
import {MealsSummary} from "./MealsSummary/MealsSummary";
import {AvailableMeals} from "./AvailableMeals/AvailableMeals";

export const Meals = () :JSX.Element => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}