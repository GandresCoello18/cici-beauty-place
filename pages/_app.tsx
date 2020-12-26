import React from 'react'
import withRedux from 'next-redux-wrapper'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '../store/configureStore'
import Layout from '../components/layout'
import '../global.css'
import '../styles/signIn.css'
import '../styles/navBar.css'
import '../bootstrap.min.css'

type Props = { store: Store } & AppInitialProps & AppProps

type AppPage<P = {}> = {
  (props: P): JSX.Element | null
  getInitialProps: ({ Component, ctx }: AppContext) => Promise<AppInitialProps>
}

const App: AppPage<Props> = ({ store, pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>Cici beauty place</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
}

export default withRedux(configureStore)(App)
