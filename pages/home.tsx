import React from 'react'
import { NextSeo } from 'next-seo'
import Home from '../components/home'
import Layout from '../components/layout'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default Index
