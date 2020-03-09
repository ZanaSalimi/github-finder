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
  UNSAFE_componentWillMount(){
    this.setState({loading: true})
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => this.setState({ data, loading: false }))
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
          <Header />
          <Home onClick={this.onClick} />
          <Footer />
        </div>
      )
    }
  }
}

export default App
