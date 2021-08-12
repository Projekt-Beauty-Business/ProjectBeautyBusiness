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
        <div className={classes.whitetable}>
            <h1> BEAUTY BUSINESS </h1>
            <p> ranking </p>
            <Link to="/SearchPage"><button className={classes.button}>START</button></Link>
        </div>
    </div>
);
export default HomePage; 