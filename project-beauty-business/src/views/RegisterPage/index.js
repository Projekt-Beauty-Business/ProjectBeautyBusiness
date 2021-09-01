import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './style.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = (props) => (
    <div className={classes.background}>
        <div className={classes.menu}>
            <Link to="/" className={classes.logo}>NAZWA</Link>
        </div>
        
        <div className={classes.container}>
            <div className={classes.whiteBox}>
                <p className={classes.mainText}>Załóż darmowe konto</p>
                <div className={classes.mediaBox}>
                    <FaFacebookSquare className={classes.facebookIcon}/> 
                    <p className={classes.mediaText}>Kontynuuj z Facebook</p>
                </div>
                <div className={classes.mediaBox}>
                    <FaGoogle className={classes.googleIcon} />
                    <p className={classes.mediaText}>Kontynuuj z Google</p>
                </div>
                <p className={classes.forgetPassword}>lub</p>
                <input type="text" className={classes.input} placeholder="Twój e-mail" type="email"/>
                <input className={classes.input} placeholder="Twoje hasło" type="password"/>
                <button className={classes.button}>Zarejestruj się</button>
                <div className={classes.box}>
                    <p className={classes.endText}>Posiadasz już konto na NAZWA?</p>
                    <p className={classes.endTextPink}><Link className={classes.endTextPink} to="/LoginPage">Zaloguj się!</Link></p>
                </div>
            </div>
        </div>
    </div>
);

RegisterPage.propTypes = {};

export default RegisterPage;
