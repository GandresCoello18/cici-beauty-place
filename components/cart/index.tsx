/* eslint-disable unicorn/explicit-length-check */
import React from 'react'
import { Alert } from 'reactstrap'
import { Cart } from '../../interfaces/products'
import CartProduct from './cart-product'
import CartResumne from './cart-resumen'

interface Props {
  ProductsCart: Cart[]
}

const CartContainer = ({ ProductsCart }: Props) => {
  return (
    <div className="card border-0">
      <h5 className="card-header bg-cici">
        Tus articulos ({ProductsCart.length})
      </h5>
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-8">
            {ProductsCart.length ? (
              ProductsCart.map((item) => (
                <CartProduct product={item} key={item.idProducts} />
              ))
            ) : (
              <Alert color="info">
                Por el momento no tienes productos en tu carrito.
              </Alert>
            )}
          </div>
          <div className="col-12 col-lg-4">
            <CartResumne />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartContainer
