/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { toast } from 'react-toast'
import Skeleton from 'react-loading-skeleton'
import { AxiosError } from 'axios'
import Layout from '../../components/layout'
import { GetSearchProducts } from '../../api/products'
import { Product } from '../../interfaces/products'
import CardProduct from '../../components/card/card-product'
import { HandleError } from '../../helpers/handleError'

const SearchKey = () => {
  const [Loading, setLoading] = useState<boolean>(false)
  const Router = useRouter()
  const { key } = Router.query
  const [Products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchSearchProduct = async () => {
      setLoading(true)

      try {
        const { products } = await (
          await GetSearchProducts({ key: key as string })
        ).data
        setProducts(products)

        setLoading(false)
      } catch (error) {
        toast.error(HandleError(error as AxiosError))
        setLoading(false)
      }
    }

    if (!key) {
      Router.push('/')
    } else {
      fetchSearchProduct()
    }
  }, [Router, key])

  const SkeletonCard = () => {
    return [0, 1, 2, 3].map((item) => (
      <div
        className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
        key={item}
      >
        <Skeleton width={200} height={300} />
      </div>
    ))
  }

  return (
    <>
      <NextSeo
        title={`Buscar: ${key} | Cici beauty place`}
        description="Estas buscando algún producto en especifico o lista de categorías."
        canonical="https://cici.beauty/buscar"
        openGraph={{
          url: 'https://cici.beauty/buscar',
          title: 'Buscar productos | Cici beauty place',
          description:
            '¿Estas buscando algún producto en especifico o lista de categorías?',
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
        <section className="container mt-md-5 mb-md-5 p-2 font-arvo">
          <div className="row bg-white border-round p-3">
            {!Loading && Products.length === 0 && (
              <div className="col-12">
                <div className="text-center">
                  <img
                    src="/img/not_found_search.svg"
                    alt="empty search product"
                    height={200}
                  />
                </div>
                <br />
                <h3 className="text-center">Ningún resultado encontrado</h3>
                <p className="text-center text-secondary">
                  Prueba a acortar o reformular la búsqueda.
                </p>
              </div>
            )}

            {Loading ? (
              SkeletonCard()
            ) : (
              <>
                <div className="col-12 p-3">
                  <h3 className="text-center">
                    Resultados de: <strong>{key}</strong>
                  </h3>
                </div>
                {Products.map((product) => (
                  <div
                    className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                    key={product.idProducts}
                  >
                    <CardProduct product={product} size="small" />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default SearchKey
