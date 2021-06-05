/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import { FaPercentage } from 'react-icons/fa'
import { BsFillLightningFill } from 'react-icons/bs'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toast'
import { Button } from 'reactstrap'
import BannerClearFix from '../banner/util-clear-fix'
import CardProduct from '../card/card-product'
import CaroselCard from '../carousel/CaroselCard'
import CarouselAdvertising from '../carousel/carouselAdvertising'
import CategoriNav from '../nav/categori'
import Time from '../element/time'
import { RootState } from '../../reducers'
import { Product } from '../../interfaces/products'
import { SeccionHistory } from './seccion-history'
import { TokenContext } from '../../context/contextToken'
import { GetMyHistorty } from '../../api/productHistory'
import SpinnerLoader from '../element/spinner-cici'
import { GetProducts } from '../../api/products'
import { SetProducts } from '../../reducers/products'
import ChatWidget from '../element/chatWidget'
import { CardCollageProduct } from '../card/card-collage'

const Home = () => {
  const { token } = useContext(TokenContext)
  const dispatch = useDispatch()
  const [IsRunning, SetIsRunning] = useState<boolean>(true)
  const [Loading, setLoading] = useState<boolean>(false)
  const [HistoryProducts, setProducts] = useState<Product[]>([])
  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )
  const ComboReducer = useSelector((state: RootState) => state.ComboReducer)

  const { Products } = ProductsReducer
  const { ProductsOffers } = ProductsReducer
  const { ProductsBestRated } = ProductsReducer
  const { Combo } = ComboReducer

  useEffect(() => {
    const FetchHistory = async () => {
      setLoading(true)

      try {
        const { history } = (await GetMyHistorty({ token, limit: 8 })).data
        setProducts(history)

        setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }

    if (token) {
      FetchHistory()
    }
  }, [token])

  const MoreProducts = async () => {
    setLoading(true)
    try {
      const lastIdProduct = Products[Products.length - 1].idProducts
      const { products } = await (await GetProducts({ lastIdProduct })).data

      setLoading(false)

      if (!products.length) {
        toast.info('No hay mas productos para mostrar')
        return
      }

      dispatch(SetProducts([...Products, ...products]))
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  const SkeletonCardProduct = () => {
    return [0, 1, 2, 3, 4, 5, 6].map((item) => (
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3 font-arvo"
        key={item}
      >
        <Skeleton width={240} height={300} />
      </div>
    ))
  }

  return (
    <>
      <section className="container mt-md-4">
        <div className="row justify-content-between p-2">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <CarouselAdvertising />
          </div>
          <div className="col-12 col-md-4 col-lg-5 mb-3 mb-md-0">
            {Loading && <SpinnerLoader />}
            {!Loading && <SeccionHistory history={HistoryProducts} />}
          </div>
          <div className="col-12 col-md-3 col-lg-2 mb-3 mb-md-0 bg-white border-round p-2">
            <CategoriNav />
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-12">
            <BannerClearFix />
          </div>
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <FaPercentage color="pink" /> &nbsp; <strong>Ofertas</strong>
            <Link href="/productos/ofertas">
              <a className="float-right">Ver más</a>
            </Link>
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard products={ProductsOffers} />
          </div>
        </div>

        {IsRunning ? (
          <div className="row mt-3 mb-3 bg-white p-3">
            <div className="col-12 p-2">
              <BsFillLightningFill color="pink" /> &nbsp;{' '}
              <strong>Flash Ofertas</strong> &nbsp; &nbsp;
              <Time
                expiryTimestamp={1618694164986}
                SetIsRunning={SetIsRunning}
              />
            </div>
          </div>
        ) : (
          ''
        )}

        <div className="row justify-content-center">
          <div className="col-12 p-3">
            <strong>Seguro que te gusta</strong>
          </div>
          {Products.length
            ? Products.map((product: Product) => (
                <div
                  className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3 font-arvo"
                  key={product.idProducts}
                >
                  <CardProduct product={product} size="normal" />
                </div>
              ))
            : ''}

          {Loading && SkeletonCardProduct()}
        </div>

        <div className="row justify-content-center">
          {!Loading && Products.length ? (
            <div className="col-12 col-md-5 p-2">
              <Button outline color="info" block onClick={MoreProducts}>
                Más productos
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="row justify-content-center">
          <div className="col-12 p-3">
            <strong>Nuestros Combos</strong>
          </div>
          {Combo.map((item) => (
            <div
              className="col-xs-12 col-md-6 col-lg-4 mb-4 font-arvo"
              key={item.idCombo}
            >
              <CardCollageProduct combo={item} />
            </div>
          ))}
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <AiFillStar color="pink" /> &nbsp; <strong>Mas vendidos</strong>
            <Link href="/productos/mas-vendidos">
              <a className="float-right">Ver más</a>
            </Link>
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard products={ProductsBestRated} />
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  )
}

export default Home
