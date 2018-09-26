import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core/'

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    console.log({ newUser })
  }

  render() {
    const { name, email, password, password2 } = this.state
    return (
      <RegisterWrapper>
        <Form onSubmit={this.onSubmit}>
          <h1>Sign Up</h1>
          <p>Create your DevConnector account</p>
          <TextField
            name="name"
            label="Name"
            value={name}
            onChange={this.onChange}
          />
          <TextField
            name="email"
            label="Email Adress"
            value={email}
            onChange={this.onChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
          />
          <TextField
            name="password2"
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={this.onChange}
          />
          <Button color="primary" variant="raised" type="submit">
            Sign Up
          </Button>
        </Form>
      </RegisterWrapper>
    )
  }
}

const RegisterWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
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
