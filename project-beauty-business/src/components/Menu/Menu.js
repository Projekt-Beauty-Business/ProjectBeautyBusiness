import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = (props) => (
    <div className="background">
        <p className="logo">NAZWA</p>
        <p className="menu-bar">ZAREJESTRUJ SIĘ</p>
        <p className="menu-bar">ZALOGUJ SIĘ</p>
        <p className="menu-bar">PROWADZISZ BIZNES BEAUTY?</p>
    </div>
);

Menu.propTypes = {};

export default Menu;
