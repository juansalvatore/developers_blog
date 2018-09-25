import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core/'

export default class Register extends Component {
  render() {
    return (
      <RegisterWrapper>
        <Form>
          <h1>Sign Up</h1>
          <p>Create your DevConnector account</p>
          <TextField label="Name" />
          <TextField label="Email Adress" />
          <TextField label="Password" type="password" />
          <TextField label="Confirm Password" type="password" />
          <Button color="primary" variant="raised">
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
