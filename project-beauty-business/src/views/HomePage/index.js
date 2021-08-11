import React from 'react';
import * as classes from './HomePage.module.css';

const HomePage = () => (
    <div className={classes.container}>
        <div className={classes.leftimage}></div>
        <div className={classes.centerimage}></div>
        <div className={classes.rightimage}></div>
        <div className={classes.whitetable}>
            <h1> BEAUTY BUSINESS </h1>
            <p> ranking </p>
            <button className={classes.button}><a href="http://localhost:3000/SearchPage">START</a></button>
        </div>
    </div>
);
export default HomePage; 