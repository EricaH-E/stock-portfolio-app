import React from 'react'

import '../../styles/forms.css';

class CheckoutForm extends React.Component{
    render (){
        return(
            <div className="form-container">
            <div className="container">
                <h3> Buy Stock</h3>
                <br />
            <form  onSubmit={this.props.onSubmit}>
                <div className="form">
                <label>TICKER: {' '}
                    <input type="text"  onChange={this.props.onNameChange} name="ticker" />
                </label>
                <label>QUANTITY:{' '}
                    <input type="number" onChange={this.props.onQuantitylChange}  name="quantity" />
                </label>
                </div>
                <input type="submit" value="Checkout" />
            </form>
        </div>
        </div>
        )
    }
}
export default CheckoutForm; 