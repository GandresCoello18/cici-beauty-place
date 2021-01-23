import React from 'react'
import { NextSeo } from 'next-seo'
import SignIn from '../components/signIn'
import Layout from '../components/layout'

const SignInPage = () => {
  return (
    <>
      <NextSeo
        title="Registrate - cici beauty place"
        description="Registrate con tus datos y disfrutas de nuestros productos."
      />
      <Layout>
        <SignIn />
      </Layout>
    </>
  )
}

export default SignInPage
