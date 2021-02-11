/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
import React from 'react'
import { ResumenPaymen } from '../../hooks/useResumenPayment'

const CartResumne = () => {
  const resumen = ResumenPaymen()

  return (
    <>
      <div className="p-3">
        <div className="p-1 border-bottom">
          <h3>Resumen</h3>
        </div>
        <div className="p-1 border-bottom">
          <span>Sub total</span>
          <span className="float-right">${resumen.subTotal}</span>
        </div>
        <div className="p-1 border-bottom">
          <span>Descuento</span>
          <span className="float-right">-{resumen.discount}%</span>
        </div>
        <div className="p-1 border-bottom">
          <span>Envio</span>
          <span className="float-right">
            ${resumen.subTotal > 0 ? resumen.envio : 0}
          </span>
        </div>
        <div className="p-1 bg-cici">
          <span>Monto a pagar</span>
          <span className="float-right">${resumen.total}</span>
        </div>
      </div>
    </>
  )
}

export default CartResumne
