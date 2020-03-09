import React, { Component } from 'react'
import './main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchedUsers from './pages/SearchedUsers'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }
  UNSAFE_componentWillMount(){
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => this.setState({ data }))
  }
  render() {
    return (
      <div className="container">
        <Header />
        <SearchedUsers users={this.state.data} />
        <Footer />
      </div>
    )
  }
}

export default App
