import React from 'react';
import * as classes from './style.module.css'
import { options } from '../../assets/data';
import Select from 'react-select';
import { Link } from "react-router-dom";

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: state.isSelected ? 'black' : 'black',
      padding: 10,
      width: 280,
    }),
    control: () => ({
      width: 280,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }



const SearchEngine = (props) => (
    <div className={classes.background}>
        <p className={classes.text}>ZNAJDŹ SALON LUB GABINET MEDYCYNY ESTETYCZNEJ</p>
        <div className={classes.box}>
            <div className={classes.boxSelect}>
                <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} className={classes.select} styles={customStyles}  placeholder="SPECIAJLIZACJA" options={options}/>
                <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} className={classes.select} styles={customStyles}  placeholder="MIASTO LUB DZIELNICA" options={options}/>
            </div>
            <Link className={classes.link} to="/LogoutMainPage">
              <div className={classes.button}>
                  <p className={classes.buttonText}>SZUKAJ</p>
              </div>
            </Link>
        </div>
    </div>
);

SearchEngine.propTypes = {};

export default SearchEngine;