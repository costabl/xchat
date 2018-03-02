import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import TopBar from './components/TopBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

import Logged from './components/Logged.jsx';
import Login from './components/Login.jsx';

import Bulma from 'bulma/css/bulma.css';
import Default from '../public/styles/default.css';

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
        <div>
            {window.location.pathname !== '/' ? <TopBar /> : ''}
            <Route exact path='/' component={Home} />
            <div className="columns">
                <div className="column is-12">
                    <Route exact path='/logged' component={Logged} />
                    <Route exact path='/login' component={Login} />
                </div>
            </div>
            {window.location.pathname !== '/' ? <Footer /> : ''} 
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);