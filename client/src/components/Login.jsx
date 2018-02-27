import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="http://localhost:8080">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                        </a>
                    </div>
                </nav>

                <footer className="footer">
                    <div className="container is-fluid">
                        <div className="content has-text-centered">
                        <p>
                            <strong>XChat</strong> by <a href="https://www.linkedin.com/in/bruno-da-costa/">Bruno Costa</a>.<br></br>
                            Extended version to support <a href="https://developers.gigya.com/">Gygia</a> Social Login integration.
                        </p>
                        </div>
                    </div>
                </footer>                

            </div>
        );
    }
}

export default Login;