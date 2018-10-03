import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'
import {
  TextField,
  InputAdornment,
  NativeSelect,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'
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

  onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSelect = e => {
    this.setState({ status: e.target.value })
  }

  render() {
    const { errors } = this.state
    console.log(this.state.status)
    // Select options for status
    const options = [
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' },
    ]
    return (
      <CreateProfileWrapper>
        <Form onSubmit={this.onSubmit}>
          <h1>Create Your Profile</h1>
          <p>Lets get some information to make your profile stand out!</p>
          <TextFieldGroup
            name="handle"
            label="* Profile Handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
          />
          <Space>
            <InputLabel>Status</InputLabel>
            <NativeSelect
              onChange={this.onSelect}
              style={{ display: 'flex' }}
              defaultValue="none"
            >
              <option value="none" disabled />
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </NativeSelect>
          </Space>
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="website"
            label="Website"
            value={this.state.website}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="location"
            label="Location"
            value={this.state.location}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="skills"
            label="Skills"
            value={this.state.skills}
            onChange={this.onChange}
          />
          <FormHelperText style={{ marginTop: '-12px' }}>
            Please use comma separated values (eg: HTML,CSS,JavaScript,PHP)
          </FormHelperText>

          <div
            style={{
              position: 'relative',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            {this.state.skills.split(',').map(skill => (
              <Skill
                key={skill}
                string={skill}
                style={
                  skill === ''
                    ? { display: 'none' }
                    : { display: 'inline-block' }
                }
              >
                {skill}
              </Skill>
            ))}
          </div>
          <TextFieldGroup
            name="githubusername"
            label="GitHub Username"
            value={this.state.githubusername}
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
        </Form>
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
const Space = styled.div`
  margin-bottom: 15px;
  margin-top: 10px;
`
const Form = styled.form`
  padding: 20px;
  flex: 1;
  max-width: 800px;
`

const Skill = styled.span`
  position: relative;
  background-color: #d0dfff;
  padding: 2px 7px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`
