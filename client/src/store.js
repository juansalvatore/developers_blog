import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// Combines all reducers
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

// createStore takes: reducers, , middleware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
