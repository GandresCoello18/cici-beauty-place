/* eslint-disable no-restricted-globals */
/* eslint-disable unicorn/no-for-loop */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react'
import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import { toast } from 'react-toast'
import Layout from '../../components/layout'
import ProductDetails from '../../components/productDetails'
import {
  GetProduct,
  GetProductReviews,
  GetProductsCategory,
} from '../../api/products'
import {
  Product,
  ProductReview,
  SeoProductReview,
} from '../../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { NewHistory } from '../../api/productHistory'
import { TokenContext } from '../../context/contextToken'

const ProductId = () => {
  const { token } = useContext(TokenContext)
  const [product, setProduct] = useState<Product>()
  const [productByCategory, setProductByCategory] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const Router = useRouter()
  const { id } = Router.query
  const [ProductReviews, setReviews] = useState<SeoProductReview[]>([])

  useEffect(() => {
    setLoading(true)

    if (!id) {
      Router.push('/')
    }

    try {
      const fetchProduct = async () => {
        const idProduct = id as string
        const { product } = await (await GetProduct({ idProduct })).data
        setProduct(product)

        if (product?.categorys.length) {
          const category = product?.categorys[0].titleCategory

          const productsCatedory = await (
            await GetProductsCategory({ category, limit: 5 })
          ).data.products

          setProductByCategory(productsCatedory || [])
        }

        if (!product) {
          Router.push('/productos')
        }

        if (token) {
          await NewHistory({ token, idProduct })
        }
      }

      const fetchReviews = async () => {
        const { reviews } = await (
          await GetProductReviews({ idProduct: id as string })
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
      setLoading(false)
    }
  }, [Router, id, token])

  return (
    <>
      {product && (
        <>
          <NextSeo
            title={`${product.title || ''} - Cici beauty place`}
            description={`${
              product.description ||
              'Encuentra todo sobre cosméticos, belleza y cuidados de la piel'
            }`}
            canonical="https://cici.beauty/productos"
            openGraph={{
              url: `https://cici.beauty/productos/${product.idProducts}`,
              title: `${product.title}`,
              description: `${
                product.description ||
                'Encuentra todo sobre cosméticos, belleza y cuidados de la piel'
              }`,
              images: [
                {
                  url: `${BASE_API_IMAGES_CLOUDINNARY}/${product.source}`,
                  width: 700,
                  height: 500,
                  alt: product.title || '',
                },
              ],
              site_name: 'Cici beauty place',
            }}
          />

          <ProductJsonLd
            productName={`${product.title}`}
            images={[`${BASE_API_IMAGES_CLOUDINNARY}/${product.source}`]}
            description={`${product.description}`}
            brand={product.brand}
            reviews={ProductReviews}
            aggregateRating={{
              ratingValue: `${product.stars}`,
              reviewCount: `${product.starsPeople}`,
            }}
            offers={[
              {
                price: `${product.price}`,
                priceCurrency: 'USD',
                priceValidUntil: `${product.offer_expires_date}`,
                seller: {
                  name: 'Cici beauty place',
                },
              },
            ]}
            mpn="925872"
          />

          <BreadcrumbJsonLd
            itemListElements={[
              {
                position: 1,
                name: 'Inicio',
                item: 'https://cici.beauty',
              },
              {
                position: 2,
                name: 'Productos',
                item: 'https://cici.beauty/productos',
              },
              {
                position: 3,
                name: `${product.title}`,
                item: `https://cici.beauty/productos/${product.idProducts}`,
              },
            ]}
          />

          <Layout>
            <ProductDetails
              product={product}
              productByCategory={productByCategory}
              loading={loading}
            />
          </Layout>
        </>
      )}
    </>
  )
}

export default ProductId
