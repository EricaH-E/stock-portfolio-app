import React from 'react';
import {Link }from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';


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
    render() {
      if (window.location.pathname === '/signin' || window.location.pathname === '/signup' || window.location.pathname ==='/') return null;
       return (
        <div>
        <Navbar color="faded" light expand="sm" className="mb-5">
          <NavbarBrand href="/" className="mr-auto">Stock Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.onToggle} className="mr-2" />
          <Collapse isOpen={this.state.toggle} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/portfolio">Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/transactions">Transactions</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/signin">Sign Out</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        )
    }
}

export default NavBar; 

