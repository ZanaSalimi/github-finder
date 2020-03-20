import React, { Component } from 'react'
import mainImage from '../img/github-header.png'
import { Link } from 'react-router-dom'
export class Home extends Component {
    render() {
        return (
                <div className="d-flex justify-content-between mt-5">
                    <div className="main-content align-self-center">
                        <h1>
                        <span className="d-block">FIND GITHUB</span>ACCOUNTS
                        </h1>
                        <Link to="/users">
                            <button className="submit-btn mt-5">
                                Lets Start!
                            </button>
                        </Link>
                    </div>
                    <div className="main-image">
                        <img src={mainImage} alt="github cat"/>
                    </div>
                    </div>
        )
    }
}
export default Home