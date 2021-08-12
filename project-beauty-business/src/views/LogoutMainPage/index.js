import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as classes from './style.module.css';
import Menu from '../../components/Menu/Menu';

const LogoutMainPage = (props) => (
    <Fragment>
            <div className={classes.background}></div>
            <div className={classes.invisibleBackgound}>
                <Menu />
                <div className={classes.firstContainer}></div>
                <div className={classes.random}></div>
            </div>
    </Fragment>
    
);

LogoutMainPage.propTypes = {};

export default LogoutMainPage;
