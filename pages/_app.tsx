import React from 'react'
import withRedux from 'next-redux-wrapper'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '../store/configureStore'
import '../global.css'
import '../styles/signIn.css'
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
        <title>SSR with Next</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
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
