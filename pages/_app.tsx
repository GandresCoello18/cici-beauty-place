/* eslint-disable no-console */
/* eslint-disable func-names */
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { TokenContextProvider } from '../context/contextToken'
import { configureStore } from '../store/configureStore'
import 'react-multi-carousel/lib/styles.css'
import 'react-chat-widget/lib/styles.css'
import '../global.css'
import '../landing-page.css'
import '../styles/signIn.css'
import '../styles/navBar.css'
import '../bootstrap.min.css'

type Props = { store: Store } & AppInitialProps & AppProps

type AppPage<P = {}> = {
  (props: P): JSX.Element | null
  getInitialProps: ({ Component, ctx }: AppContext) => Promise<AppInitialProps>
}

const App: AppPage<Props> = ({ store, pageProps, Component }) => {
  /* useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope:',
              registration.scope
            )
          },
          function (err) {
            console.log('Service Worker registration failed:', err)
          }
        )
      })
    }
  }, []) */

  return (
    <>
      <Head>
        <title>Cici beauty place</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
        />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="robots" content="index" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <TokenContextProvider>
            <Component {...pageProps} />
          </TokenContextProvider>
        </ThemeProvider>
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
