import React from 'react';
import {connect} from 'react-redux'; 
import {Link }from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';


class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            toggle: false
         }
    }

    onToggle =() => {    
         this.setState({toggle: !this.state.toggle}) ;
    }

    showNav(){
        return(
          <Navbar color="faded" light expand="sm" className="mb-5">
          <NavbarBrand href="/" className="mr-auto">Stock Portfolio</NavbarBrand>
            <NavbarToggler onClick={this.onToggle} className="mr-2" />
            <Collapse isOpen={this.state.toggle} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/transactions">Transactions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signout">Sign Out</NavLink>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      )
    }
    render() {
      
       return (
        <div>
            {this.props.authenticated ? this.showNav(): null}
        </div>
        )
    }
}

NavBar.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
})

export default  connect(mapStateToProps)(NavBar); 

