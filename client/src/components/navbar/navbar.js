import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  renderUserWelcome() {
    const { name } = this.props.user;
    return (
      <div className="user">
        <NavItem> Welcome, {name} </NavItem>
        {this.renderUserBalance()}
      </div>
    )
  }
  renderUserBalance() {
    const { balance } = this.props.user;
    return (
      <NavItem>Balance: {balance}</NavItem>

    )

  }

  showNav() {
    return (
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
    )
  }
  render() {

    return (
      <div>
        <Navbar color="success" light expand="sm" className="mb-5">
          <NavbarBrand href="/" className="mr-auto">Stock Portfolio App</NavbarBrand>
          <NavbarToggler onClick={this.onToggle} className="mr-2" />
          {this.props.authenticated ? this.renderUserWelcome() : ''}
          <Collapse isOpen={this.state.toggle} navbar>
            {this.props.authenticated ? this.showNav() : null}

          </Collapse>
        </Navbar>
      </div>
    )
  }
}

NavBar.propTypes = {
  authenticated: PropTypes.bool,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  user: state.user,
})

export default connect(mapStateToProps)(NavBar);

