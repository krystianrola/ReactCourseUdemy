import React from "react";
import classes from "./BlogPost.module.css";

interface BlogPostProps {
    title: string;
    text: string;
}

const BlogPost = ({title, text}:BlogPostProps) => {
    return (
        <article className={classes.post}>
            <h1>{title}</h1>
            <p>{text}</p>
        </article>
    )
}

export default BlogPost;