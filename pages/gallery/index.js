import React, { Component } from 'react'
import Loading from "../../components/loading"
import "./index.scss"

class Gallery extends Component {
    static async getInitialProps() {
        const headOptions = {
            title: "Gallery / KaPeter"
        }
        return {
            headOptions
        }
    }

    constructor() {
        super();

        this.state = {
            loading: true
        }
    }

    render() {
        const {loading} = this.state;
        return (
            <div className="gallery">
                <div>gallery</div>
                <Loading visible={loading}/>
            </div>
        )
    }
}

export default Gallery