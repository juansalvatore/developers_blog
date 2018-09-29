import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

import styled from 'styled-components'
import { TextField, Button, FormHelperText } from '@material-ui/core/'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.loginUser(user)
  }

  render() {
    const { errors } = this.props
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
          <FormHelperText error={true}>{errors.email}</FormHelperText>

          <TextField
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <FormHelperText error={true}>{errors.password}</FormHelperText>

          <Button
            style={{ marginTop: 20 }}
            color="primary"
            variant="raised"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </LoginWrapper>
    )
  }
}

Login.prototypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)

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
`
