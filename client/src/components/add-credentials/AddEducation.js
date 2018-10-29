import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TextFieldGroup from '../common/TextFieldGroup'
import { TextField, InputAdornment, NativeSelect, FormHelperText, Button } from '@material-ui/core'
import styled from 'styled-components'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddEducation extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false,
  }

  render() {
    const { errors } = this.state
    return (
      <CreateProfileWrapper>
        <Form onSubmit={this.onSubmit}>
          <Title>Add Education</Title>
          <Subtitle>Add education</Subtitle>
        </Form>
      </CreateProfileWrapper>
    )
  }
}

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.erros,
})

export default connect(
  mapStateToProps,
  {}
)(withRouter(AddEducation))

const CreateProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  padding-left: 20px;
  padding-right: 20px;
`
const Form = styled.form`
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  border-radius: 10px;
  top: 50px;
  background-color: white;
  border: 1px solid rgba(215, 221, 225, 0.6);
`
// Styled components
const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 0;
`

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.7);
`
