import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core/'

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <Form>
          <h1>Login</h1>
          <p>Login with your DevConnector account</p>
          <TextField label="Email Adress" />
          <TextField label="Password" type="password" />
          <Button color="primary" variant="raised">
            Login
          </Button>
        </Form>
      </LoginWrapper>
    )
  }
}

const LoginWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  color: black;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 500px;
  height: 600px;
  h1 {
    margin-bottom: 0px;
  }
  div {
    margin-bottom: 10px;
  }
`
