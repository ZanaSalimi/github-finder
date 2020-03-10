import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            text: '',
            payload: [],
            loading: false
        }
    }
    onChange = (e) => {
        this.setState({ text: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.text !== ''){
            this.setState({ loading: true})
            fetch(`https://api.github.com/search/users?q=${this.state.text}`)
            .then(res=> res.json())
            .then(data => {
                this.setState({
                    payload: data.items,
                    loading: false
                })
                /*console.log(this.state.payload.map(user => {
                    return fetch(`https://api.github.com/users/${user.login}`)
                    .then(res => res.json())
                    .then(data => data)
                    .then(data=> data)
                }))*/
                this.props.tst(this.state.payload)
                })
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="mt-5 mb-2">
                <input type="text" placeholder="Search Github User..." className="w-100 border-0 user-search p-3 px-4" onChange={this.onChange} value={this.state.text} />
            </form>
        )
    }
}

export default Search
