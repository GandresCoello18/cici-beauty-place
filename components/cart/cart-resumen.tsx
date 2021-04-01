/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
import React from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  loading?: boolean
  subTotal: number
  discount: number
  envio: number
  text: string
  total: number
}

const CartResumne = ({
  loading,
  subTotal,
  discount,
  envio,
  text,
  total,
}: Props) => {
  return (
    <>
      <div className="p-3">
        <div className="p-1 border-bottom">
          <h3>Resumen</h3>
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Sub total</span>
              <span className="float-right">${subTotal}</span>
            </>
          )}
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Descuento</span>
              <span className="float-right">-{discount}%</span>
            </>
          )}
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Envio</span>
              <span className={`float-right ${text && 'text-success'}`}>
                {text || `$${envio}`}
              </span>
            </>
          )}
        </div>
        <div className="p-1 bg-cici">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Monto a pagar</span>
              <span className="float-right">${total}</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartResumne
