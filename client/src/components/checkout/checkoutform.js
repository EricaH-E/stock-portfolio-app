import React from 'react'
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';


import '../../styles/forms.css';

class CheckoutForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <div className="container">
                    <h3> Buy Stock</h3>
                    <br />
                    <Form onSubmit={this.props.onSubmit}>
                        <FormGroup row>
                            <Label for="ticker">Ticker</Label>
                            <Input type="text" name="ticker" id="ticker" onChange={this.props.onTickerChange} placeholder="ticker" />
                        </FormGroup>
                        {this.props.cost > 0 ? <Alert> COST: {this.props.cost}</Alert> : null}
                        <FormGroup row>
                            <Label for="quantity">Quantity</Label>
                            <Input type="number" name="quantity" id="quantity" onChange={this.props.onQuantityChange} min="1" placeholder="quantity" />
                        </FormGroup>
                        {this.props.message ? <Alert color="danger">{this.props.message}</Alert> : null}
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

CheckoutForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onTickerChange: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
}
export default CheckoutForm; 