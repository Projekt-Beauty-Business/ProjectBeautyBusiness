import React from 'react';
import * as classes from './style.module.css'
import { Link } from "react-router-dom";

const Menu = (props) => (
    <nav className={classes.background}>
        <Link to="/" className={classes.logo}>NAZWA</Link>
        <Link to="/RegisterPage" className={classes.menuBar}>ZAREJESTRUJ SIĘ</Link >
        <Link to="/LoginPage" className={classes.menuBar}>ZALOGUJ SIĘ</Link>
        <Link to="#" className={classes.menuBar}>PROWADZISZ BIZNES BEAUTY?</Link>
    </nav>
);

Menu.propTypes = {};

export default Menu;