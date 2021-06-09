import Link from 'next/link'
import React from 'react'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE } from '../../api'
import { calculatePrice } from '../../helpers/calculatePrice'
import { ProductsCombo } from '../../interfaces/combo'

interface Props {
  combo: ProductsCombo
}

export const ListProductCombo = ({ combo }: Props) => {
  return (
    <div className="row">
      <div className="col-12 p-3 text-center mt-3">
        <h5>
          Productos de <strong>{combo.name}</strong>
        </h5>
      </div>

      {combo.products.map((product) => (
        <div
          className="col-12 mb-3 mb-md-0 border-bottom"
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
                  <div
                    className="col-md-3"
                    style={{ backgroundColor: '#f4e9ec' }}
                  >
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

                            <span className="float-right">
                              {product.available} Disponibles
                            </span>
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
}
