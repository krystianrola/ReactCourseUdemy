import React, {Fragment} from "react";
import style from "./Header.module.css";
import image from "../../../assets/meals.jpg";
import {HeaderCartButton} from "./HeaderCartButton/HeaderCartButton";

interface HeaderProps {
    onShowCart: () => void;
}

export const Header = ({ onShowCart }:HeaderProps) :JSX.Element => {
    return (
        <Fragment>
            <header className={style.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={style["main-image"]}>
                <img src={image} alt="meals-table"/>
            </div>
        </Fragment>
    )
}