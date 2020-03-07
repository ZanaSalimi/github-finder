import React, { Component } from 'react'
import './main.scss'
import Header from './components/Header'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
