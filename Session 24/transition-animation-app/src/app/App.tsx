import React, {useState} from 'react';
import './App.css';
import Modal from "../components/Modal/Modal";
import BackDrop from "../components/BackDrop/BackDrop";
import List from "../components/List/List";


function App() {

    const [show, setShow] = useState<boolean>(false);

    const onOpenModalHandler = () => {
        setShow(true);
    }

    const onCloseModalHandler = () => {
        setShow(false);
    }

    return (
    <div className="app">
      <h1>React Animation</h1>
      <Modal
          show={show}
          closed={onCloseModalHandler}
      />
      <BackDrop
        show={show}
      />
      <button className={"button"} onClick={onOpenModalHandler}>
        Open Modal
      </button>
      <List />
    </div>
  );
}

export default App;
