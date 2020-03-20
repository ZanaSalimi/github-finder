import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './main.scss'
import Home from './pages/Home'
import UserSearch from './pages/UserSearch'
import Contact from './pages/Contact'
import Header from './components/Header'

export class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      Users: [],
      loading: false
    }
  }
  searchUsers = (text) => {
    this.setState({ loading: true})
    fetch(`https://api.github.com/search/users?q=${text}`)
    .then(res=> res.json())
    .then(data => {
      this.setState({
          Users: data.items,
          loading: false
      })
    })
  }
  singleUser = () => {

  }
  render() {
      return (
        <Router>
          <div className="container">
          <Header />
            <Switch>
              <Route path="/users">
                  <UserSearch search={this.searchUsers} payload={this.state} />
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
