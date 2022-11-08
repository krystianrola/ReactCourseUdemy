import React, {Fragment, useState} from "react";
import NewPostForm from "../components/NewPostForm/NewPostForm";
import {ActionFunctionArgs, redirect, useActionData, useNavigate, useNavigation} from "react-router-dom";
import {IPost} from "../utils/types";
import {savePost} from "../utils/api";

interface IError {
    message: string;
    status: number
}

export default function NewPost (){
    const navigate = useNavigate();
    const data = useActionData() as IError;
    const navigation = useNavigation();


    function cancelHandler() {
        navigate('/blog');
    }

    return (
        <Fragment>
            {data && data.status && <p>{data.message}</p>}
            <NewPostForm
                onCancel={cancelHandler}
                submitting={navigation.state === "submitting"}
            />
        </Fragment>
    );
}

export async function action({request}: ActionFunctionArgs){
    const form = await request.formData();
    const post :IPost = {
        title: form.get("title") as string || "undefined",
        body: form.get("post-text") as string || "undefined"
    }

    try {
        await savePost(post);
    }catch (_error) {
        let error = _error as IError ;
        if (error.status === 422){
            // you can return the error as action data
            // for example to display the error on screen for input error
            // and not redirect and lose the inputs values
            return error;
        }
        throw error;
    }

    return redirect("/blog")
}