import React from 'react';
import * as classes from './style.module.css'
import Menu from '../../components/Menu';
import SearchEngine from '../../components/SearchEngine';

const SearchPage = (props) => (
        <div className={classes.photo}>
                <Menu />
                <SearchEngine />
        </div>
);

SearchPage.propTypes = {};

export default SearchPage;