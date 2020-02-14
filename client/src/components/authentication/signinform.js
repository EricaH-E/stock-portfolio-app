import React from 'react';

import '../../styles/forms.css';

class SignInForm extends React.Component{
    render(){
        return(
            <div className="form-container">
            <div className="container">
                <h3> Sign In</h3>
                <br />
            <form  onSubmit={this.props.onSubmit}>
                <div className="form">
                <label>EMAIL:
                    <input type="email" onChange={this.props.onEmailChange}  name="email" />
                </label>
                <label>PASSWORD:
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

export default SignInForm;