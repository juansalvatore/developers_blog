import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Check prop types
import PropTypes from 'prop-types'
// Connect to redux
import { connect } from 'react-redux'
// Import actions
import { logoutUser } from '../../actions/authActions'

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <a style={{ textDecoration: 'none' }} onClick={this.props.logoutUser}>
        <Button>LogOut</Button>
      </a>
    )

    const guestLinks = (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/register">
          <Button>Sign Up</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    )

    return (
      <Nav>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Logo>DevConnector</Logo>
        </Link>
        <Button first>Developers</Button>
        {isAuthenticated ? authLinks : guestLinks}
      </Nav>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar)

/*

  Styles

*/

const Nav = styled.nav`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

const Logo = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  font-size: 22px;
  :hover {
    cursor: pointer;
  }
`

const Button = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  margin-left: ${props => (props.first ? '40px' : '15px')};
  transition: all ease-in-out 100ms;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
  }
`
