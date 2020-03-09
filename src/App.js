import React, { Component } from 'react'
import './main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchedUsers from './pages/SearchedUsers'
import Loading from './components/Loading'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      loading: false
    }
  }
  render() {
    if(this.state.loading){
      return(
        <Loading />
      )
    }
    else{
      return (
        <div className="container">
            <Home />
        </div>
      )
    }
  }
}

export default App
