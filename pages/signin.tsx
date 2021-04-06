/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import SignIn from '../components/signIn'
import Layout from '../components/layout'

const SignInPage = () => {
  return (
    <>
      <NextSeo
        title="Registrate - cici beauty place"
        description="Registrate con tus datos basicos o una cuenta de Google y disfruta de nuestros productos y servicios."
        canonical="https://cici.beauty/signin"
        openGraph={{
          url: 'https://cici.beauty/signin',
          title: 'Registrate en cici beauty place',
          description:
            'Registrate con tus datos basicos o una cuenta de Google y disfruta de nuestros productos y servicios.',
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
        <SignIn />
      </Layout>
    </>
  )
}

export default SignInPage
