import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
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
        )
    }
}

export default Footer;