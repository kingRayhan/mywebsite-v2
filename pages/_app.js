import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/index'
import '../styles/app.scss'

class AppRoot extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        pageProps.query = ctx.query
        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props

        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}

export default AppRoot
