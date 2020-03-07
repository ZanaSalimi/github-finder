import React, { Component } from 'react'
import './main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
