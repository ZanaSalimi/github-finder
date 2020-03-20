import React, { Component } from 'react'

export class Users extends Component {
    constructor(props){
        super(props);
        this.state={
          data: []
        }
      }
    onClick = (e) => {
        console.log(e.value)
    }
    render() {
        const users = this.props.users.map(user => {
                return <div key={user.id} className="d-flex justify-content-between user-item py-3 px-5 my-5">
                    <div className="d-flex profile align-items-center">
                        <img src={user.avatar_url} alt=""/>
                        <p className="ml-3">{user.login}</p>
                    </div>
                    <button className="btn profile-btn" onClick={this.onClick}>Profile</button>
                </div>            
        })
        return (
            <div className="container mt-5 users">
                { this.props.users !== [] ? users : '' }
            </div>
        )
    }
}

export default Users