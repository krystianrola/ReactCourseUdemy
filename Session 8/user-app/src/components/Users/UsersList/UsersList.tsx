import React from "react";
import {IUser} from "../../../types";
import {Card} from "../../UI/Card/Card";
import style from "./userlist.module.css"

interface UsersListProps {
    users: IUser[]
}

export const UsersList = ({users} :UsersListProps) :JSX.Element => {
    return (
        <Card className={style.users} >
            <ul>
                {
                    users.map( (user: IUser) => {
                        return(
                            <li key={user.id}>
                                {user.username} ({user.age})
                            </li>
                        )
                    })
                }
            </ul>
        </Card>
    )
}