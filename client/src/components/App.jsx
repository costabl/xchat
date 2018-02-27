import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://localhost:8080.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
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

                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h1 className="title">
                      XChat<br></br>
                      Simple. Secure. Reliable messaging.
                    </h1>
                    <br></br>
                    <h2 className="subtitle">
                        With XChat, you'll get fast, simple, secure messaging and calling for free,<br></br>
                        available on phones all over the world.
                    </h2>
                  </div>
                </div>
              

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

export default App;