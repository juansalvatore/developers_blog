import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <Title>Developer Connector</Title>
        <Paragraph>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </Paragraph>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/register">
            <Button>Sign Up</Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </LandingWrapper>
    )
  }
}

const LandingWrapper = styled.div`
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  text-align: center;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-family: 'helvetica';
  font-weight: 600;
  margin-right: 20px;
  transition: all ease-in-out 100ms;
  padding: 10px 25px 10px 25px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.4);
  }
`

const Title = styled.h1`
  margin: 0;
`
const Paragraph = styled.p`
  margin-bottom: 50px;
`
