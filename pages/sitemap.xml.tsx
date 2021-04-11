import React from 'react'
import { ServerResponse } from 'http'

interface Params {
  res: ServerResponse
}

const getSitemap = () => `
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cici.beauty/</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/guia-de-compra/pago/</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/home</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/faq</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/signin</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/guia-de-compra/envio</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/login</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/about</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/guia-de-compra</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/contacto</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/guia-de-compra/rastreo</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/mis-pedidos</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/mi-historial</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/password-reset</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/productos</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://cici.beauty/mi-historial</loc>
    <lastmod>2021-05-01T12:00+00:00</lastmod>
    <priority>1.00</priority>
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
