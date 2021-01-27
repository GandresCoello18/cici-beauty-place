import React from 'react'
import { NextSeo } from 'next-seo'
import Productos from '../../components/producto'
import Layout from '../../components/layout'

const Producto = () => {
  return (
    <>
      <NextSeo
        title="Productos - Cici beauty place"
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <Productos />
      </Layout>
    </>
  )
}

export default Producto
