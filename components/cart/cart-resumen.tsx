/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-shadow */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { ResumenPaymen } from '../../hooks/useResumenPayment'

interface Props {
  loading?: boolean
}

const CartResumne = ({ loading }: Props) => {
  const resumen = ResumenPaymen()

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
              <span className="float-right">${resumen.subTotal}</span>
            </>
          )}
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Descuento</span>
              <span className="float-right">-{resumen.discount}%</span>
            </>
          )}
        </div>
        <div className="p-1 border-bottom">
          {loading ? (
            <Skeleton width="100%" height={20} />
          ) : (
            <>
              <span>Envio</span>
              <span className={`float-right ${resumen.text && 'text-success'}`}>
                {resumen.text ? (
                  resumen.text
                ) : (
                  <>${resumen.subTotal > 0 ? resumen.envio : 0}</>
                )}
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
              <span className="float-right">${resumen.total}</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartResumne
