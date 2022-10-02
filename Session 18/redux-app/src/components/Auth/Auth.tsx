import React, {MouseEvent} from "react";
import classes from "./Auth.module.css";
import {useAppDispatch} from "../../store";
import {authActions} from "../../store/AuthSlice";

const Auth = () => {
    const dispatch = useAppDispatch();

    const loginHandler = (event :MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();

        dispatch(authActions.login());
    }

    return(
        <main className={classes.auth}>
            <section>
                <form>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <button onClick={loginHandler}>Login</button>
                </form>
            </section>
        </main>
    )
}

export default Auth;