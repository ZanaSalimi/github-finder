import React, { Component } from 'react'
import User from './User'

export class Users extends Component {
    render() {
        return (
            <div className="container mt-5 users">
                <User />
            </div>
        )
    }
}

export default Users
