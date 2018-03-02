import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const login_params = {
            version: 2,
            showTermsLink: 'false',
            height: 100,
            width: 330,
            containerID: 'loginDiv',
            buttonsStyle: 'fullLogoColored',
            autoDetectUserProviders: '',
            redirectURL: "/logged",
            showTermsLink: false // remove 'Terms' link
        }
        gigya.socialize.showLoginUI(login_params);
    }

    render() {
        return (
            <div className="container has-text-centered">
                <p className="comfortaa-family">Quickly login with your social network:</p>
                <div id="loginDiv" />
                <div className="columns is-centered comfortaa-family">
                    
                    <div className="column is-3">
                        <div className="card card-equal-height">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="../public/images/simple.png" alt="Simple" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-6 comfortaa-family ">Simple</p>
                                    </div>
                                </div>

                                <div className="content comfortaa-family is-size-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-3">
                        <div className="card card-equal-height">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="../public/images/secure.png" alt="Secure" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-6 comfortaa-family ">Secure</p>
                                    </div>
                                </div>

                                <div className="content comfortaa-family is-size-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-3">
                        <div className="card card-equal-height">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="../public/images/reliable.png" alt="Reliable" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-6 comfortaa-family ">Reliable</p>
                                    </div>
                                </div>

                                <div className="content comfortaa-family is-size-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;