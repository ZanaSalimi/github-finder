import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './main.scss'
import Home from './pages/Home'
import UserSearch from './pages/UserSearch'
import Contact from './pages/Contact'
import Header from './components/Header'
import User from './pages/User'

export class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      Users: [],
      User: {},
      loading: false
    }
  }
  searchUsers = (text) => {
    this.setState({ loading: true})
    fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    .then(res=> res.json())
    .then(data => {
      this.setState({
          Users: data.items,
          loading: false
      })
    })
  }
  singleUser = (username) => {
    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ User: data })
    })
  }
  render() {
      return (
        <Router>
          <div className="container">
          <Header />
            <Switch>
              <Route path="/user/:login">
                  <User username={this.state.User} />
              </Route>
              <Route path="/users">
                  <UserSearch search={this.searchUsers} payload={this.state} user={this.state.User} username={this.singleUser} />
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
