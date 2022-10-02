import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthSliceState} from "../utils/types";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthed: false,
    },
    reducers: {
        login(state: IAuthSliceState){
            state.isAuthed = true;
        },
        logout(state: IAuthSliceState) {
            state.isAuthed = false;
        }
    },
});

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions


export default authSlice ;
