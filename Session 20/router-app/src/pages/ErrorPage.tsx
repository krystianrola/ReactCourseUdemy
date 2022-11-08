import React, {Fragment} from "react";
import MainNav from "../components/MainNav/MainNav";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {

    // can get the error message that was thrown
    const error = useRouteError();

    return (
        <Fragment>
            <MainNav/>
            <section>
                <h2>
                    An error occured!
                </h2>
            </section>
        </Fragment>
    )
}