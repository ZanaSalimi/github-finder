import React, { Component } from 'react'
import Spin from '../img/spinner.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Spin} />
            </div>
        )
    }
}

export default Loading
