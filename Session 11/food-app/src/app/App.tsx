import React, {Fragment, useState} from 'react';
import './App.module.css';
import {Header} from "../components/Layouts/Header/Header";
import {Meals} from "../components/Meals/Meals";
import {Cart} from "../components/Cart/Cart";
import {CartProvider} from "../context/CartContext/CartProvider";


function App() {

    const [cartIsShown, setCartIsShown] = useState<boolean>(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return (
            <CartProvider>
                { cartIsShown ? <Cart onClose={hideCartHandler} /> : <></> }
                <Header onShowCart={showCartHandler} />
                <main>
                    <Meals />
                </main>
            </CartProvider>
      );
}

export default App;
