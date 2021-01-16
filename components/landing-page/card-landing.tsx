import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsFillEyeFill } from 'react-icons/bs'
import Link from 'next/link'

const CardLanding = () => {
  return (
    <div className="product d-flex flex-column">
      <a href="/" className="img-prod">
        <img
          className="img-fluid"
          src="https://preview.colorlib.com/theme/minishop/images/product-1.png"
          alt="Colorlib Template"
        />
        <div className="overlay" />
      </a>
      <div className="text py-3 pb-4 px-3">
        <div className="d-flex">
          <div className="cat">
            <span>Lifestyle</span>
          </div>
        </div>
        <h3>Nike Free RN 2019 iD</h3>
        <div className="pricing">
          <p className="price">
            <span>$120.00</span>
          </p>
        </div>
        <p className="bottom-area d-flex px-3">
          <a href="/" className="add-to-cart text-center py-2 mr-1">
            <span>
              Agregar <HiOutlineShoppingCart />
            </span>
          </a>
          <Link href={`/productos/${5165}`}>
            <a href={`/productos/${5165}`} className="buy-now text-center py-2">
              Ver <BsFillEyeFill />
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CardLanding
