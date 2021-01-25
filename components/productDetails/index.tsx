/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import Magnifier from 'react-magnifier'
import { GoPlus } from 'react-icons/go'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { AiTwotoneHeart } from 'react-icons/ai'
import { MdPeople, MdShoppingBasket } from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component'
import { Badge, Button } from 'reactstrap'
import { RiSubtractLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import Share from '../element/share'
import MigasPan from '../element/breadcrumbs'
import ListImage from './listImage'
import MoreDetails from './moreDetails'
import CaroselCard from '../carousel/CaroselCard'
import { Product } from '../../interfaces/products'
import { BASE_API } from '../../api'
import { RootState } from '../../reducers'

interface Props {
  product: Product
  loading: boolean
}

const ProductDetails = ({ product, loading }: Props) => {
  const [urlShare, setUrlShare] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [preview, setPreview] = useState<{ src: string; type: string }>({
    src: '',
    type: '',
  })

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsBestRated } = ProductsReducer

  const Styles = {
    tachado: {
      padding: 4,
      color: '#999',
      textDecoration: 'line-through',
    },
  }

  useEffect(() => {
    setUrlShare(window.location.href)
    setPreview({
      src: `${BASE_API}/static/${product?.source}`,
      type: 'IMAGEN',
    })
  }, [product])

  const calculatePrice = () => {
    if (product.discount) {
      const porcent: number = (product.price * product.discount) / 100
      return (product.price - porcent).toFixed(2)
    }

    return product.price
  }

  const renderPreViewProduct = () => {
    return (
      <section className="container">
        <div className="row mt-3" style={{ backgroundColor: '#e9ecef' }}>
          <div className="col-12">
            <MigasPan
              migas={[
                { text: 'Home', href: '/' },
                { text: 'productos', href: '/productos' },
                { text: product?.title, active: true },
              ]}
            />
          </div>
        </div>
        <div className="row justify-content-center bg-white p-3">
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12">
                {preview.type === 'IMAGEN' ? (
                  <Magnifier src={preview.src} width="100%" />
                ) : (
                  <video width="100%" controls>
                    <source src={preview.src} type="video/mp4" />
                    <source src={preview.src} type="video/ogg" />
                  </video>
                )}
              </div>
              <div className="col-12">
                {product.related_sources.length ? (
                  <ListImage
                    sources={product.related_sources}
                    setPreview={setPreview}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="p-3 border-bottom">
              <p>{product?.description}</p>
              <div className="row">
                <div className="col-6 col-lg-3">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={Number(product?.stars)}
                    onStarClick={(
                      nextValue: number,
                      prevValue: number,
                      name: string
                    ) => console.log(`${nextValue} - ${prevValue} - ${name}`)}
                  />
                  <span
                    className="position-absolute left-0 ml-2"
                    style={{ color: 'rgb(255, 180, 0)' }}
                  >
                    {product.starsPeople} <MdPeople color="rgb(255, 180, 0)" />
                  </span>
                </div>
                <div
                  className="col-5 col-lg-3 text-right"
                  style={{ color: '#999' }}
                >
                  {product?.sold} vendidos
                </div>
              </div>
            </div>
            <div className="p-3 border-bottom">
              <div className="row">
                <div className="col-5 col-lg-3">
                  <strong style={{ fontSize: 20 }}>
                    US ${calculatePrice()}
                  </strong>
                </div>
                {product?.discount ? (
                  <>
                    <div className="col-5 col-md-3">
                      <span style={Styles.tachado}>US ${product.price}</span>
                    </div>
                    <div className="col-1">
                      <span className="tag-discount">-{product.discount}%</span>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="p-3 border-bottom">
              <Share ShareUrl={urlShare} />
            </div>
            <div className="p-3">
              <span>Cantidad: </span>
              <Badge
                color="dark"
                className="p-1 cursor-pointer"
                pill
                style={{ fontSize: 17 }}
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1)
                }}
              >
                <RiSubtractLine color="#fff" />
              </Badge>
              <strong className="p-2" style={{ fontSize: 20 }}>
                {quantity}
              </strong>
              <Badge
                color="dark"
                className="p-1 cursor-pointer"
                pill
                style={{ fontSize: 17 }}
                onClick={() => {
                  if (quantity >= 1 && quantity < Number(product?.available)) {
                    setQuantity(quantity + 1)
                  }
                }}
              >
                <GoPlus />
              </Badge>
              <span style={{ color: '#999', marginLeft: 10 }}>
                {product?.available} disponibles
              </span>
            </div>
            <div className="p-3">
              <div className="row justify-content-start">
                <div className="col-6 col-lg-3">
                  <Button color="danger">
                    <div className="row">
                      <div className="col-2">
                        <FaMoneyCheckAlt size={20} />
                      </div>
                      <div className="col-6">Comprar</div>
                    </div>
                  </Button>
                </div>
                <div className="col-6 col-lg-4">
                  <Button color="warning" className="text-white">
                    <div className="row">
                      <div className="col-2">
                        <MdShoppingBasket size={20} />
                      </div>
                      <div className="col-6">Añadir</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row bg-white">
          <div className="col-12 p-2 font-arvo">
            {product && (
              <MoreDetails
                idProduct={product?.idProducts}
                brand={product?.brand}
                size={product?.size}
                model={product.model}
              />
            )}
          </div>
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <AiTwotoneHeart color="pink" /> &nbsp;{' '}
            <strong>Productos recomendados</strong>
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard products={ProductsBestRated} />
          </div>
        </div>
      </section>
    )
  }

  return <>{loading ? 'Cargando...' : renderPreViewProduct()}</>
}

export default ProductDetails
