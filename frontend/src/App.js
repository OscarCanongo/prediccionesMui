import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import app from './components/app';
import Login from './components/Admin/Login';
import Admin from './components/Admin/Admin';

function App() {
    return ( 
        <div className = "App" >
            <Router>
                <Switch>
                    <Route exact path = "/" component = {app}/>
                    <Route exact path = "/login" component = {Login}/>
                    <Route exact path = "/admin" component = {Admin}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;