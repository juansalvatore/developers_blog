import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// Layout
import Footer from 'components/layout/Footer'
import Navbar from 'components/layout/Navbar'
import Landing from 'components/layout/Landing'
// Register
import Register from 'components/auth/Register'
import Login from 'components/auth/Login'

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
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
