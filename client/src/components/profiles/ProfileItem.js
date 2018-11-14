import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

class ProfileItem extends Component {
  createSkillBubbles = skills => {
    return skills.map((skill, i) => (
      <Skill key={i} string={skill} style={skill === '' ? { display: 'none' } : { display: 'inline-block' }}>
        {skill}
      </Skill>
    ))
  }

  render() {
    const { profile } = this.props

    return (
      <ProfileItemWrapper>
        <h3>{profile.user.name}</h3>
        <p>
          {profile.status} {!isEmpty(profile.company) && <span>at {profile.company}</span>}
        </p>
        <p>{!isEmpty(profile.location) && <span>{profile.location}</span>}</p>
        <Link to={`/profile/${profile.handle}`}>View Profile</Link>
        <SkillsWrapper>Skills: {this.createSkillBubbles(profile.skills)}</SkillsWrapper>
      </ProfileItemWrapper>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem

const ProfileItemWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 21px 64px -29px rgba(166, 166, 166, 1);
  border: 1px solid rgba(166, 166, 166, 0.3);
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
