/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import Invitacion from '../../components/invitacion'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Invitación | Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
        canonical="https://cici.beauty/invitacion"
        openGraph={{
          url: 'https://cici.beauty/invitacion',
          title: 'Invita a un amigo y recibe cupones gratis',
          description:
            'Al invitar a un amigo a cici beauty place, el obtendra un cupon gratis por registrarse.',
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
        <Invitacion />
      </Layout>
    </>
  )
}

export default Index
