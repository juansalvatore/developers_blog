import React, { Component } from 'react'
// Styling
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core/'
import FormHelperText from '@material-ui/core/FormHelperText'

// HTTP requests (AXIOS)
import axios from 'axios'

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
    // We added: "proxy": "http://localhost:5000" to package.json
    // There is no need to add the rest of the route
    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => {
        this.setState({ errors: err.response.data })
        console.log(this.state.errors)
      })
  }

  render() {
    const { name, email, password, password2, errors } = this.state
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
            error={errors.name ? true : false}
          />
          <FormHelperText error={true}>{errors.name}</FormHelperText>

          <TextField
            name="email"
            label="Email Adress"
            value={email}
            onChange={this.onChange}
            error={errors.email ? true : false}
          />
          <FormHelperText error={true}>{errors.email}</FormHelperText>

          <TextField
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            error={errors.password ? true : false}
          />
          <FormHelperText error={true}>{errors.password}</FormHelperText>
          <TextField
            name="password2"
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={this.onChange}
            error={errors.password2 ? true : false}
          />
          <FormHelperText error={true}>{errors.password2}</FormHelperText>

          <Button
            style={{ marginTop: 20 }}
            color="primary"
            variant="raised"
            type="submit"
          >
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
  }
`
