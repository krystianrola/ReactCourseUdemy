import {Fragment} from "react";
import Link from "next/link";

export default function NewsPage (){
    return(
        <Fragment>
            <h1>The Newspage.</h1>
            <ul>
                <li>
                    <Link href={"/news/nextpage"} >
                        next page
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}