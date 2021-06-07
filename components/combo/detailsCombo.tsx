import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import Skeleton from 'react-loading-skeleton'
import { ReactPhotoCollage } from 'react-photo-collage'
import { useSelector } from 'react-redux'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../../api'
import { calculatePrice } from '../../helpers/calculatePrice'
import { ProductsCombo } from '../../interfaces/combo'
import { RootState } from '../../reducers'
import CaroselCard from '../carousel/CaroselCard'
import MigasPan from '../element/breadcrumbs'
import Share from '../element/share'
import MoreDetails from '../productDetails/moreDetails'
import ProductPicker from '../productDetails/product-number-picker'

interface Props {
  combo: ProductsCombo
  loading: boolean
}

export const DetailsCombo = ({ combo, loading }: Props) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [urlShare, setUrlShare] = useState<string>('')

  const ProductsReducer = useSelector(
    (state: RootState) => state.ProductReducer
  )

  const { ProductsBestRated } = ProductsReducer

  useEffect(() => {
    setUrlShare(window.location.href)
  }, [])

  const setting = {
    width: '100%',
    height: ['250px', '170px'],
    layout: [1, 2],
    photos: combo.photos,
    showNumOfRemainingPhotos: true,
  }

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
                { text: 'combos', href: '/combos' },
                { text: combo.name, active: true },
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

              {!loading && <ReactPhotoCollage {...setting} />}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3 border-bottom">
            {loading ? (
              <Skeleton height={16} />
            ) : (
              <>
                <h3 className="text-center p-1 text-cici">
                  <span role="img">💟</span> {combo.name}{' '}
                  <span role="img">💕</span>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos eaque mollitia nemo repellendus eius distinctio
                  atque fuga a ullam qui, blanditiis recusandae quo voluptas
                  quae cupiditate officiis eum quam iusto!
                </p>
              </>
            )}
            <div className="row">
              <div
                className="col-5 col-lg-3 text-right"
                style={{ color: '#999' }}
              >
                {loading ? <Skeleton height={16} /> : <>{10} vendidos</>}
              </div>
            </div>
          </div>

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
                        discount: combo.discount,
                        price: combo.price,
                      })}
                    </>
                  )}
                </strong>
              </div>
              {combo.discount ? (
                <>
                  <div className="col-4 col-md-2">
                    {loading ? (
                      <Skeleton height={5} />
                    ) : (
                      <span className="tachado">US ${combo.price}</span>
                    )}
                  </div>
                  <div className="col-1">
                    {loading ? (
                      <Skeleton height={15} />
                    ) : (
                      <span className="tag-discount">-{combo.discount}%</span>
                    )}
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="p-3 border-bottom">
            {loading ? <Skeleton height={20} /> : <Share ShareUrl={urlShare} />}
          </div>
          <div className="p-1 mt-1 mb-1">
            <ProductPicker
              loading={loading}
              quantity={quantity}
              available={15}
              setQuantity={setQuantity}
            />
          </div>
          <div className="p-3">acciones</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {combo.products.length ? (
            loading ? (
              <div className="row">
                {[0, 1, 2].map((item) => (
                  <div className="col-3 ml-2" key={item}>
                    <Skeleton width={80} height={80} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                <div className="col-12 p-3 text-center mt-3">
                  <h3>
                    Productos de <strong>{combo.name}</strong>
                  </h3>
                </div>

                {combo.products.map((product) => (
                  <div
                    className="col-12 border-bottom"
                    key={product.idProducts}
                  >
                    <Link href={`/productos/${product.idProducts}`}>
                      <a
                        href={`/productos/${product.idProducts}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ textDecoration: 'none', color: '#4b4a4a' }}
                      >
                        <div className="card" style={{ width: '100%' }}>
                          <div className="row g-0">
                            <div className="col-md-3">
                              <img
                                src={`${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${product.source}`}
                                height="150"
                                width="100%"
                                className="p-2"
                                alt={product.title}
                              />
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h4 className="card-title">{product.title}</h4>
                                <p className="p-1">{product.description}</p>
                                <div className="row justify-content-between">
                                  <div className="col-12">
                                    <div className="p-1">
                                      <strong style={{ fontSize: 20 }}>
                                        US $
                                        {calculatePrice({
                                          discount: product.discount,
                                          price: product.price,
                                        })}
                                      </strong>
                                      {product.discount ? (
                                        <>
                                          <span className="ml-2 tachado">
                                            US ${product.price}
                                          </span>
                                          <span className="tag-discount ml-2">
                                            -{product.discount}%
                                          </span>
                                        </>
                                      ) : (
                                        ''
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            )
          ) : (
            ''
          )}
        </div>
      </div>

      <br />

      <div className="row bg-white">
        <div className="col-12 p-2 font-arvo">
          {true && <MoreDetails idCombo={combo.idCombo} />}
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
