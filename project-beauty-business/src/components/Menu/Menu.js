import React from 'react';
import './Menu.css';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";

const Menu = (props) => (
    <nav className="background">
        <Link to="/" className="logo">NAZWA</Link>
        <Link to="/RegisterPage" className="menu-bar">ZAREJESTRUJ SIĘ</Link >
        <Link to="/LoginPage" className="menu-bar">ZALOGUJ SIĘ</Link>
        <Link to="#" className="menu-bar">PROWADZISZ BIZNES BEAUTY?</Link>
    </nav>
);

Menu.propTypes = {};

export default Menu;