/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Login from '../components/login'
import Layout from '../components/layout'

const LoginPage = () => {
  return (
    <>
      <NextSeo
        title="Inicio de sesion - cici beauty place"
        description="Entra y selecciona los productos de tu agrado para lucir bella y atractiva."
        canonical="https://cici.beauty/login"
        openGraph={{
          url: 'https://cici.beauty/login',
          title: 'Inicio de sesion',
          description:
            'Entra y selecciona los productos de tu agrado para lucir bella y atractiva.',
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
        <Login />
      </Layout>
    </>
  )
}

export default LoginPage
