import React, {Fragment, useEffect, useState} from "react";
import {IPost} from "../utils/types";
import {getPosts} from "../utils/api";
import Posts from "../components/Posts/Posts";

const BlogPosts = () => {
    const [error, setError] = useState<string>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function loadPosts() {
            setIsLoading(true);
            try {
                const posts = await getPosts();
                setPosts(posts);
            } catch (err) {
                setError("err.message");
            }
            setIsLoading(false);
        }

        loadPosts();
    }, []);

    return (
        <Fragment>
            <h1>Our Blog Posts</h1>
            {isLoading && <p>Loading posts...</p>}
            {error && <p>{error}</p>}
            {!error && posts && <Posts blogPosts={posts} />}
        </Fragment>
    );
}

export default BlogPosts;