import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            text: '',
            payload: []
        }
    }
    onChange = (e) => {
        this.setState({ text: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.text !== ''){
            fetch(`https://api.github.com/search/users?q=${this.state.text}`)
            .then(res=> res.json())
            .then(data => {
                this.setState({payload: data})
                this.props.tst(this.state.payload.items)
                })
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search Github User..." className="mt-3 w-100 border-0 user-search p-3" onChange={this.onChange} value={this.state.text} />
            </form>
        )
    }
}

export default Search
