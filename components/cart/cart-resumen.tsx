import React from 'react'

const CartResumne = () => {
  return (
    <>
      <div className="p-3">
        <div className="p-1 border-bottom">
          <h3>Monto Total</h3>
        </div>
        <div className="p-1 border-bottom">
          <span>Subtotal</span>
          <span className="float-right">$0.00</span>
        </div>
        <div className="p-1 border-bottom">
          <span>Envio</span>
          <span className="float-right">$0.00</span>
        </div>
        <div className="p-1 bg-cici">
          <span>Monto a pagar</span>
          <span className="float-right">$0.00</span>
        </div>
      </div>
    </>
  )
}

export default CartResumne
