import React from 'react'
import { ServerResponse } from 'http'

const getRobots = () => `
User-agent: *
Disallow: /compra/
Disallow: /login/
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
