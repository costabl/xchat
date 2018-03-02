import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    render(){
        return (
            <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src="../public/images/logo.png" alt="XChat" id="logo" />
                        </Link>
                    </div>
                    {window.location.pathname === '/' ? (
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <p className="control">
                                    <a className="button is-primary" href="/login">
                                    <span>Login</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    ) : ''}
            </nav>
        )
    }
}

export default TopBar;