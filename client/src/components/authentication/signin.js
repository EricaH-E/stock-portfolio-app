import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from './signinform';

import {connect} from 'react-redux';
import {signin} from '../../actions/auth';




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
        event.preventDefault();

        const {email, password} = this.state;
        const user = { email, password}; 

        this.props.signin(user, this.props.history); 
    }

    render(){
        return(
            <div>
                <SignInForm 
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onSubmit={this.handleSubmit}
                message={this.props.error}
                />
            </div>
        )
    }
}

SignIn.propTypes = {
    signin: PropTypes.func.isRequired,
}

 const mapStateToProps = (state) => ({
     authenticated : state.auth.authenticated, 
     error: state.auth.error
 })

const mapDispatchToProps = {
    signin
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn); 