import type {NextPage} from "next";
import MainNavigation from "./MainNavigation/MainNavigation";
import classes from "./Layout.module.css";

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

export default function Layout({children} :LayoutProps) {
    return(
        <div>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </div>
    )
}