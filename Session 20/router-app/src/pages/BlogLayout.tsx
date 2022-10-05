import React, {Fragment} from "react";
import BlogActions from "../components/BlogActions/BlogActions";
import {Outlet} from "react-router-dom";

const BlogLayout = () => {
    return(
        <Fragment>
            <BlogActions />
            <Outlet />
        </Fragment>
    )
}

export default BlogLayout;