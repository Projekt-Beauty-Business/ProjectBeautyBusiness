import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = (props) => (
    <div className="background">
        <a href="#" className="logo">NAZWA</a>
        <a href="#" className="menu-bar">ZAREJESTRUJ SIĘ</a>
        <a href="#" className="menu-bar">ZALOGUJ SIĘ</a>
        <a href="#" className="menu-bar">PROWADZISZ BIZNES BEAUTY</a>
    </div>
);

Menu.propTypes = {};

export default Menu;
