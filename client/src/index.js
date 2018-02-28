import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import TopBar from './components/TopBar.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

import Logged from './components/Logged.jsx';
import Login from './components/Login.jsx';

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
        <div>
            <TopBar />
                <div className="columns">
                    <div className="column is-12">
                        <Route path='/logged' component={Logged} />
                        <Route exact path='/' component={Body} />
                    </div>
                </div>
            <Footer />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);