import React from 'react';
import './Menu.css';

const Menu = (props) => (
    <nav className="background">
        <a href="#" className="logo">NAZWA</a>
        <a href="#" className="menu-bar">ZAREJESTRUJ SIĘ</a>
        <a href="#" className="menu-bar">ZALOGUJ SIĘ</a>
        <a href="#" className="menu-bar">PROWADZISZ BIZNES BEAUTY</a>
    </nav>
);

Menu.propTypes = {};

export default Menu;
