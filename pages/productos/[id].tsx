/* eslint-disable unicorn/no-for-loop */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { NextSeo, ProductJsonLd } from 'next-seo'
import Router from 'next/router'
import { toast } from 'react-toast'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'
import { GetProduct, GetProductReviews } from '../../api/products'
import {
  Product,
  ProductReview,
  SeoProductReview,
} from '../../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'

const ProductId = () => {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState<boolean>(false)
  const [ProductReviews, setReviews] = useState<SeoProductReview[]>([])

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

      const fetchReviews = async () => {
        const productId = Router.query.id as string
        const { reviews } = await (
          await GetProductReviews({ idProduct: productId })
        ).data

        const resultReview: ProductReview[] = reviews
        const SeoReview: SeoProductReview[] = []

        for (let i = 0; i < resultReview.length; i++) {
          const itemReview = resultReview[i]

          SeoReview.push({
            author: {
              type: 'Person',
              name: itemReview.userName,
            },
            datePublished: `${itemReview.created_at}`,
            reviewBody: itemReview.commentary,
            name: itemReview.userName,
            reviewRating: {
              bestRating: '5',
              ratingValue: `${itemReview.stars}`,
            },
          })
        }

        setReviews(SeoReview)
        setLoading(false)
      }

      fetchProduct()
      fetchReviews()
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
          url: `https://cici.beauty/productos/${product?.idProducts}`,
          title: `${product?.title}`,
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

      <ProductJsonLd
        productName={`${product?.title}`}
        images={[`${BASE_API_IMAGES_CLOUDINNARY}/${product?.source}`]}
        description={`${product?.description}`}
        brand={product?.brand}
        color={product?.colors}
        releaseDate="2014-02-05T08:00:00+08:00"
        reviews={ProductReviews}
        aggregateRating={{
          ratingValue: `${product?.stars}`,
          reviewCount: `${product?.starsPeople}`,
        }}
        offers={[
          {
            price: `${product?.price}`,
            priceCurrency: 'USD',
            priceValidUntil: '2020-11-05',
            seller: {
              name: 'Cici beauty place',
            },
          },
        ]}
        mpn="925872"
      />

      <Layout>
        {product && <ProductDetails product={product} loading={loading} />}
      </Layout>
    </>
  )
}

export default ProductId
