import React from 'react';
import PropTypes from 'prop-types';

import SignUpForm from './signupform';


import {connect} from 'react-redux';
import {signup} from '../../actions/auth';

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
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event)=>{
        this.setState({password: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault(); 

        const {name, email, password} = this.state;
        const user = {name, email, password}; 

        this.props.signup(user, this.props.history); 
    }

    render(){
        return(
            <div>
                <SignUpForm 
                onNameChange={this.handleNameChange} 
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onSubmit={this.handleSubmit}
                message={this.props.error}
                />
            </div>
        )
    }
}

SignUp.propTypes = {
    signup: PropTypes.func.isRequired
}
const mapStateToProps = (state)=> ({
        error : state.auth.error,
})
const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp); 