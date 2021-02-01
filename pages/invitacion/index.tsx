import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'
import Invitacion from '../../components/invitacion'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Invitacion | Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <Invitacion />
      </Layout>
    </>
  )
}

export default Index
