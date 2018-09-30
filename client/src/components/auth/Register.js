import React, { Component } from 'react'
import { connect } from 'react-redux'
// Unoirt actions
import { registerUser } from '../../actions/authActions'
// Styling
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core/'
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
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
    const { errors } = this.state
    return (
      <RegisterWrapper>
        <Form onSubmit={this.onSubmit}>
          <h1>Sign Up</h1>
          <p>Create your DevConnector account</p>

          <TextFieldGroup
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />

          <TextFieldGroup
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />

          <TextFieldGroup
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />

          <TextFieldGroup
            name="password2"
            label="Confirm Password"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />

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
