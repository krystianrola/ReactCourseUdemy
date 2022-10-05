import React, { useState } from "react";
import NewPostForm from "../components/NewPostForm/NewPostForm";
import {useNavigate} from "react-router-dom";
import {savePost} from "../utils/api";
import {IPost} from "../utils/types";

const NewPost = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    async function submitHandler(event: any) {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData(event.target);
            const post :IPost = {
                title: formData.get('title') as string,
                body: formData.get('post-text') as string,
            };
            await savePost(post);
            navigate('/');
        } catch (err) {
            setError("err");
        }
        setIsSubmitting(false);
    }

    function cancelHandler() {
        navigate('/blog');
    }

    return (
        <>
            {error && <p>{error}</p>}
            <NewPostForm
                onCancel={cancelHandler}
                onSubmit={submitHandler}
                submitting={isSubmitting}
            />
        </>
    );
}

export default NewPost;