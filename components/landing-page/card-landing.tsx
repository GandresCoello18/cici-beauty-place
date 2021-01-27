/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsFillEyeFill } from 'react-icons/bs'
import Link from 'next/link'
import { BASE_API } from '../../api'
import { Product } from '../../interfaces/products'

interface Props {
  product: Product
}

const CardLanding = ({ product }: Props) => {
  return (
    <div className="product d-flex flex-column">
      <Link href={`/productos/${product.idProducts}`}>
        <a className="img-prod">
          <img
            width="90%"
            className="p-4"
            src={`${BASE_API}/static/${product.source}`}
            alt={product.title}
          />
          <div className="overlay" />
        </a>
      </Link>
      <div className="text py-3 pb-4 px-3">
        <div className="cat" style={{ width: '100%' }}>
          <span>{product.available} Disponibles</span>
        </div>
        <h3>{product.title}</h3>
        <div className="pricing">
          <p className="price">
            <span>${product.price}</span>
          </p>
        </div>
        <p className="bottom-area d-flex px-3">
          <a href="/" className="add-to-cart text-center py-2 mr-1">
            <span>
              Agregar <HiOutlineShoppingCart />
            </span>
          </a>
          <Link href={`/productos/${product.idProducts}`}>
            <a className="buy-now text-center py-2">
              Ver <BsFillEyeFill />
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CardLanding
