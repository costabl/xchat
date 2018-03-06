
import React, { Component } from 'react';

import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';

class Home extends Component {
    render(){
        return (
            <div className="home">
                <TopBar />
                <div className="container has-text-centered">
                    <p id="anim-typewriter">Simple. Secure. Reliable messaging.</p>
                    <p id="home-description">
                        With XChat, you'll get fast, simple, secure messaging and calling for free,<br></br>
                        available on phones all over the world.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
