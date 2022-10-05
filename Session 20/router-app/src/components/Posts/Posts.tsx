import React from "react";
import classes from "./Posts.module.css";
import {IPost} from "../../utils/types";
import {Link} from "react-router-dom";

interface PostsProps {
    blogPosts: IPost[]
}

const Posts = ({ blogPosts }:PostsProps) => {
    return (
        <ul className={classes.posts}>
            {blogPosts.map((post) => (
                <li key={post.id}>
                    <Link to={post.id!.toString()}>
                        <h2>{post.title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Posts;