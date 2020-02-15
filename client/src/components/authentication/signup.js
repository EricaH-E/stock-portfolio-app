import React from 'react';
// import PropTypes from 'prop-types';


import SignUpForm from './signupform';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email:'',
            password:'',

        }
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
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
                <SignUpForm 
                onNameChange={this.handleNameChange} 
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

export default SignUp; 