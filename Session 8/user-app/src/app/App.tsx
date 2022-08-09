import React, {useState} from 'react';
import './App.css';
import {AddUser} from "../components/Users/AddUser/AddUser";
import {IUser} from "../types";
import {UsersList} from "../components/Users/UsersList/UsersList";

function App() {

    const [users, setUsers] = useState<IUser[]>([]);

    const addUserHandler = (newUser: IUser) => {
        setUsers( (users: IUser[]) => {
            return [...users, newUser];
        });
    }

    return (
    <main className="App">
        <AddUser onAddUser={addUserHandler} />
        {
            ( users.length !== 0 ) &&
            <UsersList users={users} />
        }
    </main>
  );
}

export default App;
