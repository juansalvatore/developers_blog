import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Style
import styled from 'styled-components'
// Loader
import LinearProgress from '@material-ui/core/LinearProgress'
import { Button } from '@material-ui/core/'

// Redux
import { connect } from 'react-redux'
// Actions
import { getCurrentProfile } from '../../actions/profileActions'

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile

    let dashboardContent

    if (profile === null || loading) {
      dashboardContent = <LinearProgress />
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>
      } else {
        // USer is logged in but has no profile
        dashboardContent = (
          <div>
            <p>Welcome {user.name}</p>
            <p>You have not yet set up a profile, please add some info</p>
            <Link to="/create-profile" style={{ textDecoration: 'none' }}>
              <Button
                style={{ marginTop: 20 }}
                color="primary"
                variant="raised"
                type="submit"
              >
                Create Profile
              </Button>
            </Link>
          </div>
        )
      }
    }

    return (
      <DashboardWrapper>
        <h1>Dashboard</h1>
        {dashboardContent}
      </DashboardWrapper>
    )
  }
}

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard)

const DashboardWrapper = styled.div`
  position: relative;
  padding: 20px;
  top: 0px;
`
