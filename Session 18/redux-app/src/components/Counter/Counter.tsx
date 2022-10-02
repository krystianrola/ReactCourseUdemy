import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {ReduxState} from "../../utils/types";
import {increment, decrement, increase} from "../../store/CounterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector<ReduxState, any>((state) => state.counter);

    const incrementHandler = () => {
        dispatch(increment());
    }

    const incrementByValueHandler = () => {
        dispatch(increase(5));
    }

    const decrementHandler = () => {
        dispatch(decrement());

    }

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter.counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={incrementByValueHandler}>Increment by value</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;