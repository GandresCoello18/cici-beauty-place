/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { Alert, Button } from 'reactstrap'
import { toast } from 'react-toast'
import { AxiosError } from 'axios'
import CategoriNav from '../nav/categori'
import CaroselCard from '../carousel/CaroselCard'
import { RootState } from '../../reducers'
import FilterProduct from './filter-product'
import { ParamsFilter, Product } from '../../interfaces/products'
import CardProduct from '../card/card-product'
import { GetProducts } from '../../api/products'
import { HandleError } from '../../helpers/handleError'

const Productos = () => {
  const [Products, setProducts] = useState<Product[]>([])
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

  const fetchProduct = async (options: { lastIdProduct?: string }) => {
    setLoading(true)

    try {
      const { products } = await (
        await GetProducts({ lastIdProduct: options.lastIdProduct })
      ).data

      setLoading(false)

      if (!products.length) {
        toast.info('No hay mas productos para mostrar')
        return
      }

      setProducts([...Products, ...products])
    } catch (error) {
      toast.error(HandleError(error as AxiosError))
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct({})
  }, [])

  const SkeletonCardProduct = () => {
    return [0, 1, 2, 3].map((item) => (
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3 font-arvo"
        key={item}
      >
        <Skeleton width={210} height={300} />
      </div>
    ))
  }

  const MoreProducts = async () => {
    const lastIdProduct = Products[Products.length - 1].idProducts
    fetchProduct({ lastIdProduct })
  }

  const ProductFilter = () => {
    let filterProduct = Products

    if (filter.min) {
      filterProduct = filterProduct.filter(
        (product) => product.price >= filter.min
      )
    }

    if (filter.max) {
      filterProduct = filterProduct.filter(
        (product) => product.price <= filter.max
      )
    }

    if (filter.starNumber) {
      filterProduct = filterProduct.filter((product) => product.stars >= 4)
    }

    if (filter.order && filter.orderPrice) {
      if (filter.order === 'Asc') {
        filterProduct = filterProduct.sort(
          (product, thisProduct) => product.price - thisProduct.price
        )
      }

      if (filter.order === 'Desc') {
        filterProduct = filterProduct.sort(
          (product, thisProduct) => thisProduct.price - product.price
        )
      }
    }

    if (filter.order && filter.orderStar) {
      if (filter.order === 'Asc') {
        filterProduct = filterProduct.sort(
          (product, thisProduct) => product.stars - thisProduct.stars
        )
      }

      if (filter.order === 'Desc') {
        filterProduct = filterProduct.sort(
          (product, thisProduct) => thisProduct.stars - product.stars
        )
      }
    }

    return filterProduct
  }

  return (
    <section className="container">
      <FilterProduct setFilter={setFilter} filter={filter} />
      <div className="row justify-content-around p-3 mt-3">
        <div className="col-12 col-md-9 col-lg-10">
          <div className="row justify-content-center">
            {Products.length
              ? ProductFilter().map((product) => (
                  <div
                    className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                    key={product.idProducts}
                  >
                    <CardProduct product={product} size="small" />
                  </div>
                ))
              : ''}

            {loading && SkeletonCardProduct()}

            {!loading && Products.length === 0 && (
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

      <div className="row justify-content-center">
        {!loading && Products.length ? (
          <div className="col-12 col-md-5 p-2">
            <Button outline color="info" block onClick={MoreProducts}>
              Más productos
            </Button>
          </div>
        ) : (
          ''
        )}
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
