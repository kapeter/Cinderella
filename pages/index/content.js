import React, { Component } from 'react'
import { connect } from "react-redux";
import marked from "marked";
import "./index.scss"

function mapStateToProps(state) {
    return {
        contentRect: state.contentRect
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {}
        }
    }

    componentDidMount() {
        const {contentRect, itemRect} = this.props;

        const deltaX = itemRect.left - contentRect.left;
        const deltaY = itemRect.top - contentRect.top;
        const deltaW = itemRect.width / contentRect.width;
        const deltaH = itemRect.height / contentRect.height;

        this.setState({
            style: {
                left: itemRect.left - contentRect.left,
                top: itemRect.top - contentRect.top,
                width: itemRect.width,
                height: itemRect.height,
                opacity: 0   
            }
        }, ()=> {
            this.refs.warpper.animate([
                {
                    transformOrigin: 'top left',
                    transform: `
                        translate3d(${deltaX}px, ${deltaY}px, 0px)
                        scale(${deltaW}, ${deltaH})
                    `,
                    opacity: 0
                }, 
                {
                    transformOrigin: 'top left',
                    transform: 'none',
                    opacity: 1
                }], 
                {
                    duration: 250,
                    easing: 'ease-out',
                    fill: 'both'
                }
            );
            this.setState({
                style: {
                    left : 0,
                    top: 0,
                    width: contentRect.width,
                    height: contentRect.height,
                    opacity: 1
                }
            })
        })
    }

    render() {
        const {visible, data, onClose} = this.props;
        const {style} = this.state;

        if (!visible) return null;

        const renderedContent =  marked(data.content);

        return (
            <div className="post-warpper" ref="warpper" style={style}>
                <a href="javascript:;" className="close" onClick={() => onClose()}>
                    <i className="iconfont icon-guanbi3"></i>
                </a>
                <div className="post-body" style={{opacity: style.opacity}}>
                    <h5 className="title">{data.title}</h5>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: renderedContent}}></div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)