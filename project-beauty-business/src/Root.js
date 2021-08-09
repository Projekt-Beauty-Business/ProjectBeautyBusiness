import React from 'react';
import PropTypes from 'prop-types';
import Main from './views/Main';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import SearchEngine from './components/SearchEngine/SearchEngine';
import HomePage from './views/HomePage/HomePage';

const Root = (props) => (
    <Router>
        <Switch>
            <Route path="/searchBar">
                <Main />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch> 
    </Router>
);

Root.propTypes = {};

export default Root;
