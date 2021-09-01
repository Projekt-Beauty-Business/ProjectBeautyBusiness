import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as classes from './style.module.css';
import Index from '../../components/Menu';

const LogoutMainPage = (props) => (
    <Fragment>
            <div className={classes.background}></div>
            <div className={classes.invisibleBackgound}>
                <Index />
                <div className={classes.firstContainer}>
                    <div className={classes.leftFirstContiner}>
                        <div className={classes.mainPhoto}></div>
                        <div className={classes.mainInformation}>
                             <p className={classes.redirects}>Salony urody / Salon fryzjerski / Salon urody ASDASD</p>
                             <p className={classes.mainText}>SALON URODY ASDASD</p>
                             <p>Stylizacja rzęs</p>
                             <div className={classes.opinons}>
                                 <div className={classes.hearts}></div>
                                 <p>25 opini</p>
                             </div>
                        </div>
                    </div>
                </div>
                <div className={classes.secondContainer}></div>
                <div className={classes.thirdContainer}></div>
                <div className={classes.fourthContainer}></div>
                <div className={classes.fifthContainer}></div>
                <div className={classes.sixthContainer}></div>
                <div className={classes.seventhContainer}></div>
                <div className={classes.random}></div>
            </div>
    </Fragment>

);

LogoutMainPage.propTypes = {};

export default LogoutMainPage;