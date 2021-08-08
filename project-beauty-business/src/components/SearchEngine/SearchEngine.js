import React from 'react';
import PropTypes from 'prop-types';
import './SearchEngine.css';
import { options } from '../../assets/data';
import Select from 'react-select'


const SearchEngine = (props) => (
    <div className="background-search-engine">
    <p>ZNAJDŹ SALON LUB GABINET MEDYCYNY ESTETYCZNEJ</p>
    <Select options={options} placeholder="NAZWA FIRMY" classNamePrefix='filter'/>
    </div>
);

SearchEngine.propTypes = {};

export default SearchEngine;