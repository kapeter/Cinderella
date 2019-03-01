import React, { Component } from 'react'
import Head from 'next/head'
import { fetchArticles } from "../../api";
import Content from "./content";
import "./index.scss"

class Index extends Component {
    static async getInitialProps() {
        const result = await fetchArticles();

        const headOptions = {
            title: "Home / KaPeter"
        }

        return {
            postItems: result.data,
            postMeta: result.meta,
            headOptions
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            postVisible: false,
            currentPost: {}
        }
    }

    openDetail(item) {
        this.setState({
            postVisible: true,
            currentPost: item
        })
    }

    render() {
        const { postItems } = this.props;
        const { postVisible, currentPost } = this.state;

        return (
            <div className="blog-warpper">
                <ul className="post-list">
                    {
                        postItems.map((item, index) => (
                            <li key={index} onClick={() => this.openDetail(item)}>
                                <div className="post-item">
                                    <h5 className="title">
                                        {item.title}
                                    </h5>
                                    <p className="desc">{item.description}</p>
                                    <p className="info">
                                        <i className="iconfont icon-date"></i> {item.created_at}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <Content
                    data={currentPost}
                    visible={postVisible}
                    onClose={() => this.setState({
                        postVisible: false
                    })}
                />
            </div>
        )
    }
}

export default Index