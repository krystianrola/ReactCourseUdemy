import React from "react";
import {IMeal} from "../../../utils/types";
import styles from "./AvailableMelas.module.css";
import {Card} from "../../UI/Card/Card";
import {MealItem} from "../MealItem/MealItem";

const DUMMY_MEALS : IMeal[] = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

export const  AvailableMeals = () :JSX.Element => {

    const mealList = DUMMY_MEALS.map( (meal :IMeal) => <MealItem meal={meal} key={meal.id}/> );

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    { mealList }
                </ul>
            </Card>
        </section>
    )
}