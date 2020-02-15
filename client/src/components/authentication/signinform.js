import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../../styles/forms.css';

class SignInForm extends React.Component{
    render(){
        return(
            <div className="form-container">
            <div className="container">
                <h3> Sign In</h3>
                <br />
                <Form onSubmit={this.props.onSubmit}>
                    <FormGroup row>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"  onChange={this.props.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.props.onPasswordChange} placeholder="password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
         </div>
        </div>
        )
    }
}
SignInForm.propTypes = {
    onSubmit:PropTypes.func.isRequired ,
    onPasswordChange: PropTypes.func.isRequired ,
    onEmailChange: PropTypes.func.isRequired,
}

export default SignInForm;