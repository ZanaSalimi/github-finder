import React, { Component } from 'react'
import { Search } from 'react-feather';

export class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state={
            text: '',
            payload: [],
            loading: false,
            isValid: true
        }
    }
    onChange = (e) => {
        const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
        const validate = regex.test(e.target.value)
        this.setState({ 
            text: e.target.value,
            isValid: validate
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.isValid){
            this.setState({ loading: true})
            fetch(`https://api.github.com/search/users?q=${this.state.text}`)
            .then(res=> res.json())
            .then(data => {
                this.setState({
                    payload: data.items,
                    loading: false
                })
                this.props.data(this.state.payload)
                })
        }
        else{
            alert('Not Founded!')
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="mt-5 mb-2">
                <div className="search-container w-100 px-4">
                <input type="text" placeholder="Search Github User..." className={ !this.state.isValid ? " text-danger border-0 user-search p-3": "border-0 user-search p-3" } onChange={this.onChange} value={this.state.text} />
                <button type="submit" className="btn align-items-center">
                    <Search size={20} strokeWidth={1} />
                </button>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchInput
