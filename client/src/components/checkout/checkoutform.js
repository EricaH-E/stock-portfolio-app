import React from 'react'
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


import '../../styles/forms.css';

class CheckoutForm extends React.Component{
    render (){
        return(
            <div className="form-container">
            <div className="container">
                <h3> Buy Stock</h3>
                <br />
                <Form onSubmit={this.props.onSubmit}>
                    <FormGroup row>
                        <Label for="ticker">Ticker</Label>
                        <Input type="text" name="ticker" id="ticker"  onChange={this.props.onTickerChange} placeholder="ticker" />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="number" name="password" id="password" onChange={this.props.onQuantityChange} placeholder="quantity" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
        </div>
        </div>
        )
    }
}

CheckoutForm.propTypes = {
    onSubmit:PropTypes.func.isRequired ,
    onTickerChange: PropTypes.func.isRequired ,
    onQuantityChange: PropTypes.func.isRequired,
}
export default CheckoutForm; 