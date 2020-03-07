import React, { Component } from 'react'
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
                        <a className="nav-item nav-link mr-3" href="/">Contact Us</a>
                        <a className="nav-item nav-link" href="/">About Us</a>
                    </div>
                </div>
                </nav>
        )
    }
}

export default Header
