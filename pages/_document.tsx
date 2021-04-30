import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

interface Props {
  styleTags: React.ReactElement<{}>[]
}

export default class MyDocument extends Document<Props> {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <link
            rel="icon"
            sizes="192x192"
            href="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
