
import React from 'react';

export default class Logged extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ammountLogs: 0,
            hasEmail: true,
            user: {}
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let self = this;
        let parse = function(data){
            let user = data.user;
            self.setState({user: user});

            if (!user.email){
                self.setState({hasEmail:  false});                
             }

        };
        let user = gigya.socialize.getUserInfo({callback: parse});

        // Make a request for a user with a given ID
        axios.get('http://localhost:3000/api/session')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.post('http://localhost:3000/api/session/create', { 
            "username" : "bruno-hardcoded-axios", 
            "provider": "googleplus"
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // show networks providers connecteds
        let params = { 
            showTermsLink:false,
            showEditLink:false,
            containerID: 'networks'
        };
        
        function myOnClose(evt) {
            evt['msg'] = 'The plugin has just been closed';
            var msg = 'Event name is : ' + evt.eventName +'\n';
            msg+= 'evt[\'msg\'] is : ' + evt['msg']+'\n';
            msg+= 'context.msg is : ' + evt['context']['msg'];            
            alert(msg);   
        }
        params['onClose'] = myOnClose;
        
        gigya.socialize.showAddConnectionsUI(params);
        this.handleShowHide = this.handleShowHide.bind(this);
    }

    onSubmit(){
        this.setState({
            hasEmail: true
        })
    }

    onLogout(){
        gigya.socialize.logout();
        this.props.history.push("/login");
    }

    onShare(event) {
        event.preventDefault();
        let act = new gigya.socialize.UserAction();
        act.setTitle(document.querySelector('#inputTitle').value);
        act.setLinkBack("http://www.gigya.com/site/content/socialize.aspx");
        act.setDescription(document.querySelector('#inputDescription').value);
        act.addMediaItem( {
            type: 'image',
            src: 'http://graphics8.nytimes.com/images/2006/01/02/science/03cute.large2.jpg',
            href: 'http://www.gigya.com/site/content/socialize.aspx'
        });

        gigya.socialize.showShareUI({  userAction:act });
    }

    handleShowHide(option) {
        let connected = document.querySelector('#boxSocialConnected');
        let share = document.querySelector('#boxSocialShare');
        if (connected && share){
            if (option === 1){
                connected.style.display = 'block';
                share.style.display = 'none';
            } else if ((option === 2)) {
                connected.style.display = 'none';
                share.style.display = 'block';
            }
        }
    }

    render(){
        return this.state.hasEmail ? (
            <div className="container">
                <div className="columns">
                    <div className="container profile">
                        <div className="section profile-heading">
                            <div className="columns is-mobile is-multiline">
                                <div className="column is-2">
                                <span className="header-icon user-profile-image">
                                    <img className="profile-image" alt="Profile photo" src={this.state.user.photoURL} />
                                </span>
                                </div>
                                <div className="column is-4-tablet is-10-mobile name">

                                    <span className="title is-bold">{this.state.user.firstName}&nbsp;{this.state.user.lastName}</span>
                                    <br />
                                    <form onSubmit={this.onLogout.bind(this)}>
                                        <input type="submit" className="button is-primary is-outlined" value="Log out" style={{margin: '5px 0'}} />
                                    </form>
                                    <br />

                                    <p className="tagline">
                                        {this.state.user.email || this.state.user.nickname}
                                    </p>
                                </div>
                                <div className="column is-2-tablet is-4-mobile has-text-centered pull-right">
                                    <p className="stat-val">3</p>
                                    <p className="stat-key">amount logged</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile-options is-fullwidth">
                            <div className="tabs is-fullwidth is-medium">
                                <ul>
                                    <li className="link">
                                        <a option={1} onClick={() => this.handleShowHide(1)} href="#">
                                            <span className="icon">
                                                <i className="fa fa-list"></i>
                                            </span>
                                            <span>Social networks connected</span>
                                        </a>
                                    </li>
                                    <li className="link">
                                        <a option={2} onClick={() => this.handleShowHide(2)} href="#">
                                            <span className="icon">
                                                <i className="fa fa-list"></i>
                                            </span>
                                            <span>Share on social networks</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="boxSocialConnected" className="box" style={{borderRadius: '0px', display: 'block'}}>
                            <div className="columns">
                                <div className="column is-2-tablet user-property-count has-text-centered">
                                    <p className="subtitle is-5">
                                        <strong>{this.state.user.providers ? this.state.user.providers.length : 0}</strong>
                                        <br /> connected
                                    </p>
                                </div>
                                <div className="column is-8">
                                    <div id="networks" />
                                </div>
                            </div>
                        </div>

                        <div id="boxSocialShare" className="box" style={{borderRadius: '0px', display: 'none'}}>
                            <div className="columns">
                                <div className="column is-8">
                                    <div>
                                        <form onSubmit={this.onShare.bind(this)}>
                                            <div className="field">
                                                <input type="text" name="title" id="inputTitle" placeholder="Title" className="input" required />
                                            </div>
                                            <div className="field">
                                                <input type="text" name="description" id="inputDescription" className="input" placeholder="Description" required />
                                            </div>
                                            <input type="submit" className="button is-success" value="Share" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div style={{textAlign: 'center'}}>
                Please enter with your e-mail:
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input className="input" />
                </form>
            </div>
        )
    }
}
