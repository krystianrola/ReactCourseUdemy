import React, {Fragment} from "react";
import MainNav from "../MainNav/MainNav";

interface RootLayoutProps{
    children: JSX.Element;
}

const RootLayout = ({children} :RootLayoutProps) :JSX.Element => {
    return(
        <Fragment>
            <MainNav />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default RootLayout;