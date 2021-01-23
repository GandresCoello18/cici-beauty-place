import React from 'react'
import { ServerResponse } from 'http'

const getRobots = () => `User-agent: *
Disallow: /_next/static/
Disallow: /compra/
Disallow: /login/
Disallow: /configuracion/*
Disallow: /mis-favoritos/
Disallow: /mis-pedidos/
Disallow: /mi-historial/
Disallow: /mis-compras/*
`

interface Params {
  res: ServerResponse
}

class Sitemap extends React.Component {
  public static async getInitialProps({ res }: Params) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(getRobots())
    res.end()
  }
}

export default Sitemap
