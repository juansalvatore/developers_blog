import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'
import { TextField, InputAdornment } from '@material-ui/core'
import Instagram from '../../img/icons/instagram-logo.svg'

import styled from 'styled-components'

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {},
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <CreateProfileWrapper>
        <FormWrapper>
          <h1>Create Your Profile</h1>
          <p>Lets get some information to make your profile stand out!</p>
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextField
            style={{ width: '100%', marginTop: '20px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={Instagram} width={25} alt="Instagram" />
                </InputAdornment>
              ),
            }}
          />
        </FormWrapper>
      </CreateProfileWrapper>
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  {}
)(CreateProfile)

const CreateProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const FormWrapper = styled.div`
  padding: 20px;
  flex: 1;
  max-width: 800px;
`
