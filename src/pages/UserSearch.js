import React, { Component } from 'react'
import Users from '../components/Users'
import Search from '../components/Search'
export class UserSearch extends Component {
    state = {
        tst: []
    }
    tst = (tst) => {
        this.setState({ tst })
    }
    render() {
        return (
            <div>
                <Search tst={this.tst} />
                <Users users={this.state.tst} />
            </div>
        )
    }
}
export default UserSearch