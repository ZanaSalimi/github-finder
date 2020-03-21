import React, { Component } from 'react'
import Users from '../components/Users'
import SearchInput from '../components/SearchInput'
import Loading from '../components/Loading'
export class UserSearch extends Component {
    render() {
        return (
            <div>
                <SearchInput search={this.props.search} />
                { this.props.payload.loading ? <Loading /> : <Users users={this.props.payload.Users} user={this.props.user} username={this.props.username} /> }
            </div>
        )
    }
}
export default UserSearch