/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'
import { GetProduct } from '../../api/products'
import { Product } from '../../interfaces/products'

const ProductId = () => {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    try {
      if (!Router.query.id) {
        Router.push('/')
      }

      const fetchProduct = async () => {
        const productId = Router.query.id as string
        const { product } = await (await GetProduct({ idProduct: productId }))
          .data
        setProduct(product)
      }

      fetchProduct()
    } catch (error) {
      alert(error.message)
    }

    setLoading(false)
  }, [])

  return (
    <>
      <NextSeo
        title={`${product?.title ? product?.title : ''} - Cici beauty place`}
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        {product && <ProductDetails product={product} loading={loading} />}
      </Layout>
    </>
  )
}

export default ProductId
