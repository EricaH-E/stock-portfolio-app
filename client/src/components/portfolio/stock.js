import React from 'react';
import PropTypes from 'prop-types';


class Stock extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            changed: false, 
            color: 'grey',
            price: 0,
        }
    }

    getCurrentPrice = () =>{
            this.setState({changed:!this.state.changed}); 
    }

    componentDidMount(){ 
        this.interval = setInterval(this.getCurrentPrice, 5000); 
    }

    componentDidUpdate( _, prevState){
            if(prevState.changed !== this.state.changed){
                if(prevState.color === 'green'){
                    this.setState({color: 'red'});
                }else{
                    this.setState({color: 'green'});
                }
            }
    }

    render() {
       const {id, name, ticker, shares} = this.props; 
       const col = {color: this.state.color} 
        return(
            <tr key={id} style={col}> 
               <td>{ticker}</td> 
               <td>{name}</td> 
               <td>{shares}</td> 
               <td>{500 * shares}</td> 
            </tr> 
        )
    }
}

Stock.propTypes = {
    ticker: PropTypes.string,
    shares: PropTypes.number,
    value: PropTypes.number,
}
export default Stock; 