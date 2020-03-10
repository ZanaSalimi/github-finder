import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import githubLogo from '../img/Icon-github.png'
export class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light pt-4">
                    <a className="navbar-brand" href="/">
                        <img src={githubLogo} alt="GithubFinder"/>
                    </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-item nav-link mr-3">Home</Link>
                        <Link to="/Contact" className="nav-item nav-link mr-3">Contact Me</Link>
                    </div>
                </div>
                </nav>
        )
    }
}

export default Header
