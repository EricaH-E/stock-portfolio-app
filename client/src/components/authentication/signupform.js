import React from 'react';

import '../../styles/forms.css';

class SignUpForm extends React.Component{
    render(){
        return(
        <div className="form-container">
            <div className="container">
                <h3> Sign Up</h3>
                <br />
            <form  onSubmit={this.props.onSubmit}>
                <div className="form">
                <label>NAME: {' '}
                    <input type="text"  onChange={this.props.onNameChange} name="name" />
                </label>
                <label>EMAIL:{' '}
                    <input type="email" onChange={this.props.onEmailChange}  name="email" />
                </label>
                <label>PASSWORD:{' '}
                    <input type="password"  onChange={this.props.onPasswordChange} name="password" />
                </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
        )
    }
}

export default SignUpForm;