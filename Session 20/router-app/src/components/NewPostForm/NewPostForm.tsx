import React, {FormEvent, FormEventHandler} from "react";
import classes from "./NewPostForm.module.css"

interface NewPostFormProps {
    onCancel: () => void;
    onSubmit: FormEventHandler<HTMLFormElement> ;
    submitting: any
}

const NewPostForm = ({onSubmit, onCancel, submitting} :NewPostFormProps) => {
    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <fieldset>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required minLength={5} />
            </fieldset>
            <fieldset>
                <label htmlFor="text">Post Text</label>
                <textarea
                    id="text"
                    name="post-text"
                    required
                    minLength={10}
                    rows={5}
                ></textarea>
            </fieldset>
            <button type="button" onClick={onCancel} disabled={submitting}>
                Cancel
            </button>
            <button disabled={submitting}>
                {submitting ? 'Submitting...' : 'Create Post'}
            </button>
        </form>
    );
}

export default NewPostForm;