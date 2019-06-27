import App, { Container } from 'next/app'
import React from 'react'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import myStore from "../store";

import Layout from "../layouts"

class Cinderella extends App {

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Layout headOptions={pageProps.headOptions}>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        )
    }
}

export default withRedux(myStore)(Cinderella)