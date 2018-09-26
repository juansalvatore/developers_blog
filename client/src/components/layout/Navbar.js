import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Logo>DevConnector</Logo>
        </Link>

        <Button first>Developers</Button>
        <Link style={{ textDecoration: 'none' }} to="/register">
          <Button>Sign Up</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/login">
          <Button>Login</Button>
        </Link>
      </Nav>
    )
  }
}

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
