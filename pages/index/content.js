import React, { Component } from 'react'
import marked from "marked";
import "./index.scss"

class Content extends Component {
    render() {
        const {visible, data, onClose} = this.props;

        if (!visible) return null;

        const renderedContent =  marked(data.content);

        return (
            <div className="post-warpper">
                <a href="javascript:;" className="close" onClick={() => onClose()}>
                    <i className="iconfont icon-guanbi3"></i>
                </a>
                <div className="post-body">
                    <h5 className="title">{data.title}</h5>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: renderedContent}}></div>
                </div>
            </div>
        )
    }
}

export default Content