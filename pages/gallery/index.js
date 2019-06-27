import React, { Component } from 'react'
import Loading from "../../components/loading"
import NoData from "../../components/no-data"

import "./index.scss"

class Gallery extends Component {
    static async getInitialProps() {
        const headOptions = {
            title: "Gallery / KaPeter"
        }
        return {
            headOptions,
            picItem: []
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
        const {picItem} = this.props;

        if (!picItem || !picItem.length) return <NoData />

        return (
            <div className="gallery">
                <div>gallery</div>
            </div>
        )
    }
}

export default Gallery