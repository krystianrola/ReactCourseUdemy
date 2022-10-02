import React from "react";
import classes from "./Header.module.css";
import {useAppSelector} from "../../store";

const Header = () => {
    const {isAuthed} = useAppSelector(state => state.auth);

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {
                isAuthed &&
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    );
};

export default Header;