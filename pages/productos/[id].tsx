/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'
import { toast } from 'react-toast'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'
import { GetProduct } from '../../api/products'
import { Product } from '../../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'

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
      toast.error(error.message)
    }

    setLoading(false)
  }, [])

  return (
    <>
      <NextSeo
        title={`${product?.title || ''} - Cici beauty place`}
        description={`${
          product?.description ||
          'Encuentra todo sobre cosmeticos, belleza y cuidados de la piel'
        }`}
        canonical="https://cici.beauty/productos"
        openGraph={{
          url: 'https://cici.beauty/productos',
          title: `${product?.title || ''} | Cici beauty place'`,
          description: `${
            product?.description ||
            'Encuentra todo sobre cosmeticos, belleza y cuidados de la piel'
          }`,
          images: [
            {
              url: `${BASE_API_IMAGES_CLOUDINNARY}/${product?.source}`,
              width: 700,
              height: 500,
              alt: product?.title || '',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        {product && <ProductDetails product={product} loading={loading} />}
      </Layout>
    </>
  )
}

export default ProductId
