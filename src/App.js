import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './main.scss'
import Home from './pages/Home'
import UserSearch from './pages/UserSearch'
import Contact from './pages/Contact'
import Header from './components/Header'
import Loading from './components/Loading'

export class App extends Component {
  render() {
      return (
        <Router>
          <div className="container">
          <Header />
            <Switch>
              <Route path="/users">
                  <UserSearch />
              </Route>
              <Route path="/Contact">
                  <Contact />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      )
  }
}

export default App
