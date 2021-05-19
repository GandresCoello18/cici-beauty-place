import React from 'react'
import { ServerResponse } from 'http'

interface Params {
  res: ServerResponse
}

const getSitemap = () => `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://cici.beauty/</loc>
	<lastmod>2021-05-19T21:35:31+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/home</loc>
	<lastmod>2021-05-19T21:35:33+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/login</loc>
	<lastmod>2021-05-19T21:35:37+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/compra</loc>
	<lastmod>2021-05-19T21:35:36+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/ofertas</loc>
	<lastmod>2021-05-19T21:35:40+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/mas-vendidos</loc>
	<lastmod>2021-05-19T21:35:37+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/registro</loc>
	<lastmod>2021-05-19T21:35:38+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/contacto</loc>
	<lastmod>2021-05-19T21:35:39+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/guia-de-compra</loc>
	<lastmod>2021-05-19T21:35:39+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/guia-de-compra/pago</loc>
	<lastmod>2021-05-19T21:35:40+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/guia-de-compra/envios</loc>
	<lastmod>2021-05-19T21:35:43+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/guia-de-compra/rastreo</loc>
	<lastmod>2021-05-19T21:35:40+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/faq</loc>
	<lastmod>2021-05-19T21:35:40+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/about</loc>
	<lastmod>2021-05-19T21:35:42+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/privacidad</loc>
	<lastmod>2021-05-19T21:35:42+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/mi-historial</loc>
	<lastmod>2021-05-19T21:35:41+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Cejas%20y%20Pesta%C3%B1as</loc>
	<lastmod>2021-05-19T21:35:42+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Cuidados%20de%20la%20piel</loc>
	<lastmod>2021-05-19T21:35:43+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Labiales</loc>
	<lastmod>2021-05-19T21:35:43+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Brochas%20y%20Sombras</loc>
	<lastmod>2021-05-19T21:35:43+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Protector%20para%20celular</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/productos/category/Streamer</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>0.6</priority>
</url>
<url>
	<loc>https://cici.beauty/password-reset</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/mis-pedidos</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/invitacion</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://cici.beauty/configuracion/mis-datos</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://cici.beauty/mis-cupones</loc>
	<lastmod>2021-05-19T21:35:44+01:00</lastmod>
	<priority>1.0</priority>
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
