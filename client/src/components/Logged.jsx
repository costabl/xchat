import React from 'react';

export default class Logged extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ammountLogs: 0,
            hasEmail: true,
            user: {}
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let self = this;
        var parse = function(data){
            let user = data.user;
            
            console.log(data);
            self.setState({user: user});

            if (!user.email){
                self.setState({hasEmail:  false});
                
             }
            // Inject the user's nickname to the "divUserName" div 
            //document.getElementById('nickname').innerHTML = user.nickname;
      
            // Inject the user's photo to the image "src" attribute. 
            //document.getElementById('imgUserPhoto').src = user.photoURL;
             
            // Display the Login social network name and the social network user ID and UID
            //document.getElementById('SocIDs').innerHTML = '<h3>Your ' + user.loginProvider + ' ID is: ' + user.loginProviderUID + '</br>UID: ' + user.UID + '</h3><br />';
        };
        let user = gigya.socialize.getUserInfo({callback: parse});
        
        var context = {
            msg:'This is my params.context.msg'
        };
        
        var params = { 
            captionText:'This is my caption text',
            headerText:'Connected Social Network Providers',
            showTermsLink:false,
            showEditLink:false,
            context:context,
            containerID: 'socialConnections'
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
    }

    onSubmit(){
        this.setState({
            hasEmail: true
        })
    }

    onLogout(){
        gigya.socialize.logout({callback:this.printResponse});
        this.props.history.push("/");
    }

    printResponse(response) {    
        if ( response.errorCode == 0 ) {               	 
            console.log('User has logged out');  
        }  
        else {  
            console.log('Error :' + response.errorMessage);  
        }  
    } 

    onShare(event) {
        event.preventDefault();

        // Constructing a UserAction Object
        var act = new gigya.socialize.UserAction();

        // Setting the Title
        act.setTitle("This is my title");

        // Adding a Link Back
        act.setLinkBack("http://www.gigya.com/site/content/socialize.aspx");

        // Setting the Description
        act.setDescription("This is my Description");

        // Adding a Media (image)
        act.addMediaItem( {
        type: 'image',      // Type of the media (image/flash/mp3)
        src: 'http://graphics8.nytimes.com/images/2006/01/02/science/03cute.large2.jpg',   // URL to the image source
        href: 'http://www.gigya.com/site/content/socialize.aspx'    // URL to redirect the user when he clicks the image
        });

        // Activate the Share add-on
        gigya.socialize.showShareUI({  userAction:act });
    }

    render(){
        return this.state.hasEmail ? (
            <div style={{textAlign: 'center'}}>
                <div>
                    
                    Welcome, <h2>{this.state.user.nickname}</h2>
                    <p>You authenticated with <span id="loginProvider"></span></p>
                    <h2>You logged X times in this app. That's awesome!</h2>
                </div>
                <div id="socialConnections"></div>
                <div>
                    <form onSubmit={this.onLogout.bind(this)}>
                        <input type="submit" value="Log out" />
                    </form>
                    <form onSubmit={this.onShare.bind(this)}>
                        <input type="submit" value="Share" />
                    </form>
                </div>
            </div>
        ) : (
            <div style={{textAlign: 'center'}}>
                Please enter with you e-mail:
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input/>
                </form>
            </div>
        )
    }
}