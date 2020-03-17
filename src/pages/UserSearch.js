import React, { Component } from 'react'
import Users from '../components/Users'
import SearchInput from '../components/SearchInput'
export class UserSearch extends Component {
    state = {
        data: []
    }
    data = (data) => {
        this.setState({ data })
    }
    render() {
        return (
            <div>
                <SearchInput data={this.data} />
                <Users users={this.state.data} />
            </div>
        )
    }
}
export default UserSearch