import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReduxAction, ReduxState} from "../utils/types";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        // increment: (state) => { state.value += 1 },
        // decrement: (state :ReduxState) => { state.value -= 1 },
        // incrementByAmount: (state: ReduxState, action:PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
        increment(state: ReduxState) {
            state.counter++;
        },
        decrement(state: ReduxState) {
            state.counter--;
        },
        increase(state: ReduxState, action){
            state.counter += action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, increase } = counterSlice.actions

export default counterSlice ;