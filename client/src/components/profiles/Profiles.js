import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllProfiles } from '../../actions/profileActions'

import LinearProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

class Profiles extends Component {
  componentDidMount() {
    this.props.getAllProfiles()
  }

  render() {
    const { profiles, loading } = this.props.profile
    let profileItems
    if (profiles === null || loading) {
      profileItems = <LinearProgress />
    } else {
      if (profiles.length > 0) {
        profileItems = <h1>PROFILES HERE</h1>
      } else {
        profileItems = <h4>No profiles found...</h4>
      }
    }

    return (
      <Wrapper>
        <h1>Developer Profiles</h1>
        <p>Browse and connect with developers</p>
        {profileItems}
      </Wrapper>
    )
  }
}

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  { getAllProfiles }
)(Profiles)

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;

  h3 {
    margin: 0 0 10px 0;
  }
`
