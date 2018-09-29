/* 
  File used to combine reducers into one single object
*/

import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
})
