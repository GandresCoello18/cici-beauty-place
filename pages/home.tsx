/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Home from '../components/home'
import Layout from '../components/layout'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Cici beauty place"
        description="Encuentra todo sobre cosméticos, belleza y cuidados para la piel."
        canonical="https://cici.beauty/home"
        openGraph={{
          url: 'https://cici.beauty/home',
          title: 'Cici beauty place',
          description:
            'Encuentra todo sobre cosméticos, belleza y cuidados para la piel',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default Index
