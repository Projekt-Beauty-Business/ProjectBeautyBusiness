import React from 'react';
import * as classes from './Main.module.css'
import Menu from '../../components/Menu/Menu';
import SearchEngine from '../../components/SearchEngine/SearchEngine';

const Main = (props) => (
        <div className={classes.photo}>
                <Menu />
                <SearchEngine />
        </div>
);

Main.propTypes = {};

export default Main;