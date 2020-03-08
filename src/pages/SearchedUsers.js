import React, { Component } from 'react'
import Users from '../components/Users'
export class SearchedUsers extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search Github User..." className="mt-3 w-100 border-0 user-search p-3" />
                <Users />
            </div>
        )
    }
}

export default SearchedUsers