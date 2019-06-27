import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchArticles } from "../../api";
import Content from "./content";
import "./index.scss"

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}

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
            currentPost: {},
            itemRect: {}
        }
    }

    openDetail(item, index) {
        const itemRect = this.refs["post_" + index].getBoundingClientRect();

        this.setState({
            postVisible: true,
            currentPost: item,
            itemRect
        })
    }

    render() {
        const { postItems } = this.props;
        const { postVisible, currentPost, itemRect } = this.state;

        return (
            <div className="blog-warpper">
                <ul className="post-list">
                    {
                        postItems.map((item, index) => (
                            <li key={index} onClick={() => this.openDetail(item, index)} ref={"post_" + index}>
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
                {
                    postVisible && 
                    <Content
                        data={currentPost}
                        itemRect={itemRect}
                        visible={postVisible}
                        onClose={() => this.setState({
                            postVisible: false
                        })}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)