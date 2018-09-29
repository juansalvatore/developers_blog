import React, { Component } from 'react'
import { connect } from 'react-redux'
// Unoirt actions
import { registerUser } from '../../actions/authActions'
// Styling
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { TextField, Button, FormHelperText } from '@material-ui/core/'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
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

    // Call action registerUser in authActions.js
    this.props.registerUser(newUser, this.props.history)
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))

// Styles
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
`
