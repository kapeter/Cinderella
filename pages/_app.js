import App, { Container } from 'next/app'
import React from 'react'
import Layout from "../layouts"

class Cinderella extends App {

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Layout headOptions={pageProps.headOptions}>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

export default Cinderella