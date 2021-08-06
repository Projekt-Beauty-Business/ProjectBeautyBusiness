import React from 'react';
import './Main.css';
import SearchEngine from '../../components/SearchEngine/SearchEngine';
import Menu from '../../components/Menu/Menu';
import HomePage from '../../components/HomePage/HomePage';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Main = (props) => (
    <Router>
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/searchBar">Search</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/searchBar">
            
                <Menu />
                <SearchEngine />
            
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch> 
    </Router>
);

Main.propTypes = {};

export default Main;
