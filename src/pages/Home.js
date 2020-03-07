import React, { Component } from 'react'
import mainImage from '../img/github-header.png'

export class Home extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between mt-5">
                <div className="main-content align-self-center">
                    <h1>
                    <span className="d-block">FIND GITHUB</span>ACCOUNTS
                    </h1>
                    <input type="text" placeholder="Search Github User..." className="mt-3 w-100 border-0 user-search p-3" />
                </div>
                <div className="main-image">
                    <img src={mainImage} alt="github cat"/>
                </div>
            </div>
        )
    }
}

export default Home
