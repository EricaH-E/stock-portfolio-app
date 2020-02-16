import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 

import {signout }from '../../actions/auth';

class SignOut extends React.Component{

    componentDidMount(){
        this.props.signout(this.props.history);
    }
    render(){
        return <div>Signing User out</div>
    }
}

SignOut.propTypes = {
    signout: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
   signout,
}

export default connect(null, mapDispatchToProps)(SignOut); 