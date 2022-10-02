export enum ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    INCREMENT_BY_VALUE
}

export interface ReduxState {
    counter: number
}
export interface ReduxAction {
    amount?: number
}

 export interface IAuthSliceState {
    isAuthed: boolean
}