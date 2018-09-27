/* 
  File used to combine reducers into one single object
*/

import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
  auth: authReducer,
})
