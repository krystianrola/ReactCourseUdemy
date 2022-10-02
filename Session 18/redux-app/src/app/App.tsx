import React, {Fragment} from 'react';
import './App.module.css';
import Counter from "../components/Counter/Counter";
import Header from "../components/Header/Header";
import Auth from "../components/Auth/Auth";
import {useSelector} from "react-redux";
import {IAuthSliceState} from "../utils/types";
import {useAppSelector} from "../store";
import UserProfile from "../components/UserProfile/UserProfile";


function App() {

    const {isAuthed} = useAppSelector(state => state.auth);

  return (
      <Fragment>
        <Header />
          {isAuthed
              ? <UserProfile />
              : <Auth />
          }
        <Counter />
      </Fragment>
  );
}

export default App;
