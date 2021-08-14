import React from 'react';
import * as classes from './HomePage.module.css';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";

const HomePage = () => (
    <div className={classes.container}>
        <div className={classes.leftimage}></div>
        <div className={classes.centerimage}></div>
        <div className={classes.rightimage}></div>
        <div className={classes.space}>
        <div className={classes.whitetable}>
            <div className={classes.mainText}> <p className={classes.left}>BEAUTY</p> <p className={classes.right}>BUSINESS</p></div>
            <p className={classes.pinkText}> ranking </p>
            <Link to="/SearchPage"><button className={classes.button}>START</button></Link>
        </div>
        </div>
    </div>
);
export default HomePage; 