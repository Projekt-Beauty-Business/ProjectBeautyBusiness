import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './style.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";

const LoginPage = (props) => (
    <div className={classes.background}>
        <div className={classes.menu}>
            <Link to="/" className={classes.logo}>NAZWA</Link>
        </div>
        <div className={classes.container}>
            <p className={classes.mainText}>Zaloguj się na swoje konto</p>
            <input type="email" className={classes.input} placeholder="Twój e-mail"/>
            <input className={classes.input} placeholder="Twoje hasło" type="password"/>
            <button className={classes.button}>Zaloguj się</button>
            <p className={classes.forgetPassword}>Nie pamiętasz hasła?</p>
            <p className={classes.forgetPassword}>lub</p>
            <div className={classes.mediaBox}>
                <FaFacebookSquare className={classes.facebookIcon}/> 
                <p className={classes.mediaText}>Kontynuuj z Facebook</p>
            </div>
            <div className={classes.mediaBox}>
                <FaGoogle className={classes.googleIcon} />
                <p className={classes.mediaText}>Kontynuuj z Google</p>
            </div>
            <div className={classes.box}>
                <p className={classes.endText}>Nie masz konta na NAZWA</p><p className={classes.spacer}>_</p><p className={classes.endTextPink}><Link className={classes.endTextPink} to="/RegisterPage">Zarejestruj się!</Link></p></div>
            </div>
    </div>
);

LoginPage.propTypes = {};

export default LoginPage;
