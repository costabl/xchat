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
            headerText:'This is my header content',
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
        gigya.socialize.logout({callback:printResponse});
        this.props.history.push("/");
    }

    printResponse(response) {    
        if ( response.errorCode == 0 ) {               	 
            alert('User has logged out');  
        }  
        else {  
            alert('Error :' + response.errorMessage);  
        }  
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