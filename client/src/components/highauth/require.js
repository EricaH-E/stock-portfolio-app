import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends React.Component {

    //before mounting, pushing the history to login 
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    //before rendering, pushing history to login 
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    //typcasting as an object 
    PropTypes = {
      router: PropTypes.object,
    }

    //rendering the component 
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  //passing the updated state 
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}