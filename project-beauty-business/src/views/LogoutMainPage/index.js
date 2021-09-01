import React, { Fragment } from 'react';
import * as classes from './style.module.css';
import Menu from '../../components/Menu';
import { withStyles } from '@material-ui/core/styles';
import {Rating} from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);


const LogoutMainPage = (props) => (
    <Fragment>
            <div className={classes.background}></div>
            <div className={classes.invisibleBackground}>
                <Menu />
                <div className={classes.firstContainer}>
                    <div className={classes.leftFirstContainer}>
                        <div className={classes.mainPhoto}></div>
                        <div className={classes.mainInformation}>
                             <p className={classes.redirects}>Salony urody / Salon fryzjerski / Salon urody ASDASD</p>
                             <p className={classes.mainText}>SALON URODY ASDASD</p>
                             <p className={classes.category}>Stylizacja rzęs</p>
                             <div className={classes.opinons}>
                                 <Box component="fieldset" mb={3} borderColor="transparent">
                                     <StyledRating
                                         name="customized-color"
                                         defaultValue={2}
                                         getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                         precision={0.5}
                                         icon={<FavoriteIcon fontSize="inherit" />}
                                     />
                                 </Box>
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