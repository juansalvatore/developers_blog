// HTTP requests (AXIOS)
import axios from 'axios'

import { GET_ERRORS } from './types'

export const registerUser = (userData, history) => dispatch => {
  // We added: "proxy": "http://localhost:5000" to package.json
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    })
}
