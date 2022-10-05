import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () :JSX.Element => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={(isActive) => {
                                return isActive ? classes.active : "";
                            }}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/blog"}
                            className={(isActive) => {
                                return isActive ? classes.active : "";
                            }}
                            end
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;