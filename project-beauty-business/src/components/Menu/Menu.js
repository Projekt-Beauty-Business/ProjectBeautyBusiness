import React from 'react';
import './Menu.css';

import SearchEngine from '../SearchEngine/SearchEngine';
import HomePage from '../../views/HomePage/HomePage';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";

const Menu = (props) => (
    <Router>
    <nav className="background">
        <Link to="/" className="logo">NAZWA</Link>
        <Link to="/searchBar" className="menu-bar">WYSZUKAJ</Link>
        <Link to="#" className="menu-bar">ZAREJESTRUJ SIĘ</Link >
        <Link to="#" className="menu-bar">ZALOGUJ SIĘ</Link>
        <Link to="#" className="menu-bar">PROWADZISZ BIZNES BEAUTY?</Link>
    </nav>

        <Switch>
            <Route path="/searchBar">
                <SearchEngine />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch> 

    </Router>
);

Menu.propTypes = {};

export default Menu;