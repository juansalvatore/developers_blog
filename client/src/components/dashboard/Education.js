import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import styled from 'styled-components'
import { deleteEducation } from '../../actions/profileActions'

import bucket from '../../img/icons/rubbish-bin.svg'

class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id)
  }
  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{' '}
          {edu.to === null ? <span>Current</span> : <Moment format="DD/MM/YYYY">{edu.to}</Moment>}
        </td>
        <td>
          <span onClick={() => this.onDeleteClick(edu._id)}><img src={bucket} alt="delete"  width={25}/></span>
        </td>
      </tr>
    ))
    return (
      <EducationWrapper>
        <h3>Education Credentials</h3>
        <table>
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </EducationWrapper>
    )
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(
  null,
  { deleteEducation }
)(Education)

const EducationWrapper = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 120px;
  border-radius: 10px;

  h3 {
    margin: 0 0 10px 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed
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

  td:nth-child(4) {
    text-align: center;
    opacity: 0.3;
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
