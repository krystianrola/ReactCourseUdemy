import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./CounterSlice";
import authSlice from "./AuthSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;
