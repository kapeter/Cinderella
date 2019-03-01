import React, { Component } from 'react'
import "./index.scss"

class Loading extends Component {
    render() {
        const {visible} = this.props;

        if (!visible) return null;

        return (
            <div className="loading">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    }
}

export default Loading