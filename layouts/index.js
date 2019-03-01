import React, { Component } from 'react'
import Link from '../components/link'
import Head from 'next/head'
import "./index.scss"

class Layout extends Component {

    render() {
        const { children, headOptions } = this.props;

        const head = Object.assign({
            title: "Ka Peter",
            description: "Next.js 是一个轻量级的 React 服务端渲染应用框架。",
            keywords: "kapeter"
        }, headOptions)

        return (
            <div className="app">
                <Head>
                    <title>{head.title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <meta name='description' content={head.description} />
                    <meta name='keywords' content={head.keywords} />
                </Head>

                <div className="sidebar">
                    <div className="dots">
                        <span className="dot" style={{background: "#ff554e"}}></span>
                        <span className="dot" style={{background: "#ffb429"}}></span>
                        <span className="dot" style={{background: "#24c238"}}></span>
                    </div>
                    <header className="header">
                        <img src="/static/img/avatar.png" alt="kapeter" className="avatar" />
                        <div className="slogan">
                            万物皆虚 / 万事皆允
                        </div>
                    </header>
                    <nav className="nav">
                        <Link href='/'><a>BLOG</a></Link>
                        <Link href='/gallery'><a>GALLERY</a></Link>
                        <Link href='/about'><a>ABOUT</a></Link>
                    </nav>
                    <footer className="footer">
                        <div className="society-icon">
                            <a href="https://github.com/kapeter" target="_blank">
                                <i className="iconfont icon-github"></i>
                            </a>
                        </div>
                        <p className="copyright">
                            <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">浙ICP备14040866号</a>
                        </p>
                    </footer>  
                </div>
                <div className="content">
                    {children}
                </div>
                <div className="cover"></div>
            </div>
        )
    }
}

export default Layout;

