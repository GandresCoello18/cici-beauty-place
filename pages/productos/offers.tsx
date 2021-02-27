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
        title="Productos de oferta - Cici beauty place"
        description="Encuentra todo en oferta de cosmeticos y belleza."
      />

      <Layout>
        <section className="container">
          <div className="row justify-content-around p-3 mt-3">
            <div className="col-12 col-md-9 col-lg-10">
              <div className="row justify-content-center">
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
              <Link href="/productos/mejor-valorados">
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
