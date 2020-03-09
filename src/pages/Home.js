import React, { Component } from 'react'
import mainImage from '../img/github-header.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import SearchedUsers from './SearchedUsers'
import Header from '../components/Header'
import Footer from '../components/Footer'
export class Home extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                <Route path="/users">
                    <SearchedUsers />
                </Route>
                <div className="d-flex justify-content-between mt-5">
                    <div className="main-content align-self-center">
                        <h1>
                        <span className="d-block">FIND GITHUB</span>ACCOUNTS
                        </h1>
                        <button className="submit-btn mt-5">
                            <Link to="/users">
                            Lets Start!
                            </Link>
                            </button>
                    </div>
                    <div className="main-image">
                        <img src={mainImage} alt="github cat"/>
                    </div>
                    </div>
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default Home
