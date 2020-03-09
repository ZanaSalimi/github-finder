import React, { Component } from 'react'

export class Users extends Component {
    render() {
        console.log(this.props.users)
        const users = this.props.users.map(user => {
                return <div key={user.id} className="d-flex justify-content-between user-item py-3 px-5 my-5">
                    <div className="d-flex profile align-items-center">
                        <img src={user.avatar_url} alt=""/>
                        <p className="ml-3">{user.login}</p>
                    </div>
                    <p className="mt-3">Boston</p>
                    <p className="mt-3">tst@gmail.com</p>
                    <button className="btn profile-btn"><a href={this.props.url}>Profile</a></button>
                </div>            
        })
        return (
            <div className="container mt-5 users">
                {users}
            </div>
        )
    }
}

export default Users
