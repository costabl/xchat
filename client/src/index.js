import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import App from './components/App.jsx';
import Logged from './components/Logged.jsx';
import Login from './components/Login.jsx';

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
        <div>
            <Switch>
            <Route path='/login' component={Login} />
            <Route path='/logged' component={Logged} />
            <Route path='/' component={App} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);