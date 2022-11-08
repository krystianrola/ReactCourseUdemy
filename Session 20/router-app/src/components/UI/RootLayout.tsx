import React, {Fragment} from "react";
import MainNav from "../MainNav/MainNav";
import {Outlet} from "react-router-dom";

const RootLayout = () :JSX.Element => {
    return(
        <Fragment>
            <MainNav />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default RootLayout;