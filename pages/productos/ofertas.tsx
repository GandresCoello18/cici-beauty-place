/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { AiFillStar } from 'react-icons/ai'
import { toast } from 'react-toast'
import { Alert } from 'reactstrap'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import CaroselCard from '../../components/carousel/CaroselCard'
import { GetProductsOffers } from '../../api/products'
import { Product } from '../../interfaces/products'
import CategoriNav from '../../components/nav/categori'
import CardProduct from '../../components/card/card-product'
import { RootState } from '../../reducers'

const Producto = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsBestRated } = ProductsReducer

  useEffect(() => {
    setLoading(true)

    try {
      const fetchProductOffer = async () => {
        const dataProducts = await (
          await GetProductsOffers({ limit: undefined })
        ).data.products
        setProducts(dataProducts)
        setLoading(false)
      }

      fetchProductOffer()
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }, [])

  return (
    <>
      <NextSeo
        title="Productos de oferta y promociones - Cici beauty place"
        description="Encuentra todo en oferta de cosméticos y belleza tambien no te pierdas las promociones que lanzamos toda las semanas."
        canonical="https://cici.beauty/productos/mas-vendidos"
        openGraph={{
          url: 'https://cici.beauty/productos/mas-vendidos',
          title: 'Productos de oferta y promociones - Cici beauty place',
          description:
            'Encuentra todo en oferta de cosméticos y belleza tambien no te pierdas las promociones que lanzamos toda las semanas.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: 'logo de cici',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container">
          <div className="row justify-content-around p-3 mt-md-3">
            <div className="col-12 col-md-9 bg-white border-round">
              <div className="row justify-content-center">
                <div className="col-12">
                  <h2 className="text-center p-2">Ofertas y Promos</h2>
                </div>

                {loading
                  ? [0, 1, 2, 3].map((item) => (
                      <div
                        className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                        key={item}
                      >
                        <Skeleton width={200} height={300} />
                      </div>
                    ))
                  : products.map((product) => (
                      <div
                        className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                        key={product.idProducts}
                      >
                        <CardProduct product={product} size="small" />
                      </div>
                    ))}
                {!loading && products.length === 0 && (
                  <div className="col-12">
                    <Alert color="info">No hay datos para mostrar</Alert>
                  </div>
                )}
              </div>
            </div>
            <div
              className="col-12 col-md-3 col-lg-2 bg-white border-round"
              style={{ height: 320 }}
            >
              <CategoriNav />
            </div>
          </div>

          <div className="row mt-3 mb-3 bg-white p-3">
            <div className="col-12 p-2">
              <AiFillStar color="pink" /> &nbsp;{' '}
              <strong>Mejor valorados</strong>
              <Link href="/productos/mas-vendidos">
                <span className="float-right">Ver màs</span>
              </Link>
            </div>
            <div className="col-12 font-arvo">
              <CaroselCard products={ProductsBestRated} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Producto
