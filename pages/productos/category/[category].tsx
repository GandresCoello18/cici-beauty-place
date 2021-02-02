/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { Alert } from 'reactstrap'
import Router from 'next/router'
import { NextSeo } from 'next-seo'
import { toast } from 'react-toast'
import CaroselCard from '../../../components/carousel/CaroselCard'
import { RootState } from '../../../reducers'
import { Product } from '../../../interfaces/products'
import CardProduct from '../../../components/card/card-product'
import { GetProductsCategory } from '../../../api/products'
import Layout from '../../../components/layout'

const CategoryProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [category, setCategory] = useState<string>('')

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsOffers } = ProductsReducer

  useEffect(() => {
    setLoading(true)

    try {
      const fetchProduct = async () => {
        const idCategory: string = Router.query.category as string
        setCategory(idCategory)
        const { products } = await (
          await GetProductsCategory({ category: idCategory })
        ).data
        setProducts(products)
        setLoading(false)
      }

      if (!Router.query.category) {
        Router.push('/productos')
      } else {
        fetchProduct()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  return (
    <>
      <NextSeo
        title={`Categoria ${category} - Cici beauty place`}
        description="Encuentra todo sobre cosmeticos y belleza."
      />

      <Layout>
        <section className="container font-arvo">
          <div className="row justify-content-around p-3 mt-3">
            <div className="ciol-12 p-3">
              <h3>
                Categoria: <strong>{category}</strong>{' '}
              </h3>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                {loading
                  ? [0, 1, 2, 3].map((item) => (
                      <div
                        className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
                        key={item}
                      >
                        <Skeleton width={200} height={300} />
                      </div>
                    ))
                  : products.map((product) => (
                      <div
                        className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
                        key={product.idProducts}
                      >
                        <CardProduct product={product} size="small" />
                      </div>
                    ))}
                {!loading && products.length === 0 && (
                  <div className="col-12">
                    <Alert color="info">No hay productos para mostrar</Alert>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-3 bg-white p-3 border-round">
            <div className="col-12 p-2">
              <AiTwotoneHeart color="pink" size={20} /> &nbsp;{' '}
              <strong>Productos recomendados</strong>
            </div>
            <div className="col-12 font-arvo">
              <CaroselCard products={ProductsOffers} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default CategoryProducts
