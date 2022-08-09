import React, {ChangeEvent, FormEvent, useState} from "react";
import {Card} from "../../UI/Card/Card";
import style from "./addUser.module.css";
import {Button} from "../../UI/Button/Button";
import {IError, IUser} from "../../../types";
import {ErrorModal} from "../../UI/ErrorModal/ErrorModal";

interface AddUserProps{
    onAddUser : (newUser: IUser) => void;
}

export const AddUser = ({onAddUser} :AddUserProps) :JSX.Element => {
    const [enteredUsername, setEnteredUsername] = useState<string>("");
    const [enteredAge, setEnteredAge] = useState<number>(0);
    const [error, setError] = useState<IError>();

    const submitHandler = (event :FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge === 0) {
            setError({
                title: "Invalid inputs!",
                message: "please enter valid inputs"
            });
            return;
        }
        if (enteredAge && enteredAge < 1) {
            setError({
                title: "Invalid age!",
                message: "please enter valid age"
            });
            return;
        }

        onAddUser({
            id: Math.random(),
            username: enteredUsername,
            age: enteredAge ? enteredAge : 0
        });

        console.log([
            {
                id: Math.random(),
                username: enteredUsername,
                age: enteredAge ? enteredAge : 0
            }
        ])
        setEnteredAge(0);
        setEnteredUsername("");
    }

    const errorHandler = () => {
        setError(undefined);
    }

    return  (
        <section>
            {
                error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={style.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor={"username"}>Username</label>
                    <input
                        type="text"
                        id={"username"}
                        name={"username"}
                        placeholder={"enter chosen username"}
                        value={enteredUsername}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setEnteredUsername(event.target.value) }
                    />
                    <label htmlFor={"age"}>Age</label>
                    <input
                        type="number"
                        id={"age"}
                        name={"age"}
                        value={enteredAge}
                        onChange={(event : ChangeEvent<HTMLInputElement>) => setEnteredAge(Number(event.target.value))}
                    />
                    <Button type={"submit"}>
                        Add user
                    </Button>
                </form>
            </Card>
        </section>
    )
}