import React, { Component } from 'react';

class TopBar extends Component {
    render(){
        return (
            <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                        <img src="../public/images/logo.png" alt="XChat: Simple. Secure. Reliable messaging." width="112" height="28"/>
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <p className="control">
                                <a className="button is-primary" href="/login">
                                <span>Login</span>
                                </a>
                            </p>
                        </div>
                    </div>
            </nav>
        )
    }
}

export default TopBar;