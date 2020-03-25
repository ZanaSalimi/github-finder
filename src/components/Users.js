import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
export class Users extends Component {
    constructor(props){
        super(props);
        this.state={
          data: []
        }
      }
    onClick = (e) => {
        
    }
    render() {
       const users = this.props.searchUsers.map(user => {
            return <div key={user.id} className="d-flex justify-content-between user-item py-3 px-5 my-5">
                <div className="d-flex profile align-items-center">
                    <img src={user.avatar_url} alt=""/>
                    <p className="ml-3">{user.login}</p>
                </div>
                <button className="btn profile-btn" onClick={() => this.props.username(user.login) }>
                    <Link to={`/user/${user.login}`}>
                    Profile
                    </Link>
                </button>
            </div>            
    })
        return (
            <div className="container mt-5 users">
                { this.props.searchUsers.length !== 0 ? users : '' }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(Users)
/*
.map(user => {
            return <div key={user.id} className="d-flex justify-content-between user-item py-3 px-5 my-5">
                <div className="d-flex profile align-items-center">
                    <img src={user.avatar_url} alt=""/>
                    <p className="ml-3">{user.login}</p>
                </div>
                <button className="btn profile-btn" onClick={() => this.props.username(user.login) }>
                    <Link to={`/user/${user.login}`}>
                    Profile
                    </Link>
                </button>
            </div>            
    })
*/