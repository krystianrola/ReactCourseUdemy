import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BlogPost from "../components/BlogPost/BlogPost";
import {getPost} from "../utils/api";
import {IPost} from "../utils/types";

const PostDetails = () => {
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<IPost>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        async function loadPost() {
            setIsLoading(true);
            try {
                const post = await getPost(Number(id));
                setPost(post);
            } catch (err) {
                setError("");
            }
            setIsLoading(false);
        }

        loadPost();
    }, [id]);

    return (
        <>
            {isLoading && <p>Loading post...</p>}
            {error && <p>{error}</p>}
            {!error && post && <BlogPost title={post.title} text={post.body} />}
        </>
    );
}

export default PostDetails;