import React, { Component } from 'react'
import "./index.scss"

class Loading extends Component {
    render() {
        return (
            <div className="no-data">
                <div className="content">
                    <img src="/static/img/no-data.png" alt="kapeter" className="avatar" />
                    <p>NO DATA</p>
                </div>
            </div>
        )
    }
}

export default Loading