import React from 'react';
import * as classes from './style.module.css';
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className={classes.container}>
        <div className={classes.leftImage}></div>
        <div className={classes.centerImage}></div>
        <div className={classes.rightImage}></div>
        <div className={classes.space}>
        <div className={classes.whiteTable}>
            <div className={classes.mainText}> <p className={classes.left}>BEAUTY</p> <p className={classes.right}>BUSINESS</p></div>
            <p className={classes.pinkText}> ranking </p>
            <Link to="/SearchPage"><button className={classes.button}>START</button></Link>
        </div>
        </div>
    </div>
);
export default HomePage; 