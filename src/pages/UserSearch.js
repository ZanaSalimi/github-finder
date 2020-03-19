import React, { Component } from 'react'
import Users from '../components/Users'
import SearchInput from '../components/SearchInput'
export class UserSearch extends Component {
    state = {
        data: [],
        loading: false
    }
    data = (data) => {
        this.setState({ data })
    }
    loading = (load) => {
        this.setState({loading: load})
    }
    render() {
        console.log(this.state.data)
        console.log(this.state.loading)
        return (
            <div>
                <SearchInput data={this.data} loading={this.loading} />
                <Users users={this.state.data} />
            </div>
        )
    }
}
export default UserSearch