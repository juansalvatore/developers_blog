import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import styled from 'styled-components'
import { deleteExperience } from '../../actions/profileActions'

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id)
  }
  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{' '}
          {exp.to === null ? <span>Current</span> : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
        </td>
        <td>
          <button onClick={() => this.onDeleteClick(exp.id)}>Delete</button>
        </td>
      </tr>
    ))
    return (
      <ExperienceWrapper>
        <h3>Experience Credentials</h3>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </ExperienceWrapper>
    )
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(
  null,
  { deleteExperience }
)(Experience)

const ExperienceWrapper = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;

  h3 {
    margin: 0 0 10px 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  table,
  th,
  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 20px;
  }

  td {
    height: 40px;
  }
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.03);
  }
  th {
    height: 40px;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }
`
