import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// Layout
import Footer from 'components/layout/Footer'
import Navbar from 'components/layout/Navbar'
import Landing from 'components/layout/Landing'
// Register
import Register from 'components/auth/Register'
import Login from 'components/auth/Login'
// Dashboard
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/create-profile/CreateProfile'

/*
  Test's every time a user reloads the page if 
  the auth token is in localStorage
*/
import jwt_decode from 'jwt-decode'
import setAuthtoken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import { clearCurrentProfile } from './actions/profileActions'
// Private routes
import PrivateRoute from './components/common/PrivateRoute'

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthtoken(localStorage.jwtToken)
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
  // Check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    // TODO: Clear current user
    store.dispatch(clearCurrentProfile())
    // Redirect to login
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ fontFamily: ['Roboto Condensed', 'sans-serif'] }}>
            <Navbar />
            <Route exact path="/" component={Landing} />

            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
