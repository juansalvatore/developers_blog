import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TextFieldGroup from '../common/TextFieldGroup'
import { TextField, FormHelperText, Button, Checkbox } from '@material-ui/core'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { addExperience } from '../../actions/profileActions'
import PropTypes from 'prop-types'

class AddExperience extends Component {
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

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  handleCheckbox = () => {
    this.setState({ disabled: !this.state.disabled })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    }
    this.props.addExperience(expData, this.props.history)
  }

  render() {
    const { errors, disabled } = this.state

    return (
      <CreateProfileWrapper>
        <Form onSubmit={this.onSubmit}>
          <Title>Add Experience</Title>
          <Subtitle>Add any job or position that you have had in the past or current</Subtitle>
          <TextFieldGroup
            name="company"
            label="* Company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
          />
          <TextFieldGroup
            name="title"
            label="* Job Title"
            value={this.state.title}
            onChange={this.onChange}
            error={errors.title}
          />
          <TextFieldGroup
            name="location"
            label="Location"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
          />
          <TextField
            style={{ marginTop: '20px' }}
            type="date"
            name="from"
            value={this.state.from}
            onChange={this.onChange}
          />
          <FormHelperText error={errors.from} style={{ marginTop: '5px', position: 'relative' }}>
            {errors.from ? 'Form field is required' : 'From'}
          </FormHelperText>

          <TextField
            disabled={disabled}
            style={{ marginTop: '20px', width: '100%' }}
            type="date"
            name="to"
            value={this.state.to}
            onChange={this.onChange}
          />
          <FormHelperText style={{ marginTop: '5px', position: 'relative' }}>To</FormHelperText>

          <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '25px 0 0 -15px' }}>
            <Checkbox color="primary" style={{ position: 'relative' }} onChange={() => this.handleCheckbox()} />
            <span style={{ display: 'inline' }}>Current Job</span>
          </span>

          <TextField
            multiline
            name="description"
            label="Job Description"
            rowsMax="8"
            value={this.state.description}
            onChange={this.onChange}
          />
          <FormHelperText style={{ margin: '5px 0 20px 0', position: 'relative' }}>
            Tell us about the position
          </FormHelperText>
          <SubmitButton color="primary" variant="raised" onSubmit={this.onSubmit} type="submit">
            Add Experience
          </SubmitButton>
        </Form>
      </CreateProfileWrapper>
    )
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience))

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
const SubmitButton = styled(Button)`
  background-color: rgb(71, 94, 240) !important;
`
