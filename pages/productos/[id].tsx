/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'

const ProductId = () => {
  const [productId, setProductId] = useState<string>('')

  useEffect(() => {
    if (!Router.query.id) {
      Router.push('/')
    }

    setProductId(Router.query.id as string)
    console.log('desde efect de product ID')
  }, [])

  return (
    <>
      <NextSeo
        title={`${productId} - Cici beauty place`}
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <ProductDetails productId={productId} />
      </Layout>
    </>
  )
}

export default ProductId
