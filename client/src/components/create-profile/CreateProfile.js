import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'
import {
  TextField,
  InputAdornment,
  NativeSelect,
  FormHelperText,
  Button,
} from '@material-ui/core'
import posed from 'react-pose'

import twitter from '../../img/icons/twitter-logo-button.svg'
import facebook from '../../img/icons/facebook-logo-button.svg'
import linkedin from '../../img/icons/linkedin-logo-button.svg'
import youtube from '../../img/icons/youtube-logo-button.svg'
import instagram from '../../img/icons/instagram-logo.svg'

import styled from 'styled-components'

// Import actions
import { createProfile } from '../../actions/profileActions'

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
    isOpen: false,
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    }
    this.props.createProfile(profileData, this.props.history)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSelect = e => {
    this.setState({ status: e.target.value })
  }

  createSkillBubbles = () => {
    return this.state.skills.split(',').map((skill, i) => (
      <Skill
        key={i}
        string={skill}
        style={skill === '' ? { display: 'none' } : { display: 'inline-block' }}
      >
        {skill}
      </Skill>
    ))
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  displaySocialNetworkLinks = () => {
    const social = [twitter, facebook, linkedin, youtube, instagram]
    return social.map(element => (
      <Item className="item" key={element}>
        <TextField
          style={{ width: '100%', marginTop: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={element} width={25} alt={element} />
              </InputAdornment>
            ),
          }}
        />
      </Item>
    ))
  }

  render() {
    const { errors } = this.state
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
          <Title>Create Your Profile</Title>
          <Subtitle>
            Lets get some information to make your profile stand out!
          </Subtitle>

          <DividerLine />

          <TextFieldGroup
            name="handle"
            label="* Profile Handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL. Your full name, company name,
            nickname"
          />
          <Space>
            <NativeSelect
              onChange={this.onSelect}
              style={{ display: 'flex' }}
              defaultValue="none"
            >
              <option value="none" disabled>
                * Select Profesional Status
              </option>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </NativeSelect>
            <FormHelperText error={true}>{errors.status}</FormHelperText>
          </Space>
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
          />
          <TextFieldGroup
            name="website"
            label="Website"
            value={this.state.website}
            onChange={this.onChange}
            error={errors.website}
          />
          <TextFieldGroup
            name="location"
            label="Location"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
          />
          <TextFieldGroup
            name="skills"
            label="* Skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="Please use comma separated values (eg: HTML,CSS,JavaScript,PHP)"
          />
          <SkillsWrapper>{this.createSkillBubbles()}</SkillsWrapper>
          <TextFieldGroup
            name="githubusername"
            label="GitHub Username"
            value={this.state.githubusername}
            onChange={this.onChange}
          />
          <TextField
            multiline
            name="bio"
            label="Short Bio"
            rowsMax="8"
            value={this.state.bio}
            onChange={this.onChange}
          />
          <ToggleSocialButton
            style={{ marginTop: 60, maxWidth: '250px' }}
            color="default"
            variant="raised"
            onClick={this.toggle}
          >
            Add Social Network Links
          </ToggleSocialButton>
          <Social pose={this.state.isOpen ? 'open' : 'closed'}>
            {this.displaySocialNetworkLinks()}
          </Social>

          <DividerLine />

          <SubmitButton
            color="primary"
            variant="raised"
            onSubmit={this.onSubmit}
            type="submit"
          >
            Submit
          </SubmitButton>
        </Form>
      </CreateProfileWrapper>
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile))

// Styled components
const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 0;
`

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.7);
`

const DividerLine = styled.span`
  width: calc(100% + 80px);
  height: 2px;
  margin-left: -40px;
  background-color: rgba(215, 221, 225, 0.6);
  margin-bottom: 40px;
  margin-top: 40px;
`

const CreateProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  padding-left: 20px;
  padding-right: 20px;
`
const Space = styled.div`
  margin-bottom: 15px;
  margin-top: 30px;
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

const SkillsWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Skill = styled.span`
  position: relative;
  background-color: #d0dfff;
  padding: 2px 7px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`

const ToggleSocialButton = styled(Button)`
  background-color: rgb(71, 94, 240, 0.2) !important;
  margin-top: 60px;
  max-width: 250px;
`

const SubmitButton = styled(Button)`
  background-color: rgb(71, 94, 240) !important;
`

// POSED animations
const Social = posed.div({
  open: {
    delayChildren: 200,
    staggerChildren: 50,
    height: '270px',
  },
  closed: {
    height: '0px',
    delay: 300,
  },
})

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
})
