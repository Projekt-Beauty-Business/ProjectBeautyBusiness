import React from 'react';
import PropTypes from 'prop-types';
import SearchPage from './views/SearchPage/index';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import HomePage from './views/HomePage/index'

const Root = (props) => (
    <Router>
        <Switch>
            <Route path="/SearchPage">
                <SearchPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch> 
    </Router>
);

Root.propTypes = {};

export default Root;
