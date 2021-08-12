import React from 'react';
import PropTypes from 'prop-types';
import SearchPage from './views/SearchPage/index';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import HomePage from './views/HomePage/index'
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

const Root = (props) => (
    <Router>
        <Switch>
            <Route path="/RegisterPage">
                <RegisterPage />
            </Route>
            <Route path="/LoginPage">
                <LoginPage/>
            </Route>
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
