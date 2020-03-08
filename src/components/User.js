import React, { Component } from 'react'
import githubProfile from '../img/Icon-github.png'
export class User extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between user-item py-3 px-5">
                <div className="d-flex profile align-items-center">
                    <img src={githubProfile} alt=""/>
                    <p className="ml-3">ZanaSalimi</p>
                </div>
                <p className="mt-3">Boston</p>
                <p className="mt-3">tst@gmail.com</p>
                <button className="btn profile-btn">Profile</button>
            </div>
        )
    }
}

export default User
