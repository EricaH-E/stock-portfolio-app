import React from 'react';
import SignInForm from './signinform';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:'',
        }
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event)=>{
        this.setState({password: event.target.value});
    }
    handleSubmit = (event) => {
        /* backend call goes here */
    }


    render(){
        return(
            <div>
                <SignInForm 
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SignIn; 