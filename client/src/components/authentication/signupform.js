import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';


import '../../styles/forms.css';

class SignUpForm extends React.Component{
    render(){
        return(
            <div className="form-container">
            <div className="container">
                <h3> Sign Up</h3>
                <br />
                <Form onSubmit={this.props.onSubmit}>
                    <FormGroup row>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name"  onChange={this.props.onNameChange} placeholder="username" />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"  onChange={this.props.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.props.onPasswordChange} placeholder="password" />
                    </FormGroup>
                    {this.props.message ? <Alert color="danger">{this.props.message}</Alert> : null}
                    <Button>Submit</Button>
                </Form>
         </div>
        </div>
        )
    }
}

SignUpForm.propTypes = {
    onSubmit:PropTypes.func.isRequired ,
    onPasswordChange: PropTypes.func.isRequired ,
    onEmailChange: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
}

export default SignUpForm;