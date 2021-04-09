/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Productos from '../../components/producto'
import Layout from '../../components/layout'

const Producto = () => {
  return (
    <>
      <NextSeo
        title="Nuestros productos - Cici beauty place"
        description="Te mostramos el listado de todo nuestros productos, encuentra todo sobre cosmeticos y belleza."
        canonical="https://cici.beauty/productos"
        openGraph={{
          url: 'https://cici.beauty/productos',
          title: 'Nuestros productos - Cici beauty place',
          description:
            'Te mostramos el listado de todo nuestros productos, encuentra todo sobre cosmeticos, belleza y cuidados para tu piel',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <Productos />
      </Layout>
    </>
  )
}

export default Producto
