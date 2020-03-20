import React, { Component } from 'react'
import Spin from '../img/spinner.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="mt-3 text-center">
                <img src={Spin} alt="loading..." />
            </div>
        )
    }
}

export default Loading
