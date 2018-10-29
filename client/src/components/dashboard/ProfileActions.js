import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class ProfileActions extends Component {
  render() {
    return (
      <ProfileActionsWrapper>
        <ButtonsContainer>
          <Link to="/edit-profile">
            <Button>Edit Profile</Button>
          </Link>
          <Bar />
          <Link to="/add-experience">
            <Button>Add Experience</Button>
          </Link>
          <Bar />
          <Link to="/add-education">
            <Button>Add Education</Button>
          </Link>
        </ButtonsContainer>
      </ProfileActionsWrapper>
    )
  }
}

ProfileActions.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  {}
)(ProfileActions)

// Styled components
const Button = styled.span`
  padding: 10px 30px;
  transition: all ease-in-out 300ms;
  border-radius: 5px;
  cursor: pointer;
  display: block;

  :hover {
    background-color: rgba(240, 245, 248, 0.6);
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Bar = styled.span`
  height: 40px;
  width: 1px;
  background-color: #ccc;
`
const ProfileActionsWrapper = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(63, 79, 89, 0.1);
  border-radius: 5px;
  margin-top: 40px;
  border: 1px solid rgba(63, 79, 89, 0.1);
`
