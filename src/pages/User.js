import React, { Component } from 'react'

export class User extends Component {
    render() {
        const { login, avatar_url, name, bio, location, email, blog, hireable } = this.props.username;
        return (
            <div>
                {login}
            </div>
        )
    }
}

export default User
