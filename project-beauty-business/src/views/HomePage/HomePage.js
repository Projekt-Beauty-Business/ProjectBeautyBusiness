import React from 'react';
import './HomePage.css';

const HomePage = () => (
    <div className="container">
        <div className="left image"></div>
        <div className="center image"></div>
        <div className="right image"></div>
        <div className="whitetable">
            <h1> BEAUTY BUSINESS </h1>
            <p> ranking </p>
            <div>
                <a href="http://localhost:3000/searchBar" className="myButton">START</a>
            </div>
        </div>
    </div>
);
export default HomePage;