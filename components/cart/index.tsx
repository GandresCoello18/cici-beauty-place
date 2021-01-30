/* eslint-disable unicorn/explicit-length-check */
import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'reactstrap'
import { RootState } from '../../reducers'
import CartProduct from './cart-product'
import CartResumne from './cart-resumen'

const CartContainer = () => {
  const { Cart } = useSelector((state: RootState) => state.CartReducer)

  return (
    <div className="card border-0">
      <h5 className="card-header bg-cici">Tus articulos ({Cart.length})</h5>
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-8">
            {Cart.length ? (
              Cart.map((item) => (
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
