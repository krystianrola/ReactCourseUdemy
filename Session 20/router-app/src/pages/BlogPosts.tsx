import React, {Fragment, Suspense} from "react";
import {getPosts} from "../utils/api";
import Posts from "../components/Posts/Posts";
import {Await, defer, useLoaderData} from "react-router-dom";
import {IPost} from "../utils/types";
import ErrorPage from "./ErrorPage";
import posts from "../components/Posts/Posts";

interface ILoaderData {
    posts: IPost[]
}

export default function BlogPosts() {

    const data = useLoaderData() as ILoaderData;

    // by using suspense - await - defer, you can load part of the page before the data
    // of that page is available. you can add a fallback element that replaces
    // the to-be-fetched data temporarily

    return (
        <Fragment>
            <h1>Our Blog Posts</h1>
            <Suspense fallback={<p>loading...</p>}>
                <Await
                    resolve={data.posts}
                    errorElement={<ErrorPage />}
                >
                    {(posts :Awaited<IPost[]>) => <Posts blogPosts={posts} />}
                </Await>
            </Suspense>
            {/*<Posts blogPosts={posts} />*/}
        </Fragment>
    );
}

export function loader() {
    return defer({
        posts: getPosts()
    });
}