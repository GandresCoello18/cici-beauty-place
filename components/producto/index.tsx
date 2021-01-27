/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import PaginationElement from '../element/pagination'
import CategoriNav from '../nav/categori'
import CaroselCard from '../carousel/CaroselCard'
import Survey from '../element/survey'
import { RootState } from '../../reducers'
import FilterProduct from './filter-product'
import { ParamsFilter, Product } from '../../interfaces/products'
import CardProduct from '../card/card-product'
import { GetProducts } from '../../api/products'

const Productos = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<ParamsFilter>({
    min: 0,
    max: 0,
    isPromo: false,
    starNumber: false,
    order: undefined,
    orderPrice: false,
    orderStar: false,
  })

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsOffers } = ProductsReducer

  useEffect(() => {
    setLoading(true)

    try {
      const fetchProduct = async () => {
        const { products } = await (await GetProducts({ params: filter })).data
        setProducts(products)
      }

      fetchProduct()
    } catch (error) {
      alert(error.message)
    }

    setLoading(false)
  }, [filter])

  return (
    <section className="container">
      <FilterProduct setFilter={setFilter} />
      <div className="row justify-content-around p-3 mt-3">
        <div className="col-12 col-md-9 col-lg-10">
          <div className="row justify-content-center">
            {loading
              ? [0, 1, 2, 3].map((item) => (
                  <div
                    className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                    key={item}
                  >
                    <Skeleton width={240} height={300} />
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
          </div>

          <div className="row mt-2 mb-3 justify-content-center">
            <div className="col-11 col-md-4 bg-white border-round">
              <br />
              {loading ? (
                <Skeleton width="90%" height={50} />
              ) : (
                <PaginationElement />
              )}
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-3 col-lg-2 bg-white border-round"
          style={{ height: 320 }}
        >
          <CategoriNav />
        </div>
      </div>

      <div className="row mt-3 mb-3 bg-white p-3 font-arvo border-round">
        <div className="col-12">
          <Survey />
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
  )
}

export default Productos
