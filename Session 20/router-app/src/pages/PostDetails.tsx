import React, {Fragment} from "react";
import BlogPost from "../components/BlogPost/BlogPost";
import {getPost} from "../utils/api";
import {LoaderFunctionArgs, Params, useLoaderData} from "react-router-dom";
import {IPost} from "../utils/types";


export default function PostDetails() {

    const post = useLoaderData() as IPost;

    return (
        <Fragment>
            <BlogPost title={post.title} text={post.body} />
        </Fragment>
    );
}

export function loader({params} :LoaderFunctionArgs) {
    return getPost(Number(params.id));
}