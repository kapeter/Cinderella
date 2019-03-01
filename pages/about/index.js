import React, { Component } from 'react'
import "./index.scss"

class About extends Component {
    static async getInitialProps() {
        const headOptions = {
            title: "About / KaPeter"
        }
        return {
            headOptions
        }
    }

    render() {
        return (
            <div className="about-me">
                <div>about</div>
            </div>
        )
    }
}

export default About