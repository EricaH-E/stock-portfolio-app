import React from 'react';
// import PropTypes from 'prop-types';

import SignInForm from './signinform';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:'',
            message: '',
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
        console.log('submitted');
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

// SignUp.propTypes = {

// }

export default SignIn; 