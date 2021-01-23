import React from 'react'
import { ServerResponse } from 'http'

interface Params {
  res: ServerResponse
}

const getSitemap = () => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2020-07-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`

class Sitemap extends React.Component {
  public static async getInitialProps({ res }: Params) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(getSitemap())
    res.end()
  }
}

export default Sitemap
