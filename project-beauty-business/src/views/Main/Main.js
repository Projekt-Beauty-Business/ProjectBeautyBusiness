import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import SearchEngine from '../../components/SearchEngine/SearchEngine';
import Menu from '../../components/Menu/Menu';


const Main = (props) => (
    <div className="photo">
        <Menu />
        <SearchEngine />        
    </div>
);

Main.propTypes = {};

export default Main;
