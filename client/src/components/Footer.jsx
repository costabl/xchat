
import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="footer fix-footer">
                    <div className="container is-fluid">
                        <div className="content has-text-centered">
                        <p className="text-footer">
                            <span className="enhance-footer">XChat</span> by <a className="xchat-footer" href="https://www.linkedin.com/in/bruno-da-costa/">Bruno Costa</a>.<br></br>
                            Extended version to support <a className="xchat-footer" href="https://developers.gigya.com/">Gygia</a> Social Login integration.
                        </p>
                        </div>
                    </div>
            </footer>                
        )
    }
}

export default Footer;
