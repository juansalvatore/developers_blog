import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import posed from 'react-pose'
import Particles from 'react-particles-js'

import Puzzle from '../../img/icons/puzzle.svg'

const ClickButtonAnimation = posed.div({
  pressable: true,
  press: { scale: 0.8 },
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
})

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <LandingWrapper>
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: '#ccc',
              },
            },
            stroke: {
              color: {
                value: '#ccc',
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: ``,
          }}
        />
        <Container>
          <HeadIcon src={Puzzle} />
          <Title>Developers Connector</Title>
          <Paragraph>
            Create a developer portfolio, share posts and get help from other
            fellow developers
          </Paragraph>
          <div>
            <Link style={{ textDecoration: 'none' }} to="/register">
              <ClickButtonAnimation>
                <RegisterButton>Sign Up</RegisterButton>
              </ClickButtonAnimation>
            </Link>
            {/* <Link style={{ textDecoration: 'none' }} to="/login">
            <Button>Login</Button>
          </Link> */}
          </div>
        </Container>
      </LandingWrapper>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  {}
)(Landing)

const LandingWrapper = styled.div`
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  text-align: center;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  top: 60px;
  position: relative;
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`

const HeadIcon = styled.img`
  width: 140px;
  display: flex;
  align-self: center;
  margin-bottom: 20px;
`

const Button = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  transition: all ease-in-out 100ms;
  padding: 10px 25px 10px 25px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.4);
  }
`
const RegisterButton = styled(Button)`
  border: 3px solid rgb(253, 148, 61) !important;
  color: rgb(253, 148, 61) !important;
  background-color: rgba(240, 245, 248);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out 200ms;

  :hover {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
`
const Paragraph = styled.p`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 50px;
`
