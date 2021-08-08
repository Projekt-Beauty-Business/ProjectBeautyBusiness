import React from 'react';
import './Menu.css';
import styled from 'styled-components';

const Back = styled.nav`
      width: 100%;
    height: 120px;
    background: #343131;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Menu = (props) => (
    // <nav className="background">
    <Back>
        <a href="#" className="logo">NAZWA</a>
        <a href="#" className="menu-bar">ZAREJESTRUJ SIĘ</a>
        <a href="#" className="menu-bar">ZALOGUJ SIĘ</a>
        <a href="#" className="menu-bar">PROWADZISZ BIZNES BEAUTY</a>
    </Back>
    /* </nav> */
);

Menu.propTypes = {};

export default Menu;
