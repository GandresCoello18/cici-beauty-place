/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import Magnifier from 'react-magnifier'
import { MdPeople } from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { AiTwotoneHeart } from 'react-icons/ai'
import Share from '../element/share'
import MigasPan from '../element/breadcrumbs'
import ListImage from './listImage'
import MoreDetails from './moreDetails'
import CaroselCard from '../carousel/CaroselCard'
import { Colors, Product } from '../../interfaces/products'
import { BASE_API_IMAGES_CLOUDINNARY } from '../../api'
import { RootState } from '../../reducers'
import ActionsProductDetails from './actions-product-details'
import ProductPicker from './product-number-picker'
import { calculatePrice } from '../../helpers/calculatePrice'
import { ListColors } from '../element/colors'

interface Props {
  product: Product
  productByCategory: Product[]
  loading: boolean
}

const ProductDetails = ({ product, productByCategory, loading }: Props) => {
  const [urlShare, setUrlShare] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [colour, setColour] = useState<string | undefined>(undefined)
  const [colors, setColors] = useState<Colors[]>([])
  const [preview, setPreview] = useState<{ src: string; type: string }>({
    src: '',
    type: '',
  })

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsBestRated } = ProductsReducer

  useEffect(() => {
    setUrlShare(window.location.href)
    setPreview({
      src: `${BASE_API_IMAGES_CLOUDINNARY}/${product?.source}`,
      type: 'IMAGEN',
    })

    if (product.colors) {
      setColors(JSON.parse(product.colors))
    }
  }, [product])

  const renderPreViewProduct = () => {
    return (
      <section className="container font-arvo">
        <div className="row mt-3" style={{ backgroundColor: '#e9ecef' }}>
          <div className="col-12">
            {loading ? (
              <Skeleton height={40} />
            ) : (
              <MigasPan
                migas={[
                  { text: 'Home', href: '/' },
                  { text: 'productos', href: '/productos' },
                  { text: product?.title, active: true },
                ]}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-center bg-white p-3">
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12">
                {loading && <Skeleton height={240} />}

                {!loading &&
                  (preview.type === 'IMAGEN' ? (
                    <Magnifier
                      src={preview.src}
                      width="100%"
                      mgShape="square"
                    />
                  ) : (
                    <video width="100%" controls>
                      <source src={preview.src} type="video/mp4" />
                      <source src={preview.src} type="video/ogg" />
                    </video>
                  ))}
              </div>
              <div className="col-12">
                {product.related_sources.length ? (
                  loading ? (
                    <div className="row">
                      {[0, 1, 2].map((item) => (
                        <div className="col-3 ml-2" key={item}>
                          <Skeleton width={80} height={80} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ListImage
                      sources={product.related_sources.filter(
                        (item) => item.isDescription === 0
                      )}
                      setPreview={setPreview}
                    />
                  )
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="p-3 border-bottom">
              {loading ? (
                <Skeleton height={16} />
              ) : (
                <p>{product?.description}</p>
              )}
              <div className="row">
                <div className="col-6 col-lg-3">
                  {loading ? (
                    <Skeleton height={16} />
                  ) : (
                    <>
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={Number(product?.stars)}
                      />
                      <span
                        className="position-absolute left-0 ml-2"
                        style={{ color: 'rgb(255, 180, 0)' }}
                      >
                        {product.starsPeople}{' '}
                        <MdPeople color="rgb(255, 180, 0)" />
                      </span>
                    </>
                  )}
                </div>
                <div
                  className="col-5 col-lg-3 text-right"
                  style={{ color: '#999' }}
                >
                  {loading ? (
                    <Skeleton height={16} />
                  ) : (
                    <>{product?.sold} vendidos</>
                  )}
                </div>
              </div>
            </div>

            {product.colors && (
              <div className="p-3 border-bottom">
                <div className="row">
                  <div className="col-12">
                    <span>Colores:</span>
                    <ListColors
                      colors={colors}
                      colour={colour}
                      setColour={setColour}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="p-3 border-bottom">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <strong style={{ fontSize: 20 }}>
                    {loading ? (
                      <Skeleton height={16} />
                    ) : (
                      <>
                        US $
                        {calculatePrice({
                          discount: product.discount,
                          price: product.price,
                        })}
                      </>
                    )}
                  </strong>
                </div>
                {product?.discount ? (
                  <>
                    <div className="col-4 col-md-2">
                      {loading ? (
                        <Skeleton height={15} />
                      ) : (
                        <span className="tachado">US ${product.price}</span>
                      )}
                    </div>
                    <div className="col-1">
                      {loading ? (
                        <Skeleton height={15} />
                      ) : (
                        <span className="tag-discount">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="p-3 border-bottom">
              {loading ? (
                <Skeleton height={20} />
              ) : (
                <Share ShareUrl={urlShare} />
              )}
            </div>
            <div className="p-1 mt-1 mb-1">
              <ProductPicker
                loading={loading}
                quantity={quantity}
                available={product.available}
                setQuantity={setQuantity}
              />
            </div>
            <div className="p-3">
              <ActionsProductDetails
                loading={loading}
                available={product.available}
                quantity={quantity}
                product={product}
                colour={colour}
              />
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
                sourcesProduct={[...product?.related_sources].reverse()}
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
            <CaroselCard
              products={[...productByCategory, ...ProductsBestRated]}
            />
          </div>
        </div>
      </section>
    )
  }

  return <>{renderPreViewProduct()}</>
}

export default ProductDetails
