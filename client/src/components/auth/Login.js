import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core/'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('Login')
  }

  render() {
    return (
      <LoginWrapper>
        <Form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <p>Login with your DevConnector account</p>
          <TextField
            name="email"
            label="Email Adress"
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <Button color="primary" variant="raised" type="submit">
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
