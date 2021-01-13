import React from 'react'
import CartProduct from './cart-product'
import CartResumne from './cart-resumen'

const Cart = () => {
  return (
    <div className="card border-0">
      <h5 className="card-header bg-cici">Tus articulos (2)</h5>
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-8">
            {[1, 2].map((item) => (
              <CartProduct key={item} />
            ))}
          </div>
          <div className="col-12 col-lg-4">
            <CartResumne />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
